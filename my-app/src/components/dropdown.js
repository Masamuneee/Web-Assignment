'use client'

import { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import axios from "axios";
import { parseCookies } from "nookies";
import jwt from "jsonwebtoken";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState('');
  const token = parseCookies().token;
  const id = jwt.decode(token).user_id;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost/test/users/user.php?id=' + id);
      setUser(response.data.username);
    }
    fetchData();
  }
  , []);
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end" isOpen={isOpen} onMouseLeave={() => { setIsOpen(false) }}>
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            size="lg"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            onMouseEnter={() => { setIsOpen(true) }}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-bold">{user}</p>
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