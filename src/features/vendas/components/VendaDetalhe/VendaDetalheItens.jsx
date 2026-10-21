import { Package } from 'lucide-react';
import { formatCurrency } from '../../../../shared/utils/formatters.js';

/**
 * Lista compacta de itens exibida no recibo/detalhe da venda.
 * @param {{ itens: { nome: string, quantidade: number, subtotal: number }[] }} props
 */
export function VendaDetalheItens({ itens }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-100 text-teal-700">
            <Package className="h-3.5 w-3.5" />
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Produtos
          </span>
        </div>

        <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] font-semibold text-slate-500">
          {itens.length} {itens.length === 1 ? 'item' : 'itens'}
        </span>
      </div>

      <ul className="divide-y divide-slate-100 px-3.5">
        {itens.map((item, index) => (
          <li
            key={`${item.nome}-${index}`}
            className="group flex items-center justify-between gap-3 py-3 transition-colors duration-200 hover:bg-emerald-50/40"
          >
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-8 min-w-8 shrink-0 items-center justify-center rounded-lg border border-emerald-200/80 bg-emerald-50 px-2 text-xs font-bold tabular-nums text-emerald-700 transition-colors group-hover:bg-emerald-100">
                {item.quantidade}x
              </span>

              <span className="min-w-0 break-words text-sm font-medium text-slate-700">
                {item.nome}
              </span>
            </div>

            <span className="shrink-0 text-sm font-bold tabular-nums text-slate-800">
              {formatCurrency(item.subtotal)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
