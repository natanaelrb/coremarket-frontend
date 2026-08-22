import { useState } from 'react';

/**
 * Gerencia qual venda do histórico está sendo exibida no painel de detalhe/recibo
 * lateral, incluindo o estado de impressão/envio.
 * TODO(api): substituir por GET /api/vendas/{id} ao selecionar uma venda da tabela
 */
export function useVendaDetalhe(vendaInicial = null) {
  const [vendaSelecionada, setVendaSelecionada] = useState(vendaInicial);

  function visualizarVenda(venda) {
    setVendaSelecionada(venda);
  }

  function fecharDetalhe() {
    setVendaSelecionada(null);
  }

  return { vendaSelecionada, visualizarVenda, fecharDetalhe };
}

