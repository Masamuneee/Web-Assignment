'use client'

import UsersTable from "./table"
import { checkAuth } from "@/utils/auth"

export default function UserManagementPage() {
  checkAuth();
  return (
    <div className="">
      <h1 className="text-2xl font-bold">User Management</h1>
      <div className="mt-6">
        <UsersTable />
      </div>
    </div>
  )
}