import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

        <p className="text-gray-500">Bem-vindo ao CoreMarket</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Pesquisar..."
            className="
              pl-10
              pr-4
              py-2
              rounded-xl
              border
              bg-white
              outline-none
            "
          />
        </div>

        <button className="bg-white p-3 rounded-xl shadow-sm">
          <Bell size={18} />
        </button>

        <div className="bg-purple-600 text-white px-4 py-2 rounded-xl">N</div>
      </div>
    </header>
  );
}
