import { useState } from "react";

import { useProdutoSmartInfo } from "../../../hooks/useProdutoSmartInfo";

import {
  VendasHeader,
  VendasKpis,
  VendasTable,
} from "./vendas";

import { gerarVendasMock } from "./vendas/vendas.utils";

export function VendasTab({ produto }) {
  const smartInfo = useProdutoSmartInfo(produto);

  // Mantém o "agora" estável durante os renders.
  const [agora] = useState(() => Date.now());

  const vendas = gerarVendasMock(produto, agora);

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
        <VendasHeader />

        <VendasKpis
          produto={produto}
          smartInfo={smartInfo}
          vendas={vendas}
        />

        <VendasTable
          produto={produto}
          vendas={vendas}
        />
      </section>
    </div>
  );
}

