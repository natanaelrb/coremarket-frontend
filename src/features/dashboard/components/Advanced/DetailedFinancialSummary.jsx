import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';

import {
  formatCurrency,
  formatPercent,
} from '../../utils/dashboardFormatters';

const ROWS = [
  {
    key: 'faturamentoBruto',
    label: 'Faturamento Bruto',
    percentKey: null,
    base: 100,
  },
  {
    key: 'impostos',
    label: 'Impostos',
  },
  {
    key: 'custoMercadorias',
    label: 'Custo das Mercadorias',
  },
  {
    key: 'despesasOperacionais',
    label: 'Despesas Operacionais',
  },
];

/**
 * Detalhamento financeiro:
 * bruto, impostos, custos, despesas
 * e lucro líquido com margem.
 */
export default function DetailedFinancialSummary({ data }) {
  return (
    <DashboardCard className="h-[255px] p-4 animate-card-in hover:-translate-y-0.5 hover:shadow-lg transition-all">
      <DashboardSection title="Resumo financeiro detalhado" />

      <div className="space-y-2.5">
        {ROWS.map((row) => (
          <div
          key={row.key}
          className="grid grid-cols-[1fr_auto_40px] items-center gap-3 py-1 text-sm"
        >
          <span className="truncate text-[var(--text-secondary)]">
            {row.label}
          </span>

          <span className="whitespace-nowrap text-right text-[var(--text-primary)]">
            {formatCurrency(data[row.key])}
          </span>

          <span className="w-10 text-right text-xs text-[var(--text-tertiary)]">
            {row.key === 'faturamentoBruto'
              ? '100%'
              : formatPercent(
                  (data[row.key] / data.faturamentoBruto) * 100,
                  { withSign: false }
                )}
          </span>
        </div>
        ))}

        <div className="flex items-center justify-between rounded-lg bg-[var(--bg-surface-alt)] px-3 py-2 text-sm font-semibold">
        <span className="text-[#16a34a]">
          Lucro Líquido
        </span>

        <span className="flex items-center gap-3 text-[#16a34a]">
          {formatCurrency(data.lucroLiquido)}

          <span className="w-10 text-right text-xs">
            {formatPercent(
              data.margemPercentual,
              { withSign: false }
            )}
          </span>
        </span>
      </div>
      </div>
    </DashboardCard>
  );
}