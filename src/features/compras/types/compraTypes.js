// Definições de tipos via JSDoc — projeto em JavaScript puro (sem TS),
// mas mantemos os contratos documentados para autocomplete no editor e
// para servir de referência do DTO esperado do backend Spring Boot.

/**
 * @typedef {Object} Compra
 * @property {number} id
 * @property {number} numero
 * @property {string} data - ISO date-time
 * @property {number} fornecedorId
 * @property {string} fornecedorNome
 * @property {number} produtosCount
 * @property {number} subtotal
 * @property {number} desconto
 * @property {number} frete
 * @property {number} outrasDespesas
 * @property {number} impostos
 * @property {number} total
 * @property {string} formaPagamento
 * @property {string|null} dataRecebimento
 * @property {string} previsaoEntrega
 * @property {string} status
 * @property {string} responsavel
 * @property {string} pedido
 * @property {string} observacoes
 */

/**
 * @typedef {Object} Parcela
 * @property {number} numero
 * @property {number} total
 * @property {string} vencimento
 * @property {number} valor
 * @property {"pendente"|"paga"|"atrasada"} status
 */

/**
 * @typedef {Object} CompraDetalhe
 * @property {Compra} compra
 * @property {Object} condicoesPagamento
 * @property {Parcela[]} parcelas
 * @property {Object} recebimento
 * @property {Object} integracoes
 * @property {Array} produtos
 * @property {Array} historico
 */

export {};
