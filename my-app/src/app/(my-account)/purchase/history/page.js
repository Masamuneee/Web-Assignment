'use client'

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import PurchaseHistoryTable from "./table";

export default function OngoingOrderPage() {
  return (
    <div>
      <h1 className="font-bold text-xl">Purchase History</h1>
      <div className="mt-10">
        <PurchaseHistoryTable/>
      </div>
    </div>
  )
}