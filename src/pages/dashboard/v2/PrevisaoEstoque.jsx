import { Clock } from "lucide-react";
import ChartCard from "../../../components/dashboard/ChartCard";
import { previsaoEstoque } from "../../../components/dashboard/dashboardData";

function getCor(dias) {
  if (dias <= 2) return "text-red-500 dark:text-red-400";
  if (dias <= 5) return "text-amber-500 dark:text-amber-400";
  return "text-emerald-500 dark:text-emerald-400";
}

export default function PrevisaoEstoque() {
  return (
    <ChartCard
      title="Previsão de estoque"
      subtitle="Estimativa de dias até esgotar, com base no consumo médio"
    >
      <div className="space-y-2.5">
        {previsaoEstoque.map((p) => {
          const cor = getCor(p.diasRestantes);
          return (
            <div
              key={p.nome}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-slate-50 dark:bg-white/5"
            >
              <div>
                <p className="text-sm text-slate-700 dark:text-[var(--sidebar-text)]/80">
                  {p.nome}
                </p>
                <p className="text-[11px] text-slate-400 dark:text-[var(--sidebar-text)]/35">
                  ~{p.mediaDiaria} un./dia
                </p>
              </div>
              <div
                className={`flex items-center gap-1.5 text-sm font-semibold ${cor}`}
              >
                <Clock size={13} />
                {p.diasRestantes} {p.diasRestantes === 1 ? "dia" : "dias"}
              </div>
            </div>
          );
        })}
      </div>
    </ChartCard>
  );
}
