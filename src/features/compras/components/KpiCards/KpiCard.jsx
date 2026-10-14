import { TrendingUp, TrendingDown } from "lucide-react";

const COLOR_STYLES = {
  green:
    "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400",
  violet:
    "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400",
  blue:
    "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400",
  amber:
    "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",
  emerald:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",
  slate:
    "bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300",
  red:
    "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400",
};

export function KpiCard({
  icon: Icon,
  label,
  value,
  helper,
  trend,
  color = "green",
  delay = 0,
}) {
  const hasTrend = typeof trend === "number" && Number.isFinite(trend);
  const isPositive = hasTrend && trend >= 0;

  return (
    <article
      className="group min-w-0 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-green-200 hover:shadow-lg hover:shadow-green-900/5 motion-reduce:transform-none motion-reduce:transition-none dark:border-white/10 dark:bg-[#151b28] dark:hover:border-green-500/30"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none ${COLOR_STYLES[color] || COLOR_STYLES.green}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-slate-900 dark:text-slate-900">
            {label}
          </p>

          <p
            className="mt-1 break-words text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white"
            title={String(value)}
          >
            {value}
          </p>

          {(helper || hasTrend) && (
            <div className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1">
              {hasTrend && (
                <span
                  className={`inline-flex items-center gap-1 text-xs font-semibold ${
                    isPositive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {isPositive ? (
                    <TrendingUp className="h-3.5 w-3.5" />
                  ) : (
                    <TrendingDown className="h-3.5 w-3.5" />
                  )}
                  {isPositive ? "+" : ""}
                  {trend.toFixed(1)}%
                </span>
              )}

              {helper && (
                <span
                  className={`text-xs font-medium leading-relaxed ${
                    color === "red"
                      ? "text-red-900 dark:text-red-400"
                      : color === "amber"
                        ? "text-amber-900 dark:text-amber-400"
                        : color === "blue"
                          ? "text-blue-900 dark:text-blue-400"
                          : color === "slate"
                            ? "text-slate-900 dark:text-slate-400"
                            : "text-green-900 dark:text-green-400"
                  }`}
                >
                  {helper}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
