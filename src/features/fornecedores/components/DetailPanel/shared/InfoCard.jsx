export default function InfoCard({ title, rows }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 dark:border-[#1c2044] dark:bg-[#10132c]">
      <h4 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-200">{title}</h4>
      <dl className="space-y-2.5">
        {rows.map((row) => (
          <div key={row.label} className="flex items-start justify-between gap-3 text-sm">
            <dt className="text-gray-400 dark:text-gray-500">{row.label}</dt>
            <dd className="text-right font-medium text-gray-700 dark:text-gray-200">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
