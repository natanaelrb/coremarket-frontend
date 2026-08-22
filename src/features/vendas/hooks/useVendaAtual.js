import { useItensVenda } from './useItensVenda.js';
import { useClienteSelecionado } from './useClienteSelecionado.js';
import { useTipoVenda } from './useTipoVenda.js';
import { useDescontos } from './useDescontos.js';
import { useResumoVenda } from './useResumoVenda.js';

/**
 * Hook de composição que une os hooks de responsabilidade única da venda
 * em andamento em uma única API consumida pela VendasPage.
 * Mantém a página de vendas como uma camada pura de composição.
 */
export function useVendaAtual() {
  const carrinho = useItensVenda();
  const clienteState = useClienteSelecionado();
  const tipoVendaState = useTipoVenda();
  const descontosState = useDescontos();

  const resumo = useResumoVenda(carrinho.itens, {
    descontoVenda: descontosState.descontoVenda,
    acrescimo: descontosState.acrescimo,
  });

  function resetarVenda() {
    carrinho.limparVenda();
    clienteState.removerCliente();
    descontosState.setDescontoVenda(0);
    descontosState.setAcrescimo(0);
  }

  return {
    carrinho,
    clienteState,
    tipoVendaState,
    descontosState,
    resumo,
    resetarVenda,
  };
}

