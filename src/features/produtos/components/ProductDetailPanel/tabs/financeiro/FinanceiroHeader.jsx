import {
  CircleDollarSign,
} from "lucide-react";

export function FinanceiroHeader() {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        px-5
        pb-4
        pt-5
      "
    >
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
        <CircleDollarSign
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
          Financeiro
        </h2>

        <p
          className="
            mt-0.5
            text-[10px]
            text-slate-500
            dark:text-[#7290b4]
          "
        >
          Rentabilidade, margem e desempenho financeiro deste produto.
        </p>
      </div>
    </div>
  );
}