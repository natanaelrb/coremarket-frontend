import { TONES } from "../../../../shared/constants/tones";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { cn } from "../../../../shared/utils/classNames";

export function StatusSummaryCard({ tab, active, onClick, index }) {
  const tone = TONES[tab.tone];
  const isAll = tab.id === "TODOS";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-lg border p-2.5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md animate-fade-up",
        isAll ? "bg-surface" : tone.soft,
        active
          ? cn(
              "ring-2 ring-offset-1 ring-offset-surface",
              isAll
                ? "border-brand ring-brand"
                : cn(tone.border, "ring-current", tone.text),
            )
          : "border-line",
      )}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <p
        className={cn("text-[11px] font-bold", isAll ? "text-ink" : tone.text)}
      >
        {tab.label}
      </p>
      <p className="mt-1 text-[10px] text-ink-2">
        {tab.quantidade} conta{tab.quantidade === 1 ? "" : "s"}
      </p>
      <p className="mt-0.5 text-[11px] font-bold text-ink tabular-nums">
        {formatCurrency(tab.valor)}
      </p>
    </button>
  );
}
