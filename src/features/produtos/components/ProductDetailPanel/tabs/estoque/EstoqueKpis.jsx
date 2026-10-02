import { useEffect, useState } from "react";

import {
  AlertTriangle,
  Box,
  CalendarDays,
  Package,
  Tag,
} from "lucide-react";

import {
  formatDate,
  getEstoqueData,
} from "./estoque.utils";

function KpiCard({
  icon: Icon,
  label,
  value,
  helper,
  variation,
  variationType = "positive",
  iconClassName,
}) {
  return (
    <div
      className="
        group
        min-w-0
        rounded-xl
        border border-slate-200
        bg-white
        p-3.5
        shadow-[0_2px_10px_rgba(15,23,42,0.025)]
        transition-all duration-300
        hover:-translate-y-[1px]
        hover:border-slate-300
        hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]

        dark:border-[#17375d]
        dark:bg-[#061c38]
        dark:hover:border-[#24517f]
      "
    >
      <div className="flex items-start gap-3">
        <div
          className={[
            "flex h-10 w-10 shrink-0 items-center justify-center",
            "rounded-xl border",
            "transition-transform duration-300",
            "group-hover:scale-105",
            iconClassName,
          ].join(" ")}
        >
          <Icon size={19} strokeWidth={2} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p
              className="
                truncate
                text-[10px]
                font-medium
                text-slate-500
                dark:text-[#7290b4]
              "
            >
              {label}
            </p>

            {variation && (
              <span
                className={`
                  shrink-0
                  text-[9px]
                  font-bold
                  ${
                    variationType === "negative"
                      ? "text-red-500 dark:text-red-400"
                      : "text-emerald-600 dark:text-emerald-400"
                  }
                `}
              >
                {variation}
              </span>
            )}
          </div>

          <p
            className="
              mt-1
              text-[15px]
              font-bold
              tracking-tight
              text-slate-800
              dark:text-[#e3edfc]
            "
          >
            {value}
          </p>

          <p
            className="
              mt-1
              truncate
              text-[9px]
              text-slate-400
              dark:text-[#7290b4]
            "
          >
            {helper}
          </p>
        </div>
      </div>
    </div>
  );
}

export function EstoqueKpis({ produto }) {
  const {
    estoqueAtual,
    reservado,
    disponivel,
    estoqueMinimo,
  } = getEstoqueData(produto);

  const ultimaCompra =
    produto?.ultimaCompra ||
    produto?.dataUltimaCompra ||
    produto?.ultimaCompraData;

  const [agora, setAgora] = useState(() => Date.now());

    useEffect(() => {
    const timer = setInterval(() => {
        setAgora(Date.now());
    }, 60_000);

    return () => clearInterval(timer);
    }, []);

    const diasDesdeCompra = ultimaCompra
    ? Math.max(
        0,
        Math.floor(
            (agora - new Date(ultimaCompra).getTime()) /
            86400000
        )
        )
    : null;

  return (
    <div className="-ml-4 -mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
      <KpiCard
        icon={Package}
        label="Estoque atual"
        value={`${estoqueAtual} un`}
        helper="Em relação ao último mês"
        variation="+12%"
        iconClassName="
          border-emerald-200
          bg-emerald-50
          text-emerald-600
          dark:border-emerald-500/20
          dark:bg-emerald-500/10
          dark:text-emerald-400
        "
      />

      <KpiCard
        icon={Tag}
        label="Reservado"
        value={`${reservado} un`}
        helper="Em pedidos"
        variation="+5%"
        iconClassName="
          border-blue-200
          bg-blue-50
          text-blue-600
          dark:border-blue-500/20
          dark:bg-blue-500/10
          dark:text-blue-400
        "
      />

      <KpiCard
        icon={Box}
        label="Disponível"
        value={`${disponivel} un`}
        helper="Para venda"
        variation="+15%"
        iconClassName="
          border-emerald-200
          bg-emerald-50
          text-emerald-600
          dark:border-emerald-500/20
          dark:bg-emerald-500/10
          dark:text-emerald-400
        "
      />

      <KpiCard
        icon={AlertTriangle}
        label="Estoque mínimo"
        value={`${estoqueMinimo} un`}
        helper="Abaixo do ideal"
        variation="-10%"
        variationType="negative"
        iconClassName="
          border-amber-200
          bg-amber-50
          text-amber-600
          dark:border-amber-500/20
          dark:bg-amber-500/10
          dark:text-amber-400
        "
      />

      <KpiCard
        icon={CalendarDays}
        label="Última compra"
        value={formatDate(ultimaCompra)}
        helper={
          diasDesdeCompra !== null
            ? `há ${diasDesdeCompra} dias`
            : "Sem registro"
        }
        iconClassName="
          border-cyan-200
          bg-cyan-50
          text-cyan-600
          dark:border-cyan-500/20
          dark:bg-cyan-500/10
          dark:text-cyan-400
        "
      />
    </div>
  );
}