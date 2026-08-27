import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import ChartCard from "../cards/ChartCard";
import ChartTooltip from "./ChartTooltip";
import { useChartTheme } from "../config/chartTheme";
import { fmtK } from "../utils/dashboardUtils";
import { faturamentoMensal } from "../data/dashboardData";

export default function FaturamentoMensalChart() {
  const ct = useChartTheme();

  return (
    <ChartCard className="xl:col-span-2" title="Faturamento mensal">
      <ResponsiveContainer width="100%" height={260}>
        <ComposedChart data={faturamentoMensal} barSize={14} barGap={3}>
          <CartesianGrid strokeDasharray="3 3" stroke={ct.gridColor} vertical={false} />
          <XAxis dataKey="mes" tick={{ fontSize: 11, fill: ct.axisColor }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: ct.axisColor }} axisLine={false} tickLine={false}
            tickFormatter={fmtK} width={48} />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: ct.cursorFill }} />
          <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11, color: ct.axisColor }} />
          <Bar dataKey="vendas"  name="Vendas (R$)"  fill={ct.violet} radius={[3, 3, 0, 0]} />
          <Bar dataKey="compras" name="Compras (R$)" fill={ct.red}    radius={[3, 3, 0, 0]} />
          <Line type="monotone" dataKey="lucro" name="Lucro (R$)" stroke={ct.green}
            strokeWidth={2} dot={{ fill: ct.green, r: 3 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
