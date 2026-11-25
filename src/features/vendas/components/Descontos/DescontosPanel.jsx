import Card from "../../../../shared/components/layout/Card.jsx";
import { DescontoItemRow } from "./DescontoItemRow.jsx";
import { DescontoVendaInput } from "./DescontoVendaInput.jsx";

export function DescontosPanel({ descontosState, descontosItens, subtotal }) {
  const { descontoVenda, setDescontoVenda, erro, inputRef } = descontosState;

  return (
    <Card className="overflow-hidden">
      <div className="p-5 sm:p-4">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 dark:bg-blue-950/40 dark:text-blue-400 dark:ring-blue-900/50">
            <span className="text-lg font-semibold">%</span>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cm-text">
              Descontos
            </h3>
            <p className="text-xs text-cm-muted">
              Gerencie os descontos aplicados nesta venda
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-cm-border/70 bg-cm-surface/50 p-4 transition-colors duration-200">
            <DescontoItemRow valor={descontosItens} />
          </div>

          <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-4 transition-colors duration-200">
            <DescontoVendaInput
              valor={descontoVenda}
              onChange={(valor) => setDescontoVenda(valor, subtotal)}
              inputRef={inputRef}
              erro={erro}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
