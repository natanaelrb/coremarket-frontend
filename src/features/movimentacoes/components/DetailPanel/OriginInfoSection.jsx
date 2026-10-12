import {
  CalendarDays,
  FileText,
  Store,
  Truck,
} from "lucide-react";

import DetailSectionCard from "./DetailSectionCard";
import { formatFullDateTime } from "../../utils/formatDate";

export default function OriginInfoSection({ movement }) {
  const hasOriginInfo =
    movement?.origemLabel ||
    movement?.fornecedor ||
    movement?.notaFiscal ||
    movement?.dataHora;

  if (!hasOriginInfo) return null;

  const items = [
    movement.origemLabel && {
      label: "Origem da movimentação",
      value: movement.origemLabel,
      icon: Store,
      color: "green",
      linked: Boolean(movement.origemLink),
    },

    movement.fornecedor && {
      label: "Fornecedor",
      value: movement.fornecedor,
      icon: Truck,
      color: "blue",
    },

    movement.notaFiscal && {
      label: "Nota fiscal",
      value: movement.notaFiscal,
      icon: FileText,
      color: "violet",
      type: "document",
    },

    movement.dataHora && {
      label: "Data da compra",
      value: formatFullDateTime(movement.dataHora),
      icon: CalendarDays,
      color: "amber",
    },
  ].filter(Boolean);

  const colorMap = {
    green: {
      iconBg: "bg-emerald-50",
      iconBorder: "border-emerald-100",
      iconText: "text-emerald-600",
      hoverBorder: "hover:border-emerald-200",
      hoverBg: "hover:bg-emerald-50/40",
      hoverIcon: "group-hover/item:bg-emerald-100",
      hoverIconText: "group-hover/item:text-emerald-700",
      value: "text-emerald-600",
    },

    blue: {
      iconBg: "bg-blue-50",
      iconBorder: "border-blue-100",
      iconText: "text-blue-600",
      hoverBorder: "hover:border-blue-200",
      hoverBg: "hover:bg-blue-50/40",
      hoverIcon: "group-hover/item:bg-blue-100",
      hoverIconText: "group-hover/item:text-blue-700",
      value: "text-blue-600",
    },

    violet: {
      iconBg: "bg-violet-50",
      iconBorder: "border-violet-100",
      iconText: "text-violet-600",
      hoverBorder: "hover:border-violet-200",
      hoverBg: "hover:bg-violet-50/40",
      hoverIcon: "group-hover/item:bg-violet-100",
      hoverIconText: "group-hover/item:text-violet-700",
      value: "text-violet-600",
    },

    amber: {
      iconBg: "bg-amber-50",
      iconBorder: "border-amber-100",
      iconText: "text-amber-600",
      hoverBorder: "hover:border-amber-200",
      hoverBg: "hover:bg-amber-50/40",
      hoverIcon: "group-hover/item:bg-amber-100",
      hoverIconText: "group-hover/item:text-amber-700",
      value: "text-amber-600",
    },
  };

  return (
    <DetailSectionCard title="Origem">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          const colors = colorMap[item.color];

          return (
            <div
              key={item.label}
              className={`
                group/item
                rounded-xl
                border
                border-slate-100
                bg-slate-50/60
                p-3.5
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-[0_6px_18px_rgba(15,23,42,0.06)]
                ${colors.hoverBorder}
                ${colors.hoverBg}
              `}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    bg-white
                    shadow-[0_1px_3px_rgba(15,23,42,0.03)]
                    transition-all
                    duration-200
                    ${colors.iconBorder}
                    ${colors.iconText}
                    ${colors.hoverIcon}
                    ${colors.hoverIconText}
                  `}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-400">
                    {item.label}
                  </p>

                  {item.type === "document" ? (
                    <span
                      className={`
                        mt-1.5
                        inline-flex
                        max-w-full
                        items-center
                        rounded-lg
                        border
                        bg-white
                        px-2
                        py-1
                        font-mono
                        text-[11px]
                        font-semibold
                        transition-colors
                        duration-200
                        ${colors.iconBorder}
                        ${colors.value}
                      `}
                    >
                      {item.value}
                    </span>
                  ) : (
                    <p
                      className={`
                        mt-1
                        truncate
                        text-xs
                        font-semibold
                        transition-colors
                        duration-200
                        ${
                          item.linked
                            ? colors.value
                            : "text-slate-700"
                        }
                      `}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DetailSectionCard>
  );
}