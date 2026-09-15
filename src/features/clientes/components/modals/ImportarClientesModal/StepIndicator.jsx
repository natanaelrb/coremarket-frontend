import { Check } from 'lucide-react'
import { cn } from "../../../../../shared/utils/classNames.js";

const LABELS = ['Selecionar arquivo', 'Mapear colunas', 'Validar dados', 'Confirmar']

/** 4-step progress indicator for the import wizard. */
export function StepIndicator({ stepIndex }) {
  return (
    <div className="flex items-center mb-6">
      {LABELS.map((label, i) => (
        <div key={label} className="flex items-center flex-1 last:flex-none">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                'w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0 transition-colors',
                i < stepIndex && 'bg-cm-green text-white',
                i === stepIndex && 'bg-cm-violet text-white',
                i > stepIndex && 'bg-white/10 text-slate-400 light:bg-black/10',
              )}
            >
              {i < stepIndex ? <Check size={13} /> : i + 1}
            </div>
            <span
              className={cn(
                'text-xs whitespace-nowrap hidden sm:inline',
                i === stepIndex ? 'text-white light:text-slate-900 font-medium' : 'text-slate-500',
              )}
            >
              {label}
            </span>
          </div>
          {i < LABELS.length - 1 && (
            <div className={cn('h-px flex-1 mx-3', i < stepIndex ? 'bg-cm-green' : 'bg-cm-border-dark light:bg-cm-border-light')} />
          )}
        </div>
      ))}
    </div>
  )
}
