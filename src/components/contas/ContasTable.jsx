import { Wallet, Clock } from "lucide-react";

function formatMoeda(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatData(data) {
  if (!data) return "—";
  return new Date(data).toLocaleDateString("pt-BR");
}

function isVencida(dataVencimento) {
  if (!dataVencimento) return false;
  return new Date(dataVencimento) < new Date();
}

const STATUS_MAP = {
  PENDENTE: {
    label: "Pendente",
    className:
      "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-500/20",
  },
  PARCIAL: {
    label: "Parcial",
    className:
      "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-500/20",
  },
  VENCIDO: {
    label: "Vencido",
    className:
      "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-100 dark:border-red-500/20",
  },
};

function SkeletonRow() {
  return (
    <tr>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <td key={i} className="px-4 py-3">
          <div className="h-4 bg-slate-100 dark:bg-white/8 rounded animate-pulse" />
        </td>
      ))}
    </tr>
  );
}

export default function ContasTable({ compras, onPagar, loading = false }) {
  if (loading) {
    return (
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 dark:border-white/8 bg-slate-50/60 dark:bg-white/3">
              {[
                "Cliente",
                "Total",
                "Pago",
                "Saldo devedor",
                "Vencimento",
                "Status",
                "",
              ].map((h) => (
                <th
                  key={h}
                  className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((i) => (
              <SkeletonRow key={i} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (compras.length === 0) {
    return (
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 flex flex-col items-center justify-center py-16 text-center animate-fade-in">
        <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-500/15 rounded-full flex items-center justify-center mb-3">
          <Wallet
            size={20}
            className="text-emerald-500 dark:text-emerald-400"
          />
        </div>
        <p className="text-sm font-medium text-slate-600 dark:text-[var(--sidebar-text)]/75">
          Nenhuma conta pendente
        </p>
        <p className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/35 mt-1">
          Todos os pagamentos estão em dia.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 overflow-hidden animate-fade-in">
      <table className="w-full min-w-[650px]">
        <thead>
          <tr className="border-b border-slate-100 dark:border-white/8 bg-slate-50/60 dark:bg-white/3">
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Cliente
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Total
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Pago
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Saldo devedor
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Vencimento
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Status
            </th>
            <th className="px-4 py-3 w-36" />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50 dark:divide-white/5">
          {compras.map((compra) => {
            const vencida = isVencida(compra.dataVencimento);
            const statusKey = vencida
              ? "VENCIDO"
              : compra.statusPagamento || "PENDENTE";
            const status = STATUS_MAP[statusKey] || STATUS_MAP.PENDENTE;
            const saldo = Number(compra.saldoDevedor || 0);
            const progressoPago =
              compra.valorTotal > 0
                ? (Number(compra.valorPago || 0) / Number(compra.valorTotal)) *
                  100
                : 0;

            return (
              <tr
                key={compra.id}
                className="hover:bg-slate-50/60 dark:hover:bg-white/3 transition group"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-violet-50 dark:bg-violet-500/15 flex items-center justify-center text-[11px] font-semibold text-violet-600 dark:text-violet-400 flex-shrink-0">
                      {(compra.nomeCliente || compra.cliente?.nome || "?")
                        .charAt(0)
                        .toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-slate-800 dark:text-[var(--sidebar-text)]/90">
                      {compra.nomeCliente || compra.cliente?.nome || "—"}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-slate-600 dark:text-[var(--sidebar-text)]/60">
                    {formatMoeda(compra.valorTotal)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    {formatMoeda(compra.valorPago)}
                  </span>
                  <div className="w-20 h-1 bg-slate-100 dark:bg-white/8 rounded-full mt-1">
                    <div
                      className="h-1 bg-emerald-400 rounded-full transition-all"
                      style={{ width: `${Math.min(progressoPago, 100)}%` }}
                    />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm font-semibold text-red-600 dark:text-red-400">
                    {formatMoeda(saldo)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div
                    className={`flex items-center gap-1.5 text-sm ${vencida ? "text-red-600 dark:text-red-400" : "text-slate-500 dark:text-[var(--sidebar-text)]/45"}`}
                  >
                    {vencida && <Clock size={12} />}
                    {formatData(compra.dataVencimento)}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${status.className}`}
                  >
                    {status.label}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => onPagar(compra)}
                    className="px-3 py-1.5 text-xs font-medium bg-violet-50 dark:bg-violet-500/15 text-violet-700 dark:text-violet-400 border border-violet-100 dark:border-violet-500/25 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-500/25 transition"
                  >
                    Registrar pagamento
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="px-4 py-3 border-t border-slate-100 dark:border-white/8 bg-slate-50/40 dark:bg-white/3">
        <p className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/35">
          {compras.length} conta{compras.length !== 1 ? "s" : ""} em aberto
        </p>
      </div>
    </div>
  );
}
