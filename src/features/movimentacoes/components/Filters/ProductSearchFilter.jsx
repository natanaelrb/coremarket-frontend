import { Search } from 'lucide-react';

export default function ProductSearchFilter({ value, onChange }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-600">
        Produto
      </span>

      <div className="relative">
        <Search
          className="
            pointer-events-none
            absolute
            left-3
            top-1/2
            h-4
            w-4
            -translate-y-1/2
            text-slate-400
          "
          strokeWidth={2}
        />

        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Buscar produto por nome ou SKU"
          aria-label="Buscar produto por nome ou SKU"
          className="
            h-10
            w-full
            rounded-lg
            border border-slate-200
            bg-white
            py-2
            pl-9
            pr-3
            text-sm
            font-medium
            text-slate-700
            outline-none
            transition
            placeholder:text-slate-400
            hover:border-slate-300
            focus:border-emerald-500
            focus:ring-2
            focus:ring-emerald-500/10
          "
        />
      </div>
    </label>
  );
}