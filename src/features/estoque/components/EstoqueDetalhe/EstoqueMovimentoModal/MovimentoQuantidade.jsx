import { AlertCircle, Boxes } from "lucide-react";

export default function MovimentoQuantidade({
  value,
  erro,
  onChange,
}) {
  return (
    <div>
      <label
        htmlFor="quantidade"
        className="
          flex items-center gap-1
          text-[10px] font-semibold uppercase
          tracking-[0.06em] text-gray-500
          dark:text-gray-400
        "
      >
        Quantidade
        <span className="text-rose-500">*</span>
      </label>

      <div className="relative mt-1.5">
        <Boxes
          size={16}
          className="
            pointer-events-none absolute left-3 top-1/2
            -translate-y-1/2 text-gray-400
            dark:text-gray-500
          "
        />

        <input
          id="quantidade"
          name="quantidade"
          type="text"
          inputMode="numeric"
          autoFocus
          value={value}
          onChange={onChange}
          placeholder="Ex.: 10"
          className={`
            h-11 w-full rounded-lg border
            bg-white pl-10 pr-20
            text-sm font-medium text-gray-800
            outline-none transition-all duration-200
            placeholder:text-gray-300
            focus:ring-2
            dark:bg-[#11142b] dark:text-gray-200
            dark:placeholder:text-gray-600
            ${
              erro
                ? `
                  border-rose-300
                  focus:border-rose-400
                  focus:ring-rose-500/15
                  dark:border-rose-500/30
                `
                : `
                  border-gray-200
                  focus:border-emerald-400
                  focus:ring-emerald-500/15
                  dark:border-white/10
                `
            }
          `}
        />

        <span className="
          pointer-events-none absolute right-3 top-1/2
          -translate-y-1/2 text-[11px] font-medium
          text-gray-400 dark:text-gray-500
        ">
          unidades
        </span>
      </div>

      {erro && (
        <div className="
          mt-2 flex items-start gap-1.5
          text-[11px] text-rose-600
          animate-fade-in
          dark:text-rose-400
        ">
          <AlertCircle
            size={13}
            className="mt-px shrink-0"
          />

          <span>{erro}</span>
        </div>
      )}
    </div>
  );
}