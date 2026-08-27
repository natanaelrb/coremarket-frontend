import { ITEMS_PER_PAGE_OPTIONS } from '../../constants/filterOptions.js'

/**
 * "Itens por página" selector shown at the bottom-left of the table.
 */
export default function ItemsPerPageSelect({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
      <span>Itens por página:</span>
      <select
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="rounded-lg border border-gray-200 dark:border-[#2A2E4A] bg-white dark:bg-[#171A38] px-2 py-1 text-sm text-gray-700 dark:text-gray-200 focus:border-violet-500 focus:outline-none cursor-pointer"
      >
        {ITEMS_PER_PAGE_OPTIONS.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  )
}
