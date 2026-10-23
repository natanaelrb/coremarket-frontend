import { AlertTriangle, Clock, CalendarClock, ArrowRight } from 'lucide-react';

import { Button } from '../../../../shared/components/ui/Button.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';
import { cn } from '../../../../shared/utils/cn.js';

const TONE_STYLES = {
  danger: {
    icon: AlertTriangle,
    bg: 'border-red-200/80 bg-gradient-to-br from-red-50 to-white dark:border-red-900/40 dark:from-red-950/30 dark:to-slate-900',
    iconBg: 'bg-red-100 text-red-600 ring-1 ring-red-200/70 dark:bg-red-500/15 dark:text-red-400 dark:ring-red-900/50',
    titleColor: 'text-red-700 dark:text-red-400',
    accent: 'bg-red-500',
    label: 'Atenção imediata',
  },
  warning: {
    icon: Clock,
    bg: 'border-amber-200/80 bg-gradient-to-br from-amber-50 to-white dark:border-amber-900/40 dark:from-amber-950/25 dark:to-slate-900',
    iconBg: 'bg-amber-100 text-amber-600 ring-1 ring-amber-200/70 dark:bg-amber-500/15 dark:text-amber-400 dark:ring-amber-900/50',
    titleColor: 'text-amber-700 dark:text-amber-400',
    accent: 'bg-amber-500',
    label: 'Requer atenção',
  },
  info: {
    icon: CalendarClock,
    bg: 'border-blue-200/80 bg-gradient-to-br from-blue-50 to-white dark:border-blue-900/40 dark:from-blue-950/25 dark:to-slate-900',
    iconBg: 'bg-blue-100 text-blue-600 ring-1 ring-blue-200/70 dark:bg-blue-500/15 dark:text-blue-400 dark:ring-blue-900/50',
    titleColor: 'text-blue-700 dark:text-blue-400',
    accent: 'bg-blue-500',
    label: 'Informativo',
  },
};

/**
 * Card de alerta financeiro com ação para a aba correspondente.
 *
 * @param {{
 *  alerta: object,
 *  onAction: (tabKey: string) => void,
 *  delayMs?: number
 * }} props
 */
export function AlertCard({ alerta, onAction, delayMs = 0 }) {
  const style = TONE_STYLES[alerta.tone] ?? TONE_STYLES.info;
  const Icon = style.icon;

  return (
    <article
      className={cn(
        'group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[var(--radius-card)] border p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md',
        style.bg,
      )}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <span
        aria-hidden="true"
        className={cn('absolute inset-x-0 top-0 h-1', style.accent)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start gap-3">
          <span
            className={cn(
              'flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl',
              style.iconBg,
            )}
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
          </span>

          <div className="min-w-0 flex-1 pt-0.5">
            <span
              className={cn(
                'mb-1 inline-block text-[10px] font-bold uppercase tracking-[0.09em]',
                style.titleColor,
              )}
            >
              {style.label}
            </span>

            <h3 className="break-words text-sm font-semibold leading-5 text-slate-800 dark:text-slate-100">
              {alerta.titulo}
            </h3>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-white/80 bg-white/70 p-3 dark:border-slate-700/70 dark:bg-slate-950/25">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Valor total
          </p>

          <p className="mt-1 break-words text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {formatCurrency(alerta.valorTotal)}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onAction(alerta.filterTabKey)}
          className="w-full justify-between gap-2"
        >
          <span>{alerta.actionLabel}</span>
          <ArrowRight
            className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Button>
      </div>
    </article>
  );
}