import { CheckCircle2 } from 'lucide-react';
import { FORMA_PAGAMENTO_CONFIG } from '../../constants/formaPagamento.js';
import { formatCurrency, formatDateTime } from '../../../../shared/utils/formatters.js';

/**
 * Bloco mostrando a forma de pagamento usada e o valor pago.
 * @param {{ formaPagamento: string, valor: number, pagoEm?: string }} props
 */
export function VendaDetalhePagamento({ formaPagamento, valor, pagoEm }) {
  const config = FORMA_PAGAMENTO_CONFIG[formaPagamento];
  const Icon = config?.icon;

  return (
    <div className="mb-4">
      <p className="mb-1.5 text-xs font-medium text-cm-text-faint">Pagamento</p>
      <div className="flex items-center justify-between rounded-lg border border-cm-border bg-cm-bg/40 px-3 py-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className={`h-4 w-4 ${config.color}`} />}
          <span className="text-sm font-medium text-cm-text">{config?.label ?? formaPagamento}</span>
        </div>
        <span className="text-sm font-semibold text-cm-text">{formatCurrency(valor)}</span>
      </div>
      {pagoEm && (
        <p className="mt-1.5 flex items-center gap-1 text-[11px] text-cm-success">
          <CheckCircle2 className="h-3 w-3" /> Pago em {formatDateTime(pagoEm)}
        </p>
      )}
    </div>
  );
}

