import { useProdutoSmartInfo } from "../../../hooks/useProdutoSmartInfo";

import {
  calcMargemPercent,
  calcLucroUnitario,
} from "../../../utils/calculators";

import {
  FinanceiroHeader,
  FinanceiroKpis,
  RentabilidadeCard,
  IndicadoresFinanceiros,
} from "./financeiro";

export function FinanceiroTab({ produto }) {
  const smartInfo = useProdutoSmartInfo(produto);

  const margem = calcMargemPercent(
    produto.precoCompra,
    produto.precoVenda
  );

  const lucro = calcLucroUnitario(
    produto.precoCompra,
    produto.precoVenda
  );

  return (
    <div
      className="
        space-y-3
        bg-slate-50
        px-3
        pb-5
        pt-3
        sm:px-5

        dark:bg-[#03152c]
      "
    >
      <section
        className="-ml-4 -mt-2
          overflow-hidden
          rounded-xl
          border
          border-slate-200
          bg-white
          shadow-[0_2px_10px_rgba(15,23,42,0.025)]

          dark:border-[#17375d]
          dark:bg-[#061c38]
        "
      >
        <FinanceiroHeader />

        <FinanceiroKpis
          margem={margem}
          lucro={lucro}
          receita={smartInfo.receitaGeradaMes}
          giro={smartInfo.giroEstoqueMes}
        />

        <div
          className="
            grid
            grid-cols-1
            gap-3
            px-5
            pb-5
            xl:grid-cols-[1fr_1fr]
          "
        >
          <RentabilidadeCard
            produto={produto}
            margem={margem}
            lucro={lucro}
          />

          <IndicadoresFinanceiros
            produto={produto}
            smartInfo={smartInfo}
          />
        </div>
      </section>
    </div>
  );
}

