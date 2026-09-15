/**
 * Enums mirroring the Spring Boot backend (com.coremarket.cliente.enums.*).
 * Keep these in sync with the Java enums of the same name.
 */

/** Mirrors StatusCliente.java */
export const STATUS_CLIENTE = {
  ATIVO: 'ATIVO',
  INATIVO: 'INATIVO',
  EM_ATRASO: 'EM_ATRASO',
  COM_PENDENCIA: 'COM_PENDENCIA',
}

/** Mirrors FormaPagamento.java */
export const FORMA_PAGAMENTO = {
  DINHEIRO: 'DINHEIRO',
  PIX: 'PIX',
  CARTAO_CREDITO: 'CARTAO_CREDITO',
  CARTAO_DEBITO: 'CARTAO_DEBITO',
  OUTRO: 'OUTRO',
}

/** Mirrors StatusContaReceber.java */
export const STATUS_CONTA_RECEBER = {
  PAGO: 'PAGO',
  PARCIAL: 'PARCIAL',
  EM_ABERTO: 'EM_ABERTO',
  EM_ATRASO: 'EM_ATRASO',
}

/** Mirrors SegmentoCliente.java */
export const SEGMENTO_CLIENTE = {
  TODOS: 'TODOS',
  MAIORES_COMPRADORES: 'MAIORES_COMPRADORES',
  INADIMPLENTES: 'INADIMPLENTES',
  INATIVOS: 'INATIVOS',
  NOVOS_CLIENTES: 'NOVOS_CLIENTES',
}

/** Mirrors GeneroPessoa.java */
export const GENERO_PESSOA = {
  MASCULINO: 'MASCULINO',
  FEMININO: 'FEMININO',
  OUTRO: 'OUTRO',
  PREFIRO_NAO_INFORMAR: 'PREFIRO_NAO_INFORMAR',
}
