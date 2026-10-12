import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import ChartCard from "./ChartCard.jsx";
import { useChartTheme } from "../../../../shared/hooks/useChartTheme.js";
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";

/**
 * Area chart showing the historical total stock value (R$) trend.
 */
export default function ValorEstoqueChart({ data = [] }) {
  const theme = useChartTheme();

  return (
    <ChartCard
      title="Valor do Estoque"
      description="Evolução do valor total armazenado ao longo do período."
    >
      <div className="h-[245px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 4,
              left: -8,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient
                id="valorEstoqueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={theme.info}
                  stopOpacity={0.28}
                />
                <stop
                  offset="100%"
                  stopColor={theme.info}
                  stopOpacity={0.02}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme.grid}
              vertical={false}
            />

            <XAxis
              dataKey="data"
              tick={{
                fill: theme.axis,
                fontSize: 10,
              }}
              axisLine={false}
              tickLine={false}
              dy={6}
            />

            <YAxis
              tick={{
                fill: theme.axis,
                fontSize: 10,
              }}
              axisLine={false}
              tickLine={false}
              width={48}
              tickFormatter={(value) =>
                `${Math.round(value / 1000)}k`
              }
            />

            <Tooltip
              cursor={{
                stroke: theme.info,
                strokeOpacity: 0.2,
              }}
              contentStyle={{
                background: theme.tooltipBg,
                border: `1px solid ${theme.tooltipBorder}`,
                borderRadius: 10,
                fontSize: 12,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
              }}
              labelStyle={{
                color: theme.tooltipText,
                fontWeight: 600,
                marginBottom: 4,
              }}
              formatter={(value) => [
                formatCurrency(value),
                "Valor do estoque",
              ]}
            />

            <Area
              type="monotone"
              dataKey="valor"
              stroke={theme.info}
              strokeWidth={2.5}
              fill="url(#valorEstoqueGradient)"
              dot={{
                r: 3,
                fill: theme.info,
                strokeWidth: 0,
              }}
              activeDot={{
                r: 5,
                strokeWidth: 2,
                stroke: theme.tooltipBg,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}