import { StatusBadge } from "./StatusBadge";
import { RowActionsMenu } from "./RowActionsMenu";
import {
  formatCurrency,
  formatDate,
  formatCompraNumero,
} from "../../utils/formatters";
import { FORMA_PAGAMENTO_LABELS } from "../../constants/paymentMethods";

const CELL_RENDERERS = {
  compra: (compra) => (
    <span className="font-semibold text-green-700 transition-colors group-hover:text-green-800 dark:text-green-400 dark:group-hover:text-green-300">
      {formatCompraNumero(compra.numero)}
    </span>
  ),

  data: (compra) => (
    <span className="text-slate-600 dark:text-slate-300">
      {formatDate(compra.data)}
    </span>
  ),

  fornecedor: (compra) => (
    <span className="font-medium text-slate-800 dark:text-slate-200">
      {compra.fornecedorNome}
    </span>
  ),

  produtos: (compra) => (
    <span className="inline-flex min-w-8 items-center justify-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:bg-white/[0.06] dark:text-slate-300">
      {compra.produtosCount}
    </span>
  ),

  total: (compra) => (
    <span className="font-bold tabular-nums text-slate-900 dark:text-white">
      {formatCurrency(compra.total)}
    </span>
  ),

  pagamento: (compra) => (
    <span className="text-slate-600 dark:text-slate-300">
      {FORMA_PAGAMENTO_LABELS[compra.formaPagamento] ?? compra.formaPagamento ?? "-"}
    </span>
  ),

  recebimento: (compra) => (
    <span className="text-slate-600 dark:text-slate-300">
      {compra.dataRecebimento ? formatDate(compra.dataRecebimento) : "-"}
    </span>
  ),

  status: (compra) => <StatusBadge status={compra.status} />,

  responsavel: (compra) => (
    <span className="text-slate-600 dark:text-slate-300">
      {compra.responsavel || "-"}
    </span>
  ),
};

export function ComprasTableRow({
  compra,
  columns,
  isSelected,
  onToggleSelect,
  onClick,
  onAction,
  delay = 0,
}) {
  return (
    <tr
      onClick={onClick}
      className={`group cursor-pointer border-b border-slate-100 transition-colors duration-200 last:border-b-0 hover:bg-green-50/50 dark:border-white/[0.06] dark:hover:bg-green-500/[0.04] ${
        isSelected
          ? "bg-green-50/80 dark:bg-green-500/[0.08]"
          : "bg-white dark:bg-transparent"
      }`}
      style={{
        animationDelay: `${Math.min(delay, 300)}ms`,
      }}
    >
      {/* Seleção */}
      <td
        className="w-12 px-5 py-4"
        onClick={(event) => event.stopPropagation()}
      >
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggleSelect}
          aria-label={`Selecionar compra ${formatCompraNumero(compra.numero)}`}
          className="h-4 w-4 cursor-pointer rounded border-slate-300 accent-green-600 transition-colors focus:ring-2 focus:ring-green-500/30 dark:border-white/20 dark:bg-white/5"
        />
      </td>

      {/* Dados da compra */}
      {columns.map((col) => (
        <td
          key={col.id}
          className="whitespace-nowrap px-4 py-4 text-sm"
        >
          {CELL_RENDERERS[col.id]?.(compra) ?? (
            <span className="text-slate-500 dark:text-slate-400">-</span>
          )}
        </td>
      ))}

      {/* Ações */}
      <td
        className="px-4 py-4"
        onClick={(event) => event.stopPropagation()}
      >
        <RowActionsMenu onAction={onAction} />
      </td>
    </tr>
  );
}