/**
 * @typedef {Object} Cliente
 * @property {string} id - e.g. "CLI-000124"
 * @property {string} nome
 * @property {string} telefone - raw digits
 * @property {string} documento - CPF/CNPJ raw digits
 * @property {string} dataNascimento - ISO date
 * @property {string} genero
 * @property {string} email
 * @property {string} whatsapp
 * @property {Object} endereco
 * @property {string} clienteDesde - ISO date
 * @property {string} ultimaCompra - ISO date
 * @property {number} totalComprado
 * @property {number} totalPago
 * @property {number} emAberto
 * @property {number} emAtraso
 * @property {string} status - StatusCliente
 * @property {number} limiteCredito
 * @property {number} limiteUtilizado
 * @property {number} quantidadeCompras
 * @property {number} ticketMedio
 * @property {string} primeiraCompra - ISO date
 * @property {string} observacoes
 */

/**
 * @typedef {Object} KpiClientes
 * @property {number} totalClientes
 * @property {number} clientesAtivos
 * @property {number} totalAReceber
 * @property {number} clientesInadimplentes
 * @property {number} pagamentosPendentes
 */

export {}
