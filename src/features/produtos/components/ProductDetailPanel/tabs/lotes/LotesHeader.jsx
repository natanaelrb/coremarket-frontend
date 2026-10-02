import { Boxes, Plus } from "lucide-react";

export function LotesHeader() {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        px-5
        pb-3
        pt-5
        sm:flex-row
        sm:items-start
        sm:justify-between
      "
    >
      <div className="flex items-start gap-3">
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
            border-blue-200
            bg-blue-50
            text-blue-600

            dark:border-blue-500/20
            dark:bg-blue-500/10
            dark:text-blue-400
          "
        >
          <Boxes size={19} strokeWidth={2} />
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
            Lotes do Produto
          </h2>

          <p
            className="
              mt-0.5
              text-[10px]
              text-slate-500
              dark:text-[#7290b4]
            "
          >
            Gerencie os lotes e validade dos produtos em estoque.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="
          inline-flex
          h-9
          shrink-0
          items-center
          justify-center
          gap-2
          rounded-lg
          border
          border-emerald-500
          bg-emerald-500
          px-3.5
          text-xs
          font-semibold
          text-white
          shadow-sm
          transition-all
          duration-200
          hover:bg-emerald-600
          hover:shadow-md
          active:scale-[0.98]

          dark:border-emerald-400
          dark:bg-emerald-500
          dark:hover:bg-emerald-400
        "
      >
        <Plus size={15} strokeWidth={2.3} />

        Novo Lote
      </button>
    </div>
  );
}