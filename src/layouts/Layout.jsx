import {
  LayoutDashboard,
  Users,
  Wallet,
  Package,
  BarChart3,
} from "lucide-react";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-64 h-screen bg-[#0D1029] text-white p-5 fixed">

          <h1 className="text-3xl font-bold mb-10">
            CoreMarket
          </h1>

          <nav className="space-y-2">

            <button className="flex items-center gap-3 w-full p-3 rounded-xl bg-purple-600">
              <LayoutDashboard size={20} />
              Dashboard
            </button>

            <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/10 transition">
              <Users size={20} />
              Clientes
            </button>

            <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/10 transition">
              <Wallet size={20} />
              Fiado
            </button>

            <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/10 transition">
              <Package size={20} />
              Estoque
            </button>

            <button className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/10 transition">
              <BarChart3 size={20} />
              Relatórios
            </button>

          </nav>
        </aside>

        {/* Conteúdo */}
        <main className="ml-64 flex-1 p-8">
          {children}
        </main>

      </div>
    </div>
  );
}

export default Layout;