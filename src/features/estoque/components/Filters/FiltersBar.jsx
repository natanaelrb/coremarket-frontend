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
 * Composes the full filter toolbar: search input + every dropdown filter +
 * the clear-filters action. All state lives in useEstoqueFilters upstream.
 */
export default function FiltersBar({ filters, setFilter, clearFilters, hasActiveFilters }) {
  return (
    <div className="flex flex-wrap items-end gap-3 animate-fade-in">
      <SearchBar value={filters.search} onChange={(value) => setFilter('search', value)} />
      <FilterSelect label="Categoria" value={filters.categoria} options={CATEGORIA_OPTIONS} onChange={(v) => setFilter('categoria', v)} />
      <FilterSelect label="Fornecedor" value={filters.fornecedor} options={FORNECEDOR_OPTIONS} onChange={(v) => setFilter('fornecedor', v)} />
      <FilterSelect label="Localização" value={filters.localizacao} options={LOCALIZACAO_OPTIONS} onChange={(v) => setFilter('localizacao', v)} />
      <FilterSelect label="Situação" value={filters.situacao} options={SITUACAO_OPTIONS} onChange={(v) => setFilter('situacao', v)} />
      <FilterSelect label="Validade" value={filters.validade} options={VALIDADE_OPTIONS} onChange={(v) => setFilter('validade', v)} />
      <FilterSelect label="Tipo" value={filters.tipo} options={TIPO_OPTIONS} onChange={(v) => setFilter('tipo', v)} />
      <FilterSelect label="Status" value={filters.statusAtivo} options={STATUS_ATIVO_OPTIONS} onChange={(v) => setFilter('statusAtivo', v)} />
      <ClearFiltersButton onClear={clearFilters} hasActiveFilters={hasActiveFilters} />
    </div>
  )
}
