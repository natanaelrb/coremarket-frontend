import { ChevronDown } from "lucide-react";

import FilterSelect from "./FilterSelect.jsx";
import ActiveFilterChips from "./ActiveFilterChips.jsx";

import {
  SITUACAO_OPTIONS,
  TIPO_OPTIONS,
  ESTADO_OPTIONS,
  ULTIMA_COMPRA_OPTIONS,
  VALOR_COMPRADO_OPTIONS,
} from "../../constants/filterOptions.js";

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
    <div
      className="
        animate-fade-in-up
        stagger-2
        rounded-xl
        border border-slate-200/80
        bg-white
        p-4
        shadow-sm
        dark:border-[#252a4a]
        dark:bg-[#141833]
      "
    >
      {/* Filtros principais */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        <FilterSelect
          label="Situação"
          value={filters.situacao}
          onChange={(v) => updateFilter("situacao", v)}
          options={SITUACAO_OPTIONS}
        />

        <FilterSelect
          label="Tipo"
          value={filters.tipo}
          onChange={(v) => updateFilter("tipo", v)}
          options={TIPO_OPTIONS}
        />

        <FilterSelect
          label="Cidade"
          value={filters.cidade}
          onChange={(v) => updateFilter("cidade", v)}
          options={[
            { value: "todos", label: "Todas as cidades" },
            ...cidades.map((c) => ({
              value: c,
              label: c,
            })),
          ]}
        />

        <FilterSelect
          label="Estado"
          value={filters.estado}
          onChange={(v) => updateFilter("estado", v)}
          options={ESTADO_OPTIONS}
        />

        <FilterSelect
          label="Produto Fornecido"
          value={filters.produto}
          onChange={(v) => updateFilter("produto", v)}
          options={[
            { value: "todos", label: "Todos os produtos" },
            ...produtos.map((p) => ({
              value: p,
              label: p,
            })),
          ]}
        />

        <FilterSelect
          label="Última Compra"
          value={filters.ultimaCompra}
          onChange={(v) => updateFilter("ultimaCompra", v)}
          options={ULTIMA_COMPRA_OPTIONS}
        />
      </div>

      {/* Ações dos filtros */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setShowAdvanced((current) => !current)}
          className="
            flex items-center gap-1.5
            text-sm font-medium
            text-slate-500
            transition-colors
            hover:text-emerald-600
            dark:text-slate-400
            dark:hover:text-emerald-400
          "
        >
          Filtros avançados

          <ChevronDown
            size={15}
            strokeWidth={2}
            className={`
              transition-transform
              duration-300
              ${showAdvanced ? "rotate-180" : ""}
            `}
          />
        </button>

        <button
          type="button"
          onClick={clearFilters}
          className="
            text-sm font-medium
            text-slate-400
            transition-colors
            hover:text-slate-700
            dark:text-slate-500
            dark:hover:text-slate-200
          "
        >
          Limpar filtros
        </button>
      </div>

      {/* Filtros avançados */}
      <div
        className={[
          "grid transition-all duration-300 ease-out",
          showAdvanced
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={[
              "mt-4 grid grid-cols-2 gap-4",
              "border-t border-slate-100 pt-4",
              "transition-transform duration-300 ease-out",
              showAdvanced ? "translate-y-0" : "-translate-y-2",
              "md:grid-cols-3",
              "dark:border-[#252a4a]",
            ].join(" ")}
          >
            <FilterSelect
              label="Valor Comprado"
              value={filters.valorComprado}
              onChange={(v) => updateFilter("valorComprado", v)}
              options={VALOR_COMPRADO_OPTIONS}
            />
          </div>
        </div>
      </div>

      {/* Filtros ativos */}
      {activeFilterChips.length > 0 && (
        <ActiveFilterChips
          chips={activeFilterChips}
          onRemove={(key) => updateFilter(key, "todos")}
        />
      )}
    </div>
  );
}