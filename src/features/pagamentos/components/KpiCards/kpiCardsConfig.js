import { ArrowDownCircle, ArrowUpCircle, ShoppingCart, AlertCircle, ArrowUpRight, ArrowDownLeft, Wallet, Percent } from 'lucide-react';

/**
 * Static presentation config for each KPI card — icon, accent colors and
 * how to read its value from the `kpis` hook result.
 */
export const KPI_CARDS_CONFIG = [
  {
    id: 'a-receber-hoje',
    label: 'A receber hoje',
    icon: ArrowDownCircle,
    iconBg: 'bg-green-100 text-green-600 dark:bg-green-500/15 dark:text-green-400',
    getValue: (kpis) => kpis.aReceberHoje.valor,
    getSublabel: (kpis) => `${kpis.aReceberHoje.quantidade} recebimentos previstos`,
  },
  {
    id: 'recebido-hoje',
    label: 'Recebido hoje',
    icon: ArrowUpCircle,
    iconBg: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400',
    getValue: (kpis) => kpis.recebidoHoje.valor,
    getSublabel: (kpis) => `${kpis.recebidoHoje.percentualPrevisto.toFixed(1)}% do previsto`,
  },
  {
    id: 'a-pagar-hoje',
    label: 'A pagar hoje',
    icon: ShoppingCart,
    iconBg: 'bg-orange-100 text-orange-600 dark:bg-orange-500/15 dark:text-orange-400',
    getValue: (kpis) => kpis.aPagarHoje.valor,
    getSublabel: (kpis) => `${kpis.aPagarHoje.quantidade} pagamentos`,
  },
  {
    id: 'em-atraso',
    label: 'Em atraso',
    icon: AlertCircle,
    iconBg: 'bg-red-100 text-red-600 dark:bg-red-500/15 dark:text-red-400',
    getValue: (kpis) => kpis.emAtraso.valor,
    getSublabel: (kpis) => `${kpis.emAtraso.quantidade} títulos vencidos`,
  },
  {
    id: 'recebimentos-mes',
    label: 'Recebimentos do mês',
    icon: ArrowUpRight,
    iconBg: 'bg-blue-100 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400',
    getValue: (kpis) => kpis.recebimentosMes.valor,
    getSublabel: (kpis) =>
      `${kpis.recebimentosMes.variacaoPercentual > 0 ? '+' : ''}${kpis.recebimentosMes.variacaoPercentual.toFixed(1)}% vs. mês anterior`,
    sublabelTone: (kpis) => (kpis.recebimentosMes.variacaoPercentual >= 0 ? 'positive' : 'negative'),
  },
  {
    id: 'pagamentos-mes',
    label: 'Pagamentos do mês',
    icon: ArrowDownLeft,
    iconBg: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
    getValue: (kpis) => kpis.pagamentosMes.valor,
    getSublabel: (kpis) =>
      `${kpis.pagamentosMes.variacaoPercentual > 0 ? '+' : ''}${kpis.pagamentosMes.variacaoPercentual.toFixed(1)}% vs. mês anterior`,
    sublabelTone: (kpis) => (kpis.pagamentosMes.variacaoPercentual <= 0 ? 'positive' : 'negative'),
  },
  {
    id: 'saldo-previsto',
    label: 'Saldo previsto',
    icon: Wallet,
    iconBg: 'bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400',
    getValue: (kpis) => kpis.saldoPrevisto.valor,
    getSublabel: () => 'Recebimentos - Pagamentos',
  },
  {
    id: 'taxas-pagamento',
    label: 'Taxas de pagamento',
    icon: Percent,
    iconBg: 'bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/15 dark:text-fuchsia-400',
    getValue: (kpis) => kpis.taxasPagamento.valor,
    getSublabel: () => 'Taxas de cartão, Pix, etc.',
  },
];
