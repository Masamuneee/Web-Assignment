'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Input, Button, DropdownSection, Badge } from "@nextui-org/react";

export default function AdminNavbar() {
  return (
    <Navbar maxWidth="full" isBordered>
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <Input
          isClearable
          type="text"
          placeholder="Search..."
          startContent={
            <i className="pi pi-search"></i>
          }
        // className="max-w-[44%]"
        />
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="light"
              isIconOnly
              aria-label="Open menu"
              radius="full"
            >
              <Badge content="5" shape="circle">
                <i className="pi pi-bell text-xl"></i>
              </Badge>
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
            <DropdownSection title="Notifications">
              <DropdownItem
                key="noti"
                description="Content of notification 1"
                startContent={<i className="pi pi-sparkles mr-1"></i>}
              >
                Notification 1
              </DropdownItem>
              <DropdownItem
                key="noti"
                description="Content of notification 2"
                startContent={<i className="pi pi-sparkles mr-1"></i>}
              >
                Notification 2
              </DropdownItem>
              <DropdownItem
                key="noti"
                description="Content of notification 3"
                startContent={<i className="pi pi-sparkles mr-1"></i>}
              >
                Notification 3
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
