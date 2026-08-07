import { Search } from "lucide-react";

export default function TopbarSearch() {
  return (
    <div className="relative">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        placeholder="Pesquisar..."
        className="
          w-72
          h-11
          rounded-xl
          border
          border-slate-200
          dark:border-white/10
          bg-white
          dark:bg-[#12162C]
          pl-10
          pr-4
          text-sm
          outline-none
          focus:border-violet-500
        "
      />
    </div>
  );
}