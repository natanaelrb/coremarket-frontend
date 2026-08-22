import ChartCard from "../visao-geral/cards/ChartCard";
import { fmt } from "../visao-geral/utils/dashboardUtils";
import { produtosMaisLucrativos } from "../visao-geral/data/dashboardData";

export default function ProdutosMaisLucrativos() {
  const maxMargem = Math.max(...produtosMaisLucrativos.map((p) => p.margem));

  return (
    <ChartCard
      title="Produtos mais lucrativos"
      subtitle="Maior margem de lucro no período"
    >
      <div className="space-y-3">
        {produtosMaisLucrativos.map((p) => (
          <div key={p.nome}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-slate-700 dark:text-[var(--sidebar-text)]/80 truncate">
                {p.nome}
              </span>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/40">
                  {fmt(p.lucro)}
                </span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {p.margem}%
                </span>
              </div>
            </div>
            <div className="w-full h-1.5 bg-slate-100 dark:bg-white/8 rounded-full">
              <div
                className="h-1.5 bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${(p.margem / maxMargem) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
