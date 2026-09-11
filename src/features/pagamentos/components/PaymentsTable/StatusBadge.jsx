import { Badge } from '../../../../shared/components/ui/Badge.jsx';
import { STATUS_PAGAMENTO_META } from '../../constants/index.js';

/** Renders a colored pill for a `StatusPagamento` value. */
export function StatusBadge({ status }) {
  const meta = STATUS_PAGAMENTO_META[status];
  if (!meta) return null;
  return <Badge tone={meta.tone}>{meta.label}</Badge>;
}
