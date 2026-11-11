import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { formatDateBR } from "../../../../shared/utils/formatDate";
import { cn } from "../../../../shared/utils/classNames";

const Row = ({ label, value, tone }) => (
  <div className="flex items-center justify-between gap-3 py-[3px] text-[11px]">
    <span className="text-ink-2">{label}</span>
    <span className={cn("font-semibold tabular-nums text-ink", tone)}>
      {value}
    </span>
  </div>
);

export function FinanceiroInfo({ conta }) {
  return (
    <div className="rounded-lg border border-line bg-surface-2/60 p-3">
      <h3 className="mb-1.5 text-[11px] font-bold text-ink">
        Informações financeiras
      </h3>
      <Row label="Valor original" value={formatCurrency(conta.valorOriginal)} />
      {conta.desconto > 0 && (
        <Row
          label="Desconto negociado"
          value={`- ${formatCurrency(conta.desconto)}`}
          tone="text-violet-500"
        />
      )}
      <Row
        label="Valor pago"
        value={formatCurrency(conta.valorPago)}
        tone="text-emerald-600 dark:text-emerald-400"
      />
      <Row
        label="Saldo restante"
        value={formatCurrency(conta.saldo)}
        tone={
          conta.saldo > 0
            ? "text-red-500"
            : "text-emerald-600 dark:text-emerald-400"
        }
      />
      <Row label="Vencimento" value={formatDateBR(conta.vencimento)} />
      <Row
        label="Dias em atraso"
        value={`${conta.diasAtraso} dias`}
        tone={conta.diasAtraso > 0 ? "text-red-500" : undefined}
      />
    </div>
  );
}
