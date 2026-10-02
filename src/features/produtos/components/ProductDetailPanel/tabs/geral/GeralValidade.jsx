import { CalendarDays } from "lucide-react";

import { formatDate } from "../../../../utils/formatters";

import {
  GeralCard,
  GeralSectionTitle,
} from "./GeralShared";

function getStatus(dias) {
  if (dias === null) return null;

  if (dias < 0) {
    return {
      label: "Vencido",
      className:
        "bg-rose-50 text-rose-600 border border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
    };
  }

  if (dias <= 7) {
    return {
      label: "Atenção",
      className:
        "bg-amber-50 text-amber-600 border border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20",
    };
  }

  return {
    label: "OK",
    className:
      "bg-emerald-50 text-emerald-600 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  };
}

export function GeralValidade({
  produto,
  diasValidade,
}) {
  const status = getStatus(diasValidade);

  return (
    <GeralCard className="p-5">
      <div className="flex items-start justify-between gap-3">
        <GeralSectionTitle
            icon={CalendarDays}
            title="Validade"
            iconClassName="
                border-amber-200
                bg-amber-50
                text-amber-600
                dark:border-amber-500/20
                dark:bg-amber-500/10
                dark:text-amber-400
            "
            />

        {status && (
          <span
            className={[
              "shrink-0 rounded-full px-2.5 py-1",
              "text-[10px] font-bold",
              status.className,
            ].join(" ")}
          >
            {status.label}
          </span>
        )}
      </div>

      <div className="-mt-1">
        <p
          className="
            text-base font-bold
            text-slate-800
            dark:text-[#e7f0ff]
          "
        >
          {produto.validadeMaisProxima
            ? formatDate(produto.validadeMaisProxima)
            : "—"}
        </p>

        {diasValidade !== null && (
          <p
            className="
              mt-1 text-[10px]
              text-slate-400
              dark:text-[#7290b4]
            "
          >
            {diasValidade >= 0
              ? `${diasValidade} dias para vencer`
              : `Vencido há ${Math.abs(diasValidade)} dias`}
          </p>
        )}

        {produto.lotesCount > 0 && (
          <button
            type="button"
            className="
              mt-4 text-[10px] font-semibold
              text-emerald-600
              transition-colors
              hover:text-emerald-700
              dark:text-emerald-400
              dark:hover:text-emerald-300
            "
          >
            Exibir todos os lotes →
          </button>
        )}
      </div>
    </GeralCard>
  );
}