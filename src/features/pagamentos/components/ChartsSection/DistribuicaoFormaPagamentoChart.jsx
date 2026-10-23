import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { ChartCard } from './ChartCard.jsx';
import {
  formatCurrency,
  formatPercent,
} from '../../utils/formatCurrency.js';

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const item = payload[0].payload;

  return (
    <div className="min-w-[160px] rounded-xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/95">
      <div className="mb-2 flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: item.color }}
        />

        <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">
          {item.label}
        </p>
      </div>

      <p className="text-sm font-bold tabular-nums text-slate-900 dark:text-white">
        {formatCurrency(item.valor)}
      </p>

      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
        {formatPercent(item.percentual)} do total
      </p>
    </div>
  );
}

/**
 * Distribuição dos valores por forma de pagamento.
 *
 * @param {{
 *  data: ReturnType<typeof import('../../utils/groupByFormaPagamento.js').groupByFormaPagamento>,
 *  isLoading: boolean
 * }} props
 */
export function DistribuicaoFormaPagamentoChart({ data, isLoading }) {
  const formas = Array.isArray(data) ? data : [];

  const total = formas.reduce(
    (acumulado, item) => acumulado + (Number(item.valor) || 0),
    0,
  );

  return (
    <ChartCard title="Distribuição por forma de pagamento">
      <div className="min-w-0">
        <p className="mb-5 text-sm text-slate-500 dark:text-slate-400">
          Participação de cada método no total movimentado
        </p>

        {isLoading ? (
          <div
            className="space-y-5"
            aria-label="Carregando distribuição por forma de pagamento"
            aria-busy="true"
          >
            <div className="skeleton mx-auto h-44 w-44 rounded-full" />

            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="space-y-2">
                  <div className="skeleton h-3 w-32 rounded" />
                  <div className="skeleton h-2 w-full rounded-full" />
                </div>
              ))}
            </div>
          </div>
        ) : formas.length === 0 || total <= 0 ? (
          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-6 text-center dark:border-slate-700 dark:bg-slate-800/30">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
              <span className="text-xl text-slate-400">◔</span>
            </div>

            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Nenhuma movimentação disponível
            </p>

            <p className="mt-1 max-w-xs text-xs leading-5 text-slate-500 dark:text-slate-400">
              A distribuição aparecerá aqui quando houver valores movimentados por forma de pagamento.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:gap-6">
              <div className="relative mx-auto h-[220px] w-full min-w-0 max-w-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={formas}
                      dataKey="valor"
                      nameKey="label"
                      innerRadius="66%"
                      outerRadius="88%"
                      paddingAngle={2}
                      stroke="none"
                      cornerRadius={4}
                      animationDuration={800}
                    >
                      {formas.map((entry) => (
                        <Cell
                          key={entry.forma}
                          fill={entry.color}
                        />
                      ))}
                    </Pie>

                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Total movimentado
                  </span>

                  <span className="mt-1 max-w-[90%] truncate text-center text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              <div className="min-w-0 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Formas de pagamento
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {formas.length} {formas.length === 1 ? 'categoria' : 'categorias'}
                  </p>
                </div>

                <ul className="space-y-4">
                  {formas.map((entry) => {
                    const percentual = Math.max(
                      0,
                      Math.min(100, Number(entry.percentual) || 0),
                    );

                    return (
                      <li key={entry.forma} className="min-w-0">
                        <div className="mb-1.5 flex min-w-0 items-center justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-2">
                            <span
                              className="h-2.5 w-2.5 shrink-0 rounded-full"
                              style={{ backgroundColor: entry.color }}
                            />

                            <span
                              className="truncate text-sm font-medium text-slate-700 dark:text-slate-200"
                              title={entry.label}
                            >
                              {entry.label}
                            </span>
                          </div>

                          <span className="shrink-0 text-sm font-semibold tabular-nums text-slate-900 dark:text-white">
                            {formatPercent(entry.percentual)}
                          </span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${percentual}%`,
                              backgroundColor: entry.color,
                            }}
                          />
                        </div>

                        <p className="mt-1.5 text-xs tabular-nums text-slate-500 dark:text-slate-400">
                          {formatCurrency(entry.valor)}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </ChartCard>
  );
}