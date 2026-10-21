import { Eye, Printer } from 'lucide-react';
import IconButton from '../../../../shared/components/actions/IconButton.jsx';
import { StatusBadge } from './StatusBadge.jsx';
import { PaymentBadge } from './PaymentBadge.jsx';
import {
  formatCurrency,
  formatDateTime,
  formatNumber,
} from '../../../../shared/utils/formatters.js';

/**
 * Linha da tabela de histórico de vendas.
 * @param {{
 *  venda: import('../../types/venda.types.js').VendaHistorico,
 *  onVisualizar: () => void
 * }} props
 */
export function HistoricoRow({ venda, onVisualizar }) {
  return (
    <tr className="animate-fade-in border-b border-cm-border/60 text-sm transition-colors duration-200 last:border-0 hover:bg-green-500/[0.035]">
      <td className="whitespace-nowrap py-3.5 pl-3 pr-3">
        <span className="font-semibold tabular-nums text-green-700 dark:text-green-400">
          {venda.numero}
        </span>
      </td>

      <td className="whitespace-nowrap py-3.5 pr-4 text-xs tabular-nums text-cm-text-muted">
        {formatDateTime(venda.dataHora)}
      </td>

      <td className="max-w-[12rem] py-3.5 pr-4">
        <span
          className="block truncate font-medium text-cm-text"
          title={venda.clienteNome}
        >
          {venda.clienteNome || 'Consumidor'}
        </span>
      </td>

      <td className="max-w-[10rem] py-3.5 pr-4">
        <span
          className="block truncate text-cm-text-muted"
          title={venda.operadorNome}
        >
          {venda.operadorNome}
        </span>
      </td>

      <td className="whitespace-nowrap py-3.5 px-3 text-center">
        <span className="inline-flex min-w-8 items-center justify-center rounded-lg border border-cm-border bg-cm-bg/60 px-2 py-1 text-xs font-semibold tabular-nums text-cm-text-muted">
          {formatNumber(venda.quantidadeItens)}
        </span>
      </td>

      <td className="whitespace-nowrap py-3.5 px-3 text-right">
        <span className="font-bold tabular-nums text-cm-text">
          {formatCurrency(venda.total)}
        </span>
      </td>

      <td className="whitespace-nowrap py-3.5 px-3">
        <PaymentBadge
          formaPagamento={venda.formaPagamento}
          parcelas={venda.parcelas}
        />
      </td>

      <td className="whitespace-nowrap py-3.5 px-3">
        <StatusBadge status={venda.status} />
      </td>

      <td className="whitespace-nowrap py-3.5 pl-3 pr-2">
        <div className="flex items-center justify-end gap-1.5">
          <IconButton
            icon={Eye}
            title="Visualizar venda"
            onClick={onVisualizar}
          />

          <IconButton
            icon={Printer}
            title="Imprimir venda"
            onClick={() => window.print()}
          />
        </div>
      </td>
    </tr>
  );
}
