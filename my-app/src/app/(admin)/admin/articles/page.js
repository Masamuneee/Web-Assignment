'use client'

import ArticleTable from "./table"
import { checkAuth } from "@/utils/auth"

export default function PostsArticlesPage() {
  checkAuth();
  return (
    <div>
      <h1 className="font-bold text-2xl">Posts & Articles Management</h1>
      <div className="mt-10">
        <ArticleTable />
      </div>
    </div>
  )
}