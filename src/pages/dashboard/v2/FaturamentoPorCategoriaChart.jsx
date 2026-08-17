import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import ChartCard from "../../../components/dashboard/ChartCard";
import { useChartTheme } from "../../../components/dashboard/chartTheme";
import { fmtK } from "../../../components/dashboard/dashboardUtils";
import { faturamentoPorCategoria } from "../../../components/dashboard/dashboardData";

const CORES = ["#7C3AED", "#2563EB", "#0EA5E9", "#F59E0B", "#64748B"];

export default function FaturamentoPorCategoriaChart() {
  const ct = useChartTheme();

  return (
    <ChartCard
      title="Faturamento por categoria"
      subtitle="Receita gerada em cada categoria"
    >
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={faturamentoPorCategoria} layout="vertical" barSize={16}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={ct.gridColor}
            horizontal={false}
          />
          <XAxis
            type="number"
            tick={{ fontSize: 11, fill: ct.axisColor }}
            axisLine={false}
            tickLine={false}
            tickFormatter={fmtK}
          />
          <YAxis
            type="category"
            dataKey="categoria"
            tick={{ fontSize: 11, fill: ct.axisColor }}
            axisLine={false}
            tickLine={false}
            width={80}
          />
          <Tooltip
            cursor={{ fill: ct.cursorFill }}
            formatter={(v) => fmtK(v)}
          />
          <Bar dataKey="faturamento" radius={[0, 4, 4, 0]}>
            {faturamentoPorCategoria.map((_, i) => (
              <Cell key={i} fill={CORES[i % CORES.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
