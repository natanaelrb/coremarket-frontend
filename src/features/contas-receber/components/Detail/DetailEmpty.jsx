import { MousePointerClick } from "lucide-react";
import { EmptyState } from "../../../../shared/components/ui/EmptyState";

export const DetailEmpty = () => (
  <EmptyState
    icon={MousePointerClick}
    title="Selecione uma conta"
    description="Clique em uma linha da tabela para ver o cliente, a venda e o histórico de pagamentos."
  />
);
