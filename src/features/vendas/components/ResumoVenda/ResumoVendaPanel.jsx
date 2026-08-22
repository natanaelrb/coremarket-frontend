import Card from "../../../../shared/components/layout/Card.jsx";
import { ResumoLinha } from './ResumoLinha.jsx';
import { TotalDisplay } from './TotalDisplay.jsx';
import { FinalizarVendaButton } from './FinalizarVendaButton.jsx';
import { EstoqueAlert } from './EstoqueAlert.jsx';

/**
 * Painel "Resumo da venda": subtotal, descontos, acréscimos, total e
 * finalização. Fica fixo na coluna direita do PDV.
 * @param {{
 *  resumo: ReturnType<typeof import('../../hooks/useResumoVenda.js').useResumoVenda>,
 *  onFinalizar: () => void,
 *  processando: boolean,
 * }} props
 */
export function ResumoVendaPanel({ resumo, onFinalizar, processando }) {
  const podeFinalizar = resumo.quantidadeItens > 0 && resumo.estoqueDisponivel;

  return (
    <Card className="sticky top-4">
      <h2 className="mb-4 text-sm font-semibold text-cm-text">Resumo da venda</h2>

      <div className="space-y-0.5">
        <ResumoLinha label={`Subtotal (${resumo.quantidadeItens} ${resumo.quantidadeItens === 1 ? 'item' : 'itens'})`} valor={resumo.subtotal} />
        {resumo.descontosItens > 0 && (
          <ResumoLinha label="Descontos nos itens" valor={resumo.descontosItens} tone="negative" />
        )}
        {resumo.descontoVenda > 0 && (
          <ResumoLinha label="Desconto na venda" valor={resumo.descontoVenda} tone="negative" />
        )}
        <ResumoLinha label="Acréscimos" valor={resumo.acrescimo} tone={resumo.acrescimo > 0 ? 'positive' : 'default'} />
      </div>

      <div className="my-3">
        <TotalDisplay total={resumo.total} />
      </div>

      <div className="space-y-3">
        <FinalizarVendaButton onFinalizar={onFinalizar} loading={processando} disabled={!podeFinalizar} />
        <EstoqueAlert disponivel={resumo.estoqueDisponivel} />
      </div>
    </Card>
  );
}

