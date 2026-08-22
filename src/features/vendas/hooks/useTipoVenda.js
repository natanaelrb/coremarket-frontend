import { useState } from 'react';
import { TIPO_VENDA } from '../constants/formaPagamento.js';

/**
 * Gerencia o tipo de venda selecionado (pagamento imediato ou dívida).
 */
export function useTipoVenda(inicial = TIPO_VENDA.PAGAMENTO_IMEDIATO) {
  const [tipoVenda, setTipoVenda] = useState(inicial);

  return {
    tipoVenda,
    setTipoVenda,
    isDivida: tipoVenda === TIPO_VENDA.DIVIDA,
  };
}

