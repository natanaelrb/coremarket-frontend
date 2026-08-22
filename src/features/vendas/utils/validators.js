import { TIPO_VENDA } from '../constants/formaPagamento.js';

/**
 * Valida se a venda atual pode ser finalizada.
 * @param {{
 *  itens: import('../types/venda.types.js').ItemVenda[],
 *  tipoVenda: string,
 *  cliente: import('../types/venda.types.js').Cliente | null,
 * }} params
 * @returns {{ valido: boolean, motivo?: string }}
 */
export function validarFinalizacaoVenda({ itens, tipoVenda, cliente }) {
  if (itens.length === 0) {
    return { valido: false, motivo: 'Adicione ao menos um item para finalizar a venda.' };
  }
  if (tipoVenda === TIPO_VENDA.DIVIDA && !cliente) {
    return { valido: false, motivo: 'Selecione um cliente para registrar a venda como dívida.' };
  }
  return { valido: true };
}

/**
 * Valida se um valor de desconto é aceitável (não negativo e não maior que o subtotal).
 * @param {number} desconto
 * @param {number} subtotal
 */
export function validarDesconto(desconto, subtotal) {
  if (Number.isNaN(desconto) || desconto < 0) {
    return { valido: false, motivo: 'O desconto não pode ser negativo.' };
  }
  if (desconto > subtotal) {
    return { valido: false, motivo: 'O desconto não pode ser maior que o subtotal.' };
  }
  return { valido: true };
}

/**
 * Valida se a quantidade informada respeita o estoque disponível.
 * @param {number} quantidade
 * @param {number} estoqueDisponivel
 */
export function validarQuantidade(quantidade, estoqueDisponivel) {
  if (quantidade <= 0) {
    return { valido: false, motivo: 'A quantidade deve ser maior que zero.' };
  }
  if (quantidade > estoqueDisponivel) {
    return { valido: false, motivo: `Estoque insuficiente (disponível: ${estoqueDisponivel}).` };
  }
  return { valido: true };
}

