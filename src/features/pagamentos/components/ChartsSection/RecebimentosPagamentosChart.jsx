import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

import { ChartCard } from './ChartCard.jsx';
import { formatShortDate } from '../../utils/formatDate.js';
import { formatCurrency } from '../../utils/formatCurrency.js';

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  const series = [
    { recebimentos: 'Recebimentos', pagamentos: 'Pagamentos', saldo: 'Saldo' },
  ];

  return (
    <div className="min-w-[180px] rounded-xl border border-slate-200/80 bg-white/95 p-3 shadow-xl backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95">
      <p className="mb-3 border-b border-slate-100 pb-2 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:text-slate-400">
        {formatShortDate(label)}
      </p>

      <div className="space-y-2">
        {payload.map((entry) => (
          <div
            key={entry.dataKey}
            className="flex items-center justify-between gap-4"
          >
            <span className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              {series[0][entry.dataKey] ?? entry.name}
            </span>

            <span className="text-xs font-semibold tabular-nums text-slate-900 dark:text-white">
              {formatCurrency(entry.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CustomLegend({ payload }) {
  if (!payload?.length) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-4">
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />

          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * Gráfico de evolução dos recebimentos, pagamentos e saldo.
 *
 * @param {{
 *  data: { data: string, recebimentos: number, pagamentos: number, saldo: number }[],
 *  isLoading: boolean
 * }} props
 */
export function RecebimentosPagamentosChart({ data, isLoading }) {
  const hasData = Array.isArray(data) && data.length > 0;

  return (
    <ChartCard title="Recebimentos x Pagamentos">
      <div className="min-w-0">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Evolução financeira do período
            </p>
          </div>

          {hasData && !isLoading && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 dark:border-green-900/50 dark:bg-green-950/40 dark:text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Dados financeiros
            </span>
          )}
        </div>

        {isLoading ? (
          <div
            className="space-y-4"
            aria-label="Carregando gráfico financeiro"
            aria-busy="true"
          >
            <div className="skeleton h-64 w-full rounded-xl" />

            <div className="flex justify-center gap-5">
              <div className="skeleton h-3 w-24 rounded" />
              <div className="skeleton h-3 w-20 rounded" />
              <div className="skeleton h-3 w-14 rounded" />
            </div>
          </div>
        ) : !hasData ? (
          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-6 text-center dark:border-slate-700 dark:bg-slate-800/30">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
              <span className="text-xl text-slate-400">↗</span>
            </div>

            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Nenhum dado financeiro disponível
            </p>

            <p className="mt-1 max-w-xs text-xs leading-5 text-slate-500 dark:text-slate-400">
              Quando houver movimentações no período, a evolução dos recebimentos e pagamentos aparecerá aqui.
            </p>
          </div>
        ) : (
          <div className="min-w-0">
            <ResponsiveContainer width="100%" height={530}>
              <LineChart
                data={data}
                margin={{ top: 8, right: 12, left: 4, bottom: 4 }}
              >
                <CartesianGrid
                  strokeDasharray="3 5"
                  vertical={false}
                  stroke="#94a3b8"
                  strokeOpacity={0.2}
                />

                <XAxis
                  dataKey="data"
                  tickFormatter={formatShortDate}
                  tick={{ fontSize: 11, fill: '#94a3b8' }}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={12}
                  minTickGap={18}
                />

                <YAxis
                  tick={{ fontSize: 11, fill: '#94a3b8' }}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={8}
                  width={66}
                  tickFormatter={(value) =>
                    `R$ ${new Intl.NumberFormat('pt-BR', {
                      notation: 'compact',
                      maximumFractionDigits: 1,
                    }).format(value)}`
                  }
                />

                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{
                    stroke: '#94a3b8',
                    strokeOpacity: 0.3,
                    strokeDasharray: '4 4',
                  }}
                />

                <Legend content={<CustomLegend />} />

                <Line
                  type="monotone"
                  dataKey="recebimentos"
                  name="Recebimentos"
                  stroke="#16A34A"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{
                    r: 5,
                    stroke: '#ffffff',
                    strokeWidth: 2,
                  }}
                  animationDuration={800}
                  connectNulls={false}
                />

                <Line
                  type="monotone"
                  dataKey="pagamentos"
                  name="Pagamentos"
                  stroke="#DC2626"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{
                    r: 5,
                    stroke: '#ffffff',
                    strokeWidth: 2,
                  }}
                  animationDuration={800}
                  animationBegin={100}
                  connectNulls={false}
                />

                <Line
                  type="monotone"
                  dataKey="saldo"
                  name="Saldo"
                  stroke="#2563EB"
                  strokeWidth={2.5}
                  strokeDasharray="6 4"
                  dot={false}
                  activeDot={{
                    r: 4,
                    stroke: '#ffffff',
                    strokeWidth: 2,
                  }}
                  animationDuration={800}
                  animationBegin={200}
                  connectNulls={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </ChartCard>
  );
}