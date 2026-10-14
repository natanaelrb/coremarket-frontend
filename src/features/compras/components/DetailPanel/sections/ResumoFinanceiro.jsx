import { formatCurrency } from "../../../utils/formatters";

function FinancialRow({ label, value, tone = "default" }) {
  const isNegative = tone === "negative";
  const isPositive = tone === "positive";
  const amount = Number(value ?? 0);
  const formattedAmount = formatCurrency(Math.abs(amount));

  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 py-3 last:border-b-0 dark:border-white/[0.06]">
      <dt className="min-w-0 text-xs font-medium leading-relaxed text-slate-500 dark:text-slate-400 sm:text-sm">
        {label}
      </dt>

      <dd
        className={`shrink-0 text-right text-sm font-semibold tabular-nums ${
          isNegative
            ? "text-red-600 dark:text-red-400"
            : isPositive
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-slate-700 dark:text-slate-200"
        }`}
      >
        {isPositive && amount > 0 && "+ "}
        {isNegative && amount > 0 && "- "}
        {formattedAmount}
      </dd>
    </div>
  );
}

export function ResumoFinanceiro({ detalhe }) {
  const rows = [
    {
      label: "Subtotal dos produtos",
      value: detalhe.subtotal,
    },
    {
      label: "Desconto",
      value: detalhe.desconto,
      tone: "negative",
    },
    {
      label: "Frete",
      value: detalhe.frete,
      tone: "positive",
    },
    {
      label: "Outras despesas",
      value: detalhe.outrasDespesas,
      tone: "positive",
    },
    {
      label: "Impostos",
      value: detalhe.impostos,
    },
  ];

  return (
    <div className="min-w-0">
      <div className="-mb-1 flex items-start gap-3">
      </div>

      <dl className="min-w-0">
        {rows.map((row) => (
          <FinancialRow
            key={row.label}
            label={row.label}
            value={row.value}
            tone={row.tone}
          />
        ))}
      </dl>

      <div className="mt-5 rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-4 dark:border-emerald-400/20 dark:bg-emerald-400/[0.07]">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              Total da compra
            </p>
            <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
              Valor final
            </p>
          </div>

          <span className="shrink-0 text-lg font-bold tabular-nums text-emerald-700 dark:text-emerald-400 sm:text-xl">
            {formatCurrency(Number(detalhe.total ?? 0))}
          </span>
        </div>
      </div>
    </div>
  );
}
