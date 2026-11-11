import Card from "../../../../shared/components/layout/Card";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { formatPercent } from "../../../../shared/utils/formatNumber";
import { cn } from "../../../../shared/utils/classNames";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

export function ResumoFinanceiroCard() {
  const { resumo: r } = useContasReceberContext();
  const rows = [
    ["Total emitido", formatCurrency(r.emitido)],
    [
      "Total recebido",
      formatCurrency(r.recebido),
      "text-emerald-600 dark:text-emerald-400",
    ],
    ["Total pendente", formatCurrency(r.pendente), "text-red-500"],
    ["Total vencido", formatCurrency(r.vencido), "text-red-500"],
    ["Média de atraso", `${r.mediaAtraso} dias`],
    ["Taxa de recebimento", formatPercent(r.taxaRecebimento)],
  ];
  return (
    <Card className="pb-3 animate-fade-up" style={{ animationDelay: "160ms" }}>
      <div className="px-4 pt-4 pb-2 mb-2">
        <h3 className="text-base font-semibold text-foreground">
          Resumo financeiro do período
        </h3>
      </div>
      <dl className="px-4">
        {rows.map(([k, v, tone]) => (
          <div
            key={k}
            className="flex items-center justify-between border-b border-line/60 py-[7px] text-[11px] last:border-0"
          >
            <dt className="text-ink-2">{k}</dt>
            <dd className={cn("font-semibold tabular-nums text-ink", tone)}>
              {v}
            </dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
