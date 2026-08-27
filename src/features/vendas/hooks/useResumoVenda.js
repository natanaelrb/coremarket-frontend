import { useMemo } from 'react';
import { calcularResumoVenda } from '../utils/calculators.js';
import { verificarDisponibilidadeEstoque } from '../utils/calculators.js';
import { MOCK_PRODUTOS } from '../data/mockProdutos.js';

/**
 * Deriva o resumo financeiro (subtotal, descontos, total) e a checagem de
 * estoque a partir dos itens do carrinho e descontos aplicados.
 * @param {import('../types/venda.types.js').ItemVenda[]} itens
 * @param {{ descontoVenda: number, acrescimo: number }} descontos
 */
export function useResumoVenda(itens, { descontoVenda, acrescimo }) {
  const resumo = useMemo(
    () => calcularResumoVenda({ itens, descontoVenda, acrescimo }),
    [itens, descontoVenda, acrescimo],
  );

  const estoqueDisponivel = useMemo(
    () => verificarDisponibilidadeEstoque(itens, MOCK_PRODUTOS),
    [itens],
  );

  return { ...resumo, estoqueDisponivel };
}

