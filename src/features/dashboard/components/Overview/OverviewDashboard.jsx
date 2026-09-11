import { useNavigate } from 'react-router-dom';

import DashboardStatsGrid from './DashboardStatsGrid';
import MonthlyRevenueChart from './MonthlyRevenueChart';
import SalesByCategoryChart from './SalesByCategoryChart';
import PaymentStatus from './PaymentStatus';
import BestSellingProducts from './BestSellingProducts';
import TopCustomers from './TopCustomers';
import ImportantAlerts from './ImportantAlerts';
import CriticalStock from './CriticalStock';
import FinancialSummary from './FinancialSummary';
import MonthlyGoal from './MonthlyGoal';

export default function OverviewDashboard({ data }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">

      {/* Indicadores */}
      <DashboardStatsGrid stats={data.stats} />

      {/* Gráficos */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_1fr_0.75fr]">
        <MonthlyRevenueChart
          data={data.faturamentoMensal}
        />

        <SalesByCategoryChart
          data={data.vendasPorCategoria}
        />

        <PaymentStatus
          data={data.statusPagamentos}
        />
      </div>

      {/* Cards principais */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">

        {/* Produtos mais vendidos */}
        <BestSellingProducts
          data={data.produtosMaisVendidos}
          onViewAll={() => navigate('/produtos')}
        />

        {/* Top clientes */}
        <TopCustomers
          data={data.topClientes}
          onViewAll={() => navigate('/clientes')}
        />

        {/* Alertas importantes */}
        <ImportantAlerts
          data={data.alertas}
          onViewAll={() => navigate('/estoque')}
        />

        {/* Estoque crítico */}
        <CriticalStock
          data={data.estoqueCritico}
          onViewAll={() => navigate('/estoque')}
        />

      </div>

      {/* Financeiro */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
        <FinancialSummary
          data={data.resumoFinanceiro}
        />

        <MonthlyGoal
          data={data.metaMensal}
        />
      </div>

    </div>
  );
}