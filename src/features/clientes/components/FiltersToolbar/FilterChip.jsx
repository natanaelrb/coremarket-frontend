import { cn } from "../../../../shared/utils/classNames.js";

/** Single quick-filter pill (Todos, Ativos, Em atraso, ...). */
export function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full px-3.5 py-1.5 text-xs font-medium whitespace-nowrap transition-colors',
        active
          ? 'bg-cm-violet text-white'
          : 'bg-white/5 text-slate-300 hover:bg-white/10 light:bg-black/5 light:text-slate-600 light:hover:bg-black/10',
      )}
    >
      {label}
    </button>
  )
}
