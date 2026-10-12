import { CircleDollarSign } from "lucide-react";

export default function MovimentoCusto({
  value,
  onChange,
}) {
  return (
    <div>
      <FieldLabel
        htmlFor="custoUnitario"
        label="Custo unitário"
        optional
      />

      <div className="relative mt-1.5">
        <CircleDollarSign
          size={16}
          className="
            pointer-events-none absolute left-3 top-1/2
            -translate-y-1/2 text-gray-400
            dark:text-gray-500
          "
        />

        <input
          id="custoUnitario"
          name="custoUnitario"
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder="Ex.: 12,50"
          className="
            h-11 w-full rounded-lg
            border border-gray-200 bg-white
            pl-10 pr-4 text-sm font-medium
            text-gray-800 outline-none
            transition-all duration-200
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

      <p className="
        mt-1.5 text-[10px]
        text-gray-400 dark:text-gray-500
      ">
        Opcional. Pode ser usado para atualizar o custo médio.
      </p>
    </div>
  );
}

function FieldLabel({
  htmlFor,
  label,
  optional = false,
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="
        flex items-center gap-1
        text-[10px] font-semibold uppercase
        tracking-[0.06em] text-gray-500
        dark:text-gray-400
      "
    >
      {label}

      {optional && (
        <span className="
          ml-1 normal-case font-normal
          tracking-normal text-gray-400
          dark:text-gray-500
        ">
          (opcional)
        </span>
      )}
    </label>
  );
}