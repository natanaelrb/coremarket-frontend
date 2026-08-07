import { Settings } from "lucide-react";

export default function SidebarFooter() {
  return (
    <div className="flex-shrink-0 border-t border-[var(--sidebar-border)] px-3 py-4 dark:border-white/10">
      <div className="group flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-2 transition hover:bg-[var(--sidebar-hover)]">
        {/* Avatar */}
        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-[11px] font-semibold text-white">
          AD
        </div>

        {/* Informações */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-[var(--sidebar-text)]">
            Admin
          </p>

          <p className="truncate text-[10px] text-[var(--sidebar-text-muted)]">
            Administrador
          </p>
        </div>

        {/* Configurações */}
        <Settings
          size={18}
          className="flex-shrink-0 text-[var(--sidebar-text-muted)] transition group-hover:text-[var(--sidebar-text)]"
        />
      </div>
    </div>
  );
}