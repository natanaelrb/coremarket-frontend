import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import SalesChart from "../components/SalesChart";
import { useEffect, useState } from "react";
import { buscarResumoDashboard } from "../services/dashboardService";

import {
  Users,
  Wallet,
  ShoppingCart,
  Package,
} from "lucide-react";

export default function Dashboard() {

  const [dados, setDados] = useState({
    totalClientes: 0,
    totalCompras: 0,
    totalReceber: 0,
    totalProdutos: 0
  });

  useEffect(() => {

    async function carregarDados() {

      try {

        const resposta = await buscarResumoDashboard();
        setDados(resposta);

      } catch (erro) {

        console.error("Erro ao carregar dashboard:", erro);

      }

    }

    carregarDados();

  }, []);

  return (
    <div>
      <Header />

      {/* Cards */}
      <div className="grid grid-cols-4 gap-5">

        <StatsCard
          title="Clientes"
          value={dados.totalClientes}
          change="+12% este mês"
          icon={<Users className="text-purple-600" />}
        />

        <StatsCard
          title="Receber"
          value={dados.totalReceber}
          change="-5% esta semana"
          icon={<Wallet className="text-purple-600" />}
        />

        <StatsCard
          title="Compras"
          value={dados.totalCompras}
          change="+8% hoje"
          icon={<ShoppingCart className="text-purple-600" />}
        />

        <StatsCard
          title="Produtos"
          value={dados.totalProdutos}
          change="+15 novos"
          icon={<Package className="text-purple-600" />}
        />

      </div>

      {/* Gráfico + Painel lateral */}
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
              <span className="text-gray-600">
                João
              </span>

              <span className="font-semibold text-gray-800">
                R$ 50
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">
                Maria
              </span>

              <span className="font-semibold text-gray-800">
                R$ 120
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">
                Pedro
              </span>

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