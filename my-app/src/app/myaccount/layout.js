'use client'

import { Button } from "@nextui-org/react"
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { Listbox, ListboxItem, ListboxSection, cn } from "@nextui-org/react";

export default function MyAccountPageLayout({ children }) {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-[1fr_3.5fr]">
          <div className="pt-10 pr-8 pb-auto">
            <Listbox variant="flat" aria-label="Listbox menu with sections">
              <ListboxSection title="My Account" showDivider>
                <ListboxItem
                  href="/myaccount/profile"
                  key="profile"
                  startContent={<i className="pi pi-user"></i>}
                >
                  My Profile
                </ListboxItem>
                <ListboxItem
                  href="/myaccount/password"
                  key="copy"
                  startContent={<i className="pi pi-key"></i>}
                >
                  Change Password
                </ListboxItem>
                <ListboxItem
                  href="/myaccount/notifications"
                  key="edit"
                  startContent={<i className="pi pi-bell"></i>}
                >
                  Notification Settings
                </ListboxItem>
              </ListboxSection>
              <ListboxSection title="My Purchase" showDivider>
                <ListboxItem
                  key="edit"
                  href="/myaccount/purchase/history"
                  startContent={<i className="pi pi-receipt"></i>}
                >
                  Purchase History
                </ListboxItem>
                <ListboxItem
                  key="edit"
                  href="/myaccount/purchase/ongoing"
                  startContent={<i className="pi pi-truck"></i>}
                >
                  Ongoing Order
                </ListboxItem>
              </ListboxSection>
              <ListboxSection title="My Review">
                <ListboxItem
                  key="edit"
                  startContent={<i className="pi pi-comments"></i>}
                >
                  Review History
                </ListboxItem>
              </ListboxSection>
            </Listbox>
          </div>
          <div className="bg-white p-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}