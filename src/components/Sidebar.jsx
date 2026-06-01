import {
  LayoutDashboard,
  Users,
  Wallet,
  Package,
  BarChart3
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#0D1029] text-white h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">
        CoreMarket
      </h1>

      <nav className="space-y-2">

        <button className="flex items-center gap-3 w-full p-3 rounded-xl bg-purple-600">
          <LayoutDashboard size={20} />
          Dashboard
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/10">
          <Users size={20} />
          Clientes
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/10">
          <Wallet size={20} />
          Fiado
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/10">
          <Package size={20} />
          Estoque
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/10">
          <BarChart3 size={20} />
          Relatórios
        </button>

      </nav>
    </aside>
  );
}