'use client'

import { checkAuth } from "@/utils/auth"

export default function HomepageManagementPage() {
  checkAuth();
  return (
    <div>
      <h1 className="text-2xl font-bold">Homepage Manangement</h1>
      <div className="mt-6">
        {/* <UsersTable /> */}
      </div>
    </div>
  )
}