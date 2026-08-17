import { Search, Filter } from "lucide-react";
import FilterDropdownsRow from "./FilterDropdownsRow";
import AdvancedFiltersPanel from "./AdvancedFiltersPanel";

export default function SearchFiltersPanel({
  search,
  onSearchChange,
  filters,
  onFilterChange,
  showMoreFilters,
  onToggleMoreFilters,
  advanced,
  onAdvancedChange,
  onClearAdvanced,
}) {
  return (
    <div
      className="relative z-50 rounded-2xl shadow-sm border border-slate-200 dark:border-white/5 bg-white dark:bg-white dark:bg-[#12162C] p-6 mb-6 cm-fade-up"
      style={{ animationDelay: "340ms" }}
    >
      <div className="grid grid-cols-[350px_1fr] gap-8">
        {/* Coluna esquerda */}
        <div>
          <p className="text-base font-semibold text-slate-700 dark:text-slate-200 mb-4">
            Buscar clientes
          </p>

          <div className="relative">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Digite o nome, CPF, CNPJ, e-mail ou telefone..."
              className="w-full h-11 rounded-xl border border-slate-200 dark:border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0E1226] pl-10 pr-4 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 outline-none focus:border-violet-400 dark:focus:border-violet-500 transition-colors"
            />
          </div>
        </div>

        {/* Coluna direita */}
        <div className="border-slate-200 dark:border-slate-200 dark:border-white/10 pl-8">
          <p className="text-[14px] font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2 mb-4">
            <Filter size={16} />
            Filtros
          </p>

          <FilterDropdownsRow
            filters={filters}
            onFilterChange={onFilterChange}
            showMoreFilters={showMoreFilters}
            onToggleMoreFilters={onToggleMoreFilters}
          />
        </div>
      </div>

      <AdvancedFiltersPanel
        open={showMoreFilters}
        advanced={advanced}
        onChange={onAdvancedChange}
        onClear={onClearAdvanced}
      />
    </div>
  );
}
