import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { cn } from "../../../../shared/utils/classNames";
import { PaymentTimelineItem } from "./PaymentTimelineItem";

export function HistoricoPagamentos({ conta }) {
  const lista = [...conta.pagamentos].sort((a, b) =>
    `${b.data}${b.hora}`.localeCompare(`${a.data}${a.hora}`),
  );
  return (
    <section>
      <h3 className="mb-2 text-[11px] font-bold text-ink">
        Histórico de pagamentos
      </h3>
      {lista.length ? (
        <ol>
          {lista.map((p, i) => (
            <PaymentTimelineItem
              key={p.id}
              pagamento={p}
              index={i}
              last={i === lista.length - 1}
            />
          ))}
        </ol>
      ) : (
        <p className="rounded-lg border border-dashed border-line p-3 text-center text-[11px] text-ink-3">
          Nenhum pagamento registrado.
        </p>
      )}
      <div className="mt-3 flex items-center justify-between border-t border-line pt-2.5 text-xs font-bold">
        <span className="text-ink">Saldo atual:</span>
        <span
          className={cn(
            "text-[14px] tabular-nums",
            conta.saldo > 0 ? "text-red-500" : "text-emerald-500",
          )}
        >
          {formatCurrency(conta.saldo)}
        </span>
      </div>
    </section>
  );
}
