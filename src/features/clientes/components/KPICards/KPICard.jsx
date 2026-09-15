import { cn } from "../../../../shared/utils/classNames.js";

const TONES = {
  violet: 'bg-cm-violet-dim text-cm-violet-soft',
  green: 'bg-cm-green-dim text-cm-green',
  blue: 'bg-cm-blue-dim text-cm-blue',
  red: 'bg-cm-red-dim text-cm-red',
  amber: 'bg-cm-amber-dim text-cm-amber',
}

/** Single KPI card: icon chip, headline value, and a supporting caption. */
export function KPICard({ icon, tone = 'violet', value, label, caption, delay = 0 }) {
  return (
    <div
      className="flex items-start gap-3 rounded-xl border border-cm-border-dark light:border-cm-border-light bg-cm-panel-dark light:bg-cm-panel-light p-4 animate-slide-up hover:border-cm-violet/40 transition-colors"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'backwards' }}
    >
      <div className={cn('shrink-0 w-9 h-9 rounded-lg flex items-center justify-center', TONES[tone])}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-lg font-semibold text-white light:text-slate-900 leading-tight truncate">{value}</p>
        <p className="text-xs text-slate-400 light:text-slate-500 mt-0.5">{label}</p>
        {caption && <p className="text-[11px] text-slate-500 mt-0.5">{caption}</p>}
      </div>
    </div>
  )
}
