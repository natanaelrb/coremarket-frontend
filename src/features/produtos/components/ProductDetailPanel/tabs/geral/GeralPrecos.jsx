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
            border-green-200
            bg-green-50
            text-green-600
            dark:border-green-500/20
            dark:bg-green-500/10
            dark:text-green-400
        "
        />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <GeralPriceField
            icon={CircleDollarSign}
            label="Preço de compra"
            value={formatCurrency(produto.precoCompra)}
            iconClassName="
                border-green-200
                bg-green-50
                text-green-600
                dark:border-green-500/20
                dark:bg-green-500/10
                dark:text-green-400
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
                border-green-200
                bg-green-50
                text-green-600
                dark:border-green-500/20
                dark:bg-green-500/10
                dark:text-green-400
            "
            />

        <GeralPriceField
            icon={CircleDollarSign}
            label="Lucro"
            value={formatCurrency(lucro)}
            valueClassName="
                text-green-600
                dark:text-green-400
            "
            iconClassName="
                border-green-300
                bg-green-50
                text-green-700
                dark:border-green-400/30
                dark:bg-green-500/15
                dark:text-green-300
            "
            />
      </div>
    </GeralCard>
  );
}