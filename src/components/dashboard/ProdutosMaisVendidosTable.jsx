import ChartCard from "./ChartCard";
import { fmt } from "./dashboardUtils";
import { produtosMaisVendidos } from "./dashboardData";

export default function ProdutosMaisVendidosTable() {
  return (
    <ChartCard title="Produtos mais vendidos">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-slate-400 dark:text-[var(--sidebar-text)]/35 border-b border-slate-100 dark:border-white/8">
            <th className="pb-2 font-medium">Produto</th>
            <th className="pb-2 font-medium text-right">Quantidade</th>
            <th className="pb-2 font-medium text-right">Faturamento</th>
          </tr>
        </thead>
        <tbody>
          {produtosMaisVendidos.map((p) => (
            <tr
              key={p.nome}
              className="border-b border-slate-50 dark:border-white/5 last:border-0"
            >
              <td className="py-2.5 text-slate-700 dark:text-[var(--sidebar-text)]/80">
                {p.nome}
              </td>
              <td className="py-2.5 text-right text-slate-500 dark:text-slate-900 dark:text-slate-500 dark:text-white/50">
                {p.quantidade}
              </td>
              <td className="py-2.5 text-right font-medium text-slate-800 dark:text-[var(--sidebar-text)]/90">
                {fmt(p.faturamento)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ChartCard>
  );
}
