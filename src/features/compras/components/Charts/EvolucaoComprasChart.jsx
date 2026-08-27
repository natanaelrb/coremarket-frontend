// Gráfico de linha mostrando a evolução do valor total de compras por dia.
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Card from "../../../../shared/components/layout/Card";
import { formatCurrencyCompact, formatCurrency } from "../../utils/formatters";

export function EvolucaoComprasChart({ data }) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Evolução das compras
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-violet-500" />
          Valor das compras (R$)
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 8, left: -12, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            className="stroke-slate-100 dark:stroke-white/5"
            vertical={false}
          />
          <XAxis
            dataKey="dia"
            tick={{ fontSize: 11, fill: "currentColor" }}
            className="text-slate-400"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatCurrencyCompact}
            tick={{ fontSize: 11, fill: "currentColor" }}
            className="text-slate-400"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => [formatCurrency(value), "Total"]}
            contentStyle={{
              borderRadius: 12,
              border: "1px solid rgba(148,163,184,0.2)",
              fontSize: 12,
              background: "var(--tooltip-bg, #fff)",
            }}
          />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#7C3AED"
            strokeWidth={2.5}
            dot={{ r: 3, fill: "#7C3AED" }}
            activeDot={{ r: 5 }}
            animationDuration={900}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
