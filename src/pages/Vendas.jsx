import { VendasHeader } from "../features/vendas/components/Header/VendasHeader.jsx";
import { ActionButtons } from "../features/vendas/components/Actions/ActionButtons.jsx";
import { KPICardsRow } from "../features/vendas/components/KPIs/KPICardsRow.jsx";
import { ProdutoSearchPanel } from "../features/vendas/components/ProdutoSearch/ProdutoSearchPanel.jsx";
import { ItensVendaPanel } from "../features/vendas/components/ItensVenda/ItensVendaPanel.jsx";
import { ClientePanel } from "../features/vendas/components/Cliente/ClientePanel.jsx";
import { TipoVendaPanel } from "../features/vendas/components/TipoVenda/TipoVendaPanel.jsx";
import { DescontosPanel } from "../features/vendas/components/Descontos/DescontosPanel.jsx";
import { ResumoVendaPanel } from "../features/vendas/components/ResumoVenda/ResumoVendaPanel.jsx";
import { VendaDetalhePanel } from "../features/vendas/components/VendaDetalhe/VendaDetalhePanel.jsx";
import { HistoricoVendasPanel } from "../features/vendas/components/Historico/HistoricoVendasPanel.jsx";

import { useProdutoSearch } from "../features/vendas/hooks/useProdutoSearch.js";
import { useVendaAtual } from "../features/vendas/hooks/useVendaAtual.js";
import { useFinalizarVenda } from "../features/vendas/hooks/useFinalizarVenda.js";
import { useKPIsVendas } from "../features/vendas/hooks/useKPIsVendas.js";
import { useHistoricoVendas } from "../features/vendas/hooks/useHistoricoVendas.js";
import { useVendaDetalhe } from "../features/vendas/hooks/useVendaDetalhe.js";
import { useKeyboardShortcuts } from "../features/vendas/hooks/useKeyboardShortcuts.js";

import { useToast } from "../shared/contexts/ToastContext.jsx";

/**
 * Página de Vendas (PDV) do CoreMarket.
 *
 * Esta página é intencionalmente uma camada pura de composição: toda a
 * lógica de negócio vive nos hooks (`./hooks`) e toda a apresentação vive
 * nos componentes (`./components`). A página apenas conecta os dois.
 */
export function Vendas() {
  const { notify } = useToast();

  const produtoSearch = useProdutoSearch();
  const vendaAtual = useVendaAtual();
  const { kpis, carregando: carregandoKpis, caixa, operador } = useKPIsVendas();
  const historico = useHistoricoVendas();
  const { vendaSelecionada, visualizarVenda } = useVendaDetalhe();

  const { finalizarVenda, processando } = useFinalizarVenda({
    vendaAtual,
    onSucesso: () => produtoSearch.focar(),
  });

  useKeyboardShortcuts({
    onBuscarProduto: produtoSearch.focar,
    onBuscarCliente: vendaAtual.clienteState.focar,
    onDesconto: vendaAtual.descontosState.focar,
    onAtualizar: () => notify('Dados atualizados.', 'info', 1800),
    onFinalizarVenda: finalizarVenda,
    onRemoverItemSelecionado: () => {
      if (vendaAtual.carrinho.itemSelecionadoId) {
        vendaAtual.carrinho.removerItem(vendaAtual.carrinho.itemSelecionadoId);
      }
    },
    onCancelarOperacao: () => vendaAtual.carrinho.setItemSelecionadoId(null),
  });

  return (
    <div className="min-h-screen space-y-6 bg-cm-bg p-6">
      <VendasHeader caixa={caixa} operador={operador} onFocarBuscaProduto={produtoSearch.focar} />

      <ActionButtons
        onNovaVenda={vendaAtual.resetarVenda}
        onConsultarVendas={() => notify('Role até "Histórico de vendas" para consultar.', 'info', 2500)}
      />

      <KPICardsRow kpis={kpis} loading={carregandoKpis} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <ProdutoSearchPanel produtoSearch={produtoSearch} onAdicionarProduto={vendaAtual.carrinho.adicionarProduto} />
          <ItensVendaPanel carrinho={vendaAtual.carrinho} />
        </div>

        <div className="space-y-5">
          <ClientePanel clienteState={vendaAtual.clienteState} />
          <TipoVendaPanel tipoVendaState={vendaAtual.tipoVendaState} />
          <DescontosPanel
            descontosState={vendaAtual.descontosState}
            descontosItens={vendaAtual.resumo.descontosItens}
            subtotal={vendaAtual.resumo.subtotal}
          />
          <ResumoVendaPanel resumo={vendaAtual.resumo} onFinalizar={finalizarVenda} processando={processando} />
          <VendaDetalhePanel
            numeroVenda={vendaSelecionada?.numero ?? '#00018472'}
            caixaNumero={caixa.numero}
            operadorNome={operador.nome}
            clienteNome={vendaAtual.clienteState.cliente?.nome}
            itens={vendaAtual.carrinho.itens}
            resumo={vendaAtual.resumo}
          />
        </div>
      </div>

      <HistoricoVendasPanel historico={historico} onVisualizarVenda={visualizarVenda} />
    </div>
  );
}
export default Vendas;