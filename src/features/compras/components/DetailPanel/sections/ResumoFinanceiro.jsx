import { formatCurrency } from "../../../utils/formatters";

export function ResumoFinanceiro({ detalhe }) {
  const rows = [
    { label: "Subtotal dos produtos", value: detalhe.subtotal, tone: "default" },
    { label: "Desconto", value: -detalhe.desconto, tone: "negative" },
    { label: "Frete", value: detalhe.frete, tone: "positive" },
    { label: "Outras despesas", value: detalhe.outrasDespesas, tone: "positive" },
    { label: "Impostos", value: detalhe.impostos, tone: "default" },
  ];

  return (
    <div>
      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">Resumo financeiro</h4>
      <dl className="space-y-2.5">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between text-xs">
            <dt className="text-slate-400 dark:text-slate-500">{row.label}</dt>
            <dd
              className={`font-medium ${
                row.tone === "negative"
                  ? "text-red-500"
                  : row.tone === "positive"
                  ? "text-emerald-500"
                  : "text-slate-700 dark:text-slate-200"
              }`}
            >
              {row.tone === "positive" ? "+ " : ""}
              {formatCurrency(Math.abs(row.value)) === "R$ 0,00" ? formatCurrency(row.value) : (row.value < 0 ? "- " : "") + formatCurrency(Math.abs(row.value))}
            </dd>
          </div>
        ))}
      </dl>
      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Total da compra</span>
        <span className="text-base font-bold text-slate-900 dark:text-white">{formatCurrency(detalhe.total)}</span>
      </div>
    </div>
  );
}
