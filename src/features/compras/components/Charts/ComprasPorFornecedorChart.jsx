// Donut chart com o total de compras por fornecedor no período filtrado.
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import Card from "../../../../shared/components/layout/Card";
import { ChartLegendList } from "./ChartLegendList";
import {
  formatCurrency,
  formatCurrencyCompact,
} from "../../utils/formatters";

const SUPPLIER_COLORS = [
  "#16A34A", // Verde CoreMarket
  "#0D9488", // Teal
  "#3B82F6", // Azul
  "#F59E0B", // Âmbar
  "#64748B", // Cinza
  "#22C55E", // Verde claro
  "#0891B2", // Ciano
  "#84CC16", // Lima
];

function SupplierTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const item = payload[0];
  const name = item.payload?.name ?? "Fornecedor";
  const value = item.value ?? 0;
  const color = item.payload?.color ?? item.color ?? SUPPLIER_COLORS[0];

  return (
    <div className="max-w-64 rounded-xl border border-slate-200/80 bg-white px-3.5 py-3 shadow-xl shadow-slate-900/10 dark:border-white/10 dark:bg-[#151b28] dark:shadow-black/25">
      <div className="mb-2 flex items-start gap-2">
        <span
          className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: color }}
        />
        <p className="break-words text-xs font-semibold text-slate-700 dark:text-slate-200">
          {name}
        </p>
      </div>

      <p className="text-sm font-bold text-slate-900 dark:text-white">
        {formatCurrency(value)}
      </p>

      {item.payload?.percentage != null && (
        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
          {item.payload.percentage}% do total
        </p>
      )}
    </div>
  );
}

export function ComprasPorFornecedorChart({ dataset = [], total = 0 }) {
  const chartData = dataset.map((entry, index) => ({
    ...entry,
    color: SUPPLIER_COLORS[index % SUPPLIER_COLORS.length],
  }));

  return (
    <Card className="h-full p-5">
      {/* Cabeçalho */}
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
          Compras por fornecedor
        </h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Distribuição dos valores por fornecedor
        </p>
      </div>

      {/* Gráfico e legenda */}
      {chartData.length === 0 ? (
        <div className="flex min-h-[190px] flex-col items-center justify-center gap-2 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
            <span className="text-lg font-semibold">∅</span>
          </div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Nenhuma compra encontrada
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Os fornecedores aparecerão aqui quando houver dados.
          </p>
        </div>
      ) : (
        <div className="flex min-w-0 flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-4">
          <div className="relative h-[160px] w-[160px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={49}
                  outerRadius={73}
                  paddingAngle={3}
                  cornerRadius={3}
                  stroke="none"
                  animationDuration={800}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`${entry.name}-${index}`}
                      fill={entry.color}
                    />
                  ))}
                </Pie>

                <Tooltip
                  content={<SupplierTooltip />}
                  cursor={false}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Total
              </span>
              <span className="mt-0.5 max-w-[100px] truncate text-sm font-bold text-slate-800 dark:text-slate-100">
                {formatCurrencyCompact(total)}
              </span>
              <span className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">
                no período
              </span>
            </div>
          </div>

          <div className="min-w-0 w-full flex-1">
            <ChartLegendList
              items={chartData}
              formatValue={formatCurrency}
            />
          </div>
        </div>
      )}
    </Card>
  );
}
