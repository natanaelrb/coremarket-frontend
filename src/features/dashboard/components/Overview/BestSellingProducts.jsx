import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';
import EmptyState from '../shared/EmptyState';
import { formatCurrency, formatNumber } from '../../utils/dashboardFormatters';

/** Tabela dos produtos mais vendidos, com ranking visual, imagem e faturamento. */
export default function BestSellingProducts({ data = [], onViewAll }) {
  return (
    <DashboardCard className="p-5 animate-card-in transition-all duration-200 rounded-lg hover:-translate-y-1 hover:shadow-md">
      <DashboardSection
        title="Produtos mais vendidos"
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
        <div className="w-full overflow-hidden">
          <table className="w-full table-fixed text-sm">
            <thead>
              <tr className="text-left text-xs text-[var(--text-secondary)]">
                <th className="pb-2.5 font-medium">
                  Produto
                </th>

                <th className="pb-2.5 pr-6 text-right font-medium">
                  Quantidade
                </th>

                <th className="pb-2.5 text-right font-medium">
                  Faturamento
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((row) => (
                <tr
                  key={row.produto}
                  className="
                    border-t border-[var(--border-subtle)]
                    transition-colors
                    hover:bg-[var(--bg-hover)]
                  "
                >
                  {/* Produto */}
                  <td className="py-2">
                    <div className="flex min-w-0 items-center gap-2.5">

                      {/* Imagem */}
                      <div
                        className="
                          flex h-9 w-9 shrink-0
                          items-center justify-center
                          overflow-hidden
                          rounded-lg
                          bg-white
                        "
                      >
                        {row.imagemUrl ? (
                          <img
                            src={row.imagemUrl}
                            alt={row.produto}
                            className="h-full w-full object-contain p-1"
                            loading="lazy"
                          />
                        ) : (
                          <div
                            className="
                              h-full w-full
                              rounded-lg
                              bg-[var(--bg-surface-alt)]
                            "
                          />
                        )}
                      </div>

                      {/* Nome */}
                      <span
                        className="
                          text-sm
                          font-medium
                          text-[var(--text-primary)]
                        "
                      >
                        {row.produto}
                      </span>
                    </div>
                  </td>

                  {/* Quantidade */}
                  <td className="py-2.5 pr-6 font-semibold text-right">
                    <span className="text-sm text-[var(--text-secondary)]">
                      {formatNumber(row.quantidade)}
                    </span>
                  </td>

                  {/* Faturamento */}
                  <td className="py-2.5 text-right">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">
                      {formatCurrency(row.faturamento)}
                    </span>
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