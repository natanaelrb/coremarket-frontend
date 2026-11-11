import { useState } from "react";
import { Check } from "lucide-react";
import { DATE_PRESETS } from "../../constants";
import { Button } from "../../../../shared/components/ui/Button";
import { DateField } from "../../../../shared/components/forms/DateField";
import { cn } from "../../../../shared/utils/classNames";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

export function DateRangePanel({ onDone }) {
  const { dateRange } = useContasReceberContext();
  const [start, setStart] = useState(dateRange.range.start);
  const [end, setEnd] = useState(dateRange.range.end);
  const invalid = !start || !end || start > end;

  return (
    <div className="flex w-[430px] max-w-[92vw] flex-col sm:flex-row">
      <ul className="border-b border-line p-1.5 sm:w-44 sm:border-b-0 sm:border-r">
        {DATE_PRESETS.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => {
                dateRange.applyPreset(p.id);
                onDone();
              }}
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition",
                dateRange.presetId === p.id
                  ? "bg-brand-soft font-semibold text-brand"
                  : "text-ink-2 hover:bg-surface-2",
              )}
            >
              {p.label}
              {dateRange.presetId === p.id && <Check className="size-3.5" />}
            </button>
          </li>
        ))}
      </ul>
      <div className="flex-1 space-y-3 p-3.5">
        <p className="text-[11px] font-bold text-ink">Período personalizado</p>
        <DateField
          label="De"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <DateField
          label="Até"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          error={
            start && end && start > end ? "Fim antes do início" : undefined
          }
        />
        <Button
          variant="primary"
          className="w-full"
          disabled={invalid}
          onClick={() => {
            if (dateRange.applyCustom(start, end)) onDone();
          }}
        >
          Aplicar período
        </Button>
      </div>
    </div>
  );
}
