'use client'

import { Input } from "@nextui-org/react"
import { Button } from "@nextui-org/react"
import React from "react";
import { parseCookies } from "nookies";
import jwt from 'jsonwebtoken'
import axios from 'axios'

export default function ChangePasswordPage() {
  const [current_password, setCurrent_password] = React.useState("");
  const [new_password, setNew_password] = React.useState("");
  const [confirm_password, setConfirm_password] = React.useState("");
  var id = 0

  if (parseCookies().token && typeof window !== 'undefined') {
    const decode = jwt.decode(parseCookies().token)
    id = decode.user_id
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const userData = {
      id: id,
      current_password,
      new_password,
      confirm_password
    }

    const response = await axios.post('http://localhost/test/users/password.php', userData)

    if (response.data.status === 'success') {
      alert(response.data.message);
    }
    else {
      alert(response.data.message);
    }
  }
  
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl">Change password</h1>
      </div>
      <div className="grid grid-cols-[4fr_2fr] mt-10 gap-5">
        <form method="POST" className="flex flex-col gap-5">
          <div className="grid grid-cols-[1.5fr_3fr] items-center gap-5">
            <label className="text-right">Current password</label>
            <Input type="password" name="current_password" value={current_password} onChange={e => setCurrent_password(e.target.value)} />
          </div>
          <div className="grid grid-cols-[1.5fr_3fr] items-center gap-5">
            <label className="text-right">New password</label>
            <Input type="password" name="new_password" value={new_password} onChange={e => setNew_password(e.target.value)} />
          </div>
          <div className="grid grid-cols-[1.5fr_3fr] items-center gap-5">
            <label className="text-right">Confirm password</label>
            <Input type="password" name="confirm_password" value={confirm_password} onChange={e => setConfirm_password(e.target.value)} />
          </div>
        </form>
        <div>

        </div>
        <Button color="primary" type="submit" onClick={handleSubmit}>Save changes</Button>
      </div>
    </div>
  )
}