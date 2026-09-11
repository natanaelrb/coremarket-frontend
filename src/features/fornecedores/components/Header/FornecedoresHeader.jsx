import {
  Search,
  SlidersHorizontal,
  Download,
  ChevronDown,
  Plus,
  Truck,
} from "lucide-react";

import Breadcrumb from "./Breadcrumb.jsx";

export default function FornecedoresHeader({
  searchTerm,
  onSearchChange,
  onToggleFilters,
  onNewFornecedor,
}) {
  return (
    <header className="animate-fade-in-up">
      {/* Área superior */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

        {/* Informações da página */}
        <div>
          <Breadcrumb items={["Principal", "Fornecedores"]} />

          <div className="mt-3 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
              <Truck size={22} strokeWidth={2} />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Fornecedores
              </h1>

              <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                Gerencie e acompanhe seus fornecedores.
              </p>
            </div>
          </div>
        </div>

        {/* Ações */}
        <div className="flex flex-wrap items-center gap-3">

          {/* Busca */}
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
              className="h-10 w-64 rounded-xl border border-gray-200 bg-white pl-9 pr-3 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100 dark:border-[#252a4a] dark:bg-[#141833] dark:text-gray-200 dark:focus:ring-violet-500/20"
            />
          </div>

          {/* Filtros */}
          <button
            onClick={onToggleFilters}
            className="flex h-10 items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 active:scale-[0.98] dark:border-[#252a4a] dark:bg-[#141833] dark:text-gray-300 dark:hover:bg-[#1a1e3d]"
          >
            <SlidersHorizontal size={16} />
            Filtros
          </button>

          {/* Exportar */}
          <button className="flex h-10 items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-600 transition-all hover:bg-gray-50 active:scale-[0.98] dark:border-[#252a4a] dark:bg-[#141833] dark:text-gray-300 dark:hover:bg-[#1a1e3d]">
            <Download size={16} />
            Exportar
            <ChevronDown size={14} />
          </button>

          {/* Novo fornecedor */}
          <button
            onClick={onNewFornecedor}
            className="flex h-10 items-center gap-2 rounded-xl bg-violet-600 px-4 text-sm font-semibold text-white shadow-sm shadow-violet-200 transition-all hover:bg-violet-700 hover:shadow-md hover:shadow-violet-300 active:scale-[0.98] dark:shadow-none"
          >
            <Plus size={16} />
            Novo Fornecedor
          </button>
        </div>
      </div>
    </header>
  );
}