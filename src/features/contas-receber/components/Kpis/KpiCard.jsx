import { ArrowUp } from "lucide-react";
import { KPI_DEFS } from "../../constants";
import { TONES } from "../../../../shared/constants/tones";
import { useCountUp } from "../../../../shared/hooks/useCountUp";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import {
  formatInt,
  formatPercent,
} from "../../../../shared/utils/formatNumber";
import { cn } from "../../../../shared/utils/classNames";

const FORMATTERS = {
  currency: formatCurrency,
  count: formatInt,
  percent: formatPercent,
};

export function KpiCard({ card, index }) {
  const def = KPI_DEFS[card.id];
  const Icon = def.icon;
  const tone = TONES[def.tone];
  const animated = useCountUp(card.value);
  return (
    <article
      className="rounded-xl border border-line bg-surface p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md animate-fade-up"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "grid size-6 shrink-0 place-items-center rounded-md",
            tone.soft,
            tone.text,
          )}
        >
          <Icon className="size-3.5" />
        </span>
        <h3 className="truncate text-[11px] font-medium text-ink-2">
          {def.label}
        </h3>
      </div>
      <p className="mt-2 truncate text-[18px] font-bold leading-none tracking-tight text-ink tabular-nums">
        {FORMATTERS[card.format](animated)}
        {card.unit && <span className="ml-1 text-[13px]">{card.unit}</span>}
      </p>
      <p className="mt-1.5 flex items-center gap-0.5 truncate text-[10.5px] text-ink-3">
        {card.arrow && <ArrowUp className="size-2.5" strokeWidth={3} />}
        {card.subtext}
      </p>
    </article>
  );
}
