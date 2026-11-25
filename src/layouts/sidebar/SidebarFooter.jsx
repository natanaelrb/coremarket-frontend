import { Settings, ChevronRight } from "lucide-react";

export default function SidebarFooter() {
  return (
    <div className="shrink-0 border-t border-[#26364D] p-3">

      <button
        type="button"
        className="group flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-[#20334D]"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
          AD
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold text-slate-100">
            Admin
          </p>

          <p className="mt-1 truncate text-[10px] text-[#8495AC]">
            Administrador
          </p>
        </div>

        <Settings
          size={17}
          className="shrink-0 text-[#8495AC] transition-colors group-hover:text-blue-400"
        />

        <ChevronRight
          size={14}
          className="shrink-0 text-[#64758C]"
        />
      </button>

    </div>
  );
}
