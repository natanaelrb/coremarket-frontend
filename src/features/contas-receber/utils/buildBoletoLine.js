import { onlyDigits } from '../../../shared/utils/masks';

/** Linha digitÃ¡vel FICTÃCIA para demonstraÃ§Ã£o. TODO(api): POST /api/cobrancas/boleto */
export function buildBoletoLine(conta) {
  const seed = `${onlyDigits(conta.id)}${Math.round(conta.saldo * 100)}`.padEnd(30, '7');
  const d = (a, b) => seed.slice(a, b);
  return `34191.${d(0, 5)} ${d(5, 10)}.${d(10, 16)} ${d(16, 21)}.${d(21, 27)} 1 ${String(Math.round(conta.saldo * 100)).padStart(14, '0')}`;
}

