import {
  TrendingUp,
  Crown,
  RefreshCw,
  CalendarDays,
  BadgeDollarSign,
  ShoppingCart,
} from "lucide-react";

function SmartMetric({
  icon: Icon,
  label,
  value,
  variation,
  iconClassName = "",
}) {
  return (
    <div
      className="
        group
        flex h-10
        items-center justify-between
        rounded-lg
        border border-slate-200
        bg-slate-50
        px-3
        transition-all duration-200
        hover:border-slate-300
        hover:bg-white

        dark:border-[#123b68]
        dark:bg-[#071f3d]
        dark:hover:border-[#1b527f]
        dark:hover:bg-[#09294d]
      "
    >
      <div className="flex min-w-0 items-center gap-2.5">
        <div
          className={[
            "flex h-7 w-7 shrink-0 items-center justify-center",
            "rounded-lg border",
            "transition-transform duration-200",
            "group-hover:scale-105",
            iconClassName,
          ].join(" ")}
        >
          <Icon size={14} strokeWidth={2} />
        </div>

        <div className="min-w-0">
          <p
            className="
              truncate
              text-[9px]
              font-medium
              text-slate-400

              dark:text-[#7290b4]
            "
          >
            {label}
          </p>

          <p
            className="
              mt-0.5
              text-[11px]
              font-semibold
              text-slate-700

              dark:text-[#e3edfc]
            "
          >
            {value}
          </p>
        </div>
      </div>

      {variation ? (
        <span
          className="
            ml-2
            shrink-0
            rounded-full
            border
            border-emerald-200
            bg-emerald-50
            px-2 py-0.5
            text-[8px]
            font-bold
            text-emerald-600

            dark:border-emerald-400/10
            dark:bg-emerald-500/10
            dark:text-emerald-300
          "
        >
          ↑ {variation}
        </span>
      ) : (
        <span
          className="
            text-[11px]
            text-slate-400

            dark:text-[#7290b4]
          "
        >
          —
        </span>
      )}
    </div>
  );
}

export function SmartInfoSection({
  lucroMedio = "R$ 29,28",
  produtoMaisVendido = "—",
  giroEstoque = "195 un",
  quantidadeVendida = "195 un",
  diasSemVender = "1.7",
  receitaGerada = "R$ 16.690,05",
}) {
  return (
    <section
      className="-ml-4
        rounded-xl
        border border-slate-200
        bg-white
        p-4
        shadow-[0_2px_10px_rgba(15,23,42,0.04)]
        transition-all duration-300
        hover:border-slate-300
        hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]

        dark:border-[#12365f]
        dark:bg-[#061c38]
        dark:shadow-[0_2px_10px_rgba(0,0,0,0.12)]
        dark:hover:border-[#1d4c78]
      "
    >
      <div className="mb-3">
        <h3
          className="
            text-[11px]
            font-bold
            text-slate-700

            dark:text-[#d7e5f7]
          "
        >
          Informações inteligentes
        </h3>

        <p
          className="
            text-[9px]
            text-slate-400

            dark:text-[#7290b4]
          "
        >
          Resumo das principais métricas e dados do produto
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
        <div className="space-y-2">
          <SmartMetric
            icon={TrendingUp}
            label="Lucro médio"
            value={lucroMedio}
            variation="12%"
            iconClassName="
              border-cyan-200
              bg-cyan-50
              text-cyan-600

              dark:border-cyan-400/20
              dark:bg-cyan-400/10
              dark:text-cyan-300
            "
          />

          <SmartMetric
            icon={ShoppingCart}
            label="Quantidade vendida"
            value={quantidadeVendida}
            variation="8%"
            iconClassName="
              border-cyan-200
              bg-cyan-50
              text-cyan-600

              dark:border-cyan-400/20
              dark:bg-cyan-400/10
              dark:text-cyan-300
            "
          />
        </div>

        <div className="space-y-2">
          <SmartMetric
            icon={Crown}
            label="Produto mais vendido"
            value={produtoMaisVendido}
            iconClassName="
              border-amber-200
              bg-amber-50
              text-amber-600

              dark:border-amber-400/20
              dark:bg-amber-400/10
              dark:text-amber-300
            "
          />

          <SmartMetric
            icon={CalendarDays}
            label="Dias sem vender"
            value={diasSemVender}
            iconClassName="
              border-emerald-200
              bg-emerald-50
              text-emerald-600

              dark:border-emerald-400/20
              dark:bg-emerald-400/10
              dark:text-emerald-300
            "
          />
        </div>

        <div className="space-y-2">
          <SmartMetric
            icon={RefreshCw}
            label="Giro do estoque (mês)"
            value={giroEstoque}
            variation="15%"
            iconClassName="
              border-amber-200
              bg-amber-50
              text-amber-600

              dark:border-amber-400/20
              dark:bg-amber-400/10
              dark:text-amber-300
            "
          />

          <SmartMetric
            icon={BadgeDollarSign}
            label="Receita gerada (mês)"
            value={receitaGerada}
            variation="22%"
            iconClassName="
              border-cyan-200
              bg-cyan-50
              text-cyan-600

              dark:border-cyan-400/20
              dark:bg-cyan-400/10
              dark:text-cyan-300
            "
          />
        </div>
      </div>
    </section>
  );
}