import { useState } from 'react'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'

import SearchBar from './SearchBar.jsx'
import FilterSelect from './FilterSelect.jsx'
import ClearFiltersButton from './ClearFiltersButton.jsx'

import {
  CATEGORIA_OPTIONS,
  FORNECEDOR_OPTIONS,
  LOCALIZACAO_OPTIONS,
  SITUACAO_OPTIONS,
  VALIDADE_OPTIONS,
  TIPO_OPTIONS,
  STATUS_ATIVO_OPTIONS,
} from '../../constants/filterOptions.js'

/**
 * Barra principal de filtros do estoque.
 * Mantém os filtros mais usados visíveis e revela
 * os filtros complementares com animação.
 */
export default function FiltersBar({
  filters,
  setFilter,
  clearFilters,
  hasActiveFilters,
}) {
  const [showMoreFilters, setShowMoreFilters] = useState(false)

  const additionalFiltersCount = [
    filters.validade !== 'todos',
    filters.tipo !== 'todos',
    filters.statusAtivo !== 'todos',
  ].filter(Boolean).length

  return (
    <section className="animate-fade-in">
      <div
        className="
          overflow-hidden
          rounded-xl
          border border-slate-200
          bg-white
          shadow-sm
          dark:border-white/10
          dark:bg-[#151936]
        "
      >
        {/* Filtros principais */}
        <div className="flex flex-wrap items-end gap-3 p-4">
          <SearchBar
            value={filters.search}
            onChange={(value) => setFilter('search', value)}
          />

          <FilterSelect
            label="Categoria"
            value={filters.categoria}
            options={CATEGORIA_OPTIONS}
            onChange={(value) => setFilter('categoria', value)}
          />

          <FilterSelect
            label="Fornecedor"
            value={filters.fornecedor}
            options={FORNECEDOR_OPTIONS}
            onChange={(value) => setFilter('fornecedor', value)}
          />

          <FilterSelect
            label="Localização"
            value={filters.localizacao}
            options={LOCALIZACAO_OPTIONS}
            onChange={(value) => setFilter('localizacao', value)}
          />

          <FilterSelect
            label="Situação"
            value={filters.situacao}
            options={SITUACAO_OPTIONS}
            onChange={(value) => setFilter('situacao', value)}
          />

          {/* Mais filtros */}
          <button
            type="button"
            onClick={() => setShowMoreFilters((current) => !current)}
            className="
              inline-flex
              h-10
              shrink-0
              items-center
              gap-2
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              text-sm
              font-medium
              text-slate-600
              transition-all
              duration-150
              hover:border-slate-300
              hover:bg-slate-50
              dark:border-white/10
              dark:bg-[#151936]
              dark:text-slate-300
              dark:hover:border-white/20
              dark:hover:bg-white/5
            "
          >
            <SlidersHorizontal size={16} />

            <span>Mais filtros</span>

            {additionalFiltersCount > 0 && (
              <span
                className="
                  flex h-5 min-w-5
                  items-center justify-center
                  rounded-full
                  bg-emerald-100
                  px-1.5
                  text-[11px]
                  font-semibold
                  text-emerald-700
                  dark:bg-emerald-500/15
                  dark:text-emerald-400
                "
              >
                {additionalFiltersCount}
              </span>
            )}

            <ChevronDown
              size={15}
              className={`
                transition-transform
                duration-200
                ${showMoreFilters ? 'rotate-180' : ''}
              `}
            />
          </button>

          <ClearFiltersButton
            onClear={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>

        {/* Filtros adicionais */}
        <div
          className={`
            grid
            transition-all
            duration-300
            ease-out
            ${
              showMoreFilters
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            }
          `}
        >
          <div className="min-h-0 overflow-hidden">
            <div
              className="
                border-t
                border-slate-100
                px-4
                pb-4
                pt-4
                dark:border-white/5
              "
            >
              <div className="mb-3">
                <p className="text-xs font-bold uppercase tracking-wide dark:text-slate-400">
                  Filtros adicionais
                </p>

                <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                  Refine os resultados por validade, tipo e status.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <FilterSelect
                  label="Validade"
                  value={filters.validade}
                  options={VALIDADE_OPTIONS}
                  onChange={(value) => setFilter('validade', value)}
                />

                <FilterSelect
                  label="Tipo"
                  value={filters.tipo}
                  options={TIPO_OPTIONS}
                  onChange={(value) => setFilter('tipo', value)}
                />

                <FilterSelect
                  label="Status"
                  value={filters.statusAtivo}
                  options={STATUS_ATIVO_OPTIONS}
                  onChange={(value) =>
                    setFilter('statusAtivo', value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}