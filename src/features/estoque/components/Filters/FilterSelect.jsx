import { ChevronDown } from 'lucide-react'

/**
 * Select reutilizável para os filtros do Estoque.
 */
export default function FilterSelect({
  label,
  value,
  options,
  onChange,
}) {
  return (
    <div className="flex min-w-[150px] flex-1 flex-col gap-1.5">
      <label
        className="
          text-[11px]
          font-semibold
          uppercase
          tracking-wide
          text-slate-500
          dark:text-slate-400
        "
      >
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="
            h-10
            w-full
            appearance-none
            rounded-lg
            border
            border-slate-200
            bg-white
            pl-3
            pr-9
            text-sm
            font-medium
            text-slate-700
            outline-none
            transition-all
            duration-150
            hover:border-slate-300
            focus:border-emerald-500
            focus:ring-2
            focus:ring-emerald-500/15
            dark:border-white/10
            dark:bg-[#171A38]
            dark:text-slate-200
            dark:hover:border-white/20
            dark:focus:border-emerald-500
            dark:focus:ring-emerald-500/15
          "
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={15}
          strokeWidth={2}
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-slate-400
            dark:text-slate-500
          "
        />
      </div>
    </div>
  )
}