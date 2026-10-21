import { Wallet } from 'lucide-react';
import { formatCurrency } from '../../../../shared/utils/formatters.js';

export function TotalDisplay({ total }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-green-200 bg-green-50/70 p-4">
      <div className="pointer-events-none absolute -right-6 -top-8 h-24 w-24 rounded-full bg-green-200/40 blur-2xl" />

      <div className="relative">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-[#16a34a]">
            <Wallet className="h-4 w-4" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-green-700">
              Total da venda
            </p>
            <p className="mt-0.5 text-[11px] text-slate-500">
              Valor final do pedido
            </p>
          </div>
        </div>

        <div className="mt-3 border-t border-green-200 pt-3">
          <p className="break-words text-2xl font-bold leading-tight tracking-tight text-[#16a34a] tabular-nums sm:text-2xl">
            {formatCurrency(total)}
          </p>
        </div>
      </div>
    </div>
  );
}
