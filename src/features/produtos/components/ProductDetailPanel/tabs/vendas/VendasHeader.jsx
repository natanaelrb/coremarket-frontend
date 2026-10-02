import {
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

export function VendasHeader() {
  return (
    <div
      className="
        flex
        flex-col
        gap-3
        px-5
        pb-3
        pt-5
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-emerald-200
            bg-emerald-50
            text-emerald-600

            dark:border-emerald-500/20
            dark:bg-emerald-500/10
            dark:text-emerald-400
          "
        >
          <ShoppingCart
            size={18}
            strokeWidth={2}
          />
        </div>

        <div>
          <h2
            className="
              text-base
              font-bold
              text-slate-800
              dark:text-[#e3edfc]
            "
          >
            Histórico de vendas
          </h2>

          <p
            className="
              mt-0.5
              text-[10px]
              text-slate-500
              dark:text-[#7290b4]
            "
          >
            Acompanhe as vendas recentes deste produto.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="
          inline-flex
          items-center
          gap-1.5
          self-start
          rounded-lg
          px-2
          py-1.5
          text-[10px]
          font-semibold
          text-emerald-600
          transition-all
          hover:bg-emerald-50

          dark:text-emerald-400
          dark:hover:bg-emerald-500/10
        "
      >
        Ver todas

        <ArrowUpRight size={13} />
      </button>
    </div>
  );
}