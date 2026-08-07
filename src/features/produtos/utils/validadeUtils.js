// Regras de negócio relacionadas à validade e situação de estoque dos produtos.
import { PRODUCT_STATUS } from '../constants/statusConfig';

const MS_PER_DAY = 1000 * 60 * 60 * 24;

// Retorna o número de dias entre hoje e a data de validade (negativo = vencido).
export function getDaysUntil(dateInput, today = new Date()) {
  if (!dateInput) return null;
  const target = dateInput instanceof Date ? dateInput : new Date(dateInput);
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const end = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  return Math.round((end - start) / MS_PER_DAY);
}

// Define o status geral do produto combinando estoque + validade.
export function resolveProductStatus(produto, today = new Date()) {
  if (produto.estoque <= 0) return PRODUCT_STATUS.SEM_ESTOQUE;

  const dias = produto.validadeMaisProxima ? getDaysUntil(produto.validadeMaisProxima, today) : null;

  if (dias !== null) {
    if (dias < 0) return PRODUCT_STATUS.VENCIDO;
    if (dias === 0) return PRODUCT_STATUS.VENCE_HOJE;
    if (dias <= 7) return PRODUCT_STATUS.VENCE_EM_BREVE;
  }

  if (produto.estoque <= produto.estoqueMinimo) return PRODUCT_STATUS.ESTOQUE_BAIXO;

  return PRODUCT_STATUS.OK;
}

// Texto auxiliar exibido abaixo da data de validade na tabela ("132 dias", "Vence hoje"...)
export function getValidadeHelperText(dias) {
  if (dias === null || dias === undefined) return '—';
  if (dias < 0) return `${Math.abs(dias)} dias`;
  if (dias === 0) return '0 dias';
  return `${dias} dias`;
}
