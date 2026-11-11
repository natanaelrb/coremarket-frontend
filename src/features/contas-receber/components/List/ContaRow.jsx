import { Checkbox } from "../../../../shared/components/ui/Checkbox";
import { FORMA_LABEL } from "../../constants";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { formatDateBR } from "../../../../shared/utils/formatDate";
import { cn } from "../../../../shared/utils/classNames";
import { StatusBadge } from "./StatusBadge";
import { RowActionsMenu } from "./RowActionsMenu";

export function ContaRow({ conta, index, active, selected, onOpen, onToggle }) {
  const late = conta.diasAtraso > 0;
  return (
    <tr
      onClick={() => onOpen(conta.id)}
      aria-selected={active}
      className={cn(
        "cursor-pointer border-b border-line/70 text-[11.5px] text-ink transition-colors animate-fade-up",
        active
          ? "bg-brand-soft"
          : selected
            ? "bg-brand-soft/50"
            : "hover:bg-surface-2",
      )}
      style={{ animationDelay: `${Math.min(index, 12) * 22}ms` }}
    >
      <td className="px-3 py-2.5" onClick={(e) => e.stopPropagation()}>
        <Checkbox
          checked={selected}
          onChange={() => onToggle(conta.id)}
          aria-label={`Selecionar ${conta.id}`}
        />
      </td>
      <td className="whitespace-nowrap px-2.5 font-semibold">#{conta.id}</td>
      <td className="px-2.5">
        <p className="whitespace-nowrap font-medium">{conta.clienteNome}</p>
        <p className="text-[10px] text-ink-3">{conta.telefone}</p>
      </td>
      <td className="whitespace-nowrap px-2.5 text-[10.5px] font-medium text-brand">
        #{conta.vendaId}
      </td>
      <td className="whitespace-nowrap px-2.5 tabular-nums">
        {formatDateBR(conta.emissao)}
      </td>
      <td
        className={cn(
          "whitespace-nowrap px-2.5 tabular-nums",
          late && "font-medium text-red-500",
        )}
      >
        {formatDateBR(conta.vencimento)}
      </td>
      <td className="whitespace-nowrap px-2.5 text-right tabular-nums">
        {formatCurrency(conta.valorOriginal)}
      </td>
      <td
        className={cn(
          "whitespace-nowrap px-2.5 text-right tabular-nums",
          conta.valorPago > 0 && "text-emerald-600 dark:text-emerald-400",
        )}
      >
        {formatCurrency(conta.valorPago)}
      </td>
      <td className="whitespace-nowrap px-2.5 text-right font-medium tabular-nums">
        {formatCurrency(conta.saldo)}
      </td>
      <td
        className={cn(
          "px-2.5 text-center tabular-nums",
          late && "font-semibold text-red-500",
        )}
      >
        {conta.diasAtraso}
      </td>
      <td className="px-2.5 text-center">
        <StatusBadge status={conta.status} />
      </td>
      <td className="whitespace-nowrap px-2.5">
        {FORMA_LABEL[conta.formaPagamento]}
      </td>
      <td className="px-2.5">{conta.responsavel}</td>
      <td className="whitespace-nowrap px-2.5 tabular-nums text-ink-2">
        {conta.ultimoPagamento ? formatDateBR(conta.ultimoPagamento) : "-"}
      </td>
      <td className="px-2.5 text-center" onClick={(e) => e.stopPropagation()}>
        <RowActionsMenu conta={conta} />
      </td>
    </tr>
  );
}
