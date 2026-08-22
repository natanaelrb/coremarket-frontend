import { Calendar } from "lucide-react";

export function DateRangeFilter({ dataInicio, dataFim, onChangeInicio, onChangeFim }) {
  return (
    <div>
      <label className="block text-xs text-slate-500 dark:text-slate-400 mb-1.5">Período</label>
      <div className="flex items-center gap-2">
        <div className="relative">
          <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="date"
            value={dataInicio}
            onChange={(e) => onChangeInicio(e.target.value)}
            className="pl-7 pr-2 py-2 text-sm rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-shadow"
          />
        </div>
        <span className="text-slate-400 text-sm">-</span>
        <div className="relative">
          <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="date"
            value={dataFim}
            onChange={(e) => onChangeFim(e.target.value)}
            className="pl-7 pr-2 py-2 text-sm rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-shadow"
          />
        </div>
      </div>
    </div>
  );
}
