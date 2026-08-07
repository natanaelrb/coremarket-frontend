// Select nativo estilizado, usado nos filtros simples da FilterBar.
import { ChevronDown } from 'lucide-react';

export function Select({ value, onChange, options, ariaLabel, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <select
        aria-label={ariaLabel}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-8 text-sm text-gray-700 outline-none transition-colors duration-150 hover:border-gray-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-100 dark:border-gray-700 dark:bg-[#151936] dark:text-gray-200 dark:hover:border-gray-600 dark:focus:ring-violet-500/20"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
}
