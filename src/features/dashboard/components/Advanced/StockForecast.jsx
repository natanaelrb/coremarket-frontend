import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';

import {
  estimarDiasParaEsgotar,
  classificarUrgenciaEstoque,
} from '../../utils/dashboardCalculations';

const URGENCIA_STYLE = {
  CRITICO:
    'bg-[#fee2e2] text-[#dc2626] dark:bg-[#3a1414]',
  ATENCAO:
    'bg-[#fef3c7] text-[#d97706] dark:bg-[#3a2e10]',
  OK:
    'bg-[#dcfce7] text-[#16a34a] dark:bg-[#123321]',
};

/**
 * Previsão de estoque com base no consumo médio diário.
 * O cálculo (estimarDiasParaEsgotar) vive em utils/dashboardCalculations.js,
 * fora do componente, conforme a regra de não embutir lógica complexa no JSX.
 */
export default function StockForecast({ data, onViewAll }) {
  return (
    <DashboardCard className="h-[310px] p-3.5 animate-card-in flex flex-col hover:-translate-y-0.5 hover:shadow-lg transition-all">
      <DashboardSection
        title="Previsão de estoque"
        subtitle="Estimativa de dias até esgotar"
      />

      <div className="mt-2 flex-1 overflow-hidden">
        <table className="w-full table-fixed text-xs">
          <thead>
            <tr className="text-left text-[10px] text-[var(--text-secondary)]">
              <th className="pb-1.5 font-medium">
                Produto
              </th>

              <th className="w-[96px] pb-1.5 font-medium">
                Consumo médio
              </th>

              <th className="w-[76px] pb-1.5 font-medium">
                Estoque atual
              </th>

              <th className="w-[48px] pb-1.5 text-right font-medium">
                Dias
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row) => {
              const dias = estimarDiasParaEsgotar(
                row.estoqueAtual,
                row.consumoMedioDiario
              );

              const urgencia =
                classificarUrgenciaEstoque(dias);

              return (
                <tr
                  key={row.produto}
                  className="
                    border-t
                    border-[var(--border-subtle)]
                    transition-colors
                    hover:bg-[var(--bg-hover)]
                  "
                >
                  <td className="truncate py-1.5 text-[var(--text-primary)]">
                    {row.produto}
                  </td>

                  <td className="whitespace-nowrap py-1.5 text-[var(--text-secondary)]">
                    ~{row.consumoMedioDiario} un./dia
                  </td>

                  <td className="whitespace-nowrap py-1.5 text-[var(--text-secondary)]">
                    {row.estoqueAtual} un.
                  </td>

                  <td className="py-1.5 text-right">
                    <span
                      className={`
                        inline-block
                        min-w-[42px]
                        rounded-full
                        px-2
                        py-1
                        text-center
                        text-[10px]
                        font-semibold
                        ${URGENCIA_STYLE[urgencia]}
                      `}
                    >
                      {dias === Infinity
                        ? '—'
                        : `${dias} ${
                            dias === 1 ? 'dia' : 'dias'
                          }`}
                    </span>
                  </td>
                </tr>
              );
            })}
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