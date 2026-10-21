import { useSearchParams } from "react-router-dom";
import { MOCK_CLIENTES } from "../features/vendas/data/mockClientes.js";

import { VendasHeader } from "../features/vendas/components/Header/VendasHeader.jsx";
import { KPICardsRow } from "../features/vendas/components/KPIs/KPICardsRow.jsx";
import { ProdutoSearchPanel } from "../features/vendas/components/ProdutoSearch/ProdutoSearchPanel.jsx";
import { ItensVendaPanel } from "../features/vendas/components/ItensVenda/ItensVendaPanel.jsx";
import { ClientePanel } from "../features/vendas/components/Cliente/ClientePanel.jsx";
import { TipoVendaPanel } from "../features/vendas/components/TipoVenda/TipoVendaPanel.jsx";
import { DescontosPanel } from "../features/vendas/components/Descontos/DescontosPanel.jsx";
import { ResumoVendaPanel } from "../features/vendas/components/ResumoVenda/ResumoVendaPanel.jsx";
import { VendaDetalhePanel } from "../features/vendas/components/VendaDetalhe/VendaDetalhePanel.jsx";
import { HistoricoVendasPanel } from "../features/vendas/components/Historico/HistoricoVendasPanel.jsx";
import { AtalhosPDV } from "../features/vendas/components/Atalhos/AtalhosPDV.jsx";

import { useProdutoSearch } from "../features/vendas/hooks/useProdutoSearch.js";
import { useVendaAtual } from "../features/vendas/hooks/useVendaAtual.js";
import { useFinalizarVenda } from "../features/vendas/hooks/useFinalizarVenda.js";
import { useKPIsVendas } from "../features/vendas/hooks/useKPIsVendas.js";
import { useHistoricoVendas } from "../features/vendas/hooks/useHistoricoVendas.js";
import { useVendaDetalhe } from "../features/vendas/hooks/useVendaDetalhe.js";
import { useKeyboardShortcuts } from "../features/vendas/hooks/useKeyboardShortcuts.js";

import { useToast } from "../shared/contexts/ToastContext.jsx";

export function Vendas() {
  const { notify } = useToast();

  const [searchParams] = useSearchParams();
  const clienteId = searchParams.get("clienteId");

  const clienteInicial = clienteId
    ? MOCK_CLIENTES.find(
        (cliente) => String(cliente.id) === String(clienteId)
      ) ?? null
    : null;

  const produtoSearch = useProdutoSearch();
  const vendaAtual = useVendaAtual(clienteInicial);

  const {
    kpis,
    carregando: carregandoKpis,
    caixa,
    operador,
  } = useKPIsVendas();

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
    onAtualizar: () => notify("Dados atualizados.", "info", 1800),
    onFinalizarVenda: finalizarVenda,
    onRemoverItemSelecionado: () => {
      if (vendaAtual.carrinho.itemSelecionadoId) {
        vendaAtual.carrinho.removerItem(
          vendaAtual.carrinho.itemSelecionadoId
        );
      }
    },
    onCancelarOperacao: () =>
      vendaAtual.carrinho.setItemSelecionadoId(null),
  });

  return (
    <main className="-mt-10 -ml-8 -mr-8 min-h-screen bg-cm-bg p-6">
      <div className="mx-auto w-full max-w-[1800px] space-y-5">
        {/* Cabeçalho da operação */}
        <VendasHeader
          caixa={caixa}
          operador={operador}
          onFocarBuscaProduto={produtoSearch.focar}
          onNovaVenda={vendaAtual.resetarVenda}
          onConsultarVendas={() =>
            notify(
              'Role até "Histórico de vendas" para consultar.',
              "info",
              2500
            )
          }
        />

        {/* Indicadores resumidos */}
        <KPICardsRow kpis={kpis} loading={carregandoKpis} />

        {/* Busca: ponto de entrada da operação */}
        <section aria-label="Buscar produtos" className="min-w-0">
          <ProdutoSearchPanel
            produtoSearch={produtoSearch}
            onAdicionarProduto={vendaAtual.carrinho.adicionarProduto}
          />
        </section>

        {/* Operação: carrinho em destaque e controles na lateral */}
        <section
          aria-label="Montagem da venda"
          className="grid min-w-0 grid-cols-1 items-start gap-5 2xl:grid-cols-[minmax(0,1.8fr)_minmax(360px,0.85fr)]"
        >
          {/* Área principal: produtos adicionados */}
          <div className="min-w-0 space-y-5">
            <ItensVendaPanel carrinho={vendaAtual.carrinho} />

            <VendaDetalhePanel
              numeroVenda={vendaSelecionada?.numero ?? "#00018472"}
              caixaNumero={caixa.numero}
              operadorNome={operador.nome}
              clienteNome={vendaAtual.clienteState.cliente?.nome}
              itens={vendaAtual.carrinho.itens}
              resumo={vendaAtual.resumo}
            />
          </div>

          {/* Painel lateral: informações e ações da venda */}
          <aside className="min-w-0 space-y-4">
            <ClientePanel clienteState={vendaAtual.clienteState} />

            <TipoVendaPanel
              tipoVendaState={vendaAtual.tipoVendaState}
            />

            <DescontosPanel
              descontosState={vendaAtual.descontosState}
              descontosItens={vendaAtual.resumo.descontosItens}
              subtotal={vendaAtual.resumo.subtotal}
            />

            <ResumoVendaPanel
              resumo={vendaAtual.resumo}
              onFinalizar={finalizarVenda}
              processando={processando}
            />

            <AtalhosPDV />
          </aside>
        </section>

        {/* Histórico fora da área de montagem */}
        <section aria-label="Histórico de vendas" className="min-w-0">
          <HistoricoVendasPanel
            historico={historico}
            onVisualizarVenda={visualizarVenda}
          />
        </section>
      </div>
    </main>
  );
}

export default Vendas;
