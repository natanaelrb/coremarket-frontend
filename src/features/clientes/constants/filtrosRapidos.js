import { STATUS_CLIENTE } from "../../../shared/constants/enums.js";

/** Quick-filter chips shown above the clients table. */
export const FILTROS_RAPIDOS = [
  { id: 'todos', label: 'Todos' },
  { id: STATUS_CLIENTE.ATIVO, label: 'Ativos' },
  { id: STATUS_CLIENTE.INATIVO, label: 'Inativos' },
  { id: 'com-divida', label: 'Com dívida' },
  { id: STATUS_CLIENTE.EM_ATRASO, label: 'Em atraso' },
  { id: 'sem-divida', label: 'Sem dívida' },
]
