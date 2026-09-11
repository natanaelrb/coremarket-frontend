import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  YAxis,
} from "recharts";

import DashboardCard from "./DashboardCard";
import { formatPercent } from "../../utils/dashboardFormatters";

export default function StatCard({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  value,
  comparisonLabel,
  variation,
  sparkline,
  sparklineColor = "#059669",
  tooltip,
  style,
}) {
  const isPositive = variation >= 0;

  // Cria um ID seguro para o gradient
  const gradientId = `gradient-${title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")}`;

  // Normaliza a escala do gráfico
  const minValue = sparkline ? Math.min(...sparkline) : 0;
  const maxValue = sparkline ? Math.max(...sparkline) : 0;

  // Adiciona uma margem para o gráfico respirar
  const range = maxValue - minValue;
  const padding = range === 0 ? maxValue * 0.1 || 1 : range * 0.2;

  return (
    <DashboardCard
      className="px-5 pt-4 min-h-[100px] animate-card-in hover:-translate-y-0.5 hover:shadow-lg transition-all"
      style={style}
    >
      {/* Cabeçalho */}
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: iconBg }}
        >
          <Icon
            className="h-[18px] w-[18px]"
            style={{ color: iconColor }}
          />
        </div>

        <span
          className="text-sm font-semibold "
          title={tooltip}
        >
          {title}
        </span>
      </div>

      {/* Valor */}
      <div className="pt-2 -mt-4 ml-12">
        <p className="text-xl font-bold text-[var(--text-primary)] tabular-nums whitespace-nowrap">
          {value}
        </p>

        {/* Variação */}
        <div
          className={`mt-1 px-2 -ml-6 flex items-center gap-1 text-xs font-medium ${
            isPositive
              ? "text-emerald-500"
              : "text-red-500"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight className="h-4 w-6 shrink-0" />
          ) : (
            <ArrowDownRight className="h-4 w-6 shrink-" />
          )}

          <span>{formatPercent(variation)}</span>

          {comparisonLabel && (
            <span>{comparisonLabel}</span>
          )}
        </div>
      </div>

      {/* Gráfico */}
      {sparkline && (
        <div className="mt-3 h-14 w-full overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={sparkline.map((v) => ({ v }))}
              margin={{
                top: 4,
                right: 2,
                bottom: 2,
                left: 2,
              }}
            >
              {/* Controla a escala vertical */}
              <YAxis
                hide
                domain={[
                  minValue - padding,
                  maxValue + padding,
                ]}
              />

              <defs>
                <linearGradient
                  id={gradientId}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor={sparklineColor}
                    stopOpacity={0.25}
                  />

                  <stop
                    offset="100%"
                    stopColor={sparklineColor}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <Area
                type="monotone"
                dataKey="v"
                stroke={sparklineColor}
                strokeWidth={2.2}
                fill={`url(#${gradientId})`}
                dot={false}
                activeDot={false}
                isAnimationActive={true}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </DashboardCard>
  );
}