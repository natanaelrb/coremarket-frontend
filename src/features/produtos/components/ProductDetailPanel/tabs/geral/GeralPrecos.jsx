import {
  CircleDollarSign,
  Tag,
} from "lucide-react";

import {
  formatCurrency,
  formatPercent,
} from "../../../../utils/formatters";

import {
  GeralCard,
  GeralPriceField,
  GeralSectionTitle,
} from "./GeralShared";

export function GeralPrecos({
  produto,
  margem,
  lucro,
}) {
  return (
    <GeralCard className="p-5 -mt-5 -ml-4">
      <GeralSectionTitle
        icon={CircleDollarSign}
        title="Preços"
        iconClassName="
            border-emerald-200
            bg-emerald-50
            text-emerald-600
            dark:border-emerald-500/20
            dark:bg-emerald-500/10
            dark:text-emerald-400
        "
        />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <GeralPriceField
            icon={CircleDollarSign}
            label="Preço de compra"
            value={formatCurrency(produto.precoCompra)}
            iconClassName="
                border-emerald-200
                bg-emerald-50
                text-emerald-600
                dark:border-emerald-500/20
                dark:bg-emerald-500/10
                dark:text-emerald-400
            "
            />

        <GeralPriceField
            icon={Tag}
            label="Preço de venda"
            value={formatCurrency(produto.precoVenda)}
            iconClassName="
                border-blue-200
                bg-blue-50
                text-blue-600
                dark:border-blue-500/20
                dark:bg-blue-500/10
                dark:text-blue-400
            "
            />

        <GeralPriceField
            icon={CircleDollarSign}
            label="Margem"
            value={formatPercent(margem)}
            iconClassName="
                border-emerald-200
                bg-emerald-50
                text-emerald-600
                dark:border-emerald-500/20
                dark:bg-emerald-500/10
                dark:text-emerald-400
            "
            />

        <GeralPriceField
            icon={CircleDollarSign}
            label="Lucro"
            value={formatCurrency(lucro)}
            valueClassName="
                text-emerald-600
                dark:text-emerald-400
            "
            iconClassName="
                border-emerald-300
                bg-emerald-50
                text-emerald-700
                dark:border-emerald-400/30
                dark:bg-emerald-500/15
                dark:text-emerald-300
            "
            />
      </div>
    </GeralCard>
  );
}