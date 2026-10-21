import Card, { CardStepHeader } from "../../../../shared/components/layout/Card.jsx";
import { DescontoItemRow } from './DescontoItemRow.jsx';
import { DescontoVendaInput } from './DescontoVendaInput.jsx';

/**
 * Painel "5. Descontos": total já aplicado nos itens + desconto geral da venda.
 */
export function DescontosPanel({ descontosState, descontosItens, subtotal }) {
  const { descontoVenda, setDescontoVenda, erro, inputRef } = descontosState;

  return (
    <Card className="overflow-hidden">
      <div className="p-5 sm:p-4">
        <CardStepHeader
          step={5}
          title="Descontos"
          description="Gerencie os descontos aplicados nesta venda"
        />

        <div className="mt-5 space-y-3">
          <div className="rounded-xl border border-cm-border/70 bg-cm-surface/50 p-4 transition-colors duration-200">
            <DescontoItemRow valor={descontosItens} />
          </div>

          <div className="rounded-xl border border-green-500/20 bg-green-500/[0.04] p-4 transition-colors duration-200">
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
