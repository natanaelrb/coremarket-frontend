import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "../cards/ChartCard";
import ChartTooltip from "./ChartTooltip";
import { useChartTheme } from "../config/chartTheme";
import { fmtK } from "../utils/dashboardUtils";
import { vendasPorDia } from "../data/dashboardData";

const maxVendas = Math.max(...vendasPorDia.map((d) => d.vendas));

export default function VendasPorDiaChart() {
  const ct = useChartTheme();

  return (
    <ChartCard title="Vendas por dia da semana" subtitle="Média de faturamento por dia">
      <ResponsiveContainer width="100%" height={190}>
        <BarChart data={vendasPorDia} barSize={28}>
          <CartesianGrid strokeDasharray="3 3" stroke={ct.gridColor} vertical={false} />
          <XAxis dataKey="dia" tick={{ fontSize: 11, fill: ct.axisColor }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: ct.axisColor }} axisLine={false} tickLine={false}
            tickFormatter={fmtK} width={48} />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: ct.cursorFill }} />
          <Bar dataKey="vendas" name="Vendas" radius={[4, 4, 0, 0]}>
            {vendasPorDia.map((entry, i) => (
              <Cell key={i} fill={entry.vendas === maxVendas ? ct.violet : ct.violetSoft} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
