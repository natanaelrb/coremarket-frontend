import { FilterX } from 'lucide-react'
import { Button } from '../../../../shared/components/ui/Button.jsx'

/**
 * Limpa todos os filtros ativos.
 */
export default function ClearFiltersButton({
  onClear,
  hasActiveFilters,
}) {
  return (
    <Button
      icon={FilterX}
      variant="ghost"
      size="md"
      onClick={onClear}
      disabled={!hasActiveFilters}
      className="
        h-10
        whitespace-nowrap
        rounded-lg
        px-3
        text-slate-500
        hover:bg-rose-50
        hover:text-rose-600
        dark:text-slate-400
        dark:hover:bg-rose-500/10
        dark:hover:text-rose-400
      "
    >
      Limpar filtros
    </Button>
  )
}