import { Button } from '../../../../shared/components/ui/Button.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';

/**
 * "Resumo rápido" sidebar footer widget: vendas/recebimentos/pagamentos
 * hoje + saldo do caixa, matching the reference screenshot's left rail.
 * @param {{ resumo: { vendasHoje:number, recebimentosHoje:number, pagamentosHoje:number, saldoCaixa:number }, onIrParaCaixa: () => void }} props
 */
export function ResumoRapido({ resumo, onIrParaCaixa }) {
  return (
    <div className="space-y-3">
      <p className="px-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Resumo rápido</p>
      <SummaryLine label="Vendas hoje" value={resumo.vendasHoje} valueClass="text-white" />
      <SummaryLine label="Recebimentos hoje" value={resumo.recebimentosHoje} valueClass="text-green-400" />
      <SummaryLine label="Pagamentos hoje" value={resumo.pagamentosHoje} valueClass="text-red-400" />
      <SummaryLine label="Saldo do caixa" value={resumo.saldoCaixa} valueClass="text-white" />
      <Button variant="outline" size="sm" className="w-full border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" onClick={onIrParaCaixa}>
        Ir para o caixa
      </Button>
    </div>
  );
}

function SummaryLine({ label, value, valueClass }) {
  return (
    <div className="px-1">
      <p className="text-xs text-slate-400">{label}</p>
      <p className={`text-sm font-bold ${valueClass}`}>{formatCurrency(value)}</p>
    </div>
  );
}
