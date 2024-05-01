'use client'

import React from "react";
import { Checkbox } from "@nextui-org/react";

export default function NotificationSettingsPage() {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div>
      <h1 className="font-bold text-xl">Notification Settings</h1>
      <div className="mt-10 flex flex-col gap-5">
        <div className="flex flex-row justify-between items-center">
          <p>Email Notifications</p>
          <Checkbox defaultSelected isSelected={isSelected} onValueChange={setIsSelected}><span>{isSelected ? "Enabled" : "Disabled"}</span></Checkbox>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <p>Order Updates</p>
            <p className="text-xs">Notify when there are updates on my orders, including payment-related updates.</p>
          </div>
          <Checkbox defaultSelected isSelected={isSelected} onValueChange={setIsSelected}><span>{isSelected ? "Enabled" : "Disabled"}</span></Checkbox>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <p>Listing Updates</p>
            <p className="text-xs">Notify when my listing as a seller becomes sold out, deleted or suspended.</p>
          </div>
          <Checkbox defaultSelected isSelected={isSelected} onValueChange={setIsSelected}><span>{isSelected ? "Enabled" : "Disabled"}</span></Checkbox>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <p>Promotions</p>
            <p className="text-xs">Send me news on exclusive offers and deals.</p>
          </div>
          <Checkbox defaultSelected isSelected={isSelected} onValueChange={setIsSelected}><span>{isSelected ? "Enabled" : "Disabled"}</span></Checkbox>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <p>Personalised Content</p>
            <p className="text-xs">Send me personalised updates. (e.g. your birthday gift).</p>
          </div>
          <Checkbox defaultSelected isSelected={isSelected} onValueChange={setIsSelected}><span>{isSelected ? "Enabled" : "Disabled"}</span></Checkbox>
        </div>
      </div>
    </div>
  )
}