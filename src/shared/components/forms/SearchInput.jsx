import { Search } from 'lucide-react'

/** Rounded search input with a leading icon, used across list toolbars. */
export function SearchInput({ value, onChange, placeholder = 'Buscar...', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg bg-white/5 dark:bg-white/5 border border-cm-border-light dark:border-cm-border-dark
                   pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-500
                   focus:outline-none focus:ring-2 focus:ring-cm-violet/50 transition-shadow"
      />
    </div>
  )
}
