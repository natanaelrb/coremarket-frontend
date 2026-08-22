import { Badge } from "../../../../shared/components/ui/Badge.jsx";
import { STATUS_VENDA_CONFIG } from '../../constants/statusVenda.js';

/**
 * Badge de status usado na tabela de histórico de vendas.
 * @param {{ status: string }} props
 */
export function StatusBadge({ status }) {
  const config = STATUS_VENDA_CONFIG[status] ?? { label: status, variant: 'neutral' };
  return (
    <Badge variant={config.variant} dot>
      {config.label}
    </Badge>
  );
}

