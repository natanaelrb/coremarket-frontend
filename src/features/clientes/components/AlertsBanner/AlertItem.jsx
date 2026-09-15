import { cn } from "../../../../shared/utils/classNames.js";

const TONES = {
  amber: 'bg-cm-amber-dim text-cm-amber border-cm-amber/20',
  blue: 'bg-cm-blue-dim text-cm-blue border-cm-blue/20',
  violet: 'bg-cm-violet-dim text-cm-violet-soft border-cm-violet/20',
}

/** One dismissible-looking alert chip in the alerts banner row. */
export function AlertItem({ tone, texto, icon }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium whitespace-nowrap',
        TONES[tone],
      )}
    >
      {icon}
      {texto}
    </div>
  )
}
