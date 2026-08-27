import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartCard } from './ChartCard.jsx';
import { formatCurrency, formatPercent } from '../../utils/formatCurrency.js';

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <p className="font-semibold text-slate-700 dark:text-slate-200">{item.label}</p>
      <p className="text-slate-500 dark:text-slate-400">{formatCurrency(item.valor)}</p>
    </div>
  );
}

/**
 * "Distribuição por forma de pagamento" donut chart with a colored legend.
 * @param {{ data: ReturnType<typeof import('../../utils/groupByFormaPagamento.js').groupByFormaPagamento>, isLoading: boolean }} props
 */
export function DistribuicaoFormaPagamentoChart({ data, isLoading }) {
  return (
    <ChartCard title="Distribuição por forma de pagamento">
      {isLoading ? (
        <div className="skeleton h-64 w-full" />
      ) : (
        <div className="flex items-center gap-4">
          <ResponsiveContainer width="55%" height={220}>
            <PieChart>
              <Pie
                data={data}
                dataKey="valor"
                nameKey="label"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={2}
                animationDuration={800}
              >
                {data.map((entry) => (
                  <Cell key={entry.forma} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <ul className="flex-1 space-y-2">
            {data.map((entry) => (
              <li key={entry.forma} className="flex items-center gap-2 text-xs">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
                <span className="flex-1 truncate text-slate-600 dark:text-slate-300">{entry.label}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{formatPercent(entry.percentual)}</span>
                <span className="w-20 text-right text-slate-400">{formatCurrency(entry.valor)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </ChartCard>
  );
}
