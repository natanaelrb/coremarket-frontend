import ChartCard from "../cards/ChartCard";
import { fmt } from "../utils/dashboardUtils";
import { resumoFinanceiro } from "../data/dashboardData";

export default function ResumoFinanceiro() {
  const itens = [
    {
      label: "Faturamento Bruto",
      sub: "Total de vendas",
      valor: resumoFinanceiro.faturamentoBruto,
      cor: "text-slate-800 dark:text-[var(--sidebar-text)]/90",
    },
    {
      label: "Custo das Mercadorias",
      sub: "Total de compras",
      valor: resumoFinanceiro.custoMercadorias,
      cor: "text-slate-800 dark:text-[var(--sidebar-text)]/90",
    },
    {
      label: "Lucro Líquido",
      sub: "Faturamento - Custos",
      valor: resumoFinanceiro.lucroLiquido,
      cor: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <ChartCard title="Resumo financeiro">
      <div className="space-y-3">
        {itens.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between py-1.5 border-b border-slate-50 dark:border-white/5 last:border-0"
          >
            <div>
              <p className="text-sm text-slate-700 dark:text-[var(--sidebar-text)]/80">
                {item.label}
              </p>
              <p className="text-[11px] text-slate-400 dark:text-[var(--sidebar-text)]/35">
                {item.sub}
              </p>
            </div>
            <span className={`text-sm font-semibold ${item.cor}`}>
              {fmt(item.valor)}
            </span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
