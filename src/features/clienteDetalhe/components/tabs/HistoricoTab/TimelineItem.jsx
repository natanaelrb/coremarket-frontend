import { ShoppingBag, AlertTriangle, UserPlus, Info } from "lucide-react";
import { formatDateTime } from "../../../../../shared/utils/formatDate.js";
import { cn } from "../../../../../shared/utils/classNames.js";

const ICONS = { venda: ShoppingBag, alerta: AlertTriangle, cadastro: UserPlus }
const TONES = {
  venda: 'bg-cm-green-dim text-cm-green',
  alerta: 'bg-cm-amber-dim text-cm-amber',
  cadastro: 'bg-cm-violet-dim text-cm-violet-soft',
}

/** Single event row in the client activity timeline. */
export function TimelineItem({ evento, isLast }) {
  const Icon = ICONS[evento.tipo] ?? Info
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className={cn('w-7 h-7 rounded-full flex items-center justify-center shrink-0', TONES[evento.tipo])}>
          <Icon size={14} />
        </div>
        {!isLast && <div className="w-px flex-1 bg-cm-border-dark light:bg-cm-border-light my-1" />}
      </div>
      <div className="pb-5">
        <p className="text-xs text-slate-500">{formatDateTime(evento.dataHora)}</p>
        <p className="text-sm text-slate-200 light:text-slate-700 mt-0.5">{evento.texto}</p>
      </div>
    </div>
  )
}
