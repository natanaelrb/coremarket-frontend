import { PackageSearch } from 'lucide-react'

export default function EmptyState() {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <PackageSearch size={28} className="text-violet-400" />
      </div>
      <div>
        <p className="font-semibold text-gray-700 dark:text-gray-200">Nenhum fornecedor encontrado</p>
        <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
          Ajuste os filtros ou o termo de busca para ver mais resultados.
        </p>
      </div>
    </div>
  )
}
