/**
 * Central mapping of product stock status -> badge tone + display label.
 * Keeping this in one place means the table, filters, and detail panel
 * never fall out of sync on wording or color.
 */
export const STATUS_CONFIG = {
  normal: { label: 'Normal', tone: 'success' },
  baixo_estoque: { label: 'Baixo Estoque', tone: 'warning' },
  sem_estoque: { label: 'Sem estoque', tone: 'danger' },
  proximo_validade: { label: 'Próximo da validade', tone: 'warning' },
  vence_hoje: { label: 'Vence hoje', tone: 'danger' },
  vencido: { label: 'Vencido', tone: 'danger' },
}

export function getStatusConfig(statusKey) {
  return STATUS_CONFIG[statusKey] ?? { label: statusKey, tone: 'neutral' }
}
