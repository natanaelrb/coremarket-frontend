import { TimelineItem } from './TimelineItem.jsx'

/** Vertical timeline of the client's activity, newest first. */
export function HistoricoTimeline({ eventos }) {
  return (
    <div className="rounded-xl border border-cm-border-dark light:border-cm-border-light bg-cm-panel-dark light:bg-cm-panel-light p-5">
      {eventos.map((evento, i) => (
        <TimelineItem key={evento.id} evento={evento} isLast={i === eventos.length - 1} />
      ))}
    </div>
  )
}
