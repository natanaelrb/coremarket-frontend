// Barra de filtros completa: busca + selects simples + toggle de filtros avançados + ações.
import { useMemo, useState } from 'react';
import { SlidersHorizontal, X, Search as SearchIcon } from 'lucide-react';
import { SearchInput } from './SearchInput';
import { FilterSelect } from './FilterSelect';
import { AdvancedFiltersPanel } from './AdvancedFiltersPanel';
import { buildFilterOptions } from './filterBar.config';
import { Button } from '../../../../shared/components/ui/Button';

export function FilterBar({ filters, setFilter, clearFilters, activeFiltersCount, isAdvancedOpen, setIsAdvancedOpen }) {
  const options = useMemo(() => buildFilterOptions(), []);

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 dark:border-gray-800 dark:bg-[#151936]">
      <div className="flex flex-wrap items-end gap-3">
        <SearchInput value={filters.busca} onChange={(v) => setFilter('busca', v)} />

        <FilterSelect label="Categoria" value={filters.categoria} onChange={(v) => setFilter('categoria', v)} options={options.categoria} />
        <FilterSelect label="Fornecedor" value={filters.fornecedor} onChange={(v) => setFilter('fornecedor', v)} options={options.fornecedor} />
        <FilterSelect label="Marca" value={filters.marca} onChange={(v) => setFilter('marca', v)} options={options.marca} />
        <FilterSelect label="Status" value={filters.status} onChange={(v) => setFilter('status', v)} options={options.status} />
        <FilterSelect label="Situação de estoque" value={filters.situacaoEstoque} onChange={(v) => setFilter('situacaoEstoque', v)} options={options.situacaoEstoque} />
        <FilterSelect label="Tipo" value={filters.tipo} onChange={(v) => setFilter('tipo', v)} options={options.tipo} />

        <button
          type="button"
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          className={[
            'flex items-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium transition-colors duration-150',
            isAdvancedOpen
              ? 'border-violet-200 bg-violet-50 text-violet-600 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-400'
              : 'border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5',
          ].join(' ')}
        >
          <SlidersHorizontal size={14} />
          Filtros avançados
        </button>

        {activeFiltersCount > 0 && (
          <Button icon={X} variant="ghost" onClick={clearFilters}>
            Limpar filtros
          </Button>
        )}

        <Button icon={SearchIcon} variant="primary">
          Aplicar filtros
        </Button>
      </div>

      {isAdvancedOpen && <AdvancedFiltersPanel filters={filters} setFilter={setFilter} />}
    </div>
  );
}
