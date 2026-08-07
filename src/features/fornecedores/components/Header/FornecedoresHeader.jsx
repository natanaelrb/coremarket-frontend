import { Search, SlidersHorizontal, Download, ChevronDown, Plus } from 'lucide-react'
import Breadcrumb from './Breadcrumb.jsx'

export default function FornecedoresHeader({
  searchTerm,
  onSearchChange,
  onToggleFilters,
  onNewFornecedor,
}) {
  return (
    <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between animate-fade-in-up">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Fornecedores</h1>
        <Breadcrumb items={['Principal', 'Fornecedores']} />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Pesquisar fornecedor..."
            className="w-64 rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-3 text-sm text-gray-700 outline-none transition-all focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:border-[#252a4a] dark:bg-[#141833] dark:text-gray-200 dark:focus:ring-violet-500/20"
          />
        </div>

        <button
          onClick={onToggleFilters}
          className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-[#252a4a] dark:bg-[#141833] dark:text-gray-300 dark:hover:bg-[#1a1e3d]"
        >
          <SlidersHorizontal size={16} />
          Filtros
        </button>

        <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-[#252a4a] dark:bg-[#141833] dark:text-gray-300 dark:hover:bg-[#1a1e3d]">
          <Download size={16} />
          Exportar
          <ChevronDown size={14} />
        </button>

        <button
          onClick={onNewFornecedor}
          className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-violet-200 transition-all hover:bg-violet-700 hover:shadow-md hover:shadow-violet-300 active:scale-[0.98] dark:shadow-none"
        >
          <Plus size={16} />
          Novo Fornecedor
        </button>
      </div>
    </header>
  )
}
