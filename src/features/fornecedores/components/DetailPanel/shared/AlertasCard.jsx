import {
  AlertTriangle,
  Clock,
  Info,
  Package,
} from "lucide-react";

import { ALERTA_ICON_STYLES } from "../../../constants/tableConfig.js";

const ICONS = {
  pendente: Clock,
  atraso: AlertTriangle,
  info: Info,
  estoque: Package,
};

export default function AlertasCard({ alertas = [] }) {
  if (alertas.length === 0) return null;

  return (
    <section
      className="
        rounded-xl
        border border-slate-200/80
        bg-white
        p-4
        shadow-sm shadow-slate-900/[0.02]
        dark:border-[#252a4a]
        dark:bg-[#141833]
        dark:shadow-black/10
      "
    >
      <h4
        className="
          mb-4
          text-sm
          font-semibold
          text-slate-800
          dark:text-slate-100
        "
      >
        Alertas
      </h4>

      <ul className="space-y-3">
        {alertas.map((alerta, index) => {
          const Icon = ICONS[alerta.tipo] ?? Info;

          const style =
            ALERTA_ICON_STYLES[alerta.tipo] ??
            ALERTA_ICON_STYLES.info;

          return (
            <li
              key={alerta.id ?? `${alerta.tipo}-${index}`}
              className="flex items-start gap-3"
            >
              <div
                className={`
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  ${style.bg}
                `}
              >
                <Icon
                  size={15}
                  className={style.text}
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className="
                    text-sm
                    font-medium
                    text-slate-700
                    dark:text-slate-200
                  "
                >
                  {alerta.titulo}
                </p>

                <p
                  className="
                    mt-0.5
                    text-xs
                    leading-relaxed
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {alerta.detalhe}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}