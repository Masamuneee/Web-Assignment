'use client'

import { Listbox, ListboxItem, ListboxSection, cn } from "@nextui-org/react";
import DropDown from "@/components/dropdown";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-row">
      <div className="bg-gray-100 w-[20%] h-[100vh] p-4 flex flex-col gap-4">
        <div>
          <img
            src="/logo/logo-fullAsset 1.svg"
            alt="logo"
            className="h-[7rem] cursor-pointer"
          />
        </div>
        <Listbox variant="flat" aria-label="Listbox menu with sections" className="p-0">
          <ListboxSection title="User" showDivider>
            <ListboxItem
              // href="/myaccount/profile"
              key="profile"
              startContent={<i className="pi pi-user"></i>}
            >
              My Profile
            </ListboxItem>
            <ListboxItem
              // href="/myaccount/password"
              key="copy"
              startContent={<i className="pi pi-key"></i>}
            >
              Change Password
            </ListboxItem>
            <ListboxItem
              // href="/myaccount/notifications"
              key="edit"
              startContent={<i className="pi pi-bell"></i>}
            >
              Notification Settings
            </ListboxItem>
          </ListboxSection>
          <ListboxSection title="Content" showDivider>
            <ListboxItem
              key="edit"
              // href="/myaccount/purchase/history"
              startContent={<i className="pi pi-receipt"></i>}
            >
              Purchase History
            </ListboxItem>
            <ListboxItem
              key="edit"
              // href="/myaccount/purchase/ongoing"
              startContent={<i className="pi pi-truck"></i>}
            >
              Ongoing Order
            </ListboxItem>
          </ListboxSection>
          <ListboxSection title="Orders">
            <ListboxItem
              key="edit"
              // href="/myaccount/review-history"
              startContent={<i className="pi pi-comments"></i>}
            >
              Review History
            </ListboxItem>
          </ListboxSection>
          <ListboxSection title="Customers">
            <ListboxItem
              key="edit"
              // href="/myaccount/review-history"
              startContent={<i className="pi pi-comments"></i>}
            >
              Review History
            </ListboxItem>
          </ListboxSection>
        </Listbox>
      </div>
      <div className="w-full bg-gray-200 p-4">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Admin Page</h1>
            <p>This is the admidddn page.</p>
          </div>
          <div>
            <DropDown />
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}