import { History } from "lucide-react";

export function HistoricoHeader({ quantidade }) {
  return (
    <section
      className="-ml-4 -mt-2
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-slate-200
        bg-white
        px-5
        py-4
        shadow-[0_2px_10px_rgba(15,23,42,0.025)]

        dark:border-[#17375d]
        dark:bg-[#061c38]
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
          <History
            size={19}
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
            Histórico do produto
          </h2>

          <p
            className="
              mt-0.5
              text-[10px]
              text-slate-500
              dark:text-[#7290b4]
            "
          >
            Acompanhe as principais alterações e movimentações.
          </p>
        </div>
      </div>

      <span
        className="
          rounded-full
          border
          border-emerald-200
          bg-emerald-50
          px-2.5
          py-1
          text-[10px]
          font-semibold
          text-emerald-600

          dark:border-emerald-500/20
          dark:bg-emerald-500/10
          dark:text-emerald-400
        "
      >
        {quantidade} eventos
      </span>
    </section>
  );
}

