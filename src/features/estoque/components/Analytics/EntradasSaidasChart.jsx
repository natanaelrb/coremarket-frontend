import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import ChartCard from "./ChartCard.jsx";
import { useChartTheme } from "../../../../shared/hooks/useChartTheme.js";

export default function EntradasSaidasChart({ data = [] }) {
  const theme = useChartTheme();

  return (
    <ChartCard
      title="Entradas x Saídas"
      description="Movimentações de estoque nos últimos 30 dias."
    >
      <div className="h-[245px] w-full">
        <ResponsiveContainer width="100%" height="135%">
          <BarChart
            data={data}
            margin={{
              top: 8,
              right: 4,
              left: -12,
              bottom: 0,
            }}
            barGap={5}
          >
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
              width={30}
            />

            <Tooltip
              cursor={{ fill: "rgba(148, 163, 184, 0.08)" }}
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
            />

            <Legend
              verticalAlign="bottom"
              height={28}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{
                fontSize: 11,
                paddingTop: 6,
              }}
            />

            <Bar
              dataKey="entradas"
              name="Entradas"
              fill={theme.success}
              radius={[4, 4, 0, 0]}
              maxBarSize={16}
            />

            <Bar
              dataKey="saidas"
              name="Saídas"
              fill={theme.danger}
              radius={[4, 4, 0, 0]}
              maxBarSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}