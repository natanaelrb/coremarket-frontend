import { Search } from 'lucide-react'

/**
 * Campo de busca por nome, SKU ou código de barras.
 * Controlado pelo useEstoqueFilters.
 */
export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex min-w-[240px] flex-1 flex-col gap-1.5">
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
        Pesquisar
      </label>

      <div className="relative">
        <Search
          size={17}
          strokeWidth={2}
          className="
            pointer-events-none
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-slate-400
            dark:text-slate-500
          "
        />

        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Buscar produto, SKU ou código..."
          className="
            h-10
            w-full
            rounded-lg
            border
            border-slate-200
            bg-white
            pl-9
            pr-3
            text-sm
            font-medium
            text-slate-700
            outline-none
            transition-all
            duration-150
            placeholder:text-slate-400
            hover:border-slate-300
            focus:border-emerald-500
            focus:ring-2
            focus:ring-emerald-500/15
            dark:border-white/10
            dark:bg-[#171A38]
            dark:text-slate-200
            dark:placeholder:text-slate-500
            dark:hover:border-white/20
            dark:focus:border-emerald-500
            dark:focus:ring-emerald-500/15
          "
        />
      </div>
    </div>
  )
}