import { cn } from "../../utils/classNames.js";

const TONES = {
  violet: 'bg-cm-violet',
  green: 'bg-cm-green',
  amber: 'bg-cm-amber',
  red: 'bg-cm-red',
}

/** Animated horizontal progress bar (e.g. credit limit utilization). */
export function ProgressBar({ value, max = 100, tone = 'violet', className }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div className={cn('h-2 w-full rounded-full bg-white/5 light:bg-black/5 overflow-hidden', className)}>
      <div
        className={cn('h-full rounded-full transition-[width] duration-700 ease-out', TONES[tone])}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
