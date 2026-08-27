import { Badge } from "../../../../shared/components/ui/Badge";
import { getStatusConfig } from "../../utils/statusHelpers";

export function StatusBadge({ status }) {
  const config = getStatusConfig(status);
  return (
    <Badge textClass={config.textClass} bgClass={config.bgClass} borderClass={config.borderClass} dotClass={config.dotClass}>
      {config.label}
    </Badge>
  );
}
