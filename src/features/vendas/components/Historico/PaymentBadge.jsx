import { FORMA_PAGAMENTO_CONFIG } from '../../constants/formaPagamento.js';

/**
 * Exibe a forma de pagamento com ícone, incluindo número de parcelas quando houver.
 * @param {{ formaPagamento: string, parcelas?: number | null }} props
 */
export function PaymentBadge({ formaPagamento, parcelas }) {
  const config = FORMA_PAGAMENTO_CONFIG[formaPagamento];

  if (!config) {
    return (
      <span className="inline-flex max-w-[10rem] items-center rounded-lg border border-cm-border bg-cm-bg/60 px-2.5 py-1 text-xs text-cm-text-muted">
        <span className="truncate">{formaPagamento}</span>
      </span>
    );
  }

  const Icon = config.icon;

  return (
    <span className="inline-flex max-w-[12rem] items-center gap-1.5 rounded-lg border border-cm-border bg-cm-bg/60 px-2.5 py-1.5 text-xs font-medium text-cm-text">
      <Icon className={`h-3.5 w-3.5 shrink-0 ${config.color}`} />

      <span className="truncate">{config.label}</span>

      {parcelas != null && parcelas > 0 && (
        <span className="shrink-0 rounded-md bg-cm-surface-hover px-1.5 py-0.5 text-[10px] font-semibold tabular-nums text-cm-text-muted">
          {parcelas}x
        </span>
      )}
    </span>
  );
}
