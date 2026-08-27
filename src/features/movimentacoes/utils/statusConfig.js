import { MOVEMENT_STATUS_CONFIG } from '../constants/statusTypes';

export function getStatusConfig(status) {
  return MOVEMENT_STATUS_CONFIG[status] || MOVEMENT_STATUS_CONFIG.CONCLUIDA;
}
