export default function StatCardSkeleton() {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-[#1c2044] dark:bg-[#141833]">
      <div className="flex items-center gap-3">
        <div className="skeleton h-10 w-10 rounded-lg" />
        <div className="flex-1 space-y-2">
          <div className="skeleton h-2.5 w-20 rounded" />
          <div className="skeleton h-4 w-12 rounded" />
        </div>
      </div>
      <div className="skeleton mt-3 h-2.5 w-16 rounded" />
    </div>
  )
}
