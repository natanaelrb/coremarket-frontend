// Composição da barra de filtros. Cada filtro é um Select/DateRange
// controlado externamente pelo hook useComprasFilters.
import { SlidersHorizontal } from "lucide-react";
import { DateRangeFilter } from "./DateRangeFilter";
import { SelectFilter } from "./SelectFilter";
import { STATUS_OPTIONS } from "../../constants/statusConfig";
import { FORMA_PAGAMENTO_OPTIONS } from "../../constants/paymentMethods";
import { RESPONSAVEL_OPTIONS, FORNECEDOR_FILTER_ALL } from "../../constants/filterOptions";

export function FiltersBar({ filtros, setFiltro, fornecedores, filtrosAtivos, onOpenMoreFilters }) {
  const fornecedorOptions = [FORNECEDOR_FILTER_ALL, ...fornecedores.map((f) => ({ value: String(f.id), label: f.nome }))];

  return (
    <div className="bg-white dark:bg-[#131736] border border-slate-200 dark:border-white/5 rounded-2xl p-4">
      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">Filtros</h3>
      <div className="flex flex-wrap items-end gap-4">
        <DateRangeFilter
          dataInicio={filtros.dataInicio}
          dataFim={filtros.dataFim}
          onChangeInicio={(v) => setFiltro("dataInicio", v)}
          onChangeFim={(v) => setFiltro("dataFim", v)}
        />
        <SelectFilter label="Status" value={filtros.status} options={STATUS_OPTIONS} onChange={(v) => setFiltro("status", v)} />
        <SelectFilter label="Fornecedor" value={filtros.fornecedorId} options={fornecedorOptions} onChange={(v) => setFiltro("fornecedorId", v)} />
        <SelectFilter label="Forma de pagamento" value={filtros.formaPagamento} options={FORMA_PAGAMENTO_OPTIONS} onChange={(v) => setFiltro("formaPagamento", v)} />
        <SelectFilter label="Responsável" value={filtros.responsavel} options={RESPONSAVEL_OPTIONS} onChange={(v) => setFiltro("responsavel", v)} />

        <button
          onClick={onOpenMoreFilters}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Mais filtros
          {filtrosAtivos > 0 && (
            <span className="ml-0.5 w-5 h-5 rounded-full bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center">
              {filtrosAtivos}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
