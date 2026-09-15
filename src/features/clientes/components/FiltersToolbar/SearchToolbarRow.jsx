import { SlidersHorizontal, Download, Plus, Upload, PieChart } from 'lucide-react'
import { FilterChip } from './FilterChip.jsx'
import { Button } from "../../../../shared/components/ui/Button.jsx";
import Dropdown from "../../../../shared/components/ui/Dropdown.jsx";
import { SearchInput } from "../../../../shared/components/forms/SearchInput.jsx";
import { FILTROS_RAPIDOS } from '../../constants/filtrosRapidos.js'

/**
 * Secondary toolbar row: table-scoped search, quick-filter chips, and the
 * "Mais filtros" / "Exportar" / "Novo cliente" actions.
 */
export function SearchToolbarRow({
  searchTerm,
  onSearchChange,
  quickFilter,
  onQuickFilterChange,
  onMaisFiltros,
  onExportar,
  onNovoCliente,
  onImportar,
  onSegmentar,
  exportando,
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
      <SearchInput
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Buscar por nome, CPF ou código..."
        className="lg:w-72"
      />

      <div className="flex flex-wrap items-center gap-2">
        {FILTROS_RAPIDOS.map((f) => (
          <FilterChip
            key={f.id}
            label={f.label}
            active={quickFilter === f.id}
            onClick={() => onQuickFilterChange(f.id)}
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" icon={SlidersHorizontal} onClick={onMaisFiltros}>
          Mais filtros
        </Button>
        <Button variant="secondary" size="sm" icon={PieChart} onClick={onSegmentar}>
          Segmentar
        </Button>
        <Button variant="secondary" size="sm" icon={Upload} onClick={onImportar}>
          Importar
        </Button>
        <Dropdown
          align="right"
          trigger={
            <Button variant="secondary" size="sm" icon={Download} loading={!!exportando}>
              Exportar
            </Button>
          }
          items={[
            { label: 'Exportar Excel (.xlsx)', onClick: () => onExportar('excel') },
            { label: 'Exportar PDF', onClick: () => onExportar('pdf') },
          ]}
        />
        <Button size="sm" icon={Plus} onClick={onNovoCliente}>
          Novo cliente
        </Button>
      </div>
    </div>
  )
}
