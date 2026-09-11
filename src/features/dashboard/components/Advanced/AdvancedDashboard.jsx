import { useNavigate } from 'react-router-dom';

import AdvancedStatsGrid from './AdvancedStatsGrid';
import RevenueByCategory from './RevenueByCategory';
import PurchasesVsSalesChart from './PurchasesVsSalesChart';
import DetailedFinancialSummary from './DetailedFinancialSummary';
import MostProfitableProducts from './MostProfitableProducts';
import LeastSoldProducts from './LeastSoldProducts';
import SellerRanking from './SellerRanking';
import StockForecast from './StockForecast';
import SalesHeatmap from './SalesHeatmap';
import SalesByWeekday from './SalesByWeekday';
import CustomerAnalysis from './CustomerAnalysis';

/**
 * Composição da aba "Avançado" — apenas orquestra os blocos visuais,
 * sem lógica própria (dados já vêm prontos do useDashboard).
 */
export default function AdvancedDashboard({ data }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <AdvancedStatsGrid stats={data.stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <RevenueByCategory data={data.faturamentoPorCategoria} />

        <PurchasesVsSalesChart data={data.comprasVsVendas} />

        <DetailedFinancialSummary data={data.resumoFinanceiroDetalhado} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_0.8fr_1.12fr_1.3fr] gap-4">
        <MostProfitableProducts
          data={data.produtosMaisLucrativos}
          onViewAll={() => navigate('/produtos')}
        />

        <LeastSoldProducts
          data={data.produtosMenosVendidos}
          onViewAll={() => navigate('/produtos')}
        />

        <SellerRanking
          data={data.rankingVendedores}
          onViewAll={() => navigate('/usuarios')}
        />

        <StockForecast
          data={data.previsaoEstoque}
          onViewAll={() => navigate('/estoque')}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_0.8fr_1fr] gap-4">
        <SalesHeatmap matrix={data.salesHeatmap} />

        <SalesByWeekday data={data.vendasPorDiaSemana} />

        <CustomerAnalysis data={data.analiseClientes} />
      </div>
    </div>
  );
}