import { cn } from '../../../../shared/utils/cn.js';
import { formatCurrency } from '../../utils/index.js';

/**
 * Single KPI card: icon chip, value and sublabel. `isLoading` renders a
 * shimmering skeleton in place of the value.
 * @param {{ config: import('./kpiCardsConfig.js').KPI_CARDS_CONFIG[number], kpis: object, isLoading: boolean, delayMs: number }} props
 */
export function KpiCard({ config, kpis, isLoading, delayMs = 0 }) {
  const Icon = config.icon;
  const value = kpis ? config.getValue(kpis) : 0;
  const sublabel = kpis ? config.getSublabel(kpis) : '';
  const tone = kpis && config.sublabelTone ? config.sublabelTone(kpis) : null;

  return (
    <div
      className="card-surface animate-slide-up flex min-w-[190px] flex-1 items-start gap-3 rounded-[var(--radius-card)] p-4"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <span className={cn('flex h-10 w-10 shrink-0 items-center justify-center rounded-xl', config.iconBg)}>
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium text-slate-500 dark:text-slate-400">{config.label}</p>
        {isLoading ? (
          <div className="skeleton mt-1.5 h-6 w-24" />
        ) : (
          <p className="animate-count-up mt-0.5 truncate text-lg font-bold text-slate-900 dark:text-slate-50">
            {formatCurrency(value)}
          </p>
        )}
        <p
          className={cn(
            'mt-0.5 truncate text-xs',
            tone === 'positive' && 'text-green-600 dark:text-green-400',
            tone === 'negative' && 'text-red-600 dark:text-red-400',
            !tone && 'text-slate-400 dark:text-slate-500'
          )}
        >
          {sublabel}
        </p>
      </div>
    </div>
  );
}
