import { Receipt } from "lucide-react";

import { ContasReceberTable } from "./ContasReceberTable.jsx";
import { EmptyState } from "../../../../../shared/components/ui/EmptyState.jsx";

/** "Contas a receber" tab for this client. */
export function ContasReceberTab({
  contas = [],
  onRegistrarPagamento,
}) {
  if (contas.length === 0) {
    return (
      <EmptyState
        icon={Receipt}
        title="Nenhuma conta a receber"
      />
    );
  }

  return (
    <div className="animate-fade-in">
      <ContasReceberTable
        contas={contas}
        onRegistrarPagamento={onRegistrarPagamento}
      />
    </div>
  );
}