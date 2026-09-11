import { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
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

/**
 * Gráfico de barras horizontais com o faturamento
 * gerado por categoria.
 */
export default function RevenueByCategory({ data }) {
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
          title="Faturamento por categoria"
          subtitle="Distribuição do faturamento por categoria"
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
          defaultValue="faturamento"
        >
          <option value="faturamento">Faturamento (R$)</option>
          <option value="percentual">Percentual (%)</option>
        </select>
      </div>

      <div className="h-[165px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 0,
              right: 12,
              left: 4,
              bottom: 0,
            }}
          >
            <CartesianGrid
              {...grid}
              horizontal={false}
            />

            <XAxis
              type="number"
              {...axis}
              tickFormatter={(v) => `R$ ${v / 1000}k`}
            />

            <YAxis
              type="category"
              dataKey="categoria"
              {...axis}
              width={70}
            />

            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [
                formatCurrency(value),
                'Faturamento',
              ]}
            />

            <Bar
              dataKey="valor"
              radius={[0, 6, 6, 0]}
              barSize={16}
              animationDuration={CHART_ANIMATION_DURATION}
            >
              {data.map((entry, i) => (
                <Cell
                  key={entry.categoria}
                  fill={
                    CHART_COLORS.categorias[
                      i % CHART_COLORS.categorias.length
                    ]
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}