// Widget: gráfico de rosca (donut) mostrando a composição do valor de estoque em risco.
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { WidgetCard } from './WidgetCard';
import { formatCurrency, formatPercent } from '../../utils/formatters';

export function ValorEmRisco({ data }) {
  return (
    <WidgetCard title="Valor em risco">
      <div className="mb-4">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
          {formatCurrency(data.totalRisco)}
        </p>

        <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">
          Produtos vencidos e próximos do vencimento
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative h-28 w-28 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.segmentos}
                dataKey="valor"
                nameKey="label"
                innerRadius={36}
                outerRadius={52}
                paddingAngle={2}
                stroke="none"
                animationDuration={700}
              >
                {data.segmentos.map((seg) => (
                  <Cell key={seg.key} fill={seg.color} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => formatCurrency(value)}
                contentStyle={{
                  borderRadius: 10,
                  border: 'none',
                  fontSize: 12,
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
              Risco
            </span>
          </div>
        </div>

        <ul className="min-w-0 flex-1 space-y-2">
          {data.segmentos.map((seg) => (
            <li
              key={seg.key}
              className="flex items-center justify-between gap-3"
            >
              <span className="flex min-w-0 items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: seg.color }}
                />

                <span className="truncate">
                  {seg.label}
                </span>
              </span>

              <span className="shrink-0 text-right text-xs font-semibold text-gray-700 dark:text-gray-200">
                {formatCurrency(seg.valor)}

                <span className="ml-1 font-normal text-gray-400 dark:text-gray-500">
                  ({formatPercent(seg.percentual, 1)})
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </WidgetCard>
  );
}