'use client'

import UsersTable from "./table"

export default function UserManagementPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">User Management</h1>
      <div className="mt-6">
        <UsersTable />
      </div>
    </div>
  )
}