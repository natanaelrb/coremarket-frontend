import { cn } from "../../../../../shared/utils/classNames.js";
import { SEGMENTOS_CONFIG } from '../../../constants/segmentosConfig.js'

/** Left-side list of client segments with their counts. */
export function SegmentoList({ segmentoAtivo, onSelect, contagens }) {
  return (
    <ul className="space-y-1">
      {SEGMENTOS_CONFIG.map((seg) => (
        <li key={seg.id}>
          <button
            onClick={() => onSelect(seg.id)}
            className={cn(
              'w-full flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors',
              seg.id === segmentoAtivo
                ? 'bg-cm-violet-dim text-cm-violet-soft font-medium'
                : 'text-slate-300 light:text-slate-600 hover:bg-white/5 light:hover:bg-black/5',
            )}
          >
            {seg.label}
            <span className="text-xs text-slate-500">{contagens[seg.id]?.toLocaleString('pt-BR')}</span>
          </button>
        </li>
      ))}
    </ul>
  )
}
