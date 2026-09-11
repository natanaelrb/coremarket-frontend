import { MOCK_PAGAMENTOS, MOCK_DETAIL_BY_ID, buildFallbackDetail } from '../mock/index.js';
import { MOCK_RECEBIMENTOS_PAGAMENTOS_SERIE } from '../mock/mockChartData.js';
import { MOCK_ALERTAS } from '../mock/mockAlertas.js';
import { MOCK_PROXIMOS_VENCIMENTOS } from '../mock/mockProximosVencimentos.js';
import { MOCK_PREVISAO_FINANCEIRA } from '../mock/mockPrevisaoFinanceira.js';

const SIMULATED_LATENCY_MS = 350;

function delay(value, ms = SIMULATED_LATENCY_MS) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

/**
 * Service layer for the Pagamentos module. Every method mirrors a real
 * REST endpoint on the Spring Boot backend; swap the mock resolution for
 * a `fetch`/`axios` call once the endpoint is available — the calling
 * hooks won't need to change.
 */
export const pagamentoService = {
  /**
   * TODO(api): GET /api/pagamentos?periodoInicio=&periodoFim=
   * @param {{ periodoInicio: string, periodoFim: string }} params
   */
  listar(params) {
    return delay(MOCK_PAGAMENTOS.map((p) => ({ ...p })));
  },

  /**
   * TODO(api): GET /api/pagamentos/{id}/detalhe
   * @param {string} id
   */
  buscarDetalhe(id) {
    const pagamento = MOCK_PAGAMENTOS.find((p) => p.id === id);
    if (!pagamento) return delay(null);
    const curated = MOCK_DETAIL_BY_ID[id];
    const detalhe = curated ? { pagamento, ...curated } : buildFallbackDetail(pagamento);
    return delay(detalhe);
  },

  /** TODO(api): GET /api/pagamentos/resumo-diario?periodoInicio=&periodoFim= */
  buscarSerieDiaria(params) {
    return delay(MOCK_RECEBIMENTOS_PAGAMENTOS_SERIE);
  },

  /** TODO(api): GET /api/pagamentos/alertas?periodoInicio=&periodoFim= */
  buscarAlertas(params) {
    return delay(MOCK_ALERTAS);
  },

  /** TODO(api): GET /api/pagamentos/proximos-vencimentos */
  buscarProximosVencimentos() {
    return delay(MOCK_PROXIMOS_VENCIMENTOS);
  },

  /** TODO(api): GET /api/pagamentos/previsao-financeira?dias=30 */
  buscarPrevisaoFinanceira() {
    return delay(MOCK_PREVISAO_FINANCEIRA);
  },

  /**
   * TODO(api): POST /api/pagamentos/recebimentos
   * @param {Object} payload
   */
  registrarRecebimento(payload) {
    return delay({ id: `pg-${Date.now()}`, ...payload }, 500);
  },

  /**
   * TODO(api): POST /api/pagamentos/pagamentos
   * @param {Object} payload
   */
  registrarPagamento(payload) {
    return delay({ id: `pg-${Date.now()}`, ...payload }, 500);
  },

  /**
   * TODO(api): POST /api/pagamentos/{id}/estornar
   * @param {string} id
   */
  estornar(id) {
    return delay({ id, status: 'CANCELADO' }, 500);
  },

  /** TODO(api): GET /api/pagamentos/{id}/comprovante (application/pdf) */
  baixarComprovante(id) {
    return delay({ id, url: `about:blank#comprovante-${id}` }, 400);
  },
};
