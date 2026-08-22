import AnalyticsTabs from './AnalyticsTabs';
import EntradasVsSaidasChart from './EntradasVsSaidasChart';
import TopProductsList from './TopProductsList';
import LossReasonsDonut from './LossReasonsDonut';
import HourlyActivityChart from './HourlyActivityChart';

// Orquestra a seção "Análises do Período" — sem estado próprio de dados.
export default function AnalyticsSection({ data, isLoading, activeView, onChangeView }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold text-white">Análises do Período</h2>
        <AnalyticsTabs activeView={activeView} onChange={onChangeView} />
      </div>

      {isLoading || !data ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-[220px] animate-pulse rounded-2xl border border-white/5 bg-[#141833]" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <EntradasVsSaidasChart entradas={data.entradasSaidas.entradas} saidas={data.entradasSaidas.saidas} />
          <TopProductsList produtos={data.topProdutos} />
          <LossReasonsDonut motivos={data.motivosPerda} />
          <HourlyActivityChart horarios={data.horarios} />
        </div>
      )}
    </section>
  );
}
