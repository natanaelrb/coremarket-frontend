import { Eye, Printer } from 'lucide-react';
import IconButton from "../../../../shared/components/actions/IconButton.jsx";
import { StatusBadge } from './StatusBadge.jsx';
import { PaymentBadge } from './PaymentBadge.jsx';
import { formatCurrency, formatDateTime, formatNumber } from '../../../../shared/utils/formatters.js';

/**
 * Linha da tabela de histórico de vendas.
 * @param {{ venda: import('../../types/venda.types.js').VendaHistorico, onVisualizar: () => void }} props
 */
export function HistoricoRow({ venda, onVisualizar }) {
  return (
    <tr className="animate-fade-in border-b border-cm-border/60 text-sm transition-colors duration-150 last:border-0 hover:bg-cm-surface-hover">
      <td className="py-3 pl-2 font-medium text-cm-accent">{venda.numero}</td>
      <td className="py-3 text-cm-text-muted">{formatDateTime(venda.dataHora)}</td>
      <td className="py-3 text-cm-text">{venda.clienteNome}</td>
      <td className="py-3 text-cm-text-muted">{venda.operadorNome}</td>
      <td className="py-3 text-center text-cm-text-muted">{formatNumber(venda.quantidadeItens)}</td>
      <td className="py-3 text-right font-semibold text-cm-text">{formatCurrency(venda.total)}</td>
      <td className="py-3">
        <PaymentBadge formaPagamento={venda.formaPagamento} parcelas={venda.parcelas} />
      </td>
      <td className="py-3">
        <StatusBadge status={venda.status} />
      </td>
      <td className="py-3 pr-2">
        <div className="flex items-center justify-end gap-1">
          <IconButton size="sm" label="Visualizar venda" onClick={onVisualizar}>
            <Eye className="h-4 w-4" />
          </IconButton>
          <IconButton size="sm" label="Imprimir venda" onClick={() => window.print()}>
            <Printer className="h-4 w-4" />
          </IconButton>
        </div>
      </td>
    </tr>
  );
}

