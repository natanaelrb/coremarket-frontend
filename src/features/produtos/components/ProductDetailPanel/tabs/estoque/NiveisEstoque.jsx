import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Package,
} from "lucide-react";

import { StockRow } from "./EstoqueShared";

import {
  getEstoqueData,
} from "./estoque.utils";

export function NiveisEstoque({ produto }) {
  const {
    estoqueAtual,
    reservado,
    disponivel,
    estoqueMinimo,
    estoqueMaximo,
    ocupacao,
  } = getEstoqueData(produto);

  return (
    <section
      className="
        -ml-4
        rounded-xl
        border border-slate-200
        bg-white
        p-4
        shadow-[0_2px_10px_rgba(15,23,42,0.025)]
        transition-all duration-300
        hover:border-slate-300
        hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]

        dark:border-[#17375d]
        dark:bg-[#061c38]
        dark:hover:border-[#24517f]
      "
    >
      <h3
        className="
          mb-3
          text-sm
          font-bold
          text-slate-800
          dark:text-[#e3edfc]
        "
      >
        Níveis de estoque
      </h3>

      <div
        className="
          overflow-hidden
          rounded-xl
          border border-slate-200
          dark:border-[#12365a]
        "
      >
        <StockRow
          icon={Package}
          label="Estoque atual"
          value={`${estoqueAtual} un`}
          iconClassName="bg-slate-100 text-slate-600 dark:bg-slate-500/10 dark:text-slate-300"
        />

        <StockRow
          icon={Clock3}
          label="Reservado"
          value={`${reservado} un`}
          iconClassName="bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
        />

        <StockRow
          icon={CheckCircle2}
          label="Disponível"
          value={`${disponivel} un`}
          iconClassName="bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
        />

        <StockRow
          icon={AlertTriangle}
          label="Estoque mínimo"
          value={`${estoqueMinimo} un`}
          iconClassName="bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400"
        />

        <StockRow
          icon={ArrowUpRight}
          label="Estoque máximo"
          value={`${estoqueMaximo} un`}
          iconClassName="bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400"
        />

        <StockRow
          icon={Package}
          label="Unidade"
          value={produto?.unidade || "Un"}
          iconClassName="bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400"
        />
      </div>

      <div className="mt-4 px-2">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-medium text-slate-500 dark:text-[#7290b4]">
            Ocupação da capacidade máxima
          </span>

          <span className="text-[10px] font-semibold text-slate-700 dark:text-[#c8daee]">
            {ocupacao}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-[#12365a]">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-500 dark:bg-emerald-400"
            style={{ width: `${ocupacao}%` }}
          />
        </div>
      </div>
    </section>
  );
}