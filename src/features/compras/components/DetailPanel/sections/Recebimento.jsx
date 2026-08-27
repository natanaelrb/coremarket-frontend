import { formatDate } from "../../../utils/formatters";
import { ArrowRight } from "lucide-react";

const SITUACAO_CONFIG = {
  completo: { label: "Recebimento completo", tone: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10" },
  parcial: { label: "Aguardamento parcial", tone: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10" },
  pendente: { label: "Recebimento pendente", tone: "text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5" },
};

export function Recebimento({ detalhe, onVerConferencia }) {
  const { recebimento } = detalhe;
  const situacao = SITUACAO_CONFIG[recebimento.situacao];

  return (
    <div>
      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">Recebimento</h4>
      <dl className="space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <dt className="text-slate-400 dark:text-slate-500">Data do recebimento</dt>
          <dd className="text-slate-700 dark:text-slate-200 font-medium">{recebimento.dataRecebimento ? formatDate(recebimento.dataRecebimento) : "-"}</dd>
        </div>
        <div className="flex items-center justify-between text-xs">
          <dt className="text-slate-400 dark:text-slate-500">Total pedido</dt>
          <dd className="text-slate-700 dark:text-slate-200 font-medium">{recebimento.totalPedido} itens</dd>
        </div>
        <div className="flex items-center justify-between text-xs">
          <dt className="text-slate-400 dark:text-slate-500">Total recebido</dt>
          <dd className="text-slate-700 dark:text-slate-200 font-medium">{recebimento.totalRecebido} itens</dd>
        </div>
        {recebimento.divergencia > 0 && (
          <div className="flex items-center justify-between text-xs">
            <dt className="text-slate-400 dark:text-slate-500">Divergência</dt>
            <dd className="text-red-500 font-medium">{recebimento.divergencia} itens</dd>
          </div>
        )}
        <div className="flex items-center justify-between text-xs pt-1">
          <dt className="text-slate-400 dark:text-slate-500">Situação</dt>
          <dd>
            <span className={`px-2 py-0.5 rounded-full font-medium ${situacao.tone}`}>{situacao.label}</span>
          </dd>
        </div>
      </dl>
      <button
        onClick={onVerConferencia}
        className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-violet-600 dark:text-violet-400 hover:underline"
      >
        Ver conferência completa
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
}
