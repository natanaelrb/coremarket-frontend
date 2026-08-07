// Painel de filtros avançados (faixa de preço + data de cadastro), expansível.
import { DATA_CADASTRO_OPTIONS } from '../../constants/filterOptions';
import { Select } from '../../../../shared/components/ui/Select';

export function AdvancedFiltersPanel({ filters, setFilter }) {
  return (
    <div className="mt-3 flex flex-wrap items-end gap-3 border-t border-gray-100 pt-3 dark:border-gray-800 animate-in fade-in slide-in-from-top-1 duration-200">
      <div>
        <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Preço:</label>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">R$</span>
          <input
            type="number"
            value={filters.precoMin}
            onChange={(e) => setFilter('precoMin', e.target.value)}
            placeholder="0,00"
            className="w-24 rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-sm outline-none transition-colors focus:border-violet-500 focus:ring-2 focus:ring-violet-100 dark:border-gray-700 dark:bg-[#151936] dark:text-gray-200"
          />
          <span className="text-xs text-gray-400">até</span>
          <input
            type="number"
            value={filters.precoMax}
            onChange={(e) => setFilter('precoMax', e.target.value)}
            placeholder="R$"
            className="w-24 rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-sm outline-none transition-colors focus:border-violet-500 focus:ring-2 focus:ring-violet-100 dark:border-gray-700 dark:bg-[#151936] dark:text-gray-200"
          />
        </div>
      </div>

      <div className="min-w-[160px]">
        <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Data cadastro</label>
        <Select
          value={filters.dataCadastro}
          onChange={(v) => setFilter('dataCadastro', v)}
          options={DATA_CADASTRO_OPTIONS}
          ariaLabel="Data de cadastro"
        />
      </div>
    </div>
  );
}
