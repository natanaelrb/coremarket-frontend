import { Badge } from "../../../../shared/components/ui/Badge.jsx";
import { STATUS_VENDA_CONFIG } from '../../constants/statusVenda.js';

/**
 * Cabeçalho do painel de detalhe/recibo com número da venda e status.
 * @param {{ numero: string, status: string }} props
 */
export function VendaDetalheHeader({ numero, status }) {
  const config = STATUS_VENDA_CONFIG[status] ?? { label: status, variant: 'neutral' };

  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-sm font-semibold text-cm-text">Venda {numero}</h2>
      <Badge variant={config.variant} dot>
        {config.label}
      </Badge>
    </div>
  );
}

