/**
 * Enums e chaves compartilhadas do módulo Dashboard.
 * Espelham os enums equivalentes no backend Spring Boot.
 */

export const STATUS_PAGAMENTO = {
  PAGO: 'PAGO',
  PENDENTE: 'PENDENTE',
  VENCIDO: 'VENCIDO',
};

export const CATEGORIA_PRODUTO = {
  ALIMENTOS: 'Alimentos',
  BEBIDAS: 'Bebidas',
  HIGIENE: 'Higiene',
  LIMPEZA: 'Limpeza',
  OUTROS: 'Outros',
};

export const CRITICIDADE_ESTOQUE = {
  CRITICO: 'CRITICO',
  ATENCAO: 'ATENCAO',
  OK: 'OK',
};

export const CRITICIDADE_LABEL = {
  [CRITICIDADE_ESTOQUE.CRITICO]: 'Crítico',
  [CRITICIDADE_ESTOQUE.ATENCAO]: 'Atenção',
  [CRITICIDADE_ESTOQUE.OK]: 'OK',
};

export const TENDENCIA = {
  ALTA: 'ALTA',
  BAIXA: 'BAIXA',
  ESTAVEL: 'ESTAVEL',
};

export const DIAS_SEMANA = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

export const MOEDA = 'BRL';
export const LOCALE = 'pt-BR';
