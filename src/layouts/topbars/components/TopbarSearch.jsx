import { Search } from "lucide-react";

export default function TopbarSearch({
  placeholder = "Buscar por produto, SKU, código...",
  value,
  onChange,
}) {
  return (
    <div className="relative">
      <Search
        size={14}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          h-8
          w-[420px]
          rounded-md
          border border-slate-200
          bg-slate-50
          pl-9
          pr-16
          text-[11px]
          text-slate-700
          outline-none
          transition-all duration-150
          placeholder:text-slate-400
          hover:border-slate-300
          focus:border-emerald-500
          focus:bg-white
          focus:ring-2
          focus:ring-emerald-500/10
          dark:border-white/[0.08]
          dark:bg-white/[0.03]
          dark:text-slate-200
          dark:placeholder:text-slate-500
          dark:hover:border-white/[0.12]
          dark:focus:border-emerald-500/60
          dark:focus:bg-white/[0.05]
        "
      />

      {/* Atalho */}
      <div
        className="
          pointer-events-none
          absolute right-2 top-1/2
          -translate-y-1/2
          rounded
          border border-slate-200
          bg-white
          px-1.5 py-0.5
          text-[9px]
          font-medium
          text-slate-400
          dark:border-white/[0.08]
          dark:bg-white/[0.04]
          dark:text-slate-500
        "
      >
        Ctrl K
      </div>
    </div>
  );
}