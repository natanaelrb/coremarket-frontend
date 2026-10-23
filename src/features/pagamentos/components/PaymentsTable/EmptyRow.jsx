import { Inbox } from 'lucide-react';

/** Shown inside the table body when no rows match the active filters/tab. */
export function EmptyRow({ columns = 9 }) {
  return (
    <tr>
      <td colSpan={columns} className="px-4 py-16 text-center sm:px-6">
        <div className="mx-auto flex max-w-sm flex-col items-center gap-3">
          <div
            className="
              flex h-12 w-12 items-center justify-center
              rounded-2xl
              border border-green-100
              bg-green-50
              dark:border-green-500/15
              dark:bg-green-500/10
            "
          >
            <Inbox
              className="h-6 w-6 text-green-600 dark:text-green-400"
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              Nenhum lançamento encontrado
            </p>

            <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
              Não encontramos pagamentos para os filtros selecionados.
              Experimente alterar a busca ou o período.
            </p>
          </div>
        </div>
      </td>
    </tr>
  );
}