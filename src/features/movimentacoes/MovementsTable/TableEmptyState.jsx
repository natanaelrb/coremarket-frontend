import { PackageSearch } from 'lucide-react';

export default function TableEmptyState() {
  return (
    <tr>
      <td colSpan={10} className="px-4 py-16 text-center">
        <PackageSearch className="mx-auto mb-3 h-10 w-10 text-slate-600" />
        <p className="text-sm font-medium text-slate-300">Nenhuma movimentação encontrada</p>
        <p className="mt-1 text-xs text-slate-500">Ajuste os filtros ou o período selecionado para ver resultados.</p>
      </td>
    </tr>
  );
}
