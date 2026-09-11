import { Inbox } from 'lucide-react';

/** Shown inside the table body when no rows match the active filters/tab. */
export function EmptyRow({ columns = 9 }) {
  return (
    <tr>
      <td colSpan={columns} className="py-16 text-center">
        <div className="mx-auto flex max-w-xs flex-col items-center gap-2">
          <Inbox className="h-8 w-8 text-slate-300 dark:text-slate-700" />
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Nenhum lançamento encontrado
          </p>
          <p className="text-xs text-slate-400">
            Ajuste os filtros ou o período selecionado para ver outros resultados.
          </p>
        </div>
      </td>
    </tr>
  );
}
