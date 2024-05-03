'use client'

import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Input, Button } from '@nextui-org/react'
import axios from 'axios'

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    const response = await axios.post('http://localhost/test/auth/register.php', {
      fName,
      lName,
      email,
      phone,
      birthday,
      username,
      password,
    })
    
    if (response.data.status === 'success') {
      alert("Sign up successful");
      router.push('/signin')
    }
    else {
      alert("Invalid input.");
    }
    
  }

  return (
    <main className="min-h-screen flex justify-center items-center bg-blue-50">
      <div className="bg-white shadow-md max-w-screen-xl px-10 pt-12 pb-10 w-full flex flex-col gap-10 rounded-[2.25rem]">
        <div>
          <Image
            src="logo/logo-abbrvAsset 2.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            <h1 className="text-5xl">Sign up</h1>
            <p className="mt-4">to continue to The Amazing Record Store</p>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className='flex flex-row gap-4'>
                <Input type="text" value={fName} onChange={(e) => setFName(e.target.value)} label="First name" />
                <Input type="text" value={lName} onChange={(e) => setLName(e.target.value)} label="Last name" />
              </div>
              <div className='flex flex-row gap-4'>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" />
                <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} label="Phone Number" />
              </div>
              <Input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} label="Birthday" />
              <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} label="Username" />
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" />
              <div className="flex flex-row ml-auto">
                  <Button type="submit" radius="full" color="primary">
                    Sign up
                  </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>

  )
}