import { SEGMENTO_CLIENTE } from "../../../shared/constants/enums.js";

/** UI presentation config for the client-segmentation modal. */
export const SEGMENTOS_CONFIG = [
  { id: SEGMENTO_CLIENTE.TODOS, label: 'Todos' },
  { id: SEGMENTO_CLIENTE.MAIORES_COMPRADORES, label: 'Maiores compradores' },
  { id: SEGMENTO_CLIENTE.INADIMPLENTES, label: 'Inadimplentes' },
  { id: SEGMENTO_CLIENTE.INATIVOS, label: 'Inativos' },
  { id: SEGMENTO_CLIENTE.NOVOS_CLIENTES, label: 'Novos clientes' },
]
