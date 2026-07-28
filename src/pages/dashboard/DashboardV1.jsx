import {
  Users,
  Package,
  ShoppingCart,
  ShoppingBag,
  Camera,
} from "lucide-react";
import StatsCard from "../../components/dashboard/StatsCard";
import FaturamentoMensalChart from "../../components/dashboard/FaturamentoMensalChart";
import VendasPorCategoriaChart from "../../components/dashboard/VendasPorCategoriaChart";
import StatusPagamentosChart from "../../components/dashboard/StatusPagamentosChart";
import ProdutosMaisVendidosTable from "../../components/dashboard/ProdutosMaisVendidosTable";
import TopClientesTable from "../../components/dashboard/TopClientesTable";
import AlertasImportantes from "../../components/dashboard/AlertasImportantes";
import ComprasVsVendasChart from "../../components/dashboard/ComprasVsVendasChart";
import ResumoFinanceiro from "../../components/dashboard/ResumoFinanceiro";
import MetaMensalCard from "../../components/dashboard/MetaMensalCard";
import VendasPorDiaChart from "../../components/dashboard/VendasPorDiaChart";
import EstoqueCritico from "../../components/dashboard/EstoqueCritico";
import { fmt } from "../../components/dashboard/dashboardUtils";

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
