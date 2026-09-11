import { formatDateTime } from '../../utils/formatDate.js';

/** Vertical timeline of "Histórico" events shown at the bottom of the detail panel. */
export function HistoricoTimeline({ eventos }) {
  return (
    <ol className="space-y-4">
      {eventos.map((evento, index) => (
        <li key={`${evento.data}-${index}`} className="relative flex gap-3 pl-1">
          <div className="relative flex flex-col items-center">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-violet" />
            {index < eventos.length - 1 ? <span className="mt-1 w-px flex-1 bg-slate-200 dark:bg-slate-700" /> : null}
          </div>
          <div className="pb-1">
            <p className="text-xs text-slate-400">{formatDateTime(evento.data)}</p>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{evento.descricao}</p>
            <p className="text-xs text-slate-400">{evento.autor}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
