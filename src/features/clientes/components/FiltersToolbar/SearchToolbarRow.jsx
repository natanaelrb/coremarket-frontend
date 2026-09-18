import { Download, Upload, PieChart } from "lucide-react";
import { FilterChip } from "./FilterChip.jsx";
import { Button } from "../../../../shared/components/ui/Button.jsx";
import Dropdown from "../../../../shared/components/ui/Dropdown.jsx";
import { SearchInput } from "../../../../shared/components/forms/SearchInput.jsx";
import { FILTROS_RAPIDOS } from "../../constants/filtrosRapidos.js";

/**
 * Secondary toolbar row: table-scoped search, quick-filter chips, and actions.
 */
export function SearchToolbarRow({
  searchTerm,
  onSearchChange,
  quickFilter,
  onQuickFilterChange,
  onExportar,
  onImportar,
  onSegmentar,
  exportando,
}) {
  return (
    <div
        className="
          flex
          flex-col
          gap-2
          xl:flex-row
          xl:flex-nowrap
          xl:items-center
          xl:gap-2
          w-full
        "
      >
      {/* Busca */}
      <div className="w-full shrink-0 xl:w-[350px]">
        <SearchInput
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Buscar por nome, CPF, telefone ou código..."
          className="
            w-full
            !h-8
            !rounded-md
            !bg-white
            !border-slate-200
            !text-slate-700
            placeholder:!text-slate-400
            focus:!border-[#42c878]
            focus:!ring-[#42c878]/20
          "
        />
      </div>

      {/* Filtros rápidos */}
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-1.5">
        {FILTROS_RAPIDOS.map((filtro) => (
          <FilterChip
            key={filtro.id}
            label={filtro.label}
            active={quickFilter === filtro.id}
            onClick={() => onQuickFilterChange(filtro.id)}
          />
        ))}
      </div>

      {/* Ações */}
      <div className="flex shrink-0 flex-wrap items-center gap-1.5">

       <Button
          variant="secondary"
          size="sm"
          icon={PieChart}
          onClick={onSegmentar}
          className="
            !border-[#7c3aed]
            !bg-[#7c3aed]
            !text-white
            hover:!border-[#6d28d9]
            hover:!bg-[#6d28d9]
          "
        >
          Segmentar
        </Button>

       <Button
          variant="secondary"
          size="sm"
          icon={Upload}
          onClick={onImportar}
          className="
            !border-[#2563eb]
            !bg-[#2563eb]
            !text-white
            hover:!border-[#1d4ed8]
            hover:!bg-[#1d4ed8]
          "
        >
          Importar
        </Button>

        <Dropdown
          align="right"
          trigger={

          <Button
            variant="secondary"
            size="sm"
            icon={Download}
            loading={!!exportando}
            className="
              !border-[#22c55e]
              !bg-[#22c55e]
              !text-white
              hover:!border-[#16a34a]
              hover:!bg-[#16a34a]
            "
          >
            Exportar
          </Button>

          }
          items={[
            {
              label: "Exportar Excel (.xlsx)",
              onClick: () => onExportar("excel"),
            },
            {
              label: "Exportar PDF",
              onClick: () => onExportar("pdf"),
            },
          ]}
        />
      </div>
    </div>
  );
}