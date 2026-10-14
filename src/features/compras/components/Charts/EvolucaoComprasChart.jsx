// Gráfico de linha mostrando a evolução do valor total de compras por dia.
import {
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ComposedChart,
} from "recharts";
import Card from "../../../../shared/components/layout/Card";
import {
  formatCurrencyCompact,
  formatCurrency,
} from "../../utils/formatters";

const GREEN = "#16A34A";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  const value = payload.find((item) => item.dataKey === "total")?.value;

  return (
    <div className="min-w-36 rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 shadow-xl shadow-slate-900/10 dark:border-white/10 dark:bg-[#151b28] dark:shadow-black/20">
      <p className="mb-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p className="text-sm font-bold text-slate-800 dark:text-slate-100">
        {formatCurrency(value ?? 0)}
      </p>

      <div className="mt-2 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
        <span className="text-[10px] text-slate-500 dark:text-slate-400">
          Total de compras
        </span>
      </div>
    </div>
  );
}

export function EvolucaoComprasChart({ data }) {
  return (
    <Card className="p-5">
      {/* Cabeçalho */}
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            Evolução das compras
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Acompanhe os valores ao longo do período
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-green-100 bg-green-50/80 px-2.5 py-1.5 dark:border-green-500/20 dark:bg-green-500/[0.08]">
          <span className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-400" />
          <span className="text-[11px] font-medium text-green-800 dark:text-green-300">
            Valor das compras
          </span>
        </div>
      </div>

      {/* Gráfico */}
      <ResponsiveContainer width="100%" height={230}>
        <ComposedChart
          data={data}
          margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="comprasGreenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={GREEN} stopOpacity={0.2} />
              <stop offset="95%" stopColor={GREEN} stopOpacity={0.01} />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#94A3B8"
            strokeOpacity={0.15}
            strokeDasharray="4 5"
            vertical={false}
          />

          <XAxis
            dataKey="dia"
            tick={{ fontSize: 11, fill: "#94A3B8" }}
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            minTickGap={12}
          />

          <YAxis
            tickFormatter={formatCurrencyCompact}
            tick={{ fontSize: 10, fill: "#94A3B8" }}
            axisLine={false}
            tickLine={false}
            tickMargin={8}
            width={54}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: GREEN,
              strokeOpacity: 0.2,
              strokeDasharray: "4 4",
            }}
          />

          <Area
            type="monotone"
            dataKey="total"
            stroke="none"
            fill="url(#comprasGreenGradient)"
            connectNulls
            isAnimationActive={false}
          />

          <Line
            type="monotone"
            dataKey="total"
            name="Total"
            stroke={GREEN}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            dot={{
              r: 3,
              fill: GREEN,
              stroke: "#FFFFFF",
              strokeWidth: 1.5,
            }}
            activeDot={{
              r: 5,
              fill: GREEN,
              stroke: "#FFFFFF",
              strokeWidth: 2,
            }}
            connectNulls
            animationDuration={800}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
}
