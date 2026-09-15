import { AlertTriangle, Info, Users } from 'lucide-react'
import { AlertItem } from './AlertItem.jsx'

const ICONS = { amber: AlertTriangle, blue: Info, violet: Users }

/** Horizontal row of contextual alerts (overdue accounts, credit limits, inactivity). */
export function AlertsBanner({ alertas }) {
  if (!alertas?.length) return null
  return (
    <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: '80ms', animationFillMode: 'backwards' }}>
      {alertas.map((a) => {
        const Icon = ICONS[a.tone] ?? Info
        return <AlertItem key={a.id} tone={a.tone} texto={a.texto} icon={<Icon size={14} />} />
      })}
    </div>
  )
}
