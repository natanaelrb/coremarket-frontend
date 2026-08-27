import { AlertTriangle } from "lucide-react";
import ChartCard from "../cards/ChartCard";
import { estoqueCritico } from "../data/dashboardData";

function getCores(qtd) {
  if (qtd <= 3)
    return { bar: "bg-red-500", text: "text-red-500 dark:text-red-400" };
  if (qtd <= 6)
    return { bar: "bg-amber-500", text: "text-amber-500 dark:text-amber-400" };
  return { bar: "bg-yellow-400", text: "text-yellow-500 dark:text-yellow-400" };
}

export default function EstoqueCritico() {
  return (
    <ChartCard
      title="Estoque crítico"
      subtitle="Produtos abaixo do nível mínimo"
    >
      <div className="space-y-4">
        {estoqueCritico.map((p) => {
          const { bar, text } = getCores(p.qtd);
          const pct = (p.qtd / p.max) * 100;
          return (
            <div key={p.nome}>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <AlertTriangle size={12} className={text} />
                  <span className="text-sm text-slate-700 dark:text-[var(--sidebar-text)]/75">
                    {p.nome}
                  </span>
                </div>
                <span className={`text-sm font-semibold ${text}`}>
                  {p.qtd} un.
                </span>
              </div>
              <div className="w-full h-2 bg-slate-100 dark:bg-white/8 rounded-full">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${bar}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </ChartCard>
  );
}
