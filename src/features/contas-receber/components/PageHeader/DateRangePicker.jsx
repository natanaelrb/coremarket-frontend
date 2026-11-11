import { useRef, useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";
import { Popover } from "../../../../shared/components/ui/Popover";
import { cn } from "../../../../shared/utils/classNames";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";
import { DateRangePanel } from "./DateRangePanel";

export function DateRangePicker() {
  const { dateRange } = useContasReceberContext();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return (
    <>
      <button
        ref={ref}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="inline-flex h-8 items-center gap-2 rounded-lg border border-line bg-surface px-3 text-xs font-medium text-ink-2 transition hover:bg-surface-2"
      >
        <CalendarDays className="size-3.5 text-ink-3" />
        <span className="tabular-nums">{dateRange.label}</span>
        <ChevronDown
          className={cn(
            "size-3.5 text-ink-3 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      <Popover
        anchorRef={ref}
        open={open}
        onClose={() => setOpen(false)}
        align="start"
      >
        <DateRangePanel onDone={() => setOpen(false)} />
      </Popover>
    </>
  );
}
