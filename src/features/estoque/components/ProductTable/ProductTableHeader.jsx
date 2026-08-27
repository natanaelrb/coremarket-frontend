import { TABLE_COLUMNS } from '../../constants/tableColumns.js'

/**
 * <thead> row: checkbox-select-all + the declarative column list from
 * tableColumns.js, so adding/removing a column is a one-line change.
 */
export default function ProductTableHeader({ allSelected, onToggleAll }) {
  return (
    <thead>
      <tr className="border-b border-gray-100 dark:border-[#22254A] text-left text-xs font-medium text-gray-500 dark:text-gray-400">
        <th className="w-10 py-3 pl-4">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onToggleAll}
            className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 cursor-pointer"
          />
        </th>
        {TABLE_COLUMNS.map((col) => (
          <th key={col.key} className={`whitespace-nowrap px-3 py-3 ${col.align === 'center' ? 'text-center' : 'text-left'}`}>
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  )
}
