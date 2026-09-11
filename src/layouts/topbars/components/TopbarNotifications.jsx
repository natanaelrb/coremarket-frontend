import { Bell } from "lucide-react";

import IconButton from "../../../shared/components/actions/IconButton";

export default function TopbarNotifications() {
  return (
    <IconButton
      icon={Bell}
      badge="3"
      title="Notificações"
    />
  );
}