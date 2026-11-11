/**
 * @typedef {Object} Pagamento
 * @property {string} id
 * @property {string} data         ISO yyyy-MM-dd
 * @property {string} hora         HH:mm
 * @property {number} valor
 * @property {string} forma        FormaPagamento
 * @property {string} responsavel
 * @property {string} [observacao]
 *
 * @typedef {Object} Negociacao
 * @property {string} data
 * @property {string} vencimentoOriginal
 * @property {string} novoVencimento
 * @property {number} desconto
 * @property {string} [observacao]
 *
 * @typedef {Object} ContaReceberRaw   Formato do backend (ContaReceberResponse)
 * @property {string} id               ex.: "CR-00152"
 * @property {number} clienteId
 * @property {string} clienteNome
 * @property {string} cpf
 * @property {string} telefone
 * @property {string} vendaId          ex.: "V-10452"
 * @property {string} documento
 * @property {string} emissao
 * @property {string} vencimento
 * @property {number} valorOriginal
 * @property {string} formaPagamento
 * @property {string} responsavel
 * @property {Pagamento[]} pagamentos
 * @property {Negociacao|null} negociacao
 * @property {{data:string, motivo:string, observacao?:string}|null} cancelada
 * @property {{data:string, observacao?:string}|null} promessa
 * @property {string} [observacao]
 *
 * @typedef {ContaReceberRaw & {
 *   valorPago:number, desconto:number, valorLiquido:number, saldo:number, aberto:boolean,
 *   diasParaVencer:number, diasAtraso:number, ultimoPagamento:(string|null),
 *   exposure:string, status:string, statusOrder:number, busca:string
 * }} ContaReceber   Conta enriquecida no front (utils/enrichConta)
 *
 * @typedef {Object} Filtros
 * @property {string} busca
 * @property {string} status
 * @property {string} periodoCampo
 * @property {string} vencimento
 * @property {string} cliente
 * @property {string} forma
 * @property {string} valorFaixa
 * @property {string} responsavel
 * @property {Object} advanced
 */
export {};
