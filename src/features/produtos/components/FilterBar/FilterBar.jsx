// Barra de filtros: pesquisa, filtros principais e filtros avançados.
import { useMemo } from 'react';
import { SlidersHorizontal, X, Search as SearchIcon } from 'lucide-react';

import { SearchInput } from './SearchInput';
import { FilterSelect } from './FilterSelect';
import { AdvancedFiltersPanel } from './AdvancedFiltersPanel';
import { buildFilterOptions } from './filterBar.config';
import { Button } from '../../../../shared/components/ui/Button';

export function FilterBar({
  filters,
  setFilter,
  clearFilters,
  activeFiltersCount,
  isAdvancedOpen,
  setIsAdvancedOpen,
}) {
  const options = useMemo(() => buildFilterOptions(), []);

  return (
    <section
      className="
        space-y-4 rounded-2xl border border-slate-200/80
        bg-white p-4
        shadow-[0_2px_8px_rgba(15,23,42,0.03)]
        dark:border-white/[0.07]
        dark:bg-[#151c2b]
        dark:shadow-none
      "
    >
      {/* Cabeçalho da área de filtros */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            Pesquisar e filtrar
          </h2>

          <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
            Encontre produtos usando os filtros abaixo.
          </p>
        </div>

        {activeFiltersCount > 0 && (
          <button
            type="button"
            onClick={clearFilters}
            className="
              inline-flex items-center gap-1.5 rounded-lg
              px-2.5 py-1.5 text-xs font-medium
              text-slate-500 transition-colors
              hover:bg-slate-100 hover:text-slate-700
              dark:text-slate-400 dark:hover:bg-white/[0.05]
              dark:hover:text-slate-200
            "
          >
            <X size={14} />
            Limpar filtros
            <span
              className="
                inline-flex min-w-5 items-center justify-center
                rounded-full bg-slate-100 px-1.5 py-0.5
                text-[10px] font-semibold
                text-slate-600
                dark:bg-white/[0.08] dark:text-slate-300
              "
            >
              {activeFiltersCount}
            </span>
          </button>
        )}
      </div>

      {/* Campo de pesquisa */}
      <div className="w-full">
        <SearchInput
          value={filters.busca}
          onChange={(value) => setFilter('busca', value)}
        />
      </div>

      {/* Filtros principais */}
      <div
        className="
          grid grid-cols-1 gap-3
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-6
        "
      >
        <FilterSelect
          label="Categoria"
          value={filters.categoria}
          onChange={(value) => setFilter('categoria', value)}
          options={options.categoria}
        />

        <FilterSelect
          label="Fornecedor"
          value={filters.fornecedor}
          onChange={(value) => setFilter('fornecedor', value)}
          options={options.fornecedor}
        />

        <FilterSelect
          label="Marca"
          value={filters.marca}
          onChange={(value) => setFilter('marca', value)}
          options={options.marca}
        />

        <FilterSelect
          label="Status"
          value={filters.status}
          onChange={(value) => setFilter('status', value)}
          options={options.status}
        />

        <FilterSelect
          label="Situação de estoque"
          value={filters.situacaoEstoque}
          onChange={(value) => setFilter('situacaoEstoque', value)}
          options={options.situacaoEstoque}
        />

        <FilterSelect
          label="Tipo"
          value={filters.tipo}
          onChange={(value) => setFilter('tipo', value)}
          options={options.tipo}
        />
      </div>

      {/* Ações dos filtros */}
      <div
        className="
          flex flex-wrap items-center justify-between
          gap-3 border-t border-slate-100 pt-3
          dark:border-white/[0.06]
        "
      >
        <button
          type="button"
          onClick={() => setIsAdvancedOpen((current) => !current)}
          className={[
            `
              inline-flex items-center gap-2 rounded-lg border
              px-3 py-2 text-sm font-medium
              transition-colors duration-150
            `,
            isAdvancedOpen
              ? `
                border-green-200 bg-green-50 text-green-600
                dark:border-green-500/30
                dark:bg-green-500/10 dark:text-green-400
              `
              : `
                border-slate-200 text-slate-600
                hover:bg-slate-50
                dark:border-white/[0.10]
                dark:text-slate-300 dark:hover:bg-white/[0.05]
              `,
          ].join(' ')}
        >
          <SlidersHorizontal size={15} />

          {isAdvancedOpen ? 'Ocultar filtros avançados' : 'Filtros avançados'}
        </button>

        <Button icon={SearchIcon} variant="primary">
          Aplicar filtros
        </Button>
      </div>

      {/* Filtros avançados */}
      <div
        className={[
          "grid transition-all duration-300 ease-out",
          isAdvancedOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={[
          `
            inline-flex items-center gap-2 rounded-lg border
            px-3 py-2 text-sm font-medium
            transition-all duration-200 ease-out
          `,
          isAdvancedOpen
            ? `
              border-green-200 bg-green-50 text-green-600
              dark:border-green-500/30
              dark:bg-green-500/10 dark:text-green-400
            `
            : `
              border-slate-200 text-slate-600
              hover:bg-slate-50
              dark:border-white/[0.10]
              dark:text-slate-300 dark:hover:bg-white/[0.05]
            `,
        ].join(' ')}
          >
            <AdvancedFiltersPanel
              filters={filters}
              setFilter={setFilter}
            />
          </div>
        </div>
      </div>
    </section>
  );
}