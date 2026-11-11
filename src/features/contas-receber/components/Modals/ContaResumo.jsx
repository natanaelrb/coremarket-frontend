import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { formatDateBR } from "../../../../shared/utils/formatDate";
import { StatusBadge } from "../List/StatusBadge";

/** Caixa de contexto exibida no topo dos modais de ação sobre uma conta. */
export function ContaResumo({ conta }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3 rounded-xl border border-line bg-surface-2/70 p-3">
      <div className="min-w-0">
        <p className="text-xs font-bold text-ink">
          #{conta.id} · {conta.clienteNome}
        </p>
        <p className="mt-0.5 text-[11px] text-ink-3">
          Vencimento {formatDateBR(conta.vencimento)}
          {conta.diasAtraso > 0 ? ` · ${conta.diasAtraso} dias de atraso` : ""}
        </p>
      </div>
      <div className="shrink-0 text-right">
        <p className="text-[10px] text-ink-3">Saldo</p>
        <p className="text-sm font-bold tabular-nums text-ink">
          {formatCurrency(conta.saldo)}
        </p>
        <StatusBadge status={conta.status} className="mt-1" />
      </div>
    </div>
  );
}
