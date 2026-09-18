import { CardShell } from "./CardShell.jsx";
import { ProgressBar } from "../../../../shared/components/data-display/ProgressBar.jsx";
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";

/** "Limite de crédito" card with a utilization progress bar. */
export function LimiteCreditoCard({ cliente }) {
  const disponivel = Math.max(
    0,
    cliente.limiteCredito - cliente.limiteUtilizado
  );

  const pctUtilizado =
    cliente.limiteCredito > 0
      ? Math.round(
          (cliente.limiteUtilizado / cliente.limiteCredito) * 100
        )
      : 0;

  const pctDisponivel = 100 - pctUtilizado;

  const tone =
    pctUtilizado >= 80
      ? "red"
      : pctUtilizado >= 50
        ? "amber"
        : "green";

  return (
    <CardShell title="Limite de crédito">
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Limite total
      </p>

      <p className="mb-3 text-lg font-semibold text-[#0f172a] dark:text-white">
        {formatCurrency(cliente.limiteCredito)}
      </p>

      <ProgressBar
        value={cliente.limiteUtilizado}
        max={cliente.limiteCredito}
        tone={tone}
        className="mb-3"
      />

      <div className="flex justify-between text-xs">
        <div>
          <p className="text-slate-500 dark:text-slate-400">
            Utilizado
          </p>

          <p className="font-medium text-[#0f172a] dark:text-white">
            {formatCurrency(cliente.limiteUtilizado)} ({pctUtilizado}%)
          </p>
        </div>

        <div className="text-right">
          <p className="text-slate-500 dark:text-slate-400">
            Disponível
          </p>

          <p className="font-medium text-[#16a34a] dark:text-[#4ade80]">
            {formatCurrency(disponivel)} ({pctDisponivel}%)
          </p>
        </div>
      </div>
    </CardShell>
  );
}