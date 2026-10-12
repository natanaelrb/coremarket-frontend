import { FileText } from "lucide-react";

export default function MovimentoObservacao({
  value,
  onChange,
  isEntrada,
}) {
  return (
    <div>
      <label
        htmlFor="observacao"
        className="
          flex items-center gap-1
          text-[10px] font-semibold uppercase
          tracking-[0.06em] text-gray-500
          dark:text-gray-400
        "
      >
        Observação

        <span className="
          ml-1 normal-case font-normal
          tracking-normal text-gray-400
          dark:text-gray-500
        ">
          (opcional)
        </span>
      </label>

      <div className="relative mt-1.5">
        <FileText
          size={15}
          className="
            pointer-events-none absolute left-3 top-3
            text-gray-400 dark:text-gray-500
          "
        />

        <textarea
          id="observacao"
          name="observacao"
          rows={3}
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder={
            isEntrada
              ? "Ex.: Compra recebida do fornecedor..."
              : "Ex.: Saída referente a uma venda..."
          }
          className="
            w-full resize-none rounded-lg
            border border-gray-200 bg-white
            py-2.5 pl-10 pr-3
            text-sm text-gray-800
            outline-none transition-all duration-200
            placeholder:text-gray-300
            focus:border-emerald-400
            focus:ring-2 focus:ring-emerald-500/15
            dark:border-white/10
            dark:bg-[#11142b]
            dark:text-gray-200
            dark:placeholder:text-gray-600
          "
        />
      </div>
    </div>
  );
}