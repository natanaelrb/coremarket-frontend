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
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

        {/* Informações da página */}
        <div className="min-w-0">

          {/* Breadcrumb */}
          <div className="mb-2.5">
            <Breadcrumb items={["Home", "Fornecedores"]} />
          </div>

          {/* Título */}
          <div className="flex items-center gap-2.5">
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-emerald-50
                text-emerald-600
                ring-1
                ring-emerald-100
              "
              aria-hidden="true"
            >
              <Truck
                size={18}
                strokeWidth={2.2}
              />
            </div>

            <h1
              className="
                truncate
                text-2xl
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              Gestão de Fornecedores
            </h1>
          </div>

          {/* Descrição */}
          <p
            className="
              mt-2
              max-w-2xl
              text-base
              leading-5
              text-slate-500
            "
          >
            Gerencie e acompanhe seus fornecedores.
          </p>
        </div>

        {/* Ações */}
        <div className="flex flex-wrap items-center gap-2.5">

          {/* Busca */}
          <div className="relative w-full sm:w-64 lg:w-60 xl:w-72">
            <Search
              size={17}
              strokeWidth={2}
              className="
                pointer-events-none
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
              aria-hidden="true"
            />

            <label
              htmlFor="fornecedores-search"
              className="sr-only"
            >
              Pesquisar fornecedor
            </label>

            <input
              id="fornecedores-search"
              type="search"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Pesquisar fornecedor..."
              autoComplete="off"
              className="
                h-10
                w-full
                rounded-xl
                border
                border-slate-200
                bg-white
                pl-9
                pr-3
                text-sm
                text-slate-700
                outline-none
                transition-all
                placeholder:text-slate-400
                focus:border-emerald-500
                focus:ring-4
                focus:ring-emerald-500/10
              "
            />
          </div>

          {/* Filtros */}
          <button
            type="button"
            onClick={onToggleFilters}
            aria-label="Abrir filtros de fornecedores"
            className="
              flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              px-3.5
              text-sm
              font-medium
              text-slate-600
              transition-all
              hover:border-slate-300
              hover:bg-slate-50
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500/50
            "
          >
            <SlidersHorizontal
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />

            Filtros
          </button>

          {/* Exportar */}
          <button
            type="button"
            aria-label="Exportar fornecedores"
            title="Exportação ainda não implementada"
            className="
              flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-slate-200
              bg-white
              px-3.5
              text-sm
              font-medium
              text-slate-600
              transition-all
              hover:border-slate-300
              hover:bg-slate-50
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500/50
            "
          >
            <Download
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />

            <span>Exportar</span>

            <ChevronDown
              size={14}
              strokeWidth={2}
              aria-hidden="true"
            />
          </button>

          {/* Novo fornecedor */}
          <button
            type="button"
            onClick={onNewFornecedor}
            className="
              flex
              h-10
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-emerald-600
              px-4
              text-sm
              font-semibold
              text-white
              shadow-sm
              shadow-emerald-200/60
              transition-all
              hover:-translate-y-0.5
              hover:bg-emerald-700
              hover:shadow-md
              hover:shadow-emerald-200
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500/50
              focus-visible:ring-offset-2
            "
          >
            <Plus
              size={16}
              strokeWidth={2.2}
              aria-hidden="true"
            />

            Novo fornecedor
          </button>
        </div>
      </div>
    </header>
  );
}