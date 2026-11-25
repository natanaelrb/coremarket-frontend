import { ShoppingBasket } from "lucide-react";

export default function SidebarHeader() {
  return (
    <div className="flex h-[72px] shrink-0 items-center gap-3 border-b border-[#26364D] px-5">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-950/30">
        <ShoppingBasket
          size={21}
          strokeWidth={2}
          className="text-white"
        />
      </div>

      <div className="min-w-0">
        <h1 className="text-[17px] font-bold tracking-tight text-white">
          CoreMarket
        </h1>

        <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#8495AC]">
          Gestão inteligente
        </p>
      </div>

    </div>
  );
}
