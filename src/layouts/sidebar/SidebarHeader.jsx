import { TrendingUp } from "lucide-react";

export default function SidebarHeader() {
  return (
    <div className="flex flex-shrink-0 items-center gap-3 border-b border-[var(--sidebar-border)] px-4 py-4 dark:border-white/10">
      {/* Logo */}
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white shadow-sm">
        <TrendingUp size={18} />
      </div>

      {/* Nome do sistema */}
      <div>
        <h1 className="text-[15px] font-bold leading-tight text-[var(--sidebar-text)]">
          CoreMarket
        </h1>

        <p className="text-[11px] leading-tight text-[var(--sidebar-text-muted)]">
          Sistema de Gestão
        </p>
      </div>
    </div>
  );
}