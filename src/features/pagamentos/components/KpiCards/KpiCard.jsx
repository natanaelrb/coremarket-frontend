
import { cn } from '../../../../shared/utils/cn.js';
import { formatCurrency } from '../../utils/index.js';

export function KpiCard({
  config,
  kpis,
  isLoading,
  delayMs = 0,
}) {
  const Icon = config.icon;
  const value = kpis ? config.getValue(kpis) : 0;
  const sublabel = kpis ? config.getSublabel(kpis) : '';
  const tone =
    kpis && config.sublabelTone
      ? config.sublabelTone(kpis)
      : null;

  const sublabelClass = cn(
    tone === 'positive' &&
      'text-emerald-600 dark:text-emerald-400',
    tone === 'negative' &&
      'text-rose-600 dark:text-rose-400',
    !tone &&
      (config.sublabelColor ||
        'text-slate-500 dark:text-slate-400')
  );

  const dotClass = cn(
    tone === 'positive' && 'bg-emerald-500',
    tone === 'negative' && 'bg-rose-500',
    !tone && (config.sublabelColor || 'text-slate-400'),
    !tone && 'bg-current'
  );

  return (
    <article
      className={cn(
        'group relative isolate flex min-h-[150px] min-w-0 flex-col',
        'overflow-hidden rounded-2xl border border-slate-200/80',
        'bg-white p-3 sm:p-3.5 shadow-sm',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg',
        'motion-reduce:transform-none motion-reduce:transition-none',
        'dark:border-slate-800 dark:bg-slate-900',
        'dark:hover:border-slate-700'
      )}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-emerald-500 transition-transform duration-300 group-hover:scale-x-100"
      />

      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p
            className="text-[11px] font-semibold uppercase leading-5 tracking-[0.08em] text-slate-500 dark:text-slate-400"
            title={config.label}
          >
            {config.label}
          </p>

          {isLoading ? (
            <div className="skeleton mt-3 h-7 w-28 max-w-full rounded-md" />
          ) : (
            <p
              className="animate-count-up mt-3 break-words text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-50 sm:text-2xl"
              title={String(formatCurrency(value))}
            >
              {formatCurrency(value)}
            </p>
          )}
        </div>

        <span
          className={cn(
            'flex h-11 w-11 shrink-0 items-center justify-center',
            'rounded-xl ring-1 ring-inset ring-black/[0.03]',
            'transition-transform duration-300 group-hover:scale-105',
            'motion-reduce:transform-none dark:ring-white/[0.05]',
            config.iconBg
          )}
        >
          <Icon
            className="h-[21px] w-[21px]"
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </span>
      </div>

      <div className="mt-auto flex min-w-0 items-start gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
        {!isLoading && (
          <span
            aria-hidden="true"
            className={cn(
              'mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full',
              dotClass
            )}
          />
        )}

        {isLoading ? (
          <div className="skeleton mt-1 h-3 w-32 max-w-full rounded" />
        ) : (
          <p
            className={cn(
              'min-w-0 break-words text-xs leading-relaxed',
              sublabelClass,
              (tone === 'positive' || tone === 'negative') &&
                'font-medium'
            )}
          >
            {sublabel || '—'}
          </p>
        )}
      </div>
    </article>
  );
}
