// Select nativo estilizado, usado nos filtros simples da FilterBar.
import { ChevronDown } from 'lucide-react';

export function Select({
  value,
  onChange,
  options,
  ariaLabel,
  className = '',
}) {
  return (
    <div className={`group relative w-full min-w-0 ${className}`}>
      <select
        aria-label={ariaLabel}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="
          h-10 w-full appearance-none
          rounded-lg
          border border-slate-200
          bg-white
          py-2 pl-3 pr-9
          text-sm text-slate-700
          outline-none
          transition-all duration-200
          hover:border-slate-300
          focus:border-green-500
          focus:ring-4 focus:ring-green-500/10
          dark:border-white/[0.10]
          dark:bg-[#151c2b]
          dark:text-slate-200
          dark:hover:border-white/[0.18]
          dark:focus:border-green-400
          dark:focus:ring-green-500/10
        "
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown
        size={15}
        strokeWidth={2}
        className="
          pointer-events-none absolute right-3 top-1/2
          -translate-y-1/2
          text-slate-400
          transition-transform duration-200
          group-focus-within:text-green-500
          dark:text-slate-500
          dark:group-focus-within:text-green-400
        "
      />
    </div>
  );
}