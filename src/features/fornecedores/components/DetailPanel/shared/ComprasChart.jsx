import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import {
  formatCompactNumber,
  formatCurrency,
} from "../../../../../shared/utils/formatters.js";

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div
      className="
        rounded-lg
        border border-slate-200
        bg-white
        px-3 py-2
        text-xs
        shadow-lg shadow-slate-900/10
        dark:border-[#252a4a]
        dark:bg-[#1a1e3d]
        dark:shadow-black/20
      "
    >
      <p className="font-medium text-slate-500 dark:text-slate-400">
        {label}
      </p>

      <p className="font-semibold text-slate-800 dark:text-slate-100">
        {formatCurrency(payload[0].value)}
      </p>
    </div>
  );
}

export default function ComprasChart({ data = [] }) {
  return (
    <section
      className="
        min-w-0
        rounded-xl
        border border-slate-200/80
        bg-white
        p-4
        shadow-sm shadow-slate-900/[0.02]
        dark:border-[#252a4a]
        dark:bg-[#141833]
        dark:shadow-black/10
      "
    >
      <h4
        className="
          mb-4
          text-sm
          font-semibold
          text-slate-800
          dark:text-slate-100
        "
      >
        Compras por Fornecedor
      </h4>

      {data.length > 0 ? (
        <ResponsiveContainer width="100%" height={180}>
          <BarChart
            data={data}
            margin={{
              top: 4,
              right: 4,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="currentColor"
              className="text-slate-100 dark:text-[#252a4a]"
            />

            <XAxis
              dataKey="mes"
              tick={{
                fontSize: 11,
                fill: "#94A3B8",
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tickFormatter={formatCompactNumber}
              tick={{
                fontSize: 11,
                fill: "#94A3B8",
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              content={<ChartTooltip />}
              cursor={{
                fill: "rgba(16, 185, 129, 0.08)",
              }}
            />

            <Bar
              dataKey="valor"
              fill="#10B981"
              radius={[4, 4, 0, 0]}
              animationDuration={700}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex h-[180px] items-center justify-center text-sm text-slate-500 dark:text-slate-400">
          Nenhum dado de compras disponível.
        </div>
      )}
    </section>
  );
}