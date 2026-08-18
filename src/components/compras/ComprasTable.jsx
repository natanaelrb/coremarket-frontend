import { useState } from "react";
import {
  MoreHorizontal,
  Pencil,
  Trash2,
  ShoppingCart,
  Eye,
} from "lucide-react";

const STATUS_COMPRA = {
  PENDENTE: {
    label: "Pendente",
    className:
      "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-500/20",
  },
  ENTREGUE: {
    label: "Entregue",
    className:
      "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20",
  },
  CANCELADA: {
    label: "Cancelada",
    className:
      "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-100 dark:border-red-500/20",
  },
  EM_TRANSITO: {
    label: "Em trânsito",
    className:
      "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-500/20",
  },
};

const STATUS_PAGAMENTO = {
  PAGO: {
    label: "Pago",
    className:
      "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20",
  },
  PENDENTE: {
    label: "Pendente",
    className:
      "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-500/20",
  },
  VENCIDO: {
    label: "Vencido",
    className:
      "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-100 dark:border-red-500/20",
  },
  PARCIAL: {
    label: "Parcial",
    className:
      "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-500/20",
  },
};

const FORMA_PAGAMENTO = {
  DINHEIRO: "Dinheiro",
  CARTAO: "Cartão",
  PIX: "Pix",
  FIADO: "Fiado",
  TRANSFERENCIA: "Transferência",
};

function ActionsMenu({ onEditar, onExcluir, onVer }) {
  const [aberto, setAberto] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setAberto(!aberto)}
        className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 dark:text-[var(--sidebar-text)]/35 hover:text-slate-600 dark:hover:text-slate-900 dark:text-slate-600 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/8 transition"
      >
        <MoreHorizontal size={15} />
      </button>
      {aberto && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setAberto(false)}
          />
          <div className="absolute right-0 top-8 z-20 bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-200 dark:border-white/10 rounded-xl shadow-lg py-1 w-40 animate-scale-in">
            {onVer && (
              <button
                onClick={() => {
                  setAberto(false);
                  onVer();
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-900 dark:text-slate-600 dark:text-white/70 hover:bg-slate-50 dark:hover:bg-white/8 transition"
              >
                <Eye size={13} /> Detalhes
              </button>
            )}
            <button
              onClick={() => {
                setAberto(false);
                onEditar();
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-900 dark:text-slate-600 dark:text-white/70 hover:bg-slate-50 dark:hover:bg-white/8 transition"
            >
              <Pencil size={13} /> Editar
            </button>
            <button
              onClick={() => {
                setAberto(false);
                onExcluir();
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition"
            >
              <Trash2 size={13} /> Excluir
            </button>
          </div>
        </>
      )}
    </div>
  );
}

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

function formatData(dataStr) {
  if (!dataStr) return "—";
  return new Date(dataStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatMoeda(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function ComprasTable({
  compras,
  onEditar,
  onExcluir,
  onVer,
  loading = false,
}) {
  if (loading) {
    return (
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 dark:border-white/8 bg-slate-50/60 dark:bg-white/3">
              {[
                "#",
                "Cliente",
                "Valor total",
                "Saldo devedor",
                "Pagamento",
                "Status",
                "Data",
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
            {[1, 2, 3, 4, 5].map((i) => (
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
        <div className="w-12 h-12 bg-slate-100 dark:bg-white/8 rounded-full flex items-center justify-center mb-3">
          <ShoppingCart
            size={20}
            className="text-slate-400 dark:text-[var(--sidebar-text)]/35"
          />
        </div>
        <p className="text-sm font-medium text-slate-600 dark:text-[var(--sidebar-text)]/75">
          Nenhuma compra encontrada
        </p>
        <p className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/35 mt-1">
          Registre uma nova compra para começar.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 overflow-hidden animate-fade-in">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="border-b border-slate-100 dark:border-white/8 bg-slate-50/60 dark:bg-white/3">
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              #
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Cliente
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Valor total
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Saldo devedor
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Pagamento
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Status
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Data
            </th>
            <th className="px-4 py-3 w-10" />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50 dark:divide-white/5">
          {compras.map((compra) => {
            const statusC = STATUS_COMPRA[compra.status] || {
              label: compra.status,
              className:
                "bg-slate-100 dark:bg-white/8 text-slate-600 dark:text-[var(--sidebar-text)]/60 border-slate-200 dark:border-white/15",
            };
            const statusP = STATUS_PAGAMENTO[compra.statusPagamento] || {
              label: compra.statusPagamento,
              className:
                "bg-slate-100 dark:bg-white/8 text-slate-600 dark:text-[var(--sidebar-text)]/60 border-slate-200 dark:border-white/15",
            };
            const saldo = Number(compra.saldoDevedor || 0);

            return (
              <tr
                key={compra.id}
                className="hover:bg-slate-50/60 dark:hover:bg-white/3 transition group"
              >
                <td className="px-4 py-3">
                  <span className="text-xs font-mono text-slate-400 dark:text-[var(--sidebar-text)]/35">
                    #{compra.id}
                  </span>
                </td>
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
                  <span className="text-sm font-semibold text-slate-800 dark:text-[var(--sidebar-text)]/90">
                    {formatMoeda(compra.valorTotal)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-sm font-semibold ${saldo > 0 ? "text-red-600 dark:text-red-400" : "text-emerald-600 dark:text-emerald-400"}`}
                  >
                    {formatMoeda(saldo)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="space-y-1">
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-full border block w-fit ${statusP.className}`}
                    >
                      {statusP.label}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-[var(--sidebar-text)]/35">
                      {FORMA_PAGAMENTO[compra.formaPagamento] ||
                        compra.formaPagamento ||
                        "—"}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${statusC.className}`}
                  >
                    {statusC.label}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-xs text-slate-500 dark:text-[var(--sidebar-text)]/45">
                    {formatData(compra.dataCompra)}
                  </span>
                  {compra.dataVencimento && (
                    <p className="text-[11px] text-slate-400 dark:text-[var(--sidebar-text)]/35">
                      Venc. {formatData(compra.dataVencimento)}
                    </p>
                  )}
                </td>
                <td className="px-4 py-3 text-right">
                  <ActionsMenu
                    onVer={() => onVer?.(compra)}
                    onEditar={() => onEditar(compra)}
                    onExcluir={() => onExcluir(compra.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="px-4 py-3 border-t border-slate-100 dark:border-white/8 bg-slate-50/40 dark:bg-white/3">
        <p className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/35">
          {compras.length} compra{compras.length !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
