import { SlidersHorizontal, Filter } from "lucide-react";

import { DateRangeFilter } from "./DateRangeFilter";
import { SelectFilter } from "./SelectFilter";
import { STATUS_OPTIONS } from "../../constants/statusConfig";
import { FORMA_PAGAMENTO_OPTIONS } from "../../constants/paymentMethods";
import {
  RESPONSAVEL_OPTIONS,
  FORNECEDOR_FILTER_ALL,
} from "../../constants/filterOptions";

export function FiltersBar({
  filtros,
  setFiltro,
  fornecedores,
  filtrosAtivos,
  onOpenMoreFilters,
}) {
  const fornecedorOptions = [
    FORNECEDOR_FILTER_ALL,
    ...fornecedores.map((fornecedor) => ({
      value: String(fornecedor.id),
      label: fornecedor.nome,
    })),
  ];

  return (
    <section
      aria-label="Filtros de compras"
      className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-[#151b28]"
    >
      {/* Cabeçalho */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-green-200 bg-green-50 text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
            <Filter className="h-5 w-5" aria-hidden="true" />
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-800 dark:text-white">
              Filtrar compras
            </h2>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              Refine os resultados pelos critérios abaixo
            </p>
          </div>
        </div>

        {/* Período e Mais filtros no canto direito */}
        <div className="flex flex-wrap items-end justify-end gap-3">
          <div className="w-full sm:w-[360px]">
            <DateRangeFilter
              dataInicio={filtros.dataInicio}
              dataFim={filtros.dataFim}
              onChangeInicio={(valor) => setFiltro("dataInicio", valor)}
              onChangeFim={(valor) => setFiltro("dataFim", valor)}
            />
          </div>

          <button
            type="button"
            onClick={onOpenMoreFilters}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-100 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-300 dark:hover:bg-green-500/20 dark:focus-visible:ring-offset-[#151b28]"
          >
            <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
            <span>Mais filtros</span>

            {filtrosAtivos > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-green-600 px-1.5 text-[10px] font-bold text-white dark:bg-green-500 dark:text-green-950">
                {filtrosAtivos}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Filtros principais */}
      <div className="grid grid-cols-1 items-end gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="min-w-0">
          <SelectFilter
            label="Status"
            value={filtros.status}
            options={STATUS_OPTIONS}
            onChange={(valor) => setFiltro("status", valor)}
          />
        </div>

        <div className="min-w-0">
          <SelectFilter
            label="Fornecedor"
            value={filtros.fornecedorId}
            options={fornecedorOptions}
            onChange={(valor) => setFiltro("fornecedorId", valor)}
          />
        </div>

        <div className="min-w-0">
          <SelectFilter
            label="Forma de pagamento"
            value={filtros.formaPagamento}
            options={FORMA_PAGAMENTO_OPTIONS}
            onChange={(valor) => setFiltro("formaPagamento", valor)}
          />
        </div>

        <div className="min-w-0">
          <SelectFilter
            label="Responsável"
            value={filtros.responsavel}
            options={RESPONSAVEL_OPTIONS}
            onChange={(valor) => setFiltro("responsavel", valor)}
          />
        </div>
      </div>
    </section>
  );
}
