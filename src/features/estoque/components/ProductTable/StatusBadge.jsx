import { Badge } from "../../../../shared/components/ui/Badge.jsx";
import { getStatusConfig } from '../../constants/statusConfig.js'

/**
 * Translates a product's raw status key (e.g. "baixo_estoque") into the
 * correctly toned Badge label, using the shared statusConfig map.
 */
export default function StatusBadge({ status }) {
  const { label, tone } = getStatusConfig(status)
  return <Badge tone={tone}>{label}</Badge>
}
