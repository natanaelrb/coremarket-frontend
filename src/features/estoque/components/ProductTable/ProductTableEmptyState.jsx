import { PackageSearch } from 'lucide-react'

/**
 * Shown instead of table rows when filters produce zero matches.
 */
export default function ProductTableEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-16 text-center animate-fade-in">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-[#1E2142] text-gray-400">
        <PackageSearch size={22} />
      </div>
      <p className="font-medium text-gray-700 dark:text-gray-200">Nenhum produto encontrado</p>
      <p className="text-sm text-gray-400">Ajuste os filtros ou o termo de busca para ver resultados.</p>
    </div>
  )
}
