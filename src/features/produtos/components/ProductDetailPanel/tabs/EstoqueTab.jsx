import {
  EstoqueKpis,
  NiveisEstoque,
  MovimentacoesRecentes,
} from "./estoque";

export function EstoqueTab({ produto }) {
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
      <EstoqueKpis produto={produto} />

      <div
        className="
          grid
          grid-cols-1
          gap-3
          xl:grid-cols-[minmax(0,1.55fr)_minmax(420px,1fr)]
        "
      >
        <NiveisEstoque produto={produto} />

        <MovimentacoesRecentes produto={produto} />
      </div>
    </div>
  );
}

