import { formatCurrency, formatDate } from "../../../utils/formatters";
import { FORMA_PAGAMENTO_LABELS, PARCELA_STATUS_LABELS } from "../../../constants/paymentMethods";

const PARCELA_STATUS_TONE = {
  pendente: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10",
  paga: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10",
  atrasada: "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10",
};

export function CondicoesPagamento({ detalhe }) {
  const { condicoesPagamento, parcelas } = detalhe;

  return (
    <div>
      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">Condições de pagamento</h4>
      <dl className="space-y-2.5 mb-3">
        <div className="flex items-center justify-between text-xs">
          <dt className="text-slate-400 dark:text-slate-500">Forma de pagamento</dt>
          <dd className="text-slate-700 dark:text-slate-200 font-medium">{FORMA_PAGAMENTO_LABELS[condicoesPagamento.forma]}</dd>
        </div>
        <div className="flex items-center justify-between text-xs">
          <dt className="text-slate-400 dark:text-slate-500">Parcelas</dt>
          <dd className="text-slate-700 dark:text-slate-200 font-medium">{condicoesPagamento.parcelas}x</dd>
        </div>
        {condicoesPagamento.intervalo > 0 && (
          <div className="flex items-center justify-between text-xs">
            <dt className="text-slate-400 dark:text-slate-500">Intervalo</dt>
            <dd className="text-slate-700 dark:text-slate-200 font-medium">{condicoesPagamento.intervalo} dias</dd>
          </div>
        )}
        {condicoesPagamento.primeiroVencimento && (
          <div className="flex items-center justify-between text-xs">
            <dt className="text-slate-400 dark:text-slate-500">1º vencimento</dt>
            <dd className="text-slate-700 dark:text-slate-200 font-medium">{formatDate(condicoesPagamento.primeiroVencimento)}</dd>
          </div>
        )}
      </dl>

      {parcelas.length > 0 && (
        <div className="rounded-xl border border-slate-100 dark:border-white/5 overflow-hidden">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-white/[0.03] text-slate-400 dark:text-slate-500">
                <th className="px-2.5 py-1.5 text-left font-medium">Parcela</th>
                <th className="px-2.5 py-1.5 text-left font-medium">Vencimento</th>
                <th className="px-2.5 py-1.5 text-right font-medium">Valor</th>
                <th className="px-2.5 py-1.5 text-right font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {parcelas.map((p) => (
                <tr key={p.numero} className="border-t border-slate-50 dark:border-white/[0.03]">
                  <td className="px-2.5 py-1.5 text-slate-600 dark:text-slate-300">{p.numero}/{p.total}</td>
                  <td className="px-2.5 py-1.5 text-slate-600 dark:text-slate-300">{formatDate(p.vencimento)}</td>
                  <td className="px-2.5 py-1.5 text-right text-slate-700 dark:text-slate-200 font-medium">{formatCurrency(p.valor)}</td>
                  <td className="px-2.5 py-1.5 text-right">
                    <span className={`px-1.5 py-0.5 rounded-full font-medium ${PARCELA_STATUS_TONE[p.status]}`}>
                      {PARCELA_STATUS_LABELS[p.status]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
