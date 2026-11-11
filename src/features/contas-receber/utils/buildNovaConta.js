import { parseMoney } from '../../../shared/utils/masks';
import { formatContaId } from './nextContaNumber';

/** POST /api/contas-receber */
export function buildNovaConta(form, cliente, numero) {
  return {
    id: formatContaId(numero), clienteId: cliente.id, clienteNome: cliente.nome, cpf: cliente.cpf, telefone: cliente.telefone,
    vendaId: form.vendaId?.trim() || `V-${10000 + numero}`, documento: form.documento?.trim() || `NF-${8000 + numero}`,
    emissao: form.emissao, vencimento: form.vencimento, valorOriginal: parseMoney(form.valor),
    formaPagamento: form.forma, responsavel: form.responsavel, pagamentos: [], negociacao: null,
    cancelada: null, promessa: null, observacao: form.observacao ?? '',
  };
}

