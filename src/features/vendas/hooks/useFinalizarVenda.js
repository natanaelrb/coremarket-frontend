import { useState } from 'react';
import { useToast } from "../../../shared/contexts/ToastContext.jsx";
import { validarFinalizacaoVenda } from '../utils/validators.js';

/**
 * Orquestra a finalização da venda: valida, simula envio ao backend,
 * exibe feedback via toast e limpa o carrinho em caso de sucesso.
 * TODO(api): substituir simulação por POST /api/vendas
 * Controller esperado: VendaController#registrar (body: VendaRequestDTO)
 */
export function useFinalizarVenda({ vendaAtual, onSucesso }) {
  const { notify } = useToast();
  const [processando, setProcessando] = useState(false);

  async function finalizarVenda() {
    const { carrinho, clienteState, tipoVendaState } = vendaAtual;

    const validacao = validarFinalizacaoVenda({
      itens: carrinho.itens,
      tipoVenda: tipoVendaState.tipoVenda,
      cliente: clienteState.cliente,
    });

    if (!validacao.valido) {
      notify(validacao.motivo, 'error');
      return;
    }

    setProcessando(true);
    try {
      // Simula latência de rede da chamada ao backend.
      await new Promise((resolve) => setTimeout(resolve, 700));

      notify(`Venda finalizada com sucesso! Total: ${vendaAtual.resumo.total.toFixed(2)}`, 'success');
      vendaAtual.resetarVenda();
      onSucesso?.();
    } catch (error) {
      notify('Não foi possível finalizar a venda. Tente novamente.', 'error');
    } finally {
      setProcessando(false);
    }
  }

  return { finalizarVenda, processando };
}

