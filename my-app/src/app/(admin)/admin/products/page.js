'use client'

import ProductsTable from "./productTable"
import { checkAuth } from "@/utils/auth"

export default function ProductsDatabasePage() {
  checkAuth();
  return (
    <div>
      <ProductsTable />
    </div>
  )
}