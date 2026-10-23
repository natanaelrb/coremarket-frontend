import {
  formatCurrency,
  formatDate,
  formatDateTime,
} from '../../utils/index.js';

import {
  ORIGEM_PAGAMENTO_META,
  FORMA_PAGAMENTO_META,
} from '../../constants/index.js';

import { TypeCell } from './TypeCell.jsx';
import { StatusBadge } from './StatusBadge.jsx';
import { RowActionsMenu } from './RowActionsMenu.jsx';
import { cn } from '../../../../shared/utils/cn.js';

/**
 * Single row of the payments table.
 * @param {{
 *  pagamento: object,
 *  onVerDetalhes: () => void,
 *  onBaixarComprovante: () => void,
 *  onEstornar: () => void,
 *  delayMs: number
 * }} props
 */
export function PaymentsTableRow({
  pagamento,
  onVerDetalhes,
  onBaixarComprovante,
  onEstornar,
  delayMs = 0,
}) {
  const formaLabel =
    FORMA_PAGAMENTO_META[pagamento.forma]?.label ?? pagamento.forma;

  const origemLabel =
    ORIGEM_PAGAMENTO_META[pagamento.origem]?.prefix ?? pagamento.origem;

  const parcelasLabel =
    pagamento.parcelas > 1 ? ` ${pagamento.parcelas}x` : '';

  const isVencido = pagamento.status === 'VENCIDO';

  return (
    <tr
      className="
        group
        animate-fade-in
        border-b border-slate-100
        text-sm
        transition-colors duration-150
        last:border-0
        hover:bg-green-50/40
        dark:border-white/[0.06]
        dark:hover:bg-green-500/[0.04]
      "
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {/* Data de criação */}
      <td className="whitespace-nowrap px-4 py-4 text-xs text-slate-500 sm:px-5 sm:text-sm dark:text-slate-400">
        {formatDateTime(pagamento.dataCriacao)}
      </td>

      {/* Tipo */}
      <td className="whitespace-nowrap px-4 py-4 sm:px-5">
        <TypeCell tipo={pagamento.tipo} />
      </td>

      {/* Pessoa */}
      <td className="whitespace-nowrap px-4 py-4 font-medium text-slate-800 sm:px-5 dark:text-slate-100">
        {pagamento.pessoa}
      </td>

      {/* Origem */}
      <td className="whitespace-nowrap px-4 py-4 text-xs text-slate-500 sm:px-5 sm:text-sm dark:text-slate-400">
        <span>{origemLabel}</span>
        {pagamento.origemReferencia && (
          <span className="ml-1 text-slate-600 dark:text-slate-300">
            {pagamento.origemReferencia}
          </span>
        )}
      </td>

      {/* Forma de pagamento */}
      <td className="whitespace-nowrap px-4 py-4 text-slate-600 sm:px-5 dark:text-slate-300">
        {formaLabel}
        {parcelasLabel && (
          <span className="ml-1 text-xs text-slate-400 dark:text-slate-500">
            {parcelasLabel.trim()}
          </span>
        )}
      </td>

      {/* Vencimento */}
      <td
        className={cn(
          'whitespace-nowrap px-4 py-4 sm:px-5',
          isVencido
            ? 'font-medium text-red-600 dark:text-red-400'
            : 'text-slate-600 dark:text-slate-300'
        )}
      >
        {formatDate(pagamento.dataVencimento)}
      </td>

      {/* Valor */}
      <td className="whitespace-nowrap px-4 py-4 text-right font-semibold tabular-nums text-slate-900 sm:px-5 dark:text-slate-50">
        {formatCurrency(pagamento.valor)}
      </td>

      {/* Status */}
      <td className="whitespace-nowrap px-4 py-4 sm:px-5">
        <StatusBadge status={pagamento.status} />
      </td>

      {/* Ações */}
      <td className="whitespace-nowrap px-4 py-4 text-right sm:px-5">
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