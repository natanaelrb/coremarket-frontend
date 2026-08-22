/**
 * Reusable 2/3-column mini stat grid used for the quantity block, the
 * min/max/reposição block and the pricing block in the detail panel.
 */
export default function StatsMiniGrid({ items, columns = 2 }) {
  return (
    <div
      className="gap-3 px-5 pb-4"
      style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items.map((item) => (
        <div key={item.label} className="rounded-xl bg-gray-50 dark:bg-[#171A38] p-3">
          <p className="text-[11px] text-gray-400 dark:text-gray-500">{item.label}</p>
          <p className="mt-0.5 truncate text-sm font-semibold text-gray-900 dark:text-white">{item.value}</p>
        </div>
      ))}
    </div>
  )
}
