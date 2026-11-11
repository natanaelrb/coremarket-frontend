import { SearchX } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button";
import { EmptyState } from "../../../../shared/components/ui/EmptyState";

export const TableEmpty = ({ onClear, hasFilters }) => (
  <EmptyState
    icon={SearchX}
    title="Nenhuma conta encontrada"
    description={
      hasFilters
        ? "Nenhuma conta corresponde aos filtros aplicados."
        : "Não há contas neste período."
    }
    action={
      hasFilters && (
        <Button variant="soft" onClick={onClear}>
          Limpar filtros
        </Button>
      )
    }
  />
);
