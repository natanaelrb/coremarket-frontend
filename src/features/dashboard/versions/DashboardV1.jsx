import {
  Users,
  Package,
  ShoppingCart,
  ShoppingBag,
  Camera,
} from "lucide-react";
import StatsCard from "../visao-geral/cards/StatsCard";
import MetaMensalCard from "../visao-geral/cards/MetaMensalCard";

import FaturamentoMensalChart from "../visao-geral/charts/FaturamentoMensalChart";
import VendasPorCategoriaChart from "../visao-geral/charts/VendasPorCategoriaChart";
import StatusPagamentosChart from "../visao-geral/charts/StatusPagamentosChart";
import ComprasVsVendasChart from "../visao-geral/charts/ComprasVsVendasChart";
import VendasPorDiaChart from "../visao-geral/charts/VendasPorDiaChart";

import ProdutosMaisVendidosTable from "../visao-geral/tables/ProdutosMaisVendidosTable";
import TopClientesTable from "../visao-geral/tables/TopClientesTable";

import AlertasImportantes from "../visao-geral/sections/AlertasImportantes";
import ResumoFinanceiro from "../visao-geral/sections/ResumoFinanceiro";
import EstoqueCritico from "../visao-geral/sections/EstoqueCritico";

import { fmt } from "../visao-geral/utils/dashboardUtils";

export default function DashboardV1({ metricas }) {
  return (
    <div className="space-y-5">
      {/* Linha 1 — Cards de métricas (igual ao print) */}
      <div className="grid grid-cols-2 xl:grid-cols-5 gap-4">
        <div className="animate-stagger" style={{ "--delay": "0ms" }}>
          <StatsCard
            title="Clientes"
            value={metricas.totalClientes.toLocaleString("pt-BR")}
            change="+12% este mês"
            trend="up"
            color="violet"
            icon={<Users size={16} />}
          />
        </div>
        <div className="animate-stagger" style={{ "--delay": "40ms" }}>
          <StatsCard
            title="Produtos"
            value={(metricas.totalProdutos || 0).toLocaleString("pt-BR")}
            change="+18% este mês"
            trend="up"
            color="blue"
            icon={<ShoppingBag size={16} />}
          />
        </div>
        <div className="animate-stagger" style={{ "--delay": "80ms" }}>
          <StatsCard
            title="Compras"
            value={fmt(metricas.totalCompras)}
            change="+24,5% este mês"
            trend="up"
            color="green"
            icon={<ShoppingCart size={16} />}
          />
        </div>
        <div className="animate-stagger" style={{ "--delay": "120ms" }}>
          <StatsCard
            title="Vendas"
            value={fmt(metricas.totalVendas)}
            change="+32,1% este mês"
            trend="up"
            color="violet"
            icon={<Package size={16} />}
          />
        </div>
        <div className="animate-stagger" style={{ "--delay": "160ms" }}>
          <StatsCard
            title="Lucro Líquido"
            value={fmt(metricas.lucroLiquido)}
            change="+28,7% este mês"
            trend="up"
            color="amber"
            icon={<Camera size={16} />}
          />
        </div>
      </div>

      {/* Linha 2 — Faturamento + Categoria + Pagamentos (igual ao print) */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        <FaturamentoMensalChart />
        <VendasPorCategoriaChart />
        <StatusPagamentosChart />
      </div>

      {/* Linha 3 — Produtos + Clientes + Alertas (igual ao print) */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        <div className="xl:col-span-1">
          <ProdutosMaisVendidosTable />
        </div>
        <div className="xl:col-span-1">
          <TopClientesTable />
        </div>
        <div className="xl:col-span-2">
          <AlertasImportantes />
        </div>
      </div>

      {/* Linha 4 — Compras x Vendas + Resumo + Meta (igual ao print) */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        <ComprasVsVendasChart />
        <ResumoFinanceiro />
        <MetaMensalCard />
      </div>

      {/* Linha 5 — Extras pedidos: Vendas por dia + Estoque crítico */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <VendasPorDiaChart />
        <EstoqueCritico />
      </div>
    </div>
  );
}
