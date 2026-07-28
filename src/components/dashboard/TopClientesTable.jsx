import ChartCard from "./ChartCard";
import { fmt } from "./dashboardUtils";
import { topClientes } from "./dashboardData";

export default function TopClientesTable() {
  return (
    <ChartCard title="Top clientes">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-slate-400 dark:text-[var(--sidebar-text)]/35 border-b border-slate-100 dark:border-white/8">
            <th className="pb-2 font-medium">Cliente</th>
            <th className="pb-2 font-medium text-right">Compras</th>
            <th className="pb-2 font-medium text-right">Faturamento</th>
          </tr>
        </thead>
        <tbody>
          {topClientes.map((c) => (
            <tr
              key={c.nome}
              className="border-b border-slate-50 dark:border-white/5 last:border-0"
            >
              <td className="py-2.5 text-slate-700 dark:text-[var(--sidebar-text)]/80">
                {c.nome}
              </td>
              <td className="py-2.5 text-right text-slate-500 dark:text-slate-900 dark:text-slate-500 dark:text-white/50">
                {c.compras}
              </td>
              <td className="py-2.5 text-right font-medium text-slate-800 dark:text-[var(--sidebar-text)]/90">
                {fmt(c.faturamento)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ChartCard>
  );
}
