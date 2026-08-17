// Estado vazio exibido quando os filtros não retornam nenhum produto.
import { PackageSearch } from 'lucide-react';

export function EmptyState({ onClearFilters }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 dark:bg-white/5">
        <PackageSearch size={24} className="text-gray-300 dark:text-gray-600" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Nenhum produto encontrado</p>
        <p className="mt-0.5 text-sm text-gray-400 dark:text-gray-500">
          Ajuste os filtros ou o termo de busca para ver resultados.
        </p>
      </div>
      <button
        onClick={onClearFilters}
        className="mt-1 text-sm font-medium text-violet-600 hover:underline dark:text-violet-400"
      >
        Limpar todos os filtros
      </button>
    </div>
  );
}
