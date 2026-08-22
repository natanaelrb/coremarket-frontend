import { formatDateTime } from "../../../utils/formatters";

export function HistoricoTab({ detalhe }) {
  return (
    <div className="animate-fade-in">
      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-4">Histórico de eventos</h4>
      <ol className="relative border-l border-slate-100 dark:border-white/5 space-y-5 pl-4">
        {detalhe.historico.map((evento, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[21px] top-0.5 w-2.5 h-2.5 rounded-full bg-violet-500 ring-4 ring-white dark:ring-[#131736]" />
            <p className="text-xs font-medium text-slate-700 dark:text-slate-200">{evento.titulo}</p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
              {formatDateTime(evento.data)} · {evento.responsavel}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
