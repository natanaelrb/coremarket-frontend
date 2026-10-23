/**
 * Card compartilhado pelos gráficos e resumos financeiros.
 *
 * @param {{
 *  title: string,
 *  subtitle?: string,
 *  action?: import('react').ReactNode,
 *  children: import('react').ReactNode
 * }} props
 */
export function ChartCard({ title, subtitle, action, children }) {
  return (
    <section
      className="
        card-surface animate-slide-up
        flex h-full min-w-0 flex-col
        overflow-hidden rounded-[var(--radius-card)]
        p-4 transition-colors duration-200
        sm:p-5
      "
    >
      <header className="mb-5 flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold leading-5 text-slate-800 dark:text-slate-100 sm:text-base">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        {action && (
          <div className="flex shrink-0 items-center gap-2">
            {action}
          </div>
        )}
      </header>

      <div className="min-w-0 flex-1">
        {children}
      </div>
    </section>
  );
}