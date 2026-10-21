import { TrendingDown, ReceiptText, BadgeCheck } from 'lucide-react';
import { formatCurrency } from '../../../../shared/utils/formatters.js';

/**
 * Bloco de resumo financeiro do recibo.
 */
export function VendaDetalheResumo({
  subtotal,
  descontoItens,
  descontoVenda,
  total,
}) {
  const totalDescontos = descontoItens + descontoVenda;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
          <ReceiptText className="h-4 w-4" />
        </div>

        <div>
          <p className="text-sm font-bold text-slate-800">
            Resumo financeiro
          </p>
          <p className="text-xs text-slate-500">
            Valores detalhados da venda
          </p>
        </div>
      </div>

      <div className="space-y-3 rounded-xl border border-slate-200/80 bg-white p-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-slate-500">Subtotal</span>
          <span className="text-sm font-semibold tabular-nums text-slate-800">
            {formatCurrency(subtotal)}
          </span>
        </div>

        {descontoItens > 0 && (
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-sm text-slate-600">
              <TrendingDown className="h-3.5 w-3.5 text-rose-500" />
              Descontos nos itens
            </span>

            <span className="rounded-md bg-rose-50 px-2 py-1 text-sm font-semibold tabular-nums text-rose-600">
              − {formatCurrency(descontoItens)}
            </span>
          </div>
        )}

        {descontoVenda > 0 && (
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-sm text-slate-600">
              <TrendingDown className="h-3.5 w-3.5 text-rose-500" />
              Desconto na venda
            </span>

            <span className="rounded-md bg-rose-50 px-2 py-1 text-sm font-semibold tabular-nums text-rose-600">
              − {formatCurrency(descontoVenda)}
            </span>
          </div>
        )}

        {totalDescontos > 0 && (
          <div className="flex items-center justify-between border-t border-dashed border-slate-200 pt-3">
            <span className="text-xs font-medium text-slate-500">
              Economia nesta compra
            </span>
            <span className="text-xs font-bold tabular-nums text-rose-600">
              {formatCurrency(totalDescontos)}
            </span>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden rounded-xl border border-emerald-200/80 bg-gradient-to-r from-emerald-50 via-white to-teal-50 px-4 py-4 shadow-sm">
        <div className="absolute -right-5 -top-7 h-20 w-20 rounded-full bg-emerald-100/60 blur-xl" />

        <div className="relative flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <BadgeCheck className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                Total da venda
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Valor final do pedido
              </p>
            </div>
          </div>

          <span className="shrink-0 text-xl font-extrabold tabular-nums tracking-tight text-emerald-700 sm:text-2xl">
            {formatCurrency(total)}
          </span>
        </div>
      </div>
    </div>
  );
}
