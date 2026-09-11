import { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { ChevronDown } from "lucide-react";
import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';
import ChartLegend from '../shared/ChartLegend';
import { useTheme } from "../../../../shared/contexts/ThemeContext";
import { getGridConfig, getAxisConfig, getTooltipContentStyle, CHART_COLORS, CHART_ANIMATION_DURATION } from '../../utils/chartConfig';
import { formatCurrency } from '../../utils/dashboardFormatters';

const SERIES = [
  { key: 'vendas', label: 'Vendas (R$)', color: CHART_COLORS.vendas },
  { key: 'compras', label: 'Compras (R$)', color: CHART_COLORS.compras },
  { key: 'lucro', label: 'Lucro (R$)', color: CHART_COLORS.lucro },
];

/** Gráfico de linha com Vendas, Compras e Lucro ao longo dos últimos meses. */
export default function MonthlyRevenueChart({ data }) {
  const { isDark } = useTheme();
  const [hidden, setHidden] = useState([]);
  const [period, setPeriod] = useState("Mensal");
  const [isPeriodOpen, setIsPeriodOpen] = useState(false);

  const grid = useMemo(() => getGridConfig(isDark), [isDark]);
  const axis = useMemo(() => getAxisConfig(isDark), [isDark]);
  const tooltipStyle = useMemo(() => getTooltipContentStyle(isDark), [isDark]);

  function toggleSeries(key) {
    setHidden((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  }

  return (
    <DashboardCard className="p-4 animate-card-in rounded-lg hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4">
        {/* Cabeçalho + filtro */}
        <div className="flex items-center justify-between">
          <DashboardSection title="Faturamento mensal" />

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsPeriodOpen((prev) => !prev)}
              className="
                flex items-center gap-2
                rounded-lg
                border border-[var(--border-subtle)]
                bg-[var(--bg-surface)]
                px-3 py-1.5
                text-xs font-bold
                shadow-sm
                transition-all duration-200
                hover:bg-[var(--bg-hover)]
              "
            >
              {period}

              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  isPeriodOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Menu */}
            {isPeriodOpen && (
              <div
                className="
                  absolute right-0 top-full z-50 mt-2 w-32
                  overflow-hidden rounded-xl
                  border border-[var(--border-subtle)]
                  bg-[var(--bg-surface)]
                  p-1 shadow-lg
                "
              >
                {["Diário", "Semanal", "Mensal", "Anual"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setPeriod(option);
                      setIsPeriodOpen(false);
                    }}
                    className={`
                      w-full rounded-lg px-3 py-2
                      text-left text-xs font-medium
                      transition-colors
                      ${
                        period === option
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
                          : "text-[var(--text-primary)] hover:bg-[var(--bg-hover)]"
                      }
                    `}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Legenda */}
        <div className="mt-1 ml-2">
          <ChartLegend
            items={SERIES}
            hidden={hidden}
            onToggle={toggleSeries}
          />
        </div>
      </div>
      <div className="h-[190px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 4, right: 8, left: -12, bottom: 0 }}
          >
            {/* Gradientes de luz */}
            <defs>
              {SERIES.map((s) => (
                <linearGradient
                  key={`gradient-${s.key}`}
                  id={`gradient-${s.key}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor={s.color}
                    stopOpacity={0.28}
                  />
                  <stop
                    offset="100%"
                    stopColor={s.color}
                    stopOpacity={0}
                  />
                </linearGradient>
              ))}
            </defs>

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
              formatter={(value, name) => [
                formatCurrency(value),
                SERIES.find((s) => s.key === name)?.label ?? name,
              ]}
            />

            {/* Área de brilho embaixo das linhas */}
            {SERIES.filter((s) => !hidden.includes(s.key)).map((s) => (
              <Area
                key={`area-${s.key}`}
                type="monotone"
                dataKey={s.key}
                stroke="none"
                fill={`url(#gradient-${s.key})`}
                animationDuration={CHART_ANIMATION_DURATION}
              />
            ))}

            {/* Linhas principais */}
            {SERIES.filter((s) => !hidden.includes(s.key)).map((s) => (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.key}
                stroke={s.color}
                strokeWidth={2.5}
                dot={{
                  r: 3,
                  strokeWidth: 0,
                  fill: s.color,
                }}
                activeDot={{ r: 5 }}
                animationDuration={CHART_ANIMATION_DURATION}
              />
            ))}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}
