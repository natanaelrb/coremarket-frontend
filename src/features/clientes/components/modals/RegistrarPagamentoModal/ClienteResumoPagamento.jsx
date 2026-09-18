import Avatar from "../../../../../shared/components/data-display/Avatar.jsx";
import { formatCurrency } from "../../../../../shared/utils/formatCurrency.js";

/** Mini client summary shown at the top of the "Registrar pagamento" modal. */
export function ClienteResumoPagamento({ cliente }) {
  return (
    <div
      className="
        mb-4
        flex items-center gap-3
        border-b border-slate-200
        pb-4
        dark:border-white/10
      "
    >
      <Avatar name={cliente.nome} size="md" />

      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-[#0f172a] dark:text-white">
          {cliente.nome}
        </p>

        <p className="text-xs text-[#64748b] dark:text-slate-400">
          {cliente.id}
        </p>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-xs text-[#64748b] dark:text-slate-400">
          Saldo atual
        </p>

        <p className="font-semibold text-[#dc2626] dark:text-[#f87171]">
          {formatCurrency(cliente.emAberto)}
        </p>
      </div>
    </div>
  );
}