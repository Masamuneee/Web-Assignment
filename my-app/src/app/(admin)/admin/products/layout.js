export default function ProductsDatabaseLayout({ children }) {
  return (
    <div>
      <h1 className="font-bold text-2xl">Products Database</h1>
      <div className="mt-6">
        {children}
      </div>
    </div>
  )
}