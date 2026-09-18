import { AlertTriangle, Info, Users } from "lucide-react";
import { AlertItem } from "./AlertItem.jsx";

const ICONS = {
  amber: AlertTriangle,
  blue: Info,
  violet: Users,
};

export function AlertsBanner({ alertas }) {
  if (!alertas?.length) return null;

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-2
        md:grid-cols-3
        w-full
        animate-slide-up
      "
      style={{
        animationDelay: "80ms",
        animationFillMode: "backwards",
      }}
    >
      {alertas.map((alerta) => {
        const Icon = ICONS[alerta.tone] ?? Info;

        return (
          <AlertItem
            key={alerta.id}
            tone={alerta.tone}
            texto={alerta.texto}
            icon={<Icon size={12} />}
          />
        );
      })}
    </div>
  );
}