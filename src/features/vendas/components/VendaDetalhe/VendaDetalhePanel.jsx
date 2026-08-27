import Card from "../../../../shared/components/layout/Card.jsx";
import { VendaDetalheHeader } from './VendaDetalheHeader.jsx';
import { VendaDetalheInfo } from './VendaDetalheInfo.jsx';
import { VendaDetalheItens } from './VendaDetalheItens.jsx';
import { VendaDetalheResumo } from './VendaDetalheResumo.jsx';
import { VendaDetalhePagamento } from './VendaDetalhePagamento.jsx';
import { VendaDetalheActions } from './VendaDetalheActions.jsx';
import { STATUS_VENDA } from '../../constants/statusVenda.js';
import { FORMA_PAGAMENTO } from '../../constants/formaPagamento.js';
import { calcularSubtotalLiquidoItem } from '../../utils/calculators.js';

/**
 * Painel "Venda #..." que mostra o recibo detalhado. Quando não há uma
 * venda concluída selecionada, exibe uma prévia com base no carrinho atual.
 * @param {{
 *  numeroVenda: string,
 *  caixaNumero: string,
 *  operadorNome: string,
 *  clienteNome?: string,
 *  itens: import('../../types/venda.types.js').ItemVenda[],
 *  resumo: { subtotal: number, descontosItens: number, descontoVenda: number, total: number },
 * }} props
 */
export function VendaDetalhePanel({ numeroVenda, caixaNumero, operadorNome, clienteNome, itens, resumo }) {
  const itensRecibo = itens.map((item) => ({
    nome: item.nome,
    quantidade: item.quantidade,
    subtotal: calcularSubtotalLiquidoItem(item),
  }));

  return (
    <Card>
      <VendaDetalheHeader numero={numeroVenda} status={STATUS_VENDA.CONCLUIDA} />
      <VendaDetalheInfo
        dataHora={new Date().toISOString()}
        caixaNumero={caixaNumero}
        operadorNome={operadorNome}
        clienteNome={clienteNome}
      />
      <VendaDetalheItens itens={itensRecibo.length > 0 ? itensRecibo : [{ nome: 'Sem itens', quantidade: 0, subtotal: 0 }]} />
      <VendaDetalheResumo
        subtotal={resumo.subtotal}
        descontoItens={resumo.descontosItens}
        descontoVenda={resumo.descontoVenda}
        total={resumo.total}
      />
      <VendaDetalhePagamento
        formaPagamento={FORMA_PAGAMENTO.PIX}
        valor={resumo.total}
        pagoEm={new Date().toISOString()}
      />
      <VendaDetalheActions />
    </Card>
  );
}

