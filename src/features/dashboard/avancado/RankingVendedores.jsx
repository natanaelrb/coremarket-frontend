import ChartCard from "../visao-geral/cards/ChartCard";
import { fmt } from "../visao-geral/utils/dashboardUtils";
import { rankingVendedores } from "../visao-geral/data/dashboardData";

export default function RankingVendedores() {
  const maxTotal = rankingVendedores[0]?.total || 1;

  return (
    <ChartCard
      title="Ranking de vendedores"
      subtitle="Desempenho por vendedor no período"
    >
      <div className="space-y-3">
        {rankingVendedores.map((v, i) => (
          <div key={v.nome} className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-violet-50 dark:bg-violet-500/15 flex items-center justify-center text-xs font-bold text-violet-600 dark:text-violet-400 flex-shrink-0">
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-slate-700 dark:text-[var(--sidebar-text)]/80 font-medium truncate">
                  {v.nome}
                </span>
                <span className="text-sm font-semibold text-slate-800 dark:text-[var(--sidebar-text)]/90 ml-2">
                  {fmt(v.total)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="w-full h-1.5 bg-slate-100 dark:bg-white/8 rounded-full mr-2">
                  <div
                    className="h-1.5 bg-violet-500 rounded-full transition-all duration-500"
                    style={{ width: `${(v.total / maxTotal) * 100}%` }}
                  />
                </div>
                <span className="text-[11px] text-slate-400 dark:text-[var(--sidebar-text)]/35 flex-shrink-0">
                  {v.vendas} vendas
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
