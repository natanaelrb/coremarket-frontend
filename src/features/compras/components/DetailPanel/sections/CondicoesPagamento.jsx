import { CreditCard, CalendarDays, Clock3 } from "lucide-react";
import { formatCurrency, formatDate } from "../../../utils/formatters";
import {
  FORMA_PAGAMENTO_LABELS,
  PARCELA_STATUS_LABELS,
} from "../../../constants/paymentMethods";

const PARCELA_STATUS_TONE = {
  pendente:
    "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-400",
  paga:
    "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-400",
  atrasada:
    "border-red-200 bg-red-50 text-red-700 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-400",
};

function PaymentInfo({ label, value, icon: Icon }) {
  return (
    <div className="flex min-w-0 items-start gap-3 rounded-xl border border-slate-200/70 bg-slate-50/70 p-4 dark:border-white/[0.06] dark:bg-white/[0.025]">
      {Icon && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
          <Icon size={17} strokeWidth={1.8} />
        </div>
      )}

      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <p className="mt-1 break-words text-sm font-semibold text-slate-800 dark:text-slate-100">
          {value || "Não informado"}
        </p>
      </div>
    </div>
  );
}

export function CondicoesPagamento({ detalhe }) {
  const condicoes = detalhe.condicoesPagamento ?? {};
  const parcelas = detalhe.parcelas ?? [];

  const formaPagamento =
    FORMA_PAGAMENTO_LABELS[condicoes.forma] ??
    condicoes.forma ??
    "Não informado";

  return (
    <section className="min-w-0">
      <div className="mb-1 flex items-start gap-3">
      </div>

      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <PaymentInfo
          label="Forma de pagamento"
          value={formaPagamento}
          icon={CreditCard}
        />

        <PaymentInfo
          label="Número de parcelas"
          value={
            condicoes.parcelas != null
              ? `${condicoes.parcelas}x`
              : null
          }
          icon={CalendarDays}
        />

        {condicoes.intervalo > 0 && (
          <PaymentInfo
            label="Intervalo entre parcelas"
            value={`${condicoes.intervalo} dias`}
            icon={Clock3}
          />
        )}

        {condicoes.primeiroVencimento && (
          <PaymentInfo
            label="Primeiro vencimento"
            value={formatDate(condicoes.primeiroVencimento)}
            icon={CalendarDays}
          />
        )}
      </div>

      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h5 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
            Cronograma de parcelas
          </h5>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Acompanhe vencimentos, valores e pagamentos.
          </p>
        </div>

        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
          {parcelas.length} {parcelas.length === 1 ? "parcela" : "parcelas"}
        </span>
      </div>

      {parcelas.length > 0 ? (
        <div className="overflow-hidden rounded-xl border border-slate-200/80 dark:border-white/[0.08]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-white/[0.035]">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Parcela
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Vencimento
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Valor
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {parcelas.map((parcela) => {
                  const statusTone =
                    PARCELA_STATUS_TONE[parcela.status] ??
                    "border-slate-200 bg-slate-100 text-slate-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300";

                  return (
                    <tr
                      key={parcela.numero}
                      className="border-t border-slate-100 transition-colors hover:bg-slate-50/80 dark:border-white/[0.06] dark:hover:bg-white/[0.025]"
                    >
                      <td className="px-4 py-3.5 font-medium text-slate-700 dark:text-slate-200">
                        <span className="inline-flex rounded-lg bg-slate-100 px-2 py-1 text-xs dark:bg-white/[0.06]">
                          {parcela.numero}/{parcela.total}
                        </span>
                      </td>

                      <td className="px-4 py-3.5 text-slate-600 dark:text-slate-300">
                        {parcela.vencimento
                          ? formatDate(parcela.vencimento)
                          : "Não informado"}
                      </td>

                      <td className="px-4 py-3.5 text-right font-semibold tabular-nums text-slate-800 dark:text-slate-100">
                        {formatCurrency(Number(parcela.valor ?? 0))}
                      </td>

                      <td className="px-4 py-3.5 text-right">
                        <span
                          className={`inline-flex whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-semibold ${
                            statusTone
                          }`}
                        >
                          {PARCELA_STATUS_LABELS[parcela.status] ??
                            parcela.status ??
                            "Não informado"}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 px-5 py-8 text-center dark:border-white/10">
          <CalendarDays
            size={24}
            className="mx-auto mb-2 text-slate-400"
            strokeWidth={1.6}
          />
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Nenhuma parcela cadastrada
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            As parcelas desta compra aparecerão aqui quando estiverem disponíveis.
          </p>
        </div>
      )}
    </section>
  );
}
