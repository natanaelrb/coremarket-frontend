import {
  ArrowDownCircle,
  ArrowUpCircle,
  Percent,
  WalletCards,
} from "lucide-react";

import {
  formatCurrency,
  formatPercent,
} from "../../../../utils/formatters";

import {
  FinanceiroField,
  FinanceiroSection,
} from "./FinanceiroShared";

export function RentabilidadeCard({
  produto,
  margem,
  lucro,
}) {
  return (
    <FinanceiroSection
      icon={WalletCards}
      title="Rentabilidade"
      iconClassName="
        border-emerald-200
        bg-emerald-50
        text-emerald-600

        dark:border-emerald-500/20
        dark:bg-emerald-500/10
        dark:text-emerald-400
      "
    >
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <FinanceiroField
          icon={ArrowDownCircle}
          label="Preço de compra"
          value={formatCurrency(
            produto.precoCompra
          )}
          helper="Custo por unidade"
          iconClassName="
            border-orange-200
            bg-orange-50
            text-orange-600

            dark:border-orange-500/20
            dark:bg-orange-500/10
            dark:text-orange-400
          "
        />

        <FinanceiroField
          icon={ArrowUpCircle}
          label="Preço de venda"
          value={formatCurrency(
            produto.precoVenda
          )}
          helper="Preço atual"
          iconClassName="
            border-blue-200
            bg-blue-50
            text-blue-600

            dark:border-blue-500/20
            dark:bg-blue-500/10
            dark:text-blue-400
          "
        />

        <FinanceiroField
          icon={Percent}
          label="Margem"
          value={formatPercent(margem)}
          helper="Sobre o preço de venda"
          valueClassName="
            text-emerald-600
            dark:text-emerald-400
          "
          iconClassName="
            border-emerald-200
            bg-emerald-50
            text-emerald-600

            dark:border-emerald-500/20
            dark:bg-emerald-500/10
            dark:text-emerald-400
          "
        />

        <FinanceiroField
          icon={WalletCards}
          label="Lucro unitário"
          value={formatCurrency(lucro)}
          helper="Venda menos custo"
          valueClassName="
            text-emerald-600
            dark:text-emerald-400
          "
          iconClassName="
            border-emerald-200
            bg-emerald-50
            text-emerald-600

            dark:border-emerald-500/20
            dark:bg-emerald-500/10
            dark:text-emerald-400
          "
        />
      </div>
    </FinanceiroSection>
  );
}