import {
  ArrowDownRight,
  ArrowUpRight,
  Minus,
  Layers3,
} from "lucide-react";

import DetailSectionCard from "./DetailSectionCard";
import TypeBadge from "../MovementsTable/TypeBadge";
import { formatQuantitySigned } from "../../utils/formatQuantity";

export default function MovementInfoSection({ movement }) {
  const quantidade = Number(movement?.quantidade ?? 0);

  const isPositive = quantidade > 0;
  const isNegative = quantidade < 0;

  const quantityConfig = isPositive
    ? {
        color: "text-emerald-600",
        valueColor: "text-emerald-700",
        background: "bg-emerald-50/60",
        border: "border-emerald-100",
        hoverBorder: "hover:border-emerald-200",
        hoverBackground: "hover:bg-emerald-50",
        iconBackground: "bg-emerald-100",
        iconBorder: "border-emerald-200",
        dot: "bg-emerald-500",
        label: "Entrada no estoque",
        Icon: ArrowUpRight,
        shadow:
          "hover:shadow-[0_8px_22px_rgba(16,185,129,0.08)]",
      }
    : isNegative
      ? {
          color: "text-red-600",
          valueColor: "text-red-700",
          background: "bg-red-50/60",
          border: "border-red-100",
          hoverBorder: "hover:border-red-200",
          hoverBackground: "hover:bg-red-50",
          iconBackground: "bg-red-100",
          iconBorder: "border-red-200",
          dot: "bg-red-500",
          label: "Saída do estoque",
          Icon: ArrowDownRight,
          shadow:
            "hover:shadow-[0_8px_22px_rgba(239,68,68,0.08)]",
        }
      : {
          color: "text-slate-500",
          valueColor: "text-slate-700",
          background: "bg-slate-50",
          border: "border-slate-200",
          hoverBorder: "hover:border-slate-300",
          hoverBackground: "hover:bg-slate-100",
          iconBackground: "bg-slate-100",
          iconBorder: "border-slate-200",
          dot: "bg-slate-400",
          label: "Sem alteração",
          Icon: Minus,
          shadow: "hover:shadow-sm",
        };

  const QuantityIcon = quantityConfig.Icon;

  return (
    <DetailSectionCard title="Movimentação">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Tipo */}
        <div
          className="
            group/type
            rounded-2xl
            border
            border-blue-100
            bg-blue-50/40
            p-4
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-blue-200
            hover:bg-blue-50/70
            hover:shadow-[0_8px_22px_rgba(59,130,246,0.07)]
          "
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-blue-500/80">
                Tipo de movimentação
              </p>

              <div className="mt-3">
                <TypeBadge tipo={movement.tipo} />
              </div>
            </div>

            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-blue-100
                bg-white
                text-blue-500
                shadow-sm
                transition-all
                duration-200
                group-hover/type:scale-105
                group-hover/type:border-blue-200
                group-hover/type:bg-blue-50
              "
            >
              <Layers3
                className="h-4 w-4"
                strokeWidth={1.8}
              />
            </span>
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-500">
            Define como esta operação afetou o estoque do produto.
          </p>
        </div>

        {/* Quantidade */}
        <div
          className={`
            group/quantity
            rounded-2xl
            border
            p-4
            transition-all
            duration-200
            hover:-translate-y-0.5
            ${quantityConfig.background}
            ${quantityConfig.border}
            ${quantityConfig.hoverBorder}
            ${quantityConfig.hoverBackground}
            ${quantityConfig.shadow}
          `}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <p
                  className={`
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.08em]
                    ${quantityConfig.color}
                  `}
                >
                  Quantidade
                </p>

                <span
                  className={`
                    h-1.5
                    w-1.5
                    rounded-full
                    ${quantityConfig.dot}
                  `}
                />
              </div>

              <p
                className={`
                  mt-2
                  text-2xl
                  font-bold
                  tracking-tight
                  ${quantityConfig.valueColor}
                `}
              >
                {formatQuantitySigned(
                  quantidade,
                  movement.unidade?.toLowerCase() || "un",
                )}
              </p>
            </div>

            <span
              className={`
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                bg-white
                shadow-sm
                transition-all
                duration-200
                group-hover/quantity:scale-105
                ${quantityConfig.iconBorder}
                ${quantityConfig.color}
              `}
            >
              <QuantityIcon
                className="h-5 w-5"
                strokeWidth={2}
              />
            </span>
          </div>

          <p className="mt-2 text-xs font-medium text-slate-500">
            {quantityConfig.label}
          </p>
        </div>
      </div>
    </DetailSectionCard>
  );
}