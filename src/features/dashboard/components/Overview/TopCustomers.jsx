import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';
import EmptyState from '../shared/EmptyState';
import { formatCurrency, formatNumber } from '../../utils/dashboardFormatters';

/** Tabela dos clientes com maior número de compras/faturamento no período. */
export default function TopCustomers({ data, onViewAll }) {
  return (
    <DashboardCard className="p-5 animate-card-in rounded-lg hover:-translate-y-1 hover:shadow-md">
      <DashboardSection
        title="Top clientes"
        action={
          <button
            type="button"
            onClick={onViewAll}
            className="text-xs font-medium text-[var(--color-brand-600,#16a34a)] hover:underline"
          >
            Ver todos
          </button>
        }
      />
      {data.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-[var(--text-secondary)]">
                <th className="pb-2 font-medium">Cliente</th>
                <th className="pb-2 pr-6 font-medium text-right">Compras</th>
                <th className="pb-2 font-medium text-right">Faturamento</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr
                  key={row.cliente}
                  className="border-t border-[var(--border-subtle)] hover:bg-[var(--bg-hover)] transition-colors"
                >
                  <td className="py-2.5 flex items-center gap-2.5 text-[var(--text-primary)]">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-brand-100,#dcfce7)] text-xs font-semibold text-[var(--color-brand-600,#16a34a)]">
                      {row.cliente.charAt(0)}
                    </span>
                    {row.cliente}
                  </td>
                  <td className="py-2.5 pr-10 text-right font-semibold text-[var(--text-secondary)]">{formatNumber(row.compras)}</td>
                  <td className="py-2.5 text-right font-medium text-[var(--text-primary)]">
                    {formatCurrency(row.faturamento)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </DashboardCard>
  );
}
