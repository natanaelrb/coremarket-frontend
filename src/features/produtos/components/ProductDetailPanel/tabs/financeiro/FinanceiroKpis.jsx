import {
  CircleDollarSign,
  Percent,
  TrendingUp,
  RefreshCw,
} from "lucide-react";

import {
  formatCurrency,
  formatPercent,
} from "../../../../utils/formatters";

import { FinanceiroKpi } from "./FinanceiroShared";

export function FinanceiroKpis({
  margem,
  lucro,
  receita,
  giro,
}) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-3
        px-5
        pb-4
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      <FinanceiroKpi
        icon={Percent}
        label="Margem"
        value={formatPercent(margem)}
        helper="Margem sobre a venda"
        iconClassName="
          border-emerald-200
          bg-emerald-50
          text-emerald-600

          dark:border-emerald-500/20
          dark:bg-emerald-500/10
          dark:text-emerald-400
        "
        valueClassName="
          text-emerald-600
          dark:text-emerald-400
        "
      />

      <FinanceiroKpi
        icon={TrendingUp}
        label="Lucro unitário"
        value={formatCurrency(lucro)}
        helper="Resultado por unidade"
        iconClassName="
          border-emerald-200
          bg-emerald-50
          text-emerald-600

          dark:border-emerald-500/20
          dark:bg-emerald-500/10
          dark:text-emerald-400
        "
        valueClassName="
          text-emerald-600
          dark:text-emerald-400
        "
      />

      <FinanceiroKpi
        icon={CircleDollarSign}
        label="Receita no mês"
        value={formatCurrency(receita)}
        helper="Vendas acumuladas"
        iconClassName="
          border-blue-200
          bg-blue-50
          text-blue-600

          dark:border-blue-500/20
          dark:bg-blue-500/10
          dark:text-blue-400
        "
        valueClassName="
          text-blue-600
          dark:text-blue-400
        "
      />

      <FinanceiroKpi
        icon={RefreshCw}
        label="Giro do estoque"
        value={giro ?? "—"}
        helper="Giro médio mensal"
        iconClassName="
          border-orange-200
          bg-orange-50
          text-orange-600

          dark:border-orange-500/20
          dark:bg-orange-500/10
          dark:text-orange-400
        "
      />
    </div>
  );
}