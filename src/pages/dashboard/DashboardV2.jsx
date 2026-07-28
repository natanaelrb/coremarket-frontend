import VendasPorCategoriaChart from "../../components/dashboard/VendasPorCategoriaChart";
import FaturamentoPorCategoriaChart from "./v2/FaturamentoPorCategoriaChart";
import ProdutosMaisLucrativos from "./v2/ProdutosMaisLucrativos";
import ProdutosMenosVendidos from "./v2/ProdutosMenosVendidos";
import TicketMedioCard from "./v2/TicketMedioCard";
import RankingVendedores from "./v2/RankingVendedores";
import PrevisaoEstoque from "./v2/PrevisaoEstoque";
import HeatmapVendas from "./v2/HeatmapVendas";

export default function DashboardV2() {
  return (
    <div className="space-y-5">
      {/* Linha 1 — Categorias de produtos: vendas % + faturamento R$ + ticket médio */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <VendasPorCategoriaChart />
        <div className="xl:col-span-1">
          <FaturamentoPorCategoriaChart />
        </div>
        <TicketMedioCard />
      </div>

      {/* Linha 2 — Produtos mais lucrativos + menos vendidos */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <ProdutosMaisLucrativos />
        <ProdutosMenosVendidos />
      </div>

      {/* Linha 3 — Ranking de vendedores + Previsão de estoque */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <RankingVendedores />
        <PrevisaoEstoque />
      </div>

      {/* Linha 4 — Heatmap (opcional, conforme solicitado) */}
      <HeatmapVendas />
    </div>
  );
}
