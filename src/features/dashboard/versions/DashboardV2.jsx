import VendasPorCategoriaChart from "../visao-geral/charts/VendasPorCategoriaChart";
import FaturamentoPorCategoriaChart from "../avancado/FaturamentoPorCategoriaChart";
import ProdutosMaisLucrativos from "../avancado/ProdutosMaisLucrativos";
import ProdutosMenosVendidos from "../avancado/ProdutosMenosVendidos";
import TicketMedioCard from "../avancado/TicketMedioCard";
import RankingVendedores from "../avancado/RankingVendedores";
import PrevisaoEstoque from "../avancado/PrevisaoEstoque";
import HeatmapVendas from "../avancado/HeatmapVendas";

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
