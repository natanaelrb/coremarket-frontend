import { Badge } from '../../../../shared/components/ui/Badge.jsx';
import { STATUS_VENDA_CONFIG } from '../../constants/statusVenda.js';

const STATUS_TONE = {
  CONCLUIDA: 'green',
  CANCELADA: 'red',
  PENDENTE: 'amber',
  EM_ANDAMENTO: 'blue',
};

/**
 * Badge de status usado na tabela de histórico de vendas.
 * @param {{ status: string }} props
 */
export function StatusBadge({ status }) {
  const config = STATUS_VENDA_CONFIG[status] ?? {
    label: status,
  };

  const tone = STATUS_TONE[status] ?? 'neutral';

  return (
    <span className="inline-flex max-w-[11rem]">
      <Badge tone={tone}>
        <span className="truncate">{config.label}</span>
      </Badge>
    </span>
  );
}
