import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { MOCK_CLIENTES } from "../../features/vendas/data/mockClientes.js";
import {
  MOCK_CAIXA,
  MOCK_OPERADOR,
} from "../../features/vendas/data/mockKPIs.js";

import { VendasHeader } from "../../features/vendas/components/Header/VendasHeader.jsx";
import { ProdutoSearchPanel } from "../../features/vendas/components/ProdutoSearch/ProdutoSearchPanel.jsx";
import { ItensVendaPanel } from "../../features/vendas/components/ItensVenda/ItensVendaPanel.jsx";
import { ClientePanel } from "../../features/vendas/components/Cliente/ClientePanel.jsx";
import { TipoVendaPanel } from "../../features/vendas/components/TipoVenda/TipoVendaPanel.jsx";
import { DescontosPanel } from "../../features/vendas/components/Descontos/DescontosPanel.jsx";
import { ResumoVendaPanel } from "../../features/vendas/components/ResumoVenda/ResumoVendaPanel.jsx";
import { ProdutosAcessoRapidoPanel } from "../../features/vendas/components/ProdutosAcessoRapido/ProdutosAcessoRapidoPanel.jsx";

import { useProdutoSearch } from "../../features/vendas/hooks/useProdutoSearch.js";
import { useVendaAtual } from "../../features/vendas/hooks/useVendaAtual.js";
import { useFinalizarVenda } from "../../features/vendas/hooks/useFinalizarVenda.js";
import { useKeyboardShortcuts } from "../../features/vendas/hooks/useKeyboardShortcuts.js";

import { useToast } from "../../shared/contexts/ToastContext.jsx";

export function NovaVenda() {
  const { notify } = useToast();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const clienteId = searchParams.get("clienteId");

  const clienteInicial = clienteId
    ? MOCK_CLIENTES.find(
        (cliente) => String(cliente.id) === String(clienteId)
      ) ?? null
    : null;

  const produtoSearch = useProdutoSearch();
  const vendaAtual = useVendaAtual(clienteInicial);

  const [caixa, setCaixa] = useState(() => ({
  ...MOCK_CAIXA,
  dataAbertura:
    MOCK_CAIXA.status === "ABERTO"
      ? new Date().toISOString()
      : null,
  }));

  const fecharCaixa = () => {
    if (caixa.status !== "ABERTO") return;

    const confirmar = window.confirm(
      "Deseja realmente encerrar este caixa?"
    );

    if (!confirmar) return;

    setCaixa((caixaAtual) => ({
      ...caixaAtual,
      status: "FECHADO",
    }));

    notify("Caixa encerrado com sucesso.", "success");
  };
  const operador = MOCK_OPERADOR;

  const { finalizarVenda, processando } = useFinalizarVenda({
    vendaAtual,
    operador,
    caixa,
    onSucesso: () => produtoSearch.focar(),
  });

  useKeyboardShortcuts({
    onBuscarProduto: produtoSearch.focar,
    onBuscarCliente: vendaAtual.clienteState.focar,
    onDesconto: vendaAtual.descontosState.focar,

    onAtualizar: () =>
      notify("Dados atualizados.", "info", 1800),

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
    <main className="-mt-10 -ml-8 -mr-8 min-h-screen bg-cm-bg px-5 pb-8 pt-6 sm:px-6">
      <div className="mx-auto w-full max-w-[1800px] space-y-5">

        {/* Cabeçalho */}
        <section className="animate-in fade-in slide-in-from-top-2 duration-500 motion-reduce:animate-none">
          <VendasHeader
            caixa={caixa}
            operador={operador}
            onFecharCaixa={fecharCaixa}
            onFocarBuscaProduto={produtoSearch.focar}
            onNovaVenda={vendaAtual.resetarVenda}
            onConsultarVendas={() =>
              navigate("/vendas/historico")
            }
          />
        </section>

        {/* Área principal do PDV */}
        <section
          aria-label="Operação de venda"
          className="
            grid min-w-0 grid-cols-1 items-start gap-5
            xl:grid-cols-[minmax(0,1.65fr)_minmax(340px,0.85fr)]
            2xl:gap-6
          "
        >
          {/* Coluna esquerda: produtos e carrinho */}
          <div className="min-w-0 space-y-5">

            <section
              aria-label="Pesquisa de produtos"
              className="min-w-0 animate-in fade-in slide-in-from-bottom-3 duration-500 delay-100 motion-reduce:animate-none"
            >
              <ProdutoSearchPanel
                produtoSearch={produtoSearch}
                onAdicionarProduto={
                  vendaAtual.carrinho.adicionarProduto
                }
              />
            </section>

            <section
              aria-label="Itens da venda"
              className="space-y-5  min-w-0 animate-in fade-in slide-in-from-bottom-3 duration-500 delay-150 motion-reduce:animate-none"
            >
            <section
              aria-label="Produtos de acesso rápido"
              className="min-w-0 animate-in fade-in slide-in-from-bottom-3 duration-500 delay-200 motion-reduce:animate-none"
            >
              <ProdutosAcessoRapidoPanel
                onAdicionarProduto={vendaAtual.carrinho.adicionarProduto}
              />
            </section>
            
              <ItensVendaPanel
                carrinho={vendaAtual.carrinho}
              />
            </section>
          </div>

          {/* Coluna direita: configurações e finalização */}
          <aside
            aria-label="Configurações e finalização da venda"
            className="min-w-0 space-y-5"
          >
            <section className="animate-in fade-in slide-in-from-right-3 duration-500 delay-100 motion-reduce:animate-none">
              <ClientePanel
                clienteState={vendaAtual.clienteState}
              />
            </section>

            <section className="animate-in fade-in slide-in-from-right-3 duration-500 delay-150 motion-reduce:animate-none">
              <ResumoVendaPanel
                resumo={vendaAtual.resumo}
                onFinalizar={finalizarVenda}
                processando={processando}
              />
            </section>

            <section className="animate-in fade-in slide-in-from-right-3 duration-500 delay-200 motion-reduce:animate-none">
              <TipoVendaPanel
                tipoVendaState={vendaAtual.tipoVendaState}
              />
            </section>

            <section className="animate-in fade-in slide-in-from-right-3 duration-500 delay-250 motion-reduce:animate-none">
              <DescontosPanel
                descontosState={vendaAtual.descontosState}
                descontosItens={
                  vendaAtual.resumo.descontosItens
                }
                subtotal={vendaAtual.resumo.subtotal}
              />
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default NovaVenda;
