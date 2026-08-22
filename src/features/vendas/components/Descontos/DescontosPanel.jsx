import Card, { CardStepHeader } from "../../../../shared/components/layout/Card.jsx";
import { DescontoItemRow } from './DescontoItemRow.jsx';
import { DescontoVendaInput } from './DescontoVendaInput.jsx';

/**
 * Painel "5. Descontos": total já aplicado nos itens + desconto geral da venda.
 * @param {{
 *  descontosState: ReturnType<typeof import('../../hooks/useDescontos.js').useDescontos>,
 *  descontosItens: number,
 *  subtotal: number,
 * }} props
 */
export function DescontosPanel({ descontosState, descontosItens, subtotal }) {
  const { descontoVenda, setDescontoVenda, erro, inputRef } = descontosState;

  return (
    <Card>
      <CardStepHeader step={5} title="Descontos" />
      <div className="divide-y divide-cm-border/60">
        <DescontoItemRow valor={descontosItens} />
        <DescontoVendaInput
          valor={descontoVenda}
          onChange={(valor) => setDescontoVenda(valor, subtotal)}
          inputRef={inputRef}
          erro={erro}
        />
      </div>
    </Card>
  );
}

