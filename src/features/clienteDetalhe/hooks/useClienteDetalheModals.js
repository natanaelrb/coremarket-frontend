import { useState } from "react";

/**
 * Owns which modal is open from the client detail header
 * and which receivable account is selected for payment.
 */
export function useClienteDetalheModals() {
  const [modal, setModal] = useState(null);
  const [contaSelecionada, setContaSelecionada] = useState(null);

  return {
    modal,
    contaSelecionada,

    abrirEditar: () => {
      setContaSelecionada(null);
      setModal("editar");
    },

    abrirPagamento: (conta = null) => {
      setContaSelecionada(conta);
      setModal("pagamento");
    },

    fechar: () => {
      setContaSelecionada(null);
      setModal(null);
    },
  };
}