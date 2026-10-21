import { CheckCircle2, CreditCard } from 'lucide-react';
import { FORMA_PAGAMENTO_CONFIG } from '../../constants/formaPagamento.js';
import {
  formatCurrency,
  formatDateTime,
} from '../../../../shared/utils/formatters.js';

/**
 * Bloco mostrando a forma de pagamento usada e o valor pago.
 */
export function VendaDetalhePagamento({ formaPagamento, valor, pagoEm }) {
  const config = FORMA_PAGAMENTO_CONFIG[formaPagamento];
  const Icon = config?.icon ?? CreditCard;
  const iconColor = config?.color ?? 'text-slate-500';

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
          <CreditCard className="h-4 w-4" />
        </div>

        <div>
          <p className="text-sm font-bold text-slate-800">
            Detalhes do pagamento
          </p>
          <p className="text-xs text-slate-500">
            Forma utilizada e valor da operação
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:border-sky-200 hover:shadow-sm">
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-sky-400 to-emerald-400" />

        <div className="flex items-center justify-between gap-3 pl-2">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
              <Icon className={`h-5 w-5 ${iconColor}`} />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Forma de pagamento
              </p>

              <p className="mt-1 truncate text-sm font-bold text-slate-800">
                {config?.label ?? formaPagamento}
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Valor
            </p>
            <p className="mt-1 whitespace-nowrap text-lg font-extrabold tabular-nums tracking-tight text-slate-800">
              {formatCurrency(valor)}
            </p>
          </div>
        </div>
      </div>

      {pagoEm && (
        <div className="flex items-start gap-3 rounded-xl border border-emerald-200/80 bg-emerald-50/80 p-3.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
            <CheckCircle2 className="h-4 w-4" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-xs font-bold text-emerald-800">
                Pagamento confirmado
              </p>

              <span className="rounded-full border border-emerald-200 bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-700">
                Confirmado
              </span>
            </div>

            <p className="mt-1.5 text-xs text-slate-600">
              {formatDateTime(pagoEm)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
