import { FORMA_LABEL } from "../../constants";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { formatDateTimeBR } from "../../../../shared/utils/formatDate";

export function PaymentTimelineItem({ pagamento, last, index }) {
  return (
    <li
      className="relative pb-3 pl-5 last:pb-0 animate-fade-up"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      {!last && (
        <span className="absolute left-[4px] top-3 h-full w-px bg-emerald-500/40" />
      )}
      <span className="absolute left-0 top-[3px] size-[9px] rounded-full border-2 border-emerald-500 bg-surface" />
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[11px] font-semibold text-ink">
            {formatDateTimeBR(pagamento.data, pagamento.hora)}
          </p>
          <p className="text-[10.5px] text-ink-2">Pagamento recebido</p>
        </div>
        <p className="text-xs font-bold text-emerald-600 tabular-nums dark:text-emerald-400">
          {formatCurrency(pagamento.valor)}
        </p>
      </div>
      <div className="mt-0.5 flex items-center justify-between text-[10px] text-ink-3">
        <span>{FORMA_LABEL[pagamento.forma]}</span>
        <span>Responsável: {pagamento.responsavel}</span>
      </div>
    </li>
  );
}
