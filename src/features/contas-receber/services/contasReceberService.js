import { CONTAS_MOCK, CLIENTES } from '../data';
import {
  buildNovaConta, nextContaNumber, applyPagamento, applyNegociacao, applyCancelamento, applyEdicao, applyPromessa,
} from '../utils';

const delay = (ms = 320) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Camada de acesso a dados. Hoje opera sobre mocks em memória; ao integrar, troque cada
 * método por uma chamada Axios (`http` em src/services/http.js) ao endpoint indicado.
 */
export const contasReceberService = {
  /** TODO(api): GET /api/contas-receber */
  async listar() { await delay(800); return structuredClone(CONTAS_MOCK); },

  /** TODO(api): POST /api/contas-receber */
  async criar(form, contasAtuais) {
    await delay();
    const cliente = CLIENTES.find((c) => String(c.id) === String(form.clienteId));
    return buildNovaConta(form, cliente, nextContaNumber(contasAtuais));
  },

  /** TODO(api): POST /api/contas-receber/{id}/pagamentos */
  async registrarPagamento(conta, form) { await delay(); return applyPagamento(conta, form); },

  /** TODO(api): POST /api/contas-receber/{id}/negociacao */
  async negociar(conta, form, hoje) { await delay(); return applyNegociacao(conta, form, hoje); },

  /** TODO(api): POST /api/contas-receber/{id}/cancelamento */
  async cancelar(conta, form, hoje) { await delay(); return applyCancelamento(conta, form, hoje); },

  /** TODO(api): PUT /api/contas-receber/{id} */
  async editar(conta, form) { await delay(); return applyEdicao(conta, form); },

  /** TODO(api): POST /api/contas-receber/{id}/promessa-pagamento */
  async definirPromessa(conta, form) { await delay(); return applyPromessa(conta, form); },
};
