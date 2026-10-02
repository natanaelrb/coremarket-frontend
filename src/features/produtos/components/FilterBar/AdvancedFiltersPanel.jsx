// Painel de filtros avançados (faixa de preço + data de cadastro), expansível.
import { DATA_CADASTRO_OPTIONS } from '../../constants/filterOptions';
import { Select } from '../../../../shared/components/ui/Select';

const inputClassName = `
  h-10 w-full rounded-lg
  border border-slate-200
  bg-white
  px-3 py-2
  text-sm text-slate-700
  outline-none
  transition-all duration-200
  placeholder:text-slate-400
  hover:border-slate-300
  focus:border-green-500
  focus:ring-4 focus:ring-green-500/10
  dark:border-white/[0.10]
  dark:bg-[#151c2b]
  dark:text-slate-200
  dark:placeholder:text-slate-500
  dark:hover:border-white/[0.18]
  dark:focus:border-green-400
  dark:focus:ring-green-500/10
`;

export function AdvancedFiltersPanel({ filters, setFilter }) {
  return (
    <div
      className="
        mt-3 flex flex-wrap items-end gap-4
        border-t border-slate-100 pt-4
        animate-in fade-in slide-in-from-top-2
        duration-300
        motion-reduce:animate-none
        dark:border-white/[0.06]
      "
    >
      {/* Faixa de preço */}
      <div className="min-w-0 flex-1">
        <label
          className="
            mb-1.5 block
            text-[11px] font-semibold uppercase
            tracking-[0.03em]
            text-slate-500 dark:text-slate-400
          "
        >
          Faixa de preço
        </label>

        <div className="flex items-center gap-2">
          <span className="shrink-0 text-xs font-medium text-slate-400 dark:text-slate-500">
            R$
          </span>

          <input
            type="number"
            min="0"
            step="0.01"
            value={filters.precoMin}
            onChange={(event) => setFilter('precoMin', event.target.value)}
            placeholder="Mínimo"
            aria-label="Preço mínimo"
            className={`${inputClassName} min-w-0`}
          />

          <span className="shrink-0 text-xs text-slate-400 dark:text-slate-500">
            até
          </span>

          <input
            type="number"
            min="0"
            step="0.01"
            value={filters.precoMax}
            onChange={(event) => setFilter('precoMax', event.target.value)}
            placeholder="Máximo"
            aria-label="Preço máximo"
            className={`${inputClassName} min-w-0`}
          />
        </div>
      </div>

      {/* Data de cadastro */}
      <div className="w-full sm:w-56">
        <label
          className="
            mb-1.5 block
            text-[11px] font-semibold uppercase
            tracking-[0.03em]
            text-slate-500 dark:text-slate-400
          "
        >
          Data de cadastro
        </label>

        <Select
          value={filters.dataCadastro}
          onChange={(value) => setFilter('dataCadastro', value)}
          options={DATA_CADASTRO_OPTIONS}
          ariaLabel="Data de cadastro"
        />
      </div>
    </div>
  );
}