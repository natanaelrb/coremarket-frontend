import { CalendarClock, ChevronRight, Clock3 } from 'lucide-react';

import { ChartCard } from './ChartCard.jsx';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';
import { cn } from '../../../../shared/utils/cn.js';

/**
 * Resumo dos próximos vencimentos.
 *
 * @param {{
 *  itens: object[],
 *  isLoading: boolean,
 *  onVerTodos: () => void
 * }} props
 */
export function ProximosVencimentos({
  itens,
  isLoading,
  onVerTodos,
}) {
  const temItens = Array.isArray(itens) && itens.length > 0;

  return (
    <ChartCard title="Próximos vencimentos">
      <div className="min-w-0">
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Resumo dos compromissos financeiros
          </p>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400">
            <CalendarClock className="h-[18px] w-[18px]" />
          </span>
        </div>

        <div className="space-y-2">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 dark:border-white/[0.06]"
              >
                <div className="skeleton h-10 w-10 shrink-0 rounded-xl" />

                <div className="min-w-0 flex-1 space-y-2">
                  <div className="skeleton h-3 w-24 rounded" />
                  <div className="skeleton h-2.5 w-16 rounded" />
                </div>

                <div className="skeleton h-4 w-24 rounded" />
              </div>
            ))
          ) : temItens ? (
            itens.map((item, index) => {
              const isHoje = index === 0;

              return (
                <div
                  key={item.id}
                  className={cn(
                    'group flex min-w-0 items-center gap-3 rounded-xl border p-3 transition-all duration-200',
                    isHoje
                      ? 'border-amber-200/80 bg-amber-50/70 hover:bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/[0.06] dark:hover:bg-amber-500/10'
                      : 'border-slate-100 bg-white hover:border-green-200 hover:bg-green-50/30 dark:border-white/[0.06] dark:bg-transparent dark:hover:border-green-500/20 dark:hover:bg-green-500/[0.04]',
                  )}
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <span
                    className={cn(
                      'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
                      isHoje
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400'
                        : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400',
                    )}
                  >
                    {isHoje ? (
                      <Clock3 className="h-[18px] w-[18px]" />
                    ) : (
                      <CalendarClock className="h-[18px] w-[18px]" />
                    )}
                  </span>

                  <div className="min-w-0 flex-1">
                    <p
                      className={cn(
                        'truncate text-sm font-semibold',
                        isHoje
                          ? 'text-amber-900 dark:text-amber-300'
                          : 'text-slate-700 dark:text-slate-200',
                      )}
                    >
                      {item.label}
                    </p>

                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                      {item.quantidade}{' '}
                      {item.quantidade === 1 ? 'título' : 'títulos'}
                    </p>
                  </div>

                  <p className="shrink-0 text-right text-sm font-bold tabular-nums text-slate-900 dark:text-white">
                    {formatCurrency(item.valor)}
                  </p>
                </div>
              );
            })
          ) : (
            <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-5 text-center dark:border-slate-700 dark:bg-slate-800/30">
              <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm dark:bg-slate-800">
                <CalendarClock className="h-5 w-5" />
              </span>

              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Nenhum vencimento encontrado
              </p>

              <p className="mt-1 max-w-xs text-xs leading-5 text-slate-500 dark:text-slate-400">
                Os próximos compromissos financeiros aparecerão aqui quando estiverem disponíveis.
              </p>
            </div>
          )}
        </div>

        <Button
          variant="outline"
          size="sm"
          className="mt-4 w-full justify-between rounded-xl"
          onClick={onVerTodos}
        >
          <span>Ver todos os vencimentos</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </ChartCard>
  );
}