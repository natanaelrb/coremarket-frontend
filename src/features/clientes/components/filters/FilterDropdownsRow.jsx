import Dropdown from "../../../../shared/components/Dropdown";
import { SlidersHorizontal } from "lucide-react";
import SecondaryButton from "../../../../shared/components/SecondaryButton";

import {
  STATUS_OPTIONS,
  TIPO_OPTIONS,
  CIDADE_OPTIONS,
  VIP_OPTIONS,
  INADIMPLENTE_OPTIONS,
} from "../../constants/filterOptions";

export default function FilterDropdownsRow({
  filters,
  onFilterChange,
  showMoreFilters,
  onToggleMoreFilters,
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 items-end">
      <Dropdown
        label="Status"
        value={filters.status}
        options={STATUS_OPTIONS}
        onChange={(v) => onFilterChange("status", v)}
      />

      <Dropdown
        label="Tipo"
        value={filters.tipo}
        options={TIPO_OPTIONS}
        onChange={(v) => onFilterChange("tipo", v)}
      />

      <Dropdown
        label="Cidade"
        value={filters.cidade}
        options={CIDADE_OPTIONS}
        onChange={(v) => onFilterChange("cidade", v)}
      />

      <Dropdown
        label="Cliente VIP"
        value={filters.vip}
        options={VIP_OPTIONS}
        onChange={(v) => onFilterChange("vip", v)}
      />

      <Dropdown
        label="Inadimplentes"
        value={filters.inadimplente}
        options={INADIMPLENTE_OPTIONS}
        onChange={(v) => onFilterChange("inadimplente", v)}
      />

      <SecondaryButton
        icon={SlidersHorizontal}
        active={showMoreFilters}
        onClick={onToggleMoreFilters}
        className="h-12 w-full"
      >
        Mais filtros
      </SecondaryButton>
    </div>
  );
}