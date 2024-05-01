'use client'

import { NextUIProvider } from "@nextui-org/react";
import { Victor_Mono } from "next/font/google";

import "./globals.css";
import 'primeicons/primeicons.css';

const plusJakartaSans = Victor_Mono({ subsets: ["latin"] });

import { Listbox, ListboxItem, ListboxSection, cn } from "@nextui-org/react";

export default function MyAccountPageLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <NextUIProvider>
          <div>
            <div className="max-w-screen-xl mx-auto">
              <div className="grid grid-cols-[1fr_3.5fr]">
                <div className="pt-10 pr-8 pb-auto">
                  <Listbox variant="flat" aria-label="Listbox menu with sections">
                    <ListboxSection title="My Account" showDivider>
                      <ListboxItem
                        href="/profile"
                        key="profile"
                        startContent={<i className="pi pi-user"></i>}
                      >
                        My Profile
                      </ListboxItem>
                      <ListboxItem
                        href="/password"
                        key="copy"
                        startContent={<i className="pi pi-key"></i>}
                      >
                        Change Password
                      </ListboxItem>
                      <ListboxItem
                        href="/notifications"
                        key="edit"
                        startContent={<i className="pi pi-bell"></i>}
                      >
                        Notification Settings
                      </ListboxItem>
                    </ListboxSection>
                    <ListboxSection title="My Purchase" showDivider>
                      <ListboxItem
                        key="edit"
                        href="/purchase/history"
                        startContent={<i className="pi pi-receipt"></i>}
                      >
                        Purchase History
                      </ListboxItem>
                      <ListboxItem
                        key="edit"
                        href="/purchase/ongoing"
                        startContent={<i className="pi pi-truck"></i>}
                      >
                        Ongoing Order
                      </ListboxItem>
                    </ListboxSection>
                    <ListboxSection title="My Review">
                      <ListboxItem
                        key="edit"
                        href="/review-history"
                        startContent={<i className="pi pi-comments"></i>}
                      >
                        Review History
                      </ListboxItem>
                    </ListboxSection>
                  </Listbox>
                </div>
                <div className="bg-gray-50 rounded-2xl p-10">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </NextUIProvider>
      </body>
    </html>
  )
}