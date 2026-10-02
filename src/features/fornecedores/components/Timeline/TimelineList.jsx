import { TIMELINE_DOT_COLORS } from "../../constants/tableConfig.js";
import { formatDate } from "../../../../shared/utils/formatters.js";

export default function TimelineList({ items = [] }) {
  if (items.length === 0) {
    return (
      <div className="flex min-h-32 items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-8 text-center dark:border-[#3a4168] dark:bg-[#0f1230]">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Sem eventos registrados.
        </p>
      </div>
    );
  }

  return (
    <ol className="space-y-0" aria-label="Histórico de eventos do fornecedor">
      {items.map((item, index) => {
        const dotColor =
          TIMELINE_DOT_COLORS[item.tipo] ??
          "bg-slate-400 dark:bg-slate-500";

        const isLastItem = index === items.length - 1;

        return (
          <li
            key={item.id ?? `${item.tipo}-${item.data}-${index}`}
            className="animate-fade-in-up relative flex gap-3 pb-5 last:pb-0"
          >
            {!isLastItem && (
              <span
                className="absolute left-[5px] top-3 h-full w-px bg-slate-200 dark:bg-[#3a4168]"
                aria-hidden="true"
              />
            )}

            <span
              className={`
                relative z-10 mt-1 h-3 w-3 flex-shrink-0 rounded-full
                ring-4 ring-white dark:ring-[#141833]
                ${dotColor}
              `}
              aria-hidden="true"
            />

            <div className="min-w-0 flex-1">
              <time
                dateTime={item.data ?? undefined}
                className="text-xs font-medium text-slate-500 dark:text-slate-400"
              >
                {item.data ? formatDate(item.data) : "Data não informada"}
              </time>

              <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                {item.titulo ?? "Evento sem título"}
              </p>

              {item.detalhe && (
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {item.detalhe}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}