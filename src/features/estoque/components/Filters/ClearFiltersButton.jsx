import { FilterX } from 'lucide-react'
import { Button } from "../../../../shared/components/ui/Button.jsx";

/**
 * Resets all active filters back to their defaults. Disabled visually via
 * opacity when no filters are active (hasActiveFilters from the hook).
 */
export default function ClearFiltersButton({ onClear, hasActiveFilters }) {
  return (
    <Button
      icon={FilterX}
      variant="outline"
      size="sm"
      onClick={onClear}
      disabled={!hasActiveFilters}
      className="whitespace-nowrap"
    >
      Limpar filtros
    </Button>
  )
}
