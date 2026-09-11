import { ArrowDownCircle, ArrowUpCircle, Wallet } from 'lucide-react';
import { ChartCard } from './ChartCard.jsx';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';

/**
 * "Previsão financeira (próximos 30 dias)" card: a receber, a pagar and
 * the projected saldo, with a "Ver fluxo de caixa completo" CTA.
 * @param {{ previsao: { aReceber: number, aPagar: number, saldoProjetado: number, horizonteDias: number }|null, isLoading: boolean, onVerFluxo: () => void }} props
 */
export function PrevisaoFinanceira({ previsao, isLoading, onVerFluxo }) {
  return (
    <ChartCard title="Previsão financeira" subtitle={`(próximos ${previsao?.horizonteDias ?? 30} dias)`}>
      {isLoading ? (
        <div className="space-y-3">
          <div className="skeleton h-10 w-full rounded-lg" />
          <div className="skeleton h-10 w-full rounded-lg" />
          <div className="skeleton h-10 w-full rounded-lg" />
        </div>
      ) : (
        <div className="space-y-1">
          <Row icon={ArrowDownCircle} iconClass="text-green-600 bg-green-100 dark:bg-green-500/15 dark:text-green-400" label="A receber" value={previsao.aReceber} valueClass="text-green-600 dark:text-green-400" />
          <Row icon={ArrowUpCircle} iconClass="text-red-600 bg-red-100 dark:bg-red-500/15 dark:text-red-400" label="A pagar" value={previsao.aPagar} valueClass="text-red-600 dark:text-red-400" />
          <Row icon={Wallet} iconClass="text-brand-violet bg-violet-100 dark:bg-violet-500/15" label="Saldo projetado" value={previsao.saldoProjetado} valueClass="text-brand-violet font-bold" />
        </div>
      )}
      <Button variant="outline" size="sm" className="mt-3 w-full" onClick={onVerFluxo}>
        Ver fluxo de caixa completo
      </Button>
    </ChartCard>
  );
}

function Row({ icon: Icon, iconClass, label, value, valueClass }) {
  return (
    <div className="flex items-center justify-between rounded-lg px-2 py-2.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
      <span className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
        <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${iconClass}`}>
          <Icon className="h-4 w-4" />
        </span>
        {label}
      </span>
      <span className={`text-sm ${valueClass}`}>{formatCurrency(value)}</span>
    </div>
  );
}
