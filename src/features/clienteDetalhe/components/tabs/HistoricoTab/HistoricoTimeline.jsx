import { TimelineItem } from "./TimelineItem.jsx";

/** Vertical timeline of the client's activity, newest first. */
export function HistoricoTimeline({ eventos = [] }) {
  return (
    <div
      className="
        rounded-xl
        border border-slate-200
        bg-white
        p-5
        shadow-[0_1px_2px_rgba(15,23,42,0.02)]
        dark:border-white/10
        dark:bg-zinc-900
      "
    >
      {eventos.map((evento, i) => (
        <TimelineItem
          key={evento.id}
          evento={evento}
          isLast={i === eventos.length - 1}
        />
      ))}
    </div>
  );
}