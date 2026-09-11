import { ShoppingCart } from "lucide-react";

export default function SidebarHeader() {
  return (
    <div className="flex h-12 flex-shrink-0 items-center gap-3 border-b border-[var(--sidebar-border)] px-5">
      
      {/* Logo */}
      <div className="flex h-8 w-8 items-center justify-center">
        <ShoppingCart
          size={24}
          strokeWidth={2}
          className="text-emerald-400"
        />
      </div>

      {/* Nome */}
      <div className="flex flex-col leading-tight">
        <h1 className="text-[17px] font-bold tracking-tight">
          <span className="text-white">Core</span>
          <span className="text-emerald-400">Market</span>
        </h1>

        <p className="text-[10px] text-slate-500">
          Sistema de Gestão
        </p>
      </div>

    </div>
  );
}