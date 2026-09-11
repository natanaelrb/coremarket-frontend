import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ChartCard } from './ChartCard.jsx';
import { formatShortDate } from '../../utils/formatDate.js';
import { formatCurrency } from '../../utils/formatCurrency.js';

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs shadow-lg dark:border-slate-700 dark:bg-slate-800">
      <p className="mb-1 font-semibold text-slate-600 dark:text-slate-300">{formatShortDate(label)}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} style={{ color: entry.color }} className="font-medium">
          {entry.name}: {formatCurrency(entry.value)}
        </p>
      ))}
    </div>
  );
}

/**
 * "Recebimentos x Pagamentos" line chart with a saldo trend line.
 * @param {{ data: { data: string, recebimentos: number, pagamentos: number, saldo: number }[], isLoading: boolean }} props
 */
export function RecebimentosPagamentosChart({ data, isLoading }) {
  return (
    <ChartCard title="Recebimentos x Pagamentos">
      {isLoading ? (
        <div className="skeleton h-64 w-full" />
      ) : (
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data} margin={{ top: 4, right: 8, left: -12, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="text-slate-100 dark:text-slate-800" />
            <XAxis
              dataKey="data"
              tickFormatter={formatShortDate}
              tick={{ fontSize: 11, fill: '#94a3b8' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} width={64} tickFormatter={(v) => `R$ ${v / 1000}k`} />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              formatter={(value) => <span className="text-xs text-slate-500 dark:text-slate-400">{value}</span>}
              iconType="circle"
              iconSize={8}
            />
            <Line type="monotone" dataKey="recebimentos" name="Recebimentos" stroke="#16A34A" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} animationDuration={900} />
            <Line type="monotone" dataKey="pagamentos" name="Pagamentos" stroke="#DC2626" strokeWidth={2.5} dot={{ r: 3 }} activeDot={{ r: 5 }} animationDuration={900} animationBegin={150} />
            <Line type="monotone" dataKey="saldo" name="Saldo" stroke="#2563EB" strokeWidth={2} strokeDasharray="4 3" dot={{ r: 2.5 }} animationDuration={900} animationBegin={300} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </ChartCard>
  );
}
