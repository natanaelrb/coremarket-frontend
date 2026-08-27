// Donut chart com o total de compras por fornecedor no período filtrado.
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import Card from "../../../../shared/components/layout/Card";
import { ChartLegendList } from "./ChartLegendList";
import { formatCurrency, formatCurrencyCompact } from "../../utils/formatters";

export function ComprasPorFornecedorChart({ dataset, total }) {
  return (
    <Card className="p-5">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-4">
        Compras por fornecedor
      </h3>
      <div className="flex items-center gap-4">
        <div className="relative w-[130px] h-[130px] shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataset}
                dataKey="value"
                innerRadius={42}
                outerRadius={62}
                paddingAngle={2}
                animationDuration={900}
              >
                {dataset.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => formatCurrency(value)}
                contentStyle={{ borderRadius: 12, fontSize: 12 }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[10px] text-slate-400 dark:text-slate-500">
              Total
            </span>
            <span className="text-sm font-bold text-slate-800 dark:text-white">
              {formatCurrencyCompact(total)}
            </span>
          </div>
        </div>
        <ChartLegendList items={dataset} formatValue={formatCurrency} />
      </div>
    </Card>
  );
}
