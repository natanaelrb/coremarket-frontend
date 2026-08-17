// Widget: gráfico de rosca (donut) mostrando a composição do valor de estoque em risco.
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { WidgetCard } from './WidgetCard';
import { formatCurrency, formatPercent } from '../../utils/formatters';

export function ValorEmRisco({ data }) {
  return (
    <WidgetCard title="Valor em risco">
      <p className="mb-1 text-2xl font-semibold text-gray-900 dark:text-white">
        {formatCurrency(data.totalRisco)}
      </p>
      <p className="mb-3 text-xs text-gray-400 dark:text-gray-500">Produtos vencidos e próximos do vencimento</p>

      <div className="flex items-center gap-3">
        <div className="h-24 w-24 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.segmentos}
                dataKey="valor"
                nameKey="label"
                innerRadius={30}
                outerRadius={44}
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
                contentStyle={{ borderRadius: 10, border: 'none', fontSize: 12 }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <ul className="flex-1 space-y-1.5">
          {data.segmentos.map((seg) => (
            <li key={seg.key} className="flex items-center justify-between gap-2 text-xs">
              <span className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: seg.color }} />
                {seg.label}
              </span>
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {formatCurrency(seg.valor)} <span className="text-gray-400">({formatPercent(seg.percentual, 1)})</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </WidgetCard>
  );
}
