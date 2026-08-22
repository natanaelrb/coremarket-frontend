import { ChevronDown } from 'lucide-react'

/**
 * Generic labeled <select> used for every dropdown filter (Categoria,
 * Fornecedor, Localização, Situação, Validade, Tipo, Status).
 */
export default function FilterSelect({ label, value, options, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[11px] font-medium text-gray-500 dark:text-gray-400">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="appearance-none rounded-lg border border-gray-200 dark:border-[#2A2E4A] bg-white dark:bg-[#171A38] py-2 pl-3 pr-8 text-sm text-gray-700 dark:text-gray-200 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-colors cursor-pointer"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
      </div>
    </div>
  )
}
