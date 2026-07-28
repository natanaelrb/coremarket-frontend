import { TrendingDown } from "lucide-react";
import ChartCard from "../../../components/dashboard/ChartCard";
import { produtosMenosVendidos } from "../../../components/dashboard/dashboardData";

export default function ProdutosMenosVendidos() {
  return (
    <ChartCard
      title="Produtos menos vendidos"
      subtitle="Candidatos a promoção ou descontinuação"
    >
      <div className="space-y-2">
        {produtosMenosVendidos.map((p) => (
          <div
            key={p.nome}
            className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-50 dark:bg-white/5"
          >
            <div className="flex items-center gap-2">
              <TrendingDown
                size={13}
                className="text-slate-400 dark:text-[var(--sidebar-text)]/35"
              />
              <span className="text-sm text-slate-600 dark:text-slate-900 dark:text-slate-600 dark:text-white/70">
                {p.nome}
              </span>
            </div>
            <span className="text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/40">
              {p.vendas} vendas
            </span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
