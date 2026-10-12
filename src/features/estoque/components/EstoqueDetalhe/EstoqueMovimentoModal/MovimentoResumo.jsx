import { Boxes } from "lucide-react";

export default function MovimentoResumo({
  tipo,
  estoqueAtual,
  quantidade,
  novaQuantidade,
}) {
  const isEntrada = tipo === "entrada";

  if (!quantidade) {
    return (
      <div className="
        rounded-xl border border-dashed
        border-gray-200 bg-gray-50/70
        px-4 py-3.5
        dark:border-white/10
        dark:bg-white/[0.02]
      ">
        <div className="flex items-center gap-2">
          <Boxes
            size={15}
            className="text-gray-400 dark:text-gray-500"
          />

          <p className="text-xs text-gray-400 dark:text-gray-500">
            Informe a quantidade para visualizar
            o impacto no estoque.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`
      rounded-xl border px-4 py-3.5
      ${
        isEntrada
          ? `
            border-emerald-100 bg-emerald-50/60
            dark:border-emerald-500/15
            dark:bg-emerald-500/[0.04]
          `
          : `
            border-rose-100 bg-rose-50/60
            dark:border-rose-500/15
            dark:bg-rose-500/[0.04]
          `
      }
    `}>
      <p className="
        text-[10px] font-semibold uppercase
        tracking-[0.06em] text-gray-400
        dark:text-gray-500
      ">
        Resumo da movimentação
      </p>

      <div className="
        mt-2.5 flex items-center
        justify-between gap-4
      ">
        <SummaryValue
          label="Estoque atual"
          value={`${estoqueAtual} un.`}
        />

        <span className={`
          text-lg font-bold
          ${
            isEntrada
              ? "text-emerald-500"
              : "text-rose-500"
          }
        `}>
          {isEntrada ? "+" : "−"}
          {quantidade}
        </span>

        <SummaryValue
          label="Após confirmação"
          value={`${novaQuantidade} un.`}
          align="right"
          danger={novaQuantidade < 0}
        />
      </div>
    </div>
  );
}

function SummaryValue({
  label,
  value,
  align = "left",
  danger = false,
}) {
  return (
    <div className={
      align === "right" ? "text-right" : ""
    }>
      <p className="text-[10px] text-gray-400 dark:text-gray-500">
        {label}
      </p>

      <p className={`
        mt-0.5 text-sm font-bold
        ${
          danger
            ? "text-rose-600 dark:text-rose-400"
            : "text-gray-800 dark:text-white"
        }
      `}>
        {value}
      </p>
    </div>
  );
}