'use client'

import { Button } from "@nextui-org/react"
import { Input } from "@nextui-org/react";
import { Radio, RadioGroup } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

export default function Profile() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl">My Profile</h1>
      </div>
      <div className="grid grid-cols-[4fr_2fr] mt-10 gap-5">
        <form method="POST" className="flex flex-col gap-5">
          <div className="grid grid-cols-[1fr_3fr] items-center gap-5">
            <label className="text-right">Username</label>
            <Input type="text" name="name" defaultValue="johndoe" />
          </div>
          <div className="grid grid-cols-[1fr_3fr] items-center gap-5">
            <label className="text-right">Name</label>
            <div className="flex flex-row gap-5">
              <Input type="text" name="email" defaultValue="John" />
              <Input type="text" name="email" defaultValue="Doe" />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_3fr] items-center gap-5">
            <label className="text-right">Email</label>
            <Input type="text" name="name" defaultValue="johndoe@example.com" />
          </div>
          <div className="grid grid-cols-[1fr_3fr] items-center gap-5">
            <label className="text-right">Phone number</label>
            <Input type="text" name="name" defaultValue="(215) 000-000-000-001" />
          </div>
          <div className="grid grid-cols-[1fr_3fr] items-center gap-5">
            <label className="text-right">Gender</label>
            <RadioGroup orientation="horizontal">
              <Radio value="buenos-aires">Male</Radio>
              <Radio value="sydney">Female</Radio>
              <Radio value="san-francisco">Others</Radio>
            </RadioGroup>
          </div>
          <div className="grid grid-cols-[1fr_3fr] items-center gap-5">
            <label className="text-right">Date of birth</label>
            <Input type="date" name="name" defaultValue="11/13/2004" />
          </div>
        </form>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col justify-center gap-5">
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-40 h-40" />
            <Button>Select Image</Button>
          </div>
          <p className="text-xs">
            File size: maximum 1 MB<br />
            File extension: .JPEG, .PNG
          </p>
        </div>
        <Button color="primary">Submit</Button>
      </div>
    </div>
  )
}