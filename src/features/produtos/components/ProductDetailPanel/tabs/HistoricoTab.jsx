import { HistoricoHeader, HistoricoTimeline } from "./historico";

function gerarHistoricoMock(produto) {
  const codigo = produto.codigo ?? produto.id ?? "PRODUTO";

  const seed = String(codigo)
    .split("")
    .reduce((acc, c) => acc + c.charCodeAt(0), 0);

  return [
    {
      id: `${codigo}-H1`,
      tipo: "criacao",
      descricao: "Produto cadastrado no sistema",
      detalhe: "Cadastro inicial do produto",
      responsavel: "Admin",
      data: new Date(
        Date.now() - (200 + seed) * 86400000
      ).toISOString(),
    },
    {
      id: `${codigo}-H2`,
      tipo: "entrada",
      descricao: `Entrada de ${20 + (seed % 50)} unidades`,
      detalhe: "Estoque atualizado após recebimento",
      responsavel: "Admin",
      data: new Date(
        Date.now() - (60 + (seed % 30)) * 86400000
      ).toISOString(),
    },
    {
      id: `${codigo}-H3`,
      tipo: "edicao",
      descricao: "Preço de venda atualizado",
      detalhe: `Novo preço: R$ ${Number(
        produto.precoVenda ?? 0
      ).toFixed(2).replace(".", ",")}`,
      responsavel: "Admin",
      data: new Date(
        Date.now() - (30 + (seed % 15)) * 86400000
      ).toISOString(),
    },
    {
      id: `${codigo}-H4`,
      tipo: "saida",
      descricao: `Saída de ${5 + (seed % 20)} unidades`,
      detalhe: "Movimentação registrada por venda",
      responsavel: "Vendedor",
      data: new Date(
        Date.now() - (5 + (seed % 5)) * 86400000
      ).toISOString(),
    },
  ];
}

export function HistoricoTab({ produto }) {
  const historico = gerarHistoricoMock(produto);

  return (
    <div
      className="-ml-1 -mt-2
        space-y-3
        bg-slate-50
        px-3
        pb-5
        pt-3
        sm:px-5

        dark:bg-[#03152c]
      "
    >
      <HistoricoHeader quantidade={historico.length} />

      <HistoricoTimeline historico={historico} />
    </div>
  );
}

