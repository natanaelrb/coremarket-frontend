import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';
import { formatCurrency } from '../../utils/dashboardFormatters';

/** Tabela dos produtos com maior margem de lucro no período. */
export default function MostProfitableProducts({ data, onViewAll }) {
  return (
    <DashboardCard className="h-[310px] p-3.5 animate-card-in flex flex-col hover:-translate-y-0.5 hover:shadow-lg transition-all">
      <DashboardSection
        title="Produtos mais lucrativos"
        subtitle="Maior margem de lucro no período"
      />

      <div className="mt-2 flex-1 overflow-hidden">
        <table className="w-full table-fixed text-xs">
          <thead>
            <tr className="text-left text-[10px] text-[var(--text-secondary)]">
              <th className="pb-1.5 font-medium">
                Produto
              </th>

              <th className="w-[82px] pb-1.5 text-right font-medium">
                Lucro (R$)
              </th>

              <th className="w-[48px] pb-1.5 text-right font-medium">
                Margem
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr
                key={row.produto}
                className="border-t border-[var(--border-subtle)] transition-colors hover:bg-[var(--bg-hover)]"
              >
                <td className="truncate py-1.5 text-[var(--text-primary)]">
                  {row.produto}
                </td>

                <td className="whitespace-nowrap py-1.5 text-right font-medium text-[var(--text-primary)]">
                  {formatCurrency(row.lucro)}
                </td>

                <td className="py-1.5 text-right font-medium text-[#16a34a]">
                  {row.margem}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        type="button"
        onClick={onViewAll}
        className="
          mt-2
          h-7
          w-full
          shrink-0
          rounded-md
          border
          border-[var(--border-subtle)]
          text-[10px]
          font-medium
          text-[var(--color-brand-600,#16a34a)]
          transition-colors
          hover:bg-[var(--bg-hover)]
        "
      >
        Ver todos os produtos
      </button>
    </DashboardCard>
  );
}