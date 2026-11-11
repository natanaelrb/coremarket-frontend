import { onlyDigits } from '../../../shared/utils/masks';

/** CÃ³digo "copia e cola" FICTÃCIO. TODO(api): POST /api/cobrancas/pix */
export function buildPixPayload(conta) {
  const valor = conta.saldo.toFixed(2);
  return `00020126580014br.gov.bcb.pix0136coremarket-${onlyDigits(conta.id)}@pix.fake5204000053039865406${valor}5802BR5911COREMARKET6008TERESINA62070503***6304ABCD`;
}

