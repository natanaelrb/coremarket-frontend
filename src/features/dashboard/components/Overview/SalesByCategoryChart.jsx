import { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';
import { useTheme } from "../../../../shared/contexts/ThemeContext";
import { getTooltipContentStyle, CHART_COLORS, CHART_ANIMATION_DURATION } from '../../utils/chartConfig';

/** Gráfico donut de vendas por categoria, com total central e legenda lateral. */
export default function SalesByCategoryChart({ data }) {
  const { isDark } = useTheme();
  const tooltipStyle = useMemo(() => getTooltipContentStyle(isDark), [isDark]);

  return (
    <DashboardCard className="p-4 animate-card-in rounded-lg hover:-translate-y-1 hover:shadow-md">
      <DashboardSection title="Vendas por categoria" />
      <div className="flex items-center gap-4">
        <div className="relative h-40 w-40 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="percentual"
                nameKey="categoria"
                innerRadius={48}
                outerRadius={72}
                paddingAngle={2}
                animationDuration={CHART_ANIMATION_DURATION}
              >
                {data.map((entry, i) => (
                  <Cell key={entry.categoria} fill={CHART_COLORS.categorias[i % CHART_COLORS.categorias.length]} stroke="none" />
                ))}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} formatter={(value) => [`${value}%`, '']} />
            </PieChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-[var(--text-secondary)]">Total</span>
            <span className="text-lg font-semibold text-[var(--text-primary)]">100%</span>
          </div>
        </div>

        <ul className="flex-1 space-y-4">
          {data.map((item, i) => (
            <li key={item.categoria} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-[var(--text-primary)]">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: CHART_COLORS.categorias[i % CHART_COLORS.categorias.length] }}
                />
                {item.categoria}
              </span>
              <span className="font-medium text-[var(--text-primary)]">{item.percentual}%</span>
            </li>
          ))}
        </ul>
      </div>
    </DashboardCard>
  );
}
