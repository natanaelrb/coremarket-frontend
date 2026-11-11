import { normalizeText } from '../../../shared/utils/normalizeText';
import { onlyDigits, parseMoney } from '../../../shared/utils/masks';
import { Exposure } from '../constants/statusConta';
import { ALL_BUCKETS } from '../constants/vencimentoBuckets';
import { VALOR_FAIXAS } from '../constants/filtros';
import { matchBucket } from './matchBucket';

/** Aplica busca, selects e filtros avanÃ§ados. `ignoreStatus` Ã© usado no resumo por status. */
export function filterContas(contas, filters, { ignoreStatus = false } = {}) {
  const q = normalizeText(filters.busca);
  const qDigits = onlyDigits(filters.busca);
  const faixa = VALOR_FAIXAS.find((f) => f.value === filters.valorFaixa);
  const bucket = ALL_BUCKETS.find((b) => b.id === filters.vencimento);
  const adv = filters.advanced;
  const advCpf = onlyDigits(adv.cpf);
  const vMin = adv.valorMin !== '' ? parseMoney(adv.valorMin) : null;
  const vMax = adv.valorMax !== '' ? parseMoney(adv.valorMax) : null;

  return contas.filter((c) => {
    if (q && !(c.busca.includes(q) || (qDigits && c.busca.includes(qDigits)))) return false;
    if (!ignoreStatus && filters.status !== 'TODOS' && c.status !== filters.status) return false;
    if (bucket && !matchBucket(c, bucket)) return false;
    if (filters.cliente !== 'TODOS' && String(c.clienteId) !== filters.cliente) return false;
    if (filters.forma !== 'TODAS' && c.formaPagamento !== filters.forma) return false;
    if (faixa && (c.valorOriginal < faixa.min || c.valorOriginal > faixa.max)) return false;
    if (filters.responsavel !== 'TODOS' && c.responsavel !== filters.responsavel) return false;

    if (advCpf && !onlyDigits(c.cpf).includes(advCpf)) return false;
    if (vMin !== null && c.valorOriginal < vMin) return false;
    if (vMax !== null && c.valorOriginal > vMax) return false;
    if (adv.emissaoDe && c.emissao < adv.emissaoDe) return false;
    if (adv.emissaoAte && c.emissao > adv.emissaoAte) return false;
    if (adv.vencimentoDe && c.vencimento < adv.vencimentoDe) return false;
    if (adv.vencimentoAte && c.vencimento > adv.vencimentoAte) return false;
    if (adv.atrasoMin !== '' && c.diasAtraso < Number(adv.atrasoMin)) return false;
    if (adv.apenasComSaldo && c.saldo <= 0) return false;
    if (adv.apenasInadimplentes && c.exposure !== Exposure.VENCIDO) return false;
    return true;
  });
}

