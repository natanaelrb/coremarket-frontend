/** Shared card shell used by every widget in the charts/summary row. */
export function ChartCard({ title, subtitle, action, children }) {
  return (
    <div className="card-surface animate-slide-up flex flex-col rounded-[var(--radius-card)] p-4">
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
          {subtitle ? <p className="text-xs text-slate-400">{subtitle}</p> : null}
        </div>
        {action}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
