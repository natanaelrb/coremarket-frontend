import { Boxes, FileStack, FileCheck2, CheckCircle2, ArrowRight } from "lucide-react";
import { formatCurrency, formatDateTime } from "../../../utils/formatters";

export function Integracoes({ detalhe }) {
  const { integracoes } = detalhe;

  return (
    <div>
      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">Integrações</h4>
      <div className="grid grid-cols-3 gap-2">
        <IntegracaoCard
          icon={Boxes}
          title="Estoque"
          active={integracoes.estoque.entradaRealizada}
          activeLabel="Entrada realizada"
          lines={[integracoes.estoque.codigoEntrada, integracoes.estoque.data ? formatDateTime(integracoes.estoque.data) : ""]}
          actionLabel="Ver detalhes"
        />
        <IntegracaoCard
          icon={FileStack}
          title="Contas a pagar"
          active={integracoes.contasAPagar.parcelasGeradas > 0}
          activeLabel={`${integracoes.contasAPagar.parcelasGeradas} parcelas geradas`}
          lines={[`Total: ${formatCurrency(integracoes.contasAPagar.total)}`]}
          actionLabel="Ver títulos"
        />
        <IntegracaoCard
          icon={FileCheck2}
          title="Nota fiscal"
          active={integracoes.notaFiscal.emitida}
          activeLabel={`NF: ${integracoes.notaFiscal.numero}`}
          lines={[`Série: ${integracoes.notaFiscal.serie}`]}
          actionLabel="Ver detalhes"
        />
      </div>
    </div>
  );
}

function IntegracaoCard({ icon: Icon, title, active, activeLabel, lines, actionLabel }) {
  return (
    <div className="rounded-xl border border-slate-100 dark:border-white/5 p-2.5 bg-slate-50/50 dark:bg-white/[0.02]">
      <div className="flex items-center gap-1.5 mb-1.5">
        <Icon className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
        <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300">{title}</span>
      </div>
      {active && (
        <div className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium mb-1">
          <CheckCircle2 className="w-2.5 h-2.5" />
          {activeLabel}
        </div>
      )}
      {lines.filter(Boolean).map((line) => (
        <p key={line} className="text-[10px] text-slate-400 dark:text-slate-500 truncate">
          {line}
        </p>
      ))}
      <button className="inline-flex items-center gap-0.5 text-[10px] font-medium text-violet-600 dark:text-violet-400 hover:underline mt-1">
        {actionLabel}
        <ArrowRight className="w-2.5 h-2.5" />
      </button>
    </div>
  );
}
