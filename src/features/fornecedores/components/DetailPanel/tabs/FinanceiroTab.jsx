import { formatCurrency } from "../../../../../shared/utils/formatters.js";

export default function FinanceiroTab({ detalhe }) {
  const indicadores = detalhe?.indicadores;

  if (!indicadores) {
    return (
      <div className="flex min-h-40 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-500 dark:border-[#252a4a] dark:bg-[#0f1230] dark:text-slate-400">
        Nenhuma informação financeira disponível para este fornecedor.
      </div>
    );
  }

  const cards = [
    {
      label: "Total Gasto",
      value: indicadores.totalGasto,
      color: "text-slate-800 dark:text-slate-100",
    },
    {
      label: "Ticket Médio",
      value: indicadores.ticketMedio,
      color: "text-sky-600 dark:text-sky-400",
    },
    {
      label: "Maior Compra",
      value: indicadores.maiorCompra,
      color: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  return (
    <div className="animate-fade-in space-y-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.label}
            className="
              rounded-xl border border-slate-200/80 bg-white p-4
              shadow-sm shadow-slate-900/[0.02]
              dark:border-[#252a4a] dark:bg-[#141833] dark:shadow-black/10
            "
          >
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {card.label}
            </p>

            <p
              className={`mt-2 break-words text-base font-bold tabular-nums ${card.color}`}
            >
              {formatCurrency(card.value ?? 0)}
            </p>
          </article>
        ))}
      </div>

      <section
        className="
          rounded-xl border border-slate-200/80 bg-white p-4
          shadow-sm shadow-slate-900/[0.02]
          dark:border-[#252a4a] dark:bg-[#141833] dark:shadow-black/10
        "
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            Situação de Pagamentos
          </h4>

          <span className="rounded-lg bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
            Atenção
          </span>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-slate-500 dark:text-slate-400">
            Pedidos pendentes
          </span>

          <span className="font-semibold tabular-nums text-amber-600 dark:text-amber-400">
            {indicadores.pedidosPendentes ?? 0}
          </span>
        </div>
      </section>
    </div>
  );
}