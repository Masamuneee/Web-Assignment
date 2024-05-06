'use client'

import { Button } from "@nextui-org/react"
import { Input } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation'
import { parseCookies } from "nookies";
import jwt from 'jsonwebtoken'
import axios from 'axios'

export default function Profile() {
  const [username, setUsername] = React.useState("");
  const [fName, setFName] = React.useState("");
  const [lName, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");

  const router = useRouter()
  var id = 0

  if (parseCookies().token && typeof window !== 'undefined') {
    const decode = jwt.decode(parseCookies().token)
    id = decode.user_id
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost/test/users/info.php?id=' + id)
      setUsername(response.data.username)
      setFName(response.data.firstname)
      setLName(response.data.lastname)
      setEmail(response.data.email)
      setPhone(response.data.phone)
      setBirthdate(response.data.birthdate)
    }
    fetchData()
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    const userData = {
      id: id,
      username,
      fName,
      lName,
      email,
      phone,
      birthdate
    }

    const response = await axios.post('http://localhost/test/users/update.php', userData)

    if (response.data.status === 'success') {
      alert("Profile updated successfully");
    }
    else {
      alert(response.data.message);
    }
  }

  // Upload image
  const fileInputRef = useRef();
  const [imageSrc, setImageSrc] = useState("https://i.pravatar.cc/150?u=a04258114e29026708c");

  function handleFileSelect() {
    const file = fileInputRef.current.files[0];

    if (!file) {
      alert("Please select a file");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setImageSrc(reader.result);
    };

    reader.readAsDataURL(file);
  }


  return (
    <div>
      <div>
        <h1 className="font-bold text-xl">My Profile</h1>
      </div>
      <div className="grid grid-cols-[4fr_2fr] mt-10 gap-5">
        <form method="POST" className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-[1fr_3fr] items-center gap-5">
            <label className="text-right">Username</label>
            <Input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="grid grid-cols-[1fr_3fr] items-center gap-5">
            <label className="text-right">Name</label>
            <div className="flex flex-row gap-5">
              <Input type="text" name="firstName" value={fName} onChange={e => setFName(e.target.value)} />
              <Input type="text" name="lastName" value={lName} onChange={e => setLName(e.target.value)} />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_3fr] items-center gap-5">
            <label className="text-right">Email</label>
            <Input type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="grid grid-cols-[1fr_3fr] items-center gap-5">
            <label className="text-right">Phone number</label>
            <Input type="text" name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>
          <div className="grid grid-cols-[1fr_3fr] items-center gap-5">
            <label className="text-right">Date of birth</label>
            <Input type="date" name="birthdate" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
          </div>
          <Button color="primary" type="submit">Submit</Button>
        </form>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col justify-center gap-5">
            <Avatar src={imageSrc} className="w-40 h-40" />
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileSelect} />
            <Button onClick={() => fileInputRef.current.click()}>Select Image</Button>
          </div>
          <p className="text-xs">
            File size: maximum 1 MB<br />
            File extension: .JPEG, .PNG, .GIF
          </p>
        </div>
      </div>
    </div>
  )
}