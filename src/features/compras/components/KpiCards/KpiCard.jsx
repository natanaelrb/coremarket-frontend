import { TrendingUp, TrendingDown } from "lucide-react";

const COLOR_STYLES = {
  violet: "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
  blue: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
  amber: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
  emerald: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  slate: "bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-slate-300",
  red: "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400",
};

export function KpiCard({ icon: Icon, label, value, helper, trend, color = "violet", delay = 0 }) {
  const isPositive = trend !== undefined && trend >= 0;

  return (
    <div
      className="bg-white dark:bg-[#131736] border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex items-start gap-3 min-w-[210px] flex-1 animate-fade-in-up hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${COLOR_STYLES[color]}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{label}</p>
        <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight mt-0.5 truncate">{value}</p>
        {(helper || trend !== undefined) && (
          <div className="flex items-center gap-1 mt-1">
            {trend !== undefined && (
              <span className={`inline-flex items-center gap-0.5 text-xs font-medium ${isPositive ? "text-emerald-500" : "text-red-500"}`}>
                {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {isPositive ? "+" : ""}
                {trend.toFixed(1)}%
              </span>
            )}
            {helper && <span className="text-xs text-slate-400 dark:text-slate-500">{helper}</span>}
          </div>
        )}
      </div>
    </div>
  );
}
