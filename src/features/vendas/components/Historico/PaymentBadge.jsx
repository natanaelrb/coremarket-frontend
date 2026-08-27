import { FORMA_PAGAMENTO_CONFIG } from '../../constants/formaPagamento.js';

/**
 * Exibe a forma de pagamento com ícone, incluindo número de parcelas quando houver.
 * @param {{ formaPagamento: string, parcelas?: number | null }} props
 */
export function PaymentBadge({ formaPagamento, parcelas }) {
  const config = FORMA_PAGAMENTO_CONFIG[formaPagamento];
  if (!config) return <span className="text-xs text-cm-text-muted">{formaPagamento}</span>;

  const Icon = config.icon;

  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-cm-text-muted">
      <Icon className={`h-3.5 w-3.5 ${config.color}`} />
      {config.label}
      {parcelas ? ` (${parcelas}x)` : ''}
    </span>
  );
}

