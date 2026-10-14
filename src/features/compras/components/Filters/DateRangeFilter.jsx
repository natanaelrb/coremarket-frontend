import { Calendar, ArrowRight } from "lucide-react";

export function DateRangeFilter({
  dataInicio,
  dataFim,
  onChangeInicio,
  onChangeFim,
}) {
  const inputClassName =
    "h-11 w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50/70 px-3 text-sm font-medium text-slate-700 shadow-sm outline-none transition-all duration-200 hover:border-green-300 hover:bg-white focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 motion-reduce:transition-none dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-green-500/30 dark:hover:bg-white/[0.06] dark:focus:border-green-500 dark:focus:bg-[#151b28] dark:focus:ring-green-500/10";

  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="flex shrink-0 items-center gap-1.5">
        <Calendar
          className="h-4 w-4 text-green-600 dark:text-green-400"
          aria-hidden="true"
        />
        <span className="whitespace-nowrap text-xs font-semibold text-slate-600 dark:text-slate-300">
          Período
        </span>
      </div>

      <div className="flex min-w-0 flex-1 items-center gap-2">
        <input
          type="date"
          aria-label="Data inicial"
          value={dataInicio}
          onChange={(event) => onChangeInicio(event.target.value)}
          className={inputClassName}
        />

        <ArrowRight
          className="h-4 w-4 shrink-0 text-slate-400"
          aria-hidden="true"
        />

        <input
          type="date"
          aria-label="Data final"
          value={dataFim}
          onChange={(event) => onChangeFim(event.target.value)}
          className={inputClassName}
        />
      </div>
    </div>
  );
}