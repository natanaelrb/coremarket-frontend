import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import ChartCard from "../cards/ChartCard";
import ChartTooltip from "./ChartTooltip";
import { useChartTheme } from "../config/chartTheme";
import { fmtK } from "../utils/dashboardUtils";
import { comprasVsVendas } from "../data/dashboardData";

export default function ComprasVsVendasChart() {
  const ct = useChartTheme();

  return (
    <ChartCard className="xl:col-span-2" title="Compras vs Vendas">
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={comprasVsVendas}>
          <CartesianGrid strokeDasharray="3 3" stroke={ct.gridColor} vertical={false} />
          <XAxis dataKey="mes" tick={{ fontSize: 11, fill: ct.axisColor }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: ct.axisColor }} axisLine={false} tickLine={false}
            tickFormatter={fmtK} width={48} />
          <Tooltip content={<ChartTooltip />} />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, color: ct.axisColor }} />
          <Line type="monotone" dataKey="compras" name="Compras (R$)" stroke={ct.red}
            strokeWidth={2} dot={{ fill: ct.red, r: 3 }} />
          <Line type="monotone" dataKey="vendas" name="Vendas (R$)" stroke={ct.violet}
            strokeWidth={2} dot={{ fill: ct.violet, r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
