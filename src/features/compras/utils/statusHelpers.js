import { STATUS_CONFIG } from "../constants/statusConfig";

export function getStatusConfig(status) {
  return STATUS_CONFIG[status] || STATUS_CONFIG.pedido_realizado;
}

export function getStatusLabel(status) {
  return getStatusConfig(status).label;
}
