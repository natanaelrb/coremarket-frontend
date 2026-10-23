import {
  ArrowDownCircle,
  ArrowUpCircle,
  Wallet,
  TrendingUp,
  TrendingDown,
  ChevronRight,
  CalendarRange,
} from 'lucide-react';

import { ChartCard } from './ChartCard.jsx';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';
import { cn } from '../../../../shared/utils/cn.js';

/**
 * Previsão financeira para os próximos dias.
 *
 * @param {{
 *  previsao: {
 *    aReceber: number,
 *    aPagar: number,
 *    saldoProjetado: number,
 *    horizonteDias: number
 *  } | null,
 *  isLoading: boolean,
 *  onVerFluxo: () => void
 * }} props
 */
export function PrevisaoFinanceira({
  previsao,
  isLoading,
  onVerFluxo,
}) {
  const temPrevisao = previsao != null;

  const saldoProjetado = Number(previsao?.saldoProjetado) || 0;
  const saldoPositivo = saldoProjetado >= 0;

  return (
    <ChartCard
      title="Previsão financeira"
      subtitle={`Próximos ${previsao?.horizonteDias ?? 30} dias`}
    >
      <div className="min-w-0">
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Projeção de entradas e saídas
          </p>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400">
            <CalendarRange className="h-[18px] w-[18px]" />
          </span>
        </div>

        {isLoading ? (
          <div
            className="space-y-3"
            aria-label="Carregando previsão financeira"
            aria-busy="true"
          >
            <div className="skeleton h-[76px] w-full rounded-xl" />

            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 dark:border-white/[0.06]"
              >
                <div className="skeleton h-10 w-10 shrink-0 rounded-xl" />

                <div className="min-w-0 flex-1 space-y-2">
                  <div className="skeleton h-3 w-20 rounded" />
                  <div className="skeleton h-4 w-28 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : temPrevisao ? (
          <div className="space-y-3">
            <div
              className={cn(
                'rounded-2xl border p-4 transition-colors',
                saldoPositivo
                  ? 'border-green-200/80 bg-gradient-to-br from-green-50 to-emerald-50/40 dark:border-green-500/20 dark:from-green-500/[0.09] dark:to-emerald-500/[0.03]'
                  : 'border-red-200/80 bg-gradient-to-br from-red-50 to-rose-50/40 dark:border-red-500/20 dark:from-red-500/[0.09] dark:to-rose-500/[0.03]',
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Saldo projetado
                  </p>

                  <p
                    className={cn(
                      'mt-2 break-words text-2xl font-bold tracking-tight tabular-nums sm:text-3xl',
                      saldoPositivo
                        ? 'text-green-700 dark:text-green-400'
                        : 'text-red-700 dark:text-red-400',
                    )}
                  >
                    {formatCurrency(saldoProjetado)}
                  </p>

                  <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    {saldoPositivo ? (
                      <TrendingUp className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                    ) : (
                      <TrendingDown className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
                    )}

                    {saldoPositivo
                      ? 'Projeção de saldo positivo'
                      : 'Projeção de saldo negativo'}
                  </p>
                </div>

                <span
                  className={cn(
                    'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
                    saldoPositivo
                      ? 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400'
                      : 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
                  )}
                >
                  <Wallet className="h-5 w-5" />
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <ForecastMetric
                icon={ArrowDownCircle}
                label="A receber"
                value={previsao.aReceber}
                tone="green"
              />

              <ForecastMetric
                icon={ArrowUpCircle}
                label="A pagar"
                value={previsao.aPagar}
                tone="red"
              />
            </div>
          </div>
        ) : (
          <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/70 px-5 text-center dark:border-slate-700 dark:bg-slate-800/30">
            <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm dark:bg-slate-800">
              <Wallet className="h-5 w-5" />
            </span>

            <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Previsão indisponível
            </p>

            <p className="mt-1 max-w-xs text-xs leading-5 text-slate-500 dark:text-slate-400">
              Quando houver dados financeiros para o período, a previsão será exibida aqui.
            </p>
          </div>
        )}

        <Button
          variant="outline"
          size="sm"
          className="mt-4 w-full justify-between rounded-xl"
          onClick={onVerFluxo}
        >
          <span>Ver fluxo de caixa completo</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </ChartCard>
  );
}

function ForecastMetric({ icon: Icon, label, value, tone }) {
  const isGreen = tone === 'green';

  return (
    <div
      className={cn(
        'flex min-w-0 items-center gap-3 rounded-xl border p-3 transition-colors',
        isGreen
          ? 'border-green-100 bg-white hover:border-green-200 dark:border-green-500/10 dark:bg-slate-900/40 dark:hover:border-green-500/20'
          : 'border-red-100 bg-white hover:border-red-200 dark:border-red-500/10 dark:bg-slate-900/40 dark:hover:border-red-500/20',
      )}
    >
      <span
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
          isGreen
            ? 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400'
            : 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-400',
        )}
      >
        <Icon className="h-[18px] w-[18px]" />
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {label}
        </p>

        <p
          className={cn(
            'mt-1 break-words text-base font-bold tabular-nums sm:text-lg',
            isGreen
              ? 'text-green-700 dark:text-green-400'
              : 'text-red-700 dark:text-red-400',
          )}
        >
          {formatCurrency(value)}
        </p>
      </div>
    </div>
  );
}