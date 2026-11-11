import { DEFAULT_ADVANCED_FILTERS, DEFAULT_FILTERS } from '../constants/filtros';

/** Quantos filtros do formulário (selects) diferem do padrão. */
export function countActiveFilters(filters) {
  return ['status', 'periodoCampo', 'vencimento', 'cliente', 'forma', 'valorFaixa', 'responsavel']
    .filter((k) => filters[k] !== DEFAULT_FILTERS[k]).length + (filters.busca ? 1 : 0);
}

/** Quantos filtros avançados estão preenchidos. */
export function countAdvancedFilters(advanced) {
  return Object.keys(DEFAULT_ADVANCED_FILTERS).filter((k) => advanced[k] !== DEFAULT_ADVANCED_FILTERS[k]).length;
}
