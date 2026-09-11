import { ChevronDown } from "lucide-react";

export default function TopbarUser() {
  return (
    <button className="flex items-center gap-2 rounded-md px-1.5 py-1 transition-colors hover:bg-slate-100 dark:hover:bg-white/[0.05]">
      
      {/* Avatar */}
      <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-semibold text-white">
        A
      </div>

      {/* Informações */}
      <div className="hidden text-left leading-tight lg:block">
        <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-200">
          Admin
        </p>

        <p className="text-[9px] text-slate-400 dark:text-slate-500">
          Administrador
        </p>
      </div>

      {/* Seta */}
      <ChevronDown
        size={13}
        className="ml-1 text-slate-400"
      />
    </button>
  );
}