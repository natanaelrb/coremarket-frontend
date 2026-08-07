import { ChevronDown } from 'lucide-react'
import FilterSelect from './FilterSelect.jsx'
import ActiveFilterChips from './ActiveFilterChips.jsx'
import {
  SITUACAO_OPTIONS,
  TIPO_OPTIONS,
  ESTADO_OPTIONS,
  ULTIMA_COMPRA_OPTIONS,
  VALOR_COMPRADO_OPTIONS,
} from '../../constants/filterOptions.js'

export default function FiltersBar({
  filters,
  updateFilter,
  clearFilters,
  activeFilterChips,
  showAdvanced,
  setShowAdvanced,
  cidades,
  produtos,
}) {
  return (
    <div className="animate-fade-in-up stagger-2 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-[#1c2044] dark:bg-[#141833]">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        <FilterSelect
          label="Situação"
          value={filters.situacao}
          onChange={(v) => updateFilter('situacao', v)}
          options={SITUACAO_OPTIONS}
        />
        <FilterSelect
          label="Tipo"
          value={filters.tipo}
          onChange={(v) => updateFilter('tipo', v)}
          options={TIPO_OPTIONS}
        />
        <FilterSelect
          label="Cidade"
          value={filters.cidade}
          onChange={(v) => updateFilter('cidade', v)}
          options={[{ value: 'todos', label: 'Todas as cidades' }, ...cidades.map((c) => ({ value: c, label: c }))]}
        />
        <FilterSelect
          label="Estado"
          value={filters.estado}
          onChange={(v) => updateFilter('estado', v)}
          options={ESTADO_OPTIONS}
        />
        <FilterSelect
          label="Produto Fornecido"
          value={filters.produto}
          onChange={(v) => updateFilter('produto', v)}
          options={[{ value: 'todos', label: 'Todos os produtos' }, ...produtos.map((p) => ({ value: p, label: p }))]}
        />
        <FilterSelect
          label="Última Compra"
          value={filters.ultimaCompra}
          onChange={(v) => updateFilter('ultimaCompra', v)}
          options={ULTIMA_COMPRA_OPTIONS}
        />
      </div>

      <div className="mt-3 flex items-center justify-between">
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-1.5 text-sm font-medium text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-400"
        >
          Filtros avançados
          <ChevronDown
            size={15}
            className={`transition-transform duration-300 ${showAdvanced ? 'rotate-180' : ''}`}
          />
        </button>

        <button
          onClick={clearFilters}
          className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        >
          Limpar filtros
        </button>
      </div>

      {showAdvanced && (
        <div className="animate-fade-in-up mt-4 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 md:grid-cols-3 dark:border-[#1c2044]">
          <FilterSelect
            label="Valor Comprado"
            value={filters.valorComprado}
            onChange={(v) => updateFilter('valorComprado', v)}
            options={VALOR_COMPRADO_OPTIONS}
          />
        </div>
      )}

      {activeFilterChips.length > 0 && (
        <ActiveFilterChips chips={activeFilterChips} onRemove={(key) => updateFilter(key, 'todos')} />
      )}
    </div>
  )
}
