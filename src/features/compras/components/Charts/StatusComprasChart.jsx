// Donut chart com a distribuição de compras por status no período filtrado.
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import Card from "../../../../shared/components/layout/Card";
import { ChartLegendList } from "./ChartLegendList";

function StatusTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const item = payload[0];
  const name = item.payload?.name ?? item.name ?? "Status";
  const value = item.value ?? 0;
  const color = item.payload?.color ?? item.color ?? "#16A34A";

  return (
    <div className="min-w-36 rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 shadow-xl shadow-slate-900/10 dark:border-white/10 dark:bg-[#151b28] dark:shadow-black/25">
      <div className="mb-2 flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
          {name}
        </span>
      </div>

      <p className="text-sm font-bold text-slate-900 dark:text-white">
        {value} {value === 1 ? "compra" : "compras"}
      </p>
    </div>
  );
}

export function StatusComprasChart({ dataset = [], total = 0 }) {
  return (
    <Card className="h-full p-5">
      {/* Cabeçalho */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
          Status das compras
        </h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Distribuição das compras por situação
        </p>
      </div>

      {/* Gráfico e legenda */}
      {dataset.length === 0 ? (
        <div className="flex min-h-[190px] flex-col items-center justify-center gap-2 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
            <span className="text-lg font-semibold">∅</span>
          </div>

          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Nenhuma compra encontrada
          </p>

          <p className="text-xs text-slate-400 dark:text-slate-500">
            Os status aparecerão aqui quando houver dados.
          </p>
        </div>
      ) : (
        <div className="flex min-w-0 flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-4">
          <div className="relative h-[160px] w-[160px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataset}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={49}
                  outerRadius={73}
                  paddingAngle={3}
                  cornerRadius={3}
                  stroke="none"
                  animationDuration={800}
                >
                  {dataset.map((entry, index) => (
                    <Cell
                      key={`${entry.name}-${index}`}
                      fill={entry.color ?? "#16A34A"}
                    />
                  ))}
                </Pie>

                <Tooltip content={<StatusTooltip />} cursor={false} />
              </PieChart>
            </ResponsiveContainer>

            {/* Total central */}
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Total
              </span>

              <span className="mt-0.5 text-lg font-bold tabular-nums text-slate-800 dark:text-slate-100">
                {total}
              </span>

              <span className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">
                {total === 1 ? "compra" : "compras"}
              </span>
            </div>
          </div>

          <div className="min-w-0 w-full flex-1">
            <ChartLegendList
              items={dataset}
              formatValue={(value) => `${value}`}
            />
          </div>
        </div>
      )}
    </Card>
  );
}
