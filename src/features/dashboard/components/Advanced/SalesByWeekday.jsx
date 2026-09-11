import { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';

import { useTheme } from "../../../../shared/contexts/ThemeContext";

import {
  getGridConfig,
  getAxisConfig,
  getTooltipContentStyle,
  CHART_COLORS,
  CHART_ANIMATION_DURATION,
} from '../../utils/chartConfig';

import { formatCurrency } from '../../utils/dashboardFormatters';

/** Faturamento médio por dia da semana. */
export default function SalesByWeekday({ data }) {
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
    <DashboardCard className="h-[250px] p-3.5 animate-card-in flex flex-col hover:-translate-y-0.5 hover:shadow-lg transition-all">
      <DashboardSection
        title="Vendas por dia da semana"
        subtitle="Média de faturamento por dia"
      />

      <div className="mt-1 flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 4,
              right: 4,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid {...grid} />

            <XAxis
              dataKey="dia"
              {...axis}
              tick={{ fontSize: 10 }}
            />

            <YAxis
              {...axis}
              tick={{ fontSize: 10 }}
              tickFormatter={(v) => `R$ ${v / 1000}k`}
            />

            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [
                formatCurrency(value),
                'Faturamento',
              ]}
            />

            <Bar
              dataKey="faturamento"
              fill={CHART_COLORS.vendas}
              radius={[5, 5, 0, 0]}
              barSize={32}
              animationDuration={CHART_ANIMATION_DURATION}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}