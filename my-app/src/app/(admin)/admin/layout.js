'use client'

import { NextUIProvider } from "@nextui-org/react";
import { Victor_Mono } from "next/font/google";

import "./globals.css";
import 'primeicons/primeicons.css';

const plusJakartaSans = Victor_Mono({ subsets: ["latin"] });

import { Listbox, ListboxItem, ListboxSection, Button } from "@nextui-org/react";
import AdminNavbar from "@/components/adminNavbar";


export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <NextUIProvider>
          <div className="flex flex-row w-full">
            <div className="h-[100vh] overflow-y-auto bg-gray-100 p-4 flex flex-col gap-4">
              <div className="">
                <img
                  src="/logo/logo-fullAsset 1.svg"
                  alt="logo"
                  className="h-[5rem] cursor-pointer"
                />
              </div>
              <Listbox variant="flat" aria-label="Listbox menu with sections" className="p-0">
                <ListboxItem
                  href="/admin"
                  key="profile"
                  startContent={<i className="pi pi-home"></i>}
                >
                  Home
                </ListboxItem>
                <ListboxSection title="Users" showDivider>
                  <ListboxItem
                    href="/admin/users"
                    key="profile"
                    startContent={<i className="pi pi-user"></i>}
                  >
                    User Manangement
                  </ListboxItem>
                </ListboxSection>
                <ListboxSection title="Contents" showDivider>
                  <ListboxItem
                    key="edit"
                    href="/admin/homepage"
                    startContent={<i className="pi pi-home"></i>}
                  >
                    Homepage
                  </ListboxItem>
                  <ListboxItem
                    key="edit"
                    href="/admin/articles"
                    startContent={<i className="pi pi-file"></i>}
                  >
                    Posts & Articles
                  </ListboxItem>
                  <ListboxItem
                    key="edit"
                    // href="/myaccount/purchase/ongoing"
                    startContent={<i className="pi pi-file-check"></i>}
                  >
                    Pending Approvals
                  </ListboxItem>
                  <ListboxItem
                    key="edit"
                    // href="/myaccount/purchase/ongoing"
                    startContent={<i className="pi pi-address-book"></i>}
                  >
                    Contact Information
                  </ListboxItem>
                  <ListboxItem
                    key="edit"
                    // href="/myaccount/purchase/ongoing"
                    startContent={<i className="pi pi-database"></i>}
                  >
                    Product Database
                  </ListboxItem>
                </ListboxSection>
                <ListboxSection title="Orders" showDivider>
                  <ListboxItem
                    key="edit"
                    // href="/myaccount/review-history"
                    startContent={<i className="pi pi-chart-bar"></i>}
                  >
                    Sales Statistics
                  </ListboxItem>
                  <ListboxItem
                    key="edit"
                    // href="/myaccount/review-history"
                    startContent={<i className="pi pi-file-check"></i>}
                  >
                    Pending Orders
                  </ListboxItem>
                  <ListboxItem
                    key="edit"
                    // href="/myaccount/review-history"
                    startContent={<i className="pi pi-truck"></i>}
                  >
                    Shipping Status
                  </ListboxItem>
                </ListboxSection>
                <ListboxSection title="Customers">
                  <ListboxItem
                    key="edit"
                    // href="/myaccount/review-history"
                    startContent={<i className="pi pi-history"></i>}
                  >
                    Order History
                  </ListboxItem>
                  <ListboxItem
                    key="edit"
                    // href="/myaccount/review-history"
                    startContent={<i className="pi pi-comments"></i>}
                  >
                    Feedbacks & Reviews
                  </ListboxItem>
                </ListboxSection>
              </Listbox>
            </div>
            <div className="overflow-y-auto flex flex-col flex-grow">
              <AdminNavbar />
              <main className="p-6">
                {children}
              </main>
            </div>
          </div>
        </NextUIProvider>
      </body>
    </html>

  );
}