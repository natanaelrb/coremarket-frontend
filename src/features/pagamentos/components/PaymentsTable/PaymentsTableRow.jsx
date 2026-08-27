import { formatCurrency, formatDate, formatDateTime } from '../../utils/index.js';
import { ORIGEM_PAGAMENTO_META, FORMA_PAGAMENTO_META } from '../../constants/index.js';
import { TypeCell } from './TypeCell.jsx';
import { StatusBadge } from './StatusBadge.jsx';
import { RowActionsMenu } from './RowActionsMenu.jsx';
import { cn } from '../../../../shared/utils/cn.js';

/**
 * Single row of the payments table.
 * @param {{ pagamento: object, onVerDetalhes: () => void, onBaixarComprovante: () => void, onEstornar: () => void, delayMs: number }} props
 */
export function PaymentsTableRow({ pagamento, onVerDetalhes, onBaixarComprovante, onEstornar, delayMs = 0 }) {
  const formaLabel = FORMA_PAGAMENTO_META[pagamento.forma]?.label ?? pagamento.forma;
  const parcelasLabel = pagamento.parcelas > 1 ? ` ${pagamento.parcelas}x` : '';

  return (
    <tr
      className="animate-fade-in group border-b border-slate-100 text-sm transition-colors last:border-0 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">
        {formatDateTime(pagamento.dataCriacao)}
      </td>
      <td className="whitespace-nowrap px-4 py-3">
        <TypeCell tipo={pagamento.tipo} />
      </td>
      <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-800 dark:text-slate-100">
        {pagamento.pessoa}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-slate-500 dark:text-slate-400">
        {ORIGEM_PAGAMENTO_META[pagamento.origem]?.prefix ?? pagamento.origem} {pagamento.origemReferencia}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-slate-600 dark:text-slate-300">
        {formaLabel}
        {parcelasLabel}
      </td>
      <td
        className={cn(
          'whitespace-nowrap px-4 py-3',
          pagamento.status === 'VENCIDO' ? 'font-medium text-red-500' : 'text-slate-600 dark:text-slate-300'
        )}
      >
        {formatDate(pagamento.dataVencimento)}
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-right font-semibold text-slate-900 dark:text-slate-50">
        {formatCurrency(pagamento.valor)}
      </td>
      <td className="whitespace-nowrap px-4 py-3">
        <StatusBadge status={pagamento.status} />
      </td>
      <td className="whitespace-nowrap px-4 py-3 text-right">
        <RowActionsMenu
          pagamento={pagamento}
          onVerDetalhes={onVerDetalhes}
          onBaixarComprovante={onBaixarComprovante}
          onEstornar={onEstornar}
        />
      </td>
    </tr>
  );
}
