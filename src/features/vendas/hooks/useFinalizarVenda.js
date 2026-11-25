import { useState } from "react";

import { useToast } from "../../../shared/contexts/ToastContext.jsx";
import { validarFinalizacaoVenda } from "../utils/validators.js";
import { criarRegistroVenda } from "../utils/vendaFactory.js";
import { salvarVenda } from "../services/vendaStorage.js";

/**
 * Orquestra a finalização e o armazenamento local da venda.
 */
export function useFinalizarVenda({
  vendaAtual,
  operador,
  caixa,
  onSucesso,
}) {
  const { notify } = useToast();
  const [processando, setProcessando] = useState(false);

  async function finalizarVenda() {
    if (processando) return;

    const { carrinho, clienteState, tipoVendaState } = vendaAtual;

    const validacao = validarFinalizacaoVenda({
      itens: carrinho.itens,
      tipoVenda: tipoVendaState.tipoVenda,
      cliente: clienteState.cliente,
    });

    if (!validacao.valido) {
      notify(validacao.motivo, "error");
      return;
    }

    setProcessando(true);

    try {
      // Mantém a simulação de latência enquanto não existe API.
      await new Promise((resolve) => setTimeout(resolve, 700));

      // Monta o registro com os dados atuais do PDV.
      const registro = criarRegistroVenda({
        vendaAtual,
        operador,
        caixa,
      });

      // Salva antes de limpar o carrinho.
      salvarVenda(registro);

      notify(
        `Venda finalizada com sucesso! Total: ${registro.total.toFixed(2)}`,
        "success",
      );

      vendaAtual.resetarVenda();
      onSucesso?.(registro);
    } catch (error) {
      console.error("Erro ao finalizar venda:", error);

      notify(
        "Não foi possível finalizar a venda. Tente novamente.",
        "error",
      );
    } finally {
      setProcessando(false);
    }
  }

  return { finalizarVenda, processando };
}
