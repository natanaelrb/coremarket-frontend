import {
  ArrowUpRight,
  Banknote,
  ShoppingCart,
  TrendingDown,
  Wallet,
} from 'lucide-react';

import { Button } from '../../../../shared/components/ui/Button.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';

/**
 * Widget de resumo financeiro diário do CoreMarket.
 */
export function ResumoRapido({ resumo, onIrParaCaixa }) {
  const indicadores = [
    {
      label: 'Vendas hoje',
      value: resumo?.vendasHoje ?? 0,
      icon: ShoppingCart,
      variant: 'neutral',
    },
    {
      label: 'Recebimentos hoje',
      value: resumo?.recebimentosHoje ?? 0,
      icon: Banknote,
      variant: 'success',
    },
    {
      label: 'Pagamentos hoje',
      value: resumo?.pagamentosHoje ?? 0,
      icon: TrendingDown,
      variant: 'danger',
    },
    {
      label: 'Saldo do caixa',
      value: resumo?.saldoCaixa ?? 0,
      icon: Wallet,
      variant: 'primary',
    },
  ];

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900">
      <header className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-4 dark:border-white/[0.07]">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Resumo rápido
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Visão financeira do dia
          </p>
        </div>

        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
          <Wallet size={18} />
        </span>
      </header>

      <div className="space-y-1 p-3">
        {indicadores.map((item) => (
          <SummaryLine key={item.label} {...item} />
        ))}
      </div>

      <div className="px-4 pb-4">
        <Button
          variant="outline"
          size="sm"
          className="group w-full justify-center gap-2 border-emerald-200 text-emerald-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50 dark:border-emerald-500/20 dark:text-emerald-400 dark:hover:bg-emerald-500/10"
          onClick={onIrParaCaixa}
        >
          <span>Ir para o caixa</span>
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Button>
      </div>
    </section>
  );
}

function SummaryLine({ label, value, icon: Icon, variant }) {
  const styles = {
    neutral: {
      icon: 'bg-slate-100 text-slate-600 dark:bg-white/[0.07] dark:text-slate-300',
      value: 'text-slate-900 dark:text-white',
    },
    success: {
      icon: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
      value: 'text-emerald-700 dark:text-emerald-400',
    },
    danger: {
      icon: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
      value: 'text-rose-700 dark:text-rose-400',
    },
    primary: {
      icon: 'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400',
      value: 'text-slate-900 dark:text-white',
    },
  };

  const style = styles[variant] ?? styles.neutral;

  return (
    <div className="flex items-center gap-3 rounded-xl px-2.5 py-3 transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.03]">
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${style.icon}`}
      >
        <Icon size={17} strokeWidth={1.9} />
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <p className={`mt-0.5 break-words text-sm font-bold tracking-tight ${style.value}`}>
          {formatCurrency(value)}
        </p>
      </div>
    </div>
  );
}
