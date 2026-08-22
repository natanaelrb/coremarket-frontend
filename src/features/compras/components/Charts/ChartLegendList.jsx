// Legenda compartilhada pelos dois gráficos de donut (fornecedor / status),
// evitando duplicação de markup entre eles.
export function ChartLegendList({ items, formatValue }) {
  return (
    <div className="flex-1 space-y-2 min-w-0">
      {items.map((item) => (
        <div key={item.name} className="flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
            <span className="text-slate-600 dark:text-slate-300 truncate">{item.name}</span>
          </div>
          <span className="text-slate-400 dark:text-slate-500 whitespace-nowrap">
            {formatValue(item.value)} ({item.percent}%)
          </span>
        </div>
      ))}
    </div>
  );
}
