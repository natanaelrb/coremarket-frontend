// Card individual de KPI. Puramente apresentacional — recebe todos os dados via props.
export function KpiCard({ icon: Icon, iconBgClass, iconColorClass, label, value, helperText }) {
  return (
    <div className="group flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-gray-200/60 dark:border-gray-800 dark:bg-[#151936] dark:hover:shadow-black/30">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${iconBgClass}`}
      >
        <Icon size={18} className={iconColorClass} />
      </div>
      <div className="min-w-0">
        <p className="truncate text-xs text-gray-500 dark:text-gray-400">{label}</p>
        <p className="mt-0.5 text-xl font-semibold text-gray-900 dark:text-white">{value}</p>
        {helperText && <p className="mt-0.5 truncate text-[11px] text-gray-400 dark:text-gray-500">{helperText}</p>}
      </div>
    </div>
  );
}
