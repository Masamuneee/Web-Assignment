'use client'

import { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User } from "@nextui-org/react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end" isOpen={isOpen} onMouseLeave={() => { setIsOpen(false) }}>
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            size="sm"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            onMouseEnter={() => { setIsOpen(true) }}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">johndoe@example.com</p>
          </DropdownItem>
          <DropdownItem key="account" href="/profile">
            My account
          </DropdownItem>
          <DropdownItem key="purchase" href="/purchase/history">
            My purchase
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
