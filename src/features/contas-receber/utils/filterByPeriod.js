import { isBetween } from '../../../shared/utils/dateMath';

const CAMPOS = {
  VENCIMENTO: (c) => c.vencimento,
  EMISSAO: (c) => c.emissao,
  PAGAMENTO: (c) => c.ultimoPagamento,
};

/** Filtra pelo intervalo do seletor de datas, usando o campo escolhido em "PerÃ­odo". */
export function filterByPeriod(contas, range, campo = 'VENCIMENTO') {
  const get = CAMPOS[campo] ?? CAMPOS.VENCIMENTO;
  return contas.filter((c) => isBetween(get(c), range.start, range.end));
}

