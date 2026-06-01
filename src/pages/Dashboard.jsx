import StatsCard from "../components/StatsCard";
import SalesChart from "../components/SalesChart";
import {
  Users,
  Wallet,
  ShoppingCart,
  Package,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div>
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Dashboard Overview
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-5">
        <StatsCard
          title="Clientes"
          value="145"
          icon={<Users className="text-purple-600" />}
        />

        <StatsCard
          title="Fiado"
          value="R$ 3.420"
          icon={<Wallet className="text-purple-600" />}
        />

        <StatsCard
          title="Vendas"
          value="R$ 1.890"
          icon={<ShoppingCart className="text-purple-600" />}
        />

        <StatsCard
          title="Produtos"
          value="284"
          icon={<Package className="text-purple-600" />}
        />
      </div>

      {/* Gráfico + Painel Lateral */}
      <div className="grid grid-cols-3 gap-5 mt-8">

        <div className="col-span-2">
          <SalesChart />
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Últimos Fiados
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">João</span>
              <span className="font-semibold text-gray-800">
                R$ 50
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Maria</span>
              <span className="font-semibold text-gray-800">
                R$ 120
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Pedro</span>
              <span className="font-semibold text-gray-800">
                R$ 80
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}