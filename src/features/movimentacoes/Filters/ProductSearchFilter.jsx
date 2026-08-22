import { Search } from 'lucide-react';

export default function ProductSearchFilter({ value, onChange }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-400">Produto</span>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar produto por nome ou SKU"
          className="w-full rounded-lg border border-white/10 bg-[#0D1029] py-2 pl-9 pr-3 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-500 focus:border-violet-500"
        />
      </div>
    </label>
  );
}
