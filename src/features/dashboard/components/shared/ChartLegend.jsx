/**
 * Legenda interativa reutilizável para gráficos (linha, donut, barra).
 * `onToggle` permite ocultar/mostrar séries ao clicar — usado como legenda
 * interativa no gráfico de Faturamento Mensal.
 */
export default function ChartLegend({ items, hidden = [], onToggle }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {items.map((item) => {
        const isHidden = hidden.includes(item.key);
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onToggle?.(item.key)}
            className={`flex items-center gap-1.5 text-xs font-medium transition-opacity
              ${isHidden ? 'opacity-40' : 'opacity-100'}
              ${onToggle ? 'cursor-pointer hover:opacity-70' : 'cursor-default'}`}
            aria-pressed={!isHidden}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-[var(--text-secondary)]">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
