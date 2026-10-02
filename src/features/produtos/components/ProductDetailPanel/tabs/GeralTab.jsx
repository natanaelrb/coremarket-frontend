import {
  GeralInfoBasicas,
  GeralInfoFiscais,
  GeralPrecos,
  GeralEstoque,
  GeralValidade,
} from "./geral";

import { QuickActions } from "../QuickActions";
import { SmartInfoSection } from "../SmartInfoSection";

import {
  calcMargemPercent,
  calcLucroUnitario,
  calcEstoqueDisponivel,
} from "../../../utils/calculators";

import { getDaysUntil } from "../../../utils/validadeUtils";

export function GeralTab({ produto }) {
  const margem = calcMargemPercent(
    produto.precoCompra,
    produto.precoVenda
  );

  const lucro = calcLucroUnitario(
    produto.precoCompra,
    produto.precoVenda
  );

  const disponivel = calcEstoqueDisponivel(
    produto.estoque,
    produto.estoqueReservado
  );

  const diasValidade = produto.validadeMaisProxima
    ? getDaysUntil(produto.validadeMaisProxima)
    : null;

  return (
    <div
      className="
        space-y-3
        bg-slate-50
        px-3 pb-5 pt-3
        sm:px-5

        dark:bg-[#03152c]
      "
    >
      {/* Informações principais */}
      <div
        className="
          grid
          grid-cols-1
          gap-3
          xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]
        "
      >
        <GeralInfoBasicas produto={produto} />

        <GeralInfoFiscais produto={produto} />
      </div>

      {/* Preços */}
      <GeralPrecos
        produto={produto}
        margem={margem}
        lucro={lucro}
      />

      {/* Estoque + Validade */}
      <div
        className="
          grid
          grid-cols-1
          gap-3
          xl:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)]
        "
      >
        <GeralEstoque
          produto={produto}
          disponivel={disponivel}
        />

        <GeralValidade
          produto={produto}
          diasValidade={diasValidade}
        />
      </div>

      {/* SOMENTE NA ABA GERAL */}
      <QuickActions
        onAction={(action) => {
          console.info("Ação rápida:", action);
        }}
      />

          
      <SmartInfoSection
        lucroMedio={lucro}
        produtoMaisVendido={produto.produtoMaisVendido}
        giroEstoque={produto.giroEstoque}
        quantidadeVendida={produto.quantidadeVendida}
        diasSemVender={produto.diasSemVender}
        receitaGerada={produto.receitaGerada}
      />
    </div>
  );
}

