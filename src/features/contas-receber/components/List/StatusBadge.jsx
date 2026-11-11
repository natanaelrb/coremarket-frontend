import { STATUS_META } from "../../constants";
import { Badge } from "../../../../shared/components/ui/Badge";

export function StatusBadge({ status, long = false, className }) {
  const m = STATUS_META[status];
  return (
    <Badge tone={m.tone} className={className}>
      {long ? m.longLabel : m.label}
    </Badge>
  );
}
