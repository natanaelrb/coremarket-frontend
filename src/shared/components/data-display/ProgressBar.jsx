import { cn } from "../../utils/classNames.js";

const TONES = {
  green: "bg-[#22c55e]",
  amber: "bg-[#f59e0b]",
  red: "bg-[#ef4444]",
  violet: "bg-[#7c3aed]",
};

/** Animated horizontal progress bar (e.g. credit limit utilization). */
export function ProgressBar({
  value,
  max = 100,
  tone = "green",
  className,
}) {
  const pct =
    max > 0
      ? Math.min(100, Math.max(0, (value / max) * 100))
      : 0;

  return (
    <div
      className={cn(
        "h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-white/10",
        className
      )}
    >
      <div
        className={cn(
          "h-full rounded-full transition-[width] duration-700 ease-out",
          TONES[tone] ?? TONES.green
        )}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}