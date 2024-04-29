'use client'

import { Listbox, ListboxItem, ListboxSection, Button } from "@nextui-org/react";
import DropDown from "@/components/dropdown-admin";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-row h-[100vh]">
      <div className="fixed h-full bg-gray-100 w-[15%] p-4 flex flex-col gap-4">
        <div>
          <img
            src="/logo/logo-fullAsset 1.svg"
            alt="logo"
            className="h-[7rem] cursor-pointer"
          />
        </div>
        <Listbox variant="flat" aria-label="Listbox menu with sections" className="p-0">
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
      <div className="w-[85%] ml-auto mr-0">
        <div className="fixed top-0 overflow-hidden w-[85%] h-[64px] bg-white flex flex-row-reverse items-center gap-4 p-4 border-b border-gray-400 ">
          <DropDown />
          <Button isIconOnly radius="full" aria-label="Like">
            <i className="pi pi-bell"></i>
          </Button>
        </div>
        <div className="p-6 mt-[64px]">
          {children}
        </div>
      </div>
    </div>
  );
}