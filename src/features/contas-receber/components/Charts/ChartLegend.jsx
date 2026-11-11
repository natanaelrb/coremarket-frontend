import { CHART_SERIES } from "../../constants";
import { cn } from "../../../../shared/utils/classNames";

/** Legenda clicável: esconde/mostra cada série. */
export function ChartLegend({ hidden, onToggle }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-1">
      {CHART_SERIES.map((s) => (
        <li key={s.key}>
          <button
            type="button"
            onClick={() => onToggle(s.key)}
            aria-pressed={!hidden.has(s.key)}
            className={cn(
              "inline-flex items-center gap-1.5 text-[10.5px] font-medium text-ink-2 transition",
              hidden.has(s.key) && "opacity-40 line-through",
            )}
          >
            <span
              className="h-0.5 w-4 rounded-full"
              style={{ background: s.color }}
            />
            <span
              className="size-1.5 -ml-3 rounded-full ring-2 ring-surface"
              style={{ background: s.color }}
            />
            {s.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
