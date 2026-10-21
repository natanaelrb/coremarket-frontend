import {
  CircleDollarSign,
  Package,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

import {
  formatCurrency,
} from "../../../../utils/formatters";

import {
  FinanceiroField,
  FinanceiroSection,
} from "./FinanceiroShared";

export function IndicadoresFinanceiros({
  produto,
  smartInfo,
}) {
  const estoque = Number(
    produto.estoque ?? 0
  );

  const precoCompra = Number(
    produto.precoCompra ?? 0
  );

  const precoVenda = Number(
    produto.precoVenda ?? 0
  );

  const valorInvestido =
    precoCompra * estoque;

  const valorPotencial =
    precoVenda * estoque;

  return (
    <FinanceiroSection
      icon={TrendingUp}
      title="Indicadores financeiros"
      iconClassName="
        border-blue-200
        bg-blue-50
        text-blue-600

        dark:border-blue-500/20
        dark:bg-blue-500/10
        dark:text-blue-400
      "
    >
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <FinanceiroField
          icon={CircleDollarSign}
          label="Receita gerada"
          value={formatCurrency(
            smartInfo.receitaGeradaMes
          )}
          helper="No mês atual"
          valueClassName="
            text-blue-600
            dark:text-blue-400
          "
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
          icon={TrendingUp}
          label="Giro do estoque"
          value={
            smartInfo.giroEstoqueMes ?? "—"
          }
          helper="Giro mensal"
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
          icon={Package}
          label="Valor investido"
          value={formatCurrency(
            valorInvestido
          )}
          helper={`${estoque} un em estoque`}
          iconClassName="
            border-amber-200
            bg-amber-50
            text-amber-600

            dark:border-amber-500/20
            dark:bg-amber-500/10
            dark:text-amber-400
          "
        />

        <FinanceiroField
          icon={ShoppingCart}
          label="Valor potencial de venda"
          value={formatCurrency(
            valorPotencial
          )}
          helper="Estoque × preço de venda"
          valueClassName="
            text-green-600
            dark:text-green-400
          "
          iconClassName="
            border-green-200
            bg-green-50
            text-green-600

            dark:border-green-500/20
            dark:bg-green-500/10
            dark:text-green-400
          "
        />
      </div>
    </FinanceiroSection>
  );
}