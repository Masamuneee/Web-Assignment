'use client'

import ArticleTable from "./table"

export default function PostsArticlesPage() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Posts & Articles Management</h1>
      <div className="mt-10">
        <ArticleTable />
      </div>
    </div>
  )
}