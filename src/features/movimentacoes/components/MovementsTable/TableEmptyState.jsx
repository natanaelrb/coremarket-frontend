import { PackageSearch } from 'lucide-react';

export default function TableEmptyState() {
  return (
    <tr>
      <td colSpan={10} className="px-4 py-16 text-center">
        <div className="mx-auto flex max-w-sm flex-col items-center">
          <span className="
            mb-4 flex h-12 w-12 items-center justify-center
            rounded-2xl
            border border-slate-200
            bg-slate-50
            text-slate-400
          ">
            <PackageSearch
              className="h-6 w-6"
              strokeWidth={1.8}
            />
          </span>

          <p className="text-sm font-semibold text-slate-800">
            Nenhuma movimentação encontrada
          </p>

          <p className="mt-1.5 text-xs leading-5 text-slate-500">
            Ajuste os filtros ou o período selecionado para encontrar
            movimentações.
          </p>
        </div>
      </td>
    </tr>
  );
}