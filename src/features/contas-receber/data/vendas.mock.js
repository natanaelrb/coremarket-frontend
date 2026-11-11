import { createRng } from "./seed";
import { PRODUTOS } from "./produtos.mock";
import { round2 } from "../../../shared/utils/round2";

const pad = (n) => String(n).padStart(2, "0");

const VENDAS_FIXAS = {
  "V-10452": {
    hora: "14:32",
    itens: [
      { nome: "Arroz 5kg", quantidade: 2, preco: 28 },
      { nome: "Feijão 1kg", quantidade: 3, preco: 8.5 },
      { nome: "Café 500g", quantidade: 2, preco: 18 },
    ],
  },
};

function gerarVenda(vendaId) {
  const rng = createRng(Number(vendaId.replace(/\D/g, "")));
  const pool = [...PRODUTOS]
    .sort(() => rng.next() - 0.5)
    .slice(0, rng.int(2, 4));
  return {
    hora: `${pad(rng.int(8, 19))}:${pad(rng.int(0, 59))}`,
    itens: pool.map((p) => ({
      nome: p.nome,
      quantidade: rng.int(1, 4),
      preco: p.preco,
    })),
  };
}

/** TODO(api): GET /api/vendas/{vendaId} — itens, data/hora e condição da venda. */
export function getVendaDaConta(conta) {
  const base = VENDAS_FIXAS[conta.vendaId] ?? gerarVenda(conta.vendaId);
  const itens = base.itens.map((i) => ({
    ...i,
    subtotal: round2(i.quantidade * i.preco),
  }));
  return {
    id: conta.vendaId,
    data: conta.emissao,
    hora: base.hora,
    condicao: "A_PRAZO",
    itens,
    total: round2(itens.reduce((s, i) => s + i.subtotal, 0)),
  };
}
