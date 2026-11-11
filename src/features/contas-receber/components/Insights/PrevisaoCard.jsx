import Card from "../../../../shared/components/layout/Card";
import { ProgressBar } from "../../../../shared/components/data-display/ProgressBar";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

export function PrevisaoCard() {
  const { previsao } = useContasReceberContext();
  return (
    <Card className="pb-3 animate-fade-up" style={{ animationDelay: "210ms" }}>
      <div className="px-4 pt-4 pb-2 mb-2">
        <h3 className="text-base font-semibold text-foreground">
          Previsão de recebimentos
        </h3>
        <p className="text-sm text-muted-foreground">
          Contas em aberto e em dia
        </p>
      </div>
      <ul className="space-y-3 px-4 pt-1">
        {previsao.rows.map((r, i) => (
          <li
            key={r.id}
            className="grid grid-cols-[92px_1fr_auto] items-center gap-3 text-[11px]"
          >
            <span className="text-ink-2">{r.label}</span>
            <ProgressBar value={r.valor} max={previsao.max} delay={i * 90} />
            <span className="w-[76px] text-right font-semibold tabular-nums text-ink">
              {formatCurrency(r.valor)}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
