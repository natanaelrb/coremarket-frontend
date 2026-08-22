import { Search } from 'lucide-react'

/**
 * Free-text search input for name/SKU/barcode. Controlled by
 * useEstoqueFilters; kept dumb/presentational on purpose.
 */
export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative flex-1 min-w-[220px]">
      <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Pesquisar por nome, SKU, código..."
        className="w-full rounded-lg border border-gray-200 dark:border-[#2A2E4A] bg-white dark:bg-[#171A38] py-2 pl-9 pr-3 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-colors"
      />
    </div>
  )
}
