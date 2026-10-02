import {
  Pencil,
  PackagePlus,
  PackageMinus,
  PlusCircle,
} from "lucide-react";

import { formatDate } from "../../../../utils/formatters";

import { HISTORICO_CONFIG } from "./HistoricoShared";

const ICONS = {
  criacao: PlusCircle,
  edicao: Pencil,
  entrada: PackagePlus,
  saida: PackageMinus,
};

export function HistoricoEvent({ item, isLast }) {
  const config =
    HISTORICO_CONFIG[item.tipo] ??
    HISTORICO_CONFIG.edicao;

  const Icon = ICONS[item.tipo] ?? Pencil;

  const data = new Date(item.data);

  const hora = data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="relative flex gap-4">
      {!isLast && (
        <div
          className="
            absolute
            left-[19px]
            top-10
            h-[calc(100%+1rem)]
            w-px
            bg-slate-200

            dark:bg-[#17375d]
          "
        />
      )}

      <div
        className={[
          "relative z-10",
          "flex h-10 w-10 shrink-0 items-center justify-center",
          "rounded-xl border",
          "transition-all duration-300",
          "hover:scale-105",
          config.iconClassName,
        ].join(" ")}
      >
        <Icon
          size={17}
          strokeWidth={2}
        />
      </div>

      <div
        className="
          mb-4
          min-w-0
          flex-1
          rounded-xl
          border
          border-slate-200
          bg-white
          p-4
          transition-all
          duration-300
          hover:-translate-y-[1px]
          hover:border-slate-300
          hover:shadow-[0_8px_24px_rgba(15,23,42,0.05)]

          dark:border-[#17375d]
          dark:bg-[#061c38]
          dark:hover:border-[#24517f]
        "
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3
                className="
                  text-sm
                  font-semibold
                  text-slate-800
                  dark:text-[#e3edfc]
                "
              >
                {item.descricao}
              </h3>

              <span
                className={[
                  "rounded-full border px-2 py-0.5",
                  "text-[9px] font-semibold",
                  config.badgeClassName,
                ].join(" ")}
              >
                {config.label}
              </span>
            </div>

            {item.detalhe && (
              <p
                className="
                  mt-1.5
                  text-xs
                  text-slate-500
                  dark:text-[#7290b4]
                "
              >
                {item.detalhe}
              </p>
            )}
          </div>

          <div className="shrink-0 text-right">
            <p
              className="
                text-[10px]
                font-medium
                text-slate-500
                dark:text-[#7290b4]
              "
            >
              {formatDate(item.data)}
            </p>

            <p
              className="
                mt-0.5
                text-[9px]
                text-slate-400
                dark:text-[#5f7b9f]
              "
            >
              {hora}
            </p>
          </div>
        </div>

        <div
          className="
            mt-3
            flex
            items-center
            gap-1.5
            border-t
            border-slate-100
            pt-2.5

            dark:border-[#17375d]
          "
        >
          <span
            className="
              text-[9px]
              text-slate-400
              dark:text-[#5f7b9f]
            "
          >
            Responsável:
          </span>

          <span
            className="
              text-[9px]
              font-semibold
              text-slate-600
              dark:text-[#a9bfdc]
            "
          >
            {item.responsavel ?? "Sistema"}
          </span>
        </div>
      </div>
    </div>
  );
}