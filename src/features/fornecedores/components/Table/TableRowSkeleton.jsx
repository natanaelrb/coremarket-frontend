export default function TableRowSkeleton() {
  return (
    <tr className="border-b border-gray-50 dark:border-[#181c3a]">
      <td className="py-3 pl-4">
        <div className="skeleton h-4 w-4 rounded" />
      </td>
      <td className="px-3 py-3">
        <div className="flex items-center gap-3">
          <div className="skeleton h-8 w-8 rounded-full" />
          <div className="space-y-1.5">
            <div className="skeleton h-3 w-28 rounded" />
            <div className="skeleton h-2.5 w-20 rounded" />
          </div>
        </div>
      </td>
      {Array.from({ length: 6 }).map((_, i) => (
        <td key={i} className="px-3 py-3">
          <div className="skeleton h-3 w-16 rounded" />
        </td>
      ))}
      <td className="px-3 py-3">
        <div className="skeleton h-6 w-6 rounded" />
      </td>
    </tr>
  )
}
