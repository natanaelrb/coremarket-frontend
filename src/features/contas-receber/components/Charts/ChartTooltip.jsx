import { CHART_SERIES } from "../../constants";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";

export function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-line bg-surface px-3 py-2 text-[11px] shadow-lg">
      <p className="mb-1 font-bold text-ink">{label}</p>
      {CHART_SERIES.map((s) => {
        const p = payload.find((x) => x.dataKey === s.key);
        if (!p) return null;
        return (
          <p
            key={s.key}
            className="flex items-center justify-between gap-4 text-ink-2"
          >
            <span className="flex items-center gap-1.5">
              <span
                className="size-2 rounded-full"
                style={{ background: s.color }}
              />
              {s.label}
            </span>
            <b className="tabular-nums text-ink">{formatCurrency(p.value)}</b>
          </p>
        );
      })}
    </div>
  );
}
