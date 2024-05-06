'use client'

import { purchases } from "@/constants/purchase"
import { users } from "@/constants/userDatabase"
import { checkAuth } from "@/utils/auth"

export default function AdminHomepage() {
  checkAuth();
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-300 p-4 rounded-2xl flex flex-col gap-1">
          <h3>Total Revenue</h3>
          <p className="text-2xl font-bold">${purchases.reduce(function (prev, cur) {
            return prev + cur.pricePerProduct * cur.quantity
          }, 0)}</p>
        </div>
        <div className="bg-blue-300 p-4 rounded-2xl flex flex-col gap-1">
          <h3>Total Orders</h3>
          <p className="text-2xl font-bold">{purchases.length}</p>
        </div>
        <div className="bg-blue-300 p-4 rounded-2xl flex flex-col gap-1">
          <h3>Total Customers</h3>
          <p className="text-2xl font-bold">{users.length}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-300 p-4 rounded-2xl flex flex-col gap-1">
          <h3>Total CDs sold</h3>
          <p className="text-2xl font-bold">{purchases.filter(function(item){
            return item.description === "CD"
          }).length}</p>
        </div>
        <div className="bg-blue-300 p-4 rounded-2xl flex flex-col gap-1">
          <h3>Total Vinyls Sold</h3>
          <p className="text-2xl font-bold">{purchases.filter(function(item){
            return item.description === "Vinyl"
          }).length}</p>
        </div>
      </div>
    </div>
  )
}