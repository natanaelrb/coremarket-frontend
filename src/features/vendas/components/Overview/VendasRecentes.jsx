import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";

import { listarVendas } from "../../services/vendaStorage.js";
import { formatCurrency } from "../../../../shared/utils/formatters.js";

function formatarData(dataHora) {
  const data = new Date(dataHora);

  if (Number.isNaN(data.getTime())) return "Data inválida";

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(data);
}

const STATUS_CLASSES = {
  CONCLUIDA:
    "bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400",
  CANCELADA:
    "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400",
  PENDENTE:
    "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
  EM_ANDAMENTO:
    "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400",
};

const STATUS_LABELS = {
  CONCLUIDA: "Concluída",
  CANCELADA: "Cancelada",
  PENDENTE: "Pendente",
  EM_ANDAMENTO: "Em andamento",
};

export function VendasRecentes() {
  const [vendasRecentes] = useState(() =>
  [...listarVendas()]
    .sort(
      (a, b) => new Date(b.dataHora) - new Date(a.dataHora),
    )
    .slice(0, 5),
);

  return (
    <section className="overflow-hidden rounded-2xl border border-cm-border bg-white shadow-sm dark:bg-cm-surface">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cm-border px-5 py-4">
        <div>
          <h2 className="text-base font-bold text-cm-text">
            Vendas recentes
          </h2>
          <p className="mt-1 text-sm text-cm-text-muted">
            Últimas movimentações registradas
          </p>
        </div>

        <Link
          to="/vendas/historico"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cm-primary transition-colors hover:opacity-80"
        >
          Ver histórico
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[650px] text-left">
          <thead>
            <tr className="border-b border-cm-border bg-cm-bg/60 text-xs font-semibold uppercase tracking-wide text-cm-text-muted">
              <th className="px-5 py-3">Venda</th>
              <th className="px-5 py-3">Cliente</th>
              <th className="px-5 py-3">Data e hora</th>
              <th className="px-5 py-3">Pagamento</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Total</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-cm-border">
            {vendasRecentes.map((venda) => (
              <tr
                key={venda.id}
                className="transition-colors hover:bg-cm-bg/50"
              >
                <td className="px-5 py-4 text-sm font-semibold text-cm-text">
                  {venda.numero}
                </td>

                <td className="px-5 py-4 text-sm text-cm-text">
                  {venda.clienteNome || "Consumidor"}
                </td>

                <td className="px-5 py-4 text-sm text-cm-text-muted">
                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={14} />
                    {formatarData(venda.dataHora)}
                  </span>
                </td>

                <td className="px-5 py-4 text-sm text-cm-text">
                  {venda.formaPagamento
                    ? venda.formaPagamento
                    : "Não informado"}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                      STATUS_CLASSES[venda.status] ??
                      "bg-cm-bg text-cm-text-muted"
                    }`}
                  >
                    {STATUS_LABELS[venda.status] ?? venda.status}
                  </span>
                </td>

                <td className="px-5 py-4 text-right text-sm font-bold text-cm-text">
                  {formatCurrency(venda.total)}
                </td>
              </tr>
            ))}

            {vendasRecentes.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-5 py-10 text-center text-sm text-cm-text-muted"
                >
                  Nenhuma venda registrada ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="border-t border-cm-border px-5 py-3 text-center sm:hidden">
        <Link
          to="/vendas/historico"
          className="text-sm font-semibold text-cm-primary"
        >
          Consultar todas as vendas
        </Link>
      </div>
    </section>
  );
}

export default VendasRecentes;
