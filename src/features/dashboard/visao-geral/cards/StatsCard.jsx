import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const colorMap = {
  violet:
    "bg-violet-50 dark:bg-violet-500/15 text-violet-600 dark:text-violet-400",
  green:
    "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  amber: "bg-amber-50 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400",
  red: "bg-red-50 dark:bg-red-500/15 text-red-600 dark:text-red-400",
  blue: "bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400",
};

export default function StatsCard({
  title,
  value,
  change,
  trend = "neutral",
  icon,
  color = "violet",
}) {
  const iconBg = colorMap[color] || colorMap.violet;

  const trendConfig = {
    up: {
      icon: TrendingUp,
      className: "text-emerald-600 dark:text-emerald-400",
    },
    down: { icon: TrendingDown, className: "text-red-500 dark:text-red-400" },
    neutral: {
      icon: Minus,
      className: "text-slate-400 dark:text-[var(--sidebar-text)]/30",
    },
  };

  const Trend = trendConfig[trend];

  return (
    <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 p-4 hover:border-slate-200 dark:hover:border-white/15 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs font-medium text-slate-500 dark:text-[var(--sidebar-text)]/45 uppercase tracking-wide">
          {title}
        </p>
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg}`}
        >
          {icon}
        </div>
      </div>
      <p className="text-2xl font-semibold text-slate-800 dark:text-[var(--sidebar-text)] mb-1">
        {value}
      </p>
      {change && (
        <div className={`flex items-center gap-1 text-xs ${Trend.className}`}>
          <Trend.icon size={12} />
          <span>{change}</span>
        </div>
      )}
    </div>
  );
}
