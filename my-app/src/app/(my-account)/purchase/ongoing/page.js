'use client'

import PurchaseHistoryTable from "./table"

export default function PurchaseHistoryPage() {
  return (
    <div>
      <h1 className="font-bold text-xl">Ongoing Order</h1>
      <div className="mt-10">
        <PurchaseHistoryTable/>
      </div>
    </div>
  )
}