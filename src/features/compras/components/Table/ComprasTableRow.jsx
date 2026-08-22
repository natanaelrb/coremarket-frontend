import { StatusBadge } from "./StatusBadge";
import { RowActionsMenu } from "./RowActionsMenu";
import { formatCurrency, formatDate, formatCompraNumero } from "../../utils/formatters";
import { FORMA_PAGAMENTO_LABELS } from "../../constants/paymentMethods";

const CELL_RENDERERS = {
  compra: (compra) => (
    <span className="font-medium text-violet-600 dark:text-violet-400">{formatCompraNumero(compra.numero)}</span>
  ),
  data: (compra) => <span className="text-slate-600 dark:text-slate-300">{formatDate(compra.data)}</span>,
  fornecedor: (compra) => <span className="text-slate-700 dark:text-slate-200">{compra.fornecedorNome}</span>,
  produtos: (compra) => <span className="text-slate-600 dark:text-slate-300">{compra.produtosCount}</span>,
  total: (compra) => <span className="font-semibold text-slate-900 dark:text-white">{formatCurrency(compra.total)}</span>,
  pagamento: (compra) => (
    <span className="text-slate-600 dark:text-slate-300">{FORMA_PAGAMENTO_LABELS[compra.formaPagamento]}</span>
  ),
  recebimento: (compra) => (
    <span className="text-slate-600 dark:text-slate-300">{compra.dataRecebimento ? formatDate(compra.dataRecebimento) : "-"}</span>
  ),
  status: (compra) => <StatusBadge status={compra.status} />,
  responsavel: (compra) => <span className="text-slate-600 dark:text-slate-300">{compra.responsavel}</span>,
};

export function ComprasTableRow({ compra, columns, isSelected, onToggleSelect, onClick, onAction, delay = 0 }) {
  return (
    <tr
      className="border-b border-slate-50 dark:border-white/[0.03] hover:bg-slate-50 dark:hover:bg-white/[0.03] cursor-pointer transition-colors animate-fade-in"
      style={{ animationDelay: `${Math.min(delay, 300)}ms` }}
      onClick={onClick}
    >
      <td className="px-5 py-3" onClick={(e) => e.stopPropagation()}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggleSelect}
          className="w-4 h-4 rounded border-slate-300 dark:border-white/20 text-violet-600 focus:ring-violet-500/40 cursor-pointer"
        />
      </td>
      {columns.map((col) => (
        <td key={col.id} className="px-3 py-3 whitespace-nowrap">
          {CELL_RENDERERS[col.id]?.(compra)}
        </td>
      ))}
      <td className="px-3 py-3" onClick={(e) => e.stopPropagation()}>
        <RowActionsMenu onAction={onAction} />
      </td>
    </tr>
  );
}
