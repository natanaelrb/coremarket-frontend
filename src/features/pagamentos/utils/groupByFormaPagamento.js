import { FORMA_PAGAMENTO_META } from '../constants/formaPagamento.js';

/**
 * Groups pagamentos by `forma` and totals their value — feeds the donut
 * chart "Distribuição por forma de pagamento".
 * @param {import('../types/pagamento.types.js').Pagamento[]} pagamentos
 * @returns {{ forma: string, label: string, color: string, valor: number, percentual: number }[]}
 */
export function groupByFormaPagamento(pagamentos) {
  const totals = new Map();

  for (const p of pagamentos) {
    totals.set(p.forma, (totals.get(p.forma) ?? 0) + p.valor);
  }

  const grandTotal = [...totals.values()].reduce((acc, v) => acc + v, 0);

  return [...totals.entries()]
    .map(([forma, valor]) => ({
      forma,
      label: FORMA_PAGAMENTO_META[forma]?.label ?? forma,
      color: FORMA_PAGAMENTO_META[forma]?.color ?? '#94A3B8',
      valor,
      percentual: grandTotal > 0 ? (valor / grandTotal) * 100 : 0,
    }))
    .sort((a, b) => b.valor - a.valor);
}
