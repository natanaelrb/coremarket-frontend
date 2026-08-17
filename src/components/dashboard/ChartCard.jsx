export default function ChartCard({
  title,
  subtitle,
  children,
  className = "",
  actions = null,
}) {
  return (
    <div
      className={`bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 p-5 transition-all duration-200 ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-800 dark:text-[var(--sidebar-text)]/90">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/40 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
        {actions}
      </div>
      {children}
    </div>
  );
}
