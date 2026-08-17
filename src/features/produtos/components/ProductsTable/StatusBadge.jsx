// Badge de status (bolinha + texto) reaproveitando STATUS_CONFIG.
import { STATUS_CONFIG } from '../../constants/statusConfig';

export function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status];
  if (!config) return null;

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${config.bgClass} ${config.textClass}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${config.dotClass}`} />
      {config.label}
    </span>
  );
}
