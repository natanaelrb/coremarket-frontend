/**
 * @typedef {import('../constants/statusPagamento.js').StatusPagamento} StatusPagamento
 * @typedef {import('../constants/tipoPagamento.js').TipoPagamento} TipoPagamento
 * @typedef {import('../constants/formaPagamento.js').FormaPagamento} FormaPagamento
 * @typedef {import('../constants/origemPagamento.js').OrigemPagamento} OrigemPagamento
 */

/**
 * @typedef {Object} Pagamento
 * @property {string} id - UUID do lançamento.
 * @property {string} codigo - Código exibido no painel de detalhes (ex: "000842").
 * @property {TipoPagamento} tipo
 * @property {StatusPagamento} status
 * @property {string} pessoa - Nome do cliente ou fornecedor.
 * @property {OrigemPagamento} origem
 * @property {string} origemReferencia - Ex: "#1042", "#582".
 * @property {FormaPagamento} forma
 * @property {number} parcelas - Número de parcelas (1 = à vista).
 * @property {number} valor - Valor em reais (BRL).
 * @property {string} dataCriacao - ISO datetime.
 * @property {string} dataVencimento - ISO date.
 * @property {string|null} dataPagamento - ISO datetime, quando liquidado.
 * @property {string} lojaId
 */

/**
 * @typedef {Object} PagamentoDetalhe
 * @property {Pagamento} pagamento
 * @property {number} valorBruto
 * @property {number} taxaValor
 * @property {number} taxaPercentual
 * @property {number} valorLiquido
 * @property {string|null} bandeira - Ex: "VISA", "MASTERCARD".
 * @property {string|null} adquirente - Ex: "Cielo", "Stone".
 * @property {string|null} nsu
 * @property {string|null} autorizacao
 * @property {string|null} terminal
 * @property {string} statusAdquirente
 * @property {string|null} previsaoLiquidacao - ISO date.
 * @property {string|null} dataLiquidacao - ISO datetime.
 * @property {HistoricoEvento[]} historico
 */

/**
 * @typedef {Object} HistoricoEvento
 * @property {string} data - ISO datetime.
 * @property {string} descricao
 * @property {string} autor
 */

/**
 * @typedef {Object} KpiCardData
 * @property {string} id
 * @property {string} label
 * @property {string} sublabel
 * @property {number} value
 * @property {'currency'|'number'} format
 * @property {string} icon - Lucide icon name resolved in KpiCard.
 * @property {string} accentColorVar - CSS var suffix, e.g. 'kpi-green'.
 */

/**
 * @typedef {Object} FiltrosPagamentos
 * @property {string} busca
 * @property {string} tipo - 'TODOS' | TipoPagamento
 * @property {string} status - 'TODOS' | StatusPagamento
 * @property {string} forma - 'TODOS' | FormaPagamento
 * @property {string} origem - 'TODOS' | OrigemPagamento
 * @property {string} campoData - 'vencimento' | 'criacao' | 'pagamento'
 * @property {string} dataInicio - ISO date
 * @property {string} dataFim - ISO date
 * @property {number} valorMinimo
 * @property {number} valorMaximo
 */

export {};
