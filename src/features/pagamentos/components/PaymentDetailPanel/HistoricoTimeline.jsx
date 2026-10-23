import { Clock3 } from 'lucide-react';
import { formatDateTime } from '../../utils/formatDate.js';

/**
 * Linha do tempo do histórico de movimentações do pagamento.
 */
export function HistoricoTimeline({ eventos = [] }) {
  if (eventos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 px-4 py-8 text-center dark:border-white/10">
        <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-white/[0.06] dark:text-slate-500">
          <Clock3 size={19} />
        </span>

        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Nenhum evento registrado
        </p>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          O histórico deste pagamento aparecerá aqui.
        </p>
      </div>
    );
  }

  return (
    <ol className="space-y-0">
      {eventos.map((evento, index) => {
        const isLast = index === eventos.length - 1;

        return (
          <li
            key={`${evento.data}-${index}`}
            className="relative flex gap-3.5"
          >
            <div className="flex w-5 shrink-0 flex-col items-center">
              <span
                className={`relative z-10 mt-1 flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  index === 0
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10'
                    : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    index === 0
                      ? 'bg-emerald-500'
                      : 'bg-slate-400 dark:bg-slate-500'
                  }`}
                />
              </span>

              {!isLast && (
                <span className="my-1 w-px flex-1 bg-slate-200 dark:bg-white/10" />
              )}
            </div>

            <div
              className={`min-w-0 flex-1 rounded-xl px-3.5 py-3 transition-colors ${
                index === 0
                  ? 'mb-3 border border-emerald-100 bg-emerald-50/60 dark:border-emerald-500/20 dark:bg-emerald-500/[0.06]'
                  : 'mb-3 border border-transparent bg-slate-50/80 dark:bg-white/[0.025]'
              }`}
            >
              <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold leading-5 text-slate-800 dark:text-slate-100">
                  {evento.descricao}
                </p>

                {index === 0 && (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                    Inicial
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                {formatDateTime(evento.data)}
              </p>

              {evento.autor && (
                <p className="mt-2 border-t border-slate-200/70 pt-2 text-xs text-slate-500 dark:border-white/[0.06] dark:text-slate-400">
                  Responsável:{' '}
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {evento.autor}
                  </span>
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
