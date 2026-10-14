// Legenda compartilhada pelos gráficos de donut (fornecedor / status).
export function ChartLegendList({ items = [], formatValue }) {
  return (
    <div className="min-w-0 flex-1 space-y-4.5">
      {items.map((item, index) => (
        <div
          key={item.id ?? item.name ?? index}
          className="
            flex min-w-0 items-start justify-between gap-3
            rounded-lg px-4.5 py-1
            transition-colors duration-150
            hover:bg-slate-50/80
            dark:hover:bg-white/[0.03]
          "
        >
          {/* Nome e indicador de cor */}
          <div className="flex min-w-0 flex-1 items-start gap-2">
            <span
              className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full ring-2 ring-white dark:ring-[#151b28]"
              style={{ backgroundColor: item.color ?? "#16A34A" }}
              aria-hidden="true"
            />

            <span
              className="
                min-w-0 break-words text-xs leading-relaxed
                text-slate-600 dark:text-slate-300
              "
              title={item.name}
            >
              {item.name}
            </span>
          </div>

          {/* Valor e percentual */}
          <div className="flex shrink-0 flex-col items-end gap-0.5 text-right">
            <span className="whitespace-nowrap text-xs font-semibold tabular-nums text-slate-700 dark:text-slate-200">
              {formatValue(item.value)}
            </span>

            {item.percent != null && (
              <span className="whitespace-nowrap text-[10px] tabular-nums text-slate-400 dark:text-slate-500">
                {item.percent}%
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
