/**
 * @typedef {Object} Produto
 * @property {string} id
 * @property {string} codigoBarras
 * @property {string} nome
 * @property {number} preco
 * @property {number} estoque
 * @property {string} [imagemUrl]
 */

/**
 * @typedef {Object} ItemVenda
 * @property {string} id
 * @property {string} produtoId
 * @property {string} nome
 * @property {string} codigoBarras
 * @property {number} quantidade
 * @property {number} precoUnitario
 * @property {number} descontoItem
 * @property {string} [imagemUrl]
 */

/**
 * @typedef {Object} Cliente
 * @property {string} id
 * @property {string} nome
 * @property {string} cpf
 * @property {string} telefone
 * @property {number} dividaAberta
 */

/**
 * @typedef {Object} VendaHistorico
 * @property {string} id
 * @property {string} numero
 * @property {string} dataHora ISO string
 * @property {string} clienteNome
 * @property {string} operadorNome
 * @property {number} quantidadeItens
 * @property {number} total
 * @property {string} formaPagamento
 * @property {number} [parcelas]
 * @property {string} status
 */

/**
 * @typedef {Object} KpiVendas
 * @property {number} vendasHoje
 * @property {number} quantidadeVendasHoje
 * @property {number} variacaoVendas
 * @property {number} ticketMedio
 * @property {number} variacaoTicketMedio
 * @property {number} itensVendidos
 * @property {number} vendasCanceladas
 * @property {number} valorCancelado
 * @property {number} descontosTotais
 * @property {number} recebidoHoje
 */

export {};

