import { HistoricoTimeline } from './HistoricoTimeline.jsx'
import { EmptyState } from "../../../../../shared/components/ui/EmptyState.jsx";
import { History } from 'lucide-react'

/** "Histórico" tab: chronological activity timeline for this client. */
export function HistoricoTab({ eventos }) {
  if (eventos.length === 0) {
    return <EmptyState icon={History} title="Nenhum evento registrado ainda" />
  }
  return (
    <div className="animate-fade-in">
      <HistoricoTimeline eventos={eventos} />
    </div>
  )
}
