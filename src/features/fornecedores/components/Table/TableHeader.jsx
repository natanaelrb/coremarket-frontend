import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react'
import { TABLE_COLUMNS } from '../../constants/tableConfig.js'

function SortIcon({ column, sortKey, sortDirection }) {
  if (!column.sortable) return null
  if (sortKey !== column.key) {
    return <ArrowUpDown size={12} className="text-gray-300 dark:text-gray-600" />
  }
  return sortDirection === 'asc' ? (
    <ArrowUp size={12} className="text-violet-500" />
  ) : (
    <ArrowDown size={12} className="text-violet-500" />
  )
}

export default function TableHeader({ allSelected, onToggleAll, sortKey, sortDirection, onToggleSort }) {
  return (
    <thead>
      <tr className="border-b border-gray-100 dark:border-[#1c2044]">
        <th className="w-10 py-3 pl-4">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onToggleAll}
            className="h-4 w-4 cursor-pointer rounded border-gray-300 text-violet-600 focus:ring-violet-400 dark:border-[#3a3f6b] dark:bg-[#0f1230]"
          />
        </th>
        {TABLE_COLUMNS.map((col) => (
          <th
            key={col.key}
            onClick={col.sortable ? () => onToggleSort(col.key) : undefined}
            className={`px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 ${
              col.sortable ? 'cursor-pointer select-none hover:text-gray-600 dark:hover:text-gray-300' : ''
            }`}
          >
            <span className="flex items-center gap-1">
              {col.label}
              <SortIcon column={col} sortKey={sortKey} sortDirection={sortDirection} />
            </span>
          </th>
        ))}
      </tr>
    </thead>
  )
}
