import { useMemo } from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';


import { useTheme } from '../../../../shared/contexts/ThemeContext';

import {
  getGridConfig,
  getAxisConfig,
  getTooltipContentStyle,
  CHART_COLORS,
  CHART_ANIMATION_DURATION,
} from '../../utils/chartConfig';

import { formatCurrency } from '../../utils/dashboardFormatters';

const SERIES = [
  {
    key: 'compras',
    label: 'Compras (R$)',
    color: CHART_COLORS.compras,
  },
  {
    key: 'vendas',
    label: 'Vendas (R$)',
    color: CHART_COLORS.vendas,
  },
];

/**
 * Comparativo Compras vs Vendas
 * ao longo do período selecionado.
 */
export default function PurchasesVsSalesChart({ data }) {
  const { isDark } = useTheme();

  const grid = useMemo(
    () => getGridConfig(isDark),
    [isDark]
  );

  const axis = useMemo(
    () => getAxisConfig(isDark),
    [isDark]
  );

  const tooltipStyle = useMemo(
    () => getTooltipContentStyle(isDark),
    [isDark]
  );

  return (
    <DashboardCard className="p-4 animate-card-in hover:-translate-y-0.5 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between gap-3">
        <DashboardSection
          title="Compras vs Vendas"
          subtitle="Comparativo mensal"
        />

        <select
          className="
            shrink-0
            rounded-lg
            border
            border-[var(--border-subtle)]
            bg-[var(--bg-surface)]
            px-2.5
            py-1.5
            text-[11px]
            font-semibold
            outline-none
            transition
          "
          defaultValue="12"
        >
          <option value="12">Últimos 12 meses</option>
          <option value="6">Últimos 6 meses</option>
          <option value="3">Últimos 3 meses</option>
        </select>
      </div>

      <div className="h-[165px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 4,
              right: 4,
              left: -12,
              bottom: 0,
            }}
          >
            <CartesianGrid {...grid} />

            <XAxis
              dataKey="mes"
              {...axis}
            />

            <YAxis
              {...axis}
              tickFormatter={(v) => `R$ ${v / 1000}k`}
            />

            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [
                formatCurrency(value),
                '',
              ]}
            />

            {SERIES.map((s) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                stroke={s.color}
                strokeWidth={2.5}
                dot={{
                  r: 2.5,
                  strokeWidth: 0,
                  fill: s.color,
                }}
                animationDuration={
                  CHART_ANIMATION_DURATION
                }
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}