import { Skeleton } from "../../../../shared/components/ui/Skeleton.jsx";

const TONE_CLASSES = {
  accent: {
    icon: "bg-green-50 text-green-600 ring-1 ring-green-100 dark:bg-green-950/40 dark:text-green-400 dark:ring-green-900/50",
    glow: "hover:border-green-200 dark:hover:border-green-900",
    dot: "bg-green-500",
  },
  info: {
    icon: "bg-sky-50 text-sky-600 ring-1 ring-sky-100 dark:bg-sky-950/40 dark:text-sky-400 dark:ring-sky-900/50",
    glow: "hover:border-sky-200 dark:hover:border-sky-900",
    dot: "bg-sky-500",
  },
  warning: {
    icon: "bg-amber-50 text-amber-600 ring-1 ring-amber-100 dark:bg-amber-950/40 dark:text-amber-400 dark:ring-amber-900/50",
    glow: "hover:border-amber-200 dark:hover:border-amber-900",
    dot: "bg-amber-500",
  },
  danger: {
    icon: "bg-rose-50 text-rose-600 ring-1 ring-rose-100 dark:bg-rose-950/40 dark:text-rose-400 dark:ring-rose-900/50",
    glow: "hover:border-rose-200 dark:hover:border-rose-900",
    dot: "bg-rose-500",
  },
  success: {
    icon: "bg-green-50 text-green-600 ring-1 ring-green-100 dark:bg-green-950/40 dark:text-green-400 dark:ring-green-900/50",
    glow: "hover:border-green-200 dark:hover:border-green-900",
    dot: "bg-green-500",
  },
};

export function KPICard({
  icon,
  tone = "accent",
  label,
  value,
  helper,
  trend,
  details = [],
  footer,
  loading = false,
}) {
  const styles = TONE_CLASSES[tone] ?? TONE_CLASSES.accent;

  if (loading) {
    return (
      <div className="flex min-h-[270px] min-w-0 flex-col rounded-2xl border border-cm-border bg-white p-5 shadow-sm dark:bg-cm-surface">
        <div className="flex items-center justify-between gap-3">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-11 w-11 shrink-0 rounded-xl" />
        </div>

        <Skeleton className="mt-6 h-8 w-36 max-w-full" />
        <Skeleton className="mt-3 h-3 w-44 max-w-full" />

        <div className="mt-6 border-t border-cm-border pt-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="mt-4 h-4 w-4/5" />
        </div>

        <Skeleton className="mt-auto h-3 w-40 max-w-full pt-0" />
      </div>
    );
  }

  return (
    <article
      className={`group flex h-full min-h-[270px] min-w-0 flex-col rounded-2xl border border-cm-border bg-white p-5 shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none dark:bg-cm-surface ${styles.glow}`}
    >
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-5 text-cm-text-muted">
            {label}
          </p>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <p
            className="break-words text-2xl font-bold leading-tight tracking-tight text-cm-text sm:text-[28px]"
            title={value}
          >
            {value}
          </p>

          {label === "Ticket médio" && trend && (
            <span
              className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-bold ${
                trend.positive
                  ? "bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400"
                  : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400"
              }`}
            >
              <span aria-hidden="true">
                {trend.positive ? "↗" : "↘"}
              </span>
              {trend.value}
            </span>
          )}
        </div>

        </div>

        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 motion-reduce:transform-none ${styles.icon}`}
        >
          {icon}
        </span>
      </div>

      {helper && (
        <p className="mt-2 text-xs leading-relaxed text-cm-text-muted">
          {helper}
        </p>
      )}

      <div className="mt-5 border-t border-cm-border pt-4">
        <div className="space-y-3">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="flex min-w-0 items-center justify-between gap-3"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span className="shrink-0 text-cm-text-muted">
                  {detail.icon}
                </span>
                <span className="min-w-0 text-xs leading-4 text-cm-text-muted">
                  {detail.label}
                </span>
              </div>

              <span
                className="shrink-0 text-right text-xs font-semibold text-cm-text"
                title={detail.value}
              >
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {footer && (
        <div className="mt-auto flex items-start gap-2 border-t border-cm-border pt-3 mt-4">
          <span
            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${styles.dot}`}
          />
          <p className="text-[11px] leading-relaxed text-cm-text-muted">
            {footer}
          </p>
        </div>
      )}
    </article>
  );
}
