'use client'

import { Input } from "@nextui-org/react"
import { Button } from "@nextui-org/react"

export default function ChangePasswordPage() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl">Change password</h1>
      </div>
      <div className="grid grid-cols-[4fr_2fr] mt-10 gap-5">
        <form method="POST" className="flex flex-col gap-5">
          <div className="grid grid-cols-[1.5fr_3fr] items-center gap-5">
            <label className="text-right">Current password</label>
            <Input type="password" name="name"/>
          </div>
          <div className="grid grid-cols-[1.5fr_3fr] items-center gap-5">
            <label className="text-right">New password</label>
            <Input type="password" name="name"/>
          </div>
          <div className="grid grid-cols-[1.5fr_3fr] items-center gap-5">
            <label className="text-right">Confirm password</label>
            <Input type="password" name="name"/>
          </div>
        </form>
        <div>

        </div>
        <Button color="primary">Submit</Button>
      </div>
    </div>
  )
}