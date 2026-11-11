import { createRng } from "./seed";
import { CLIENTES } from "./clientes.mock";
import { RESPONSAVEIS } from "./responsaveis.mock";
import { REFERENCE_DATE } from "../constants/referenceDate";
import { FormaPagamento as F } from "../constants/formaPagamento";
import { addDays } from "../../../shared/utils/dateMath";
import { round2 } from "../../../shared/utils/round2";

const pad = (n) => String(n).padStart(2, "0");
const codigo = (n) => `CR-${String(n).padStart(5, "0")}`;
const min = (a, b) => (a < b ? a : b);
const cliente = (nome) => CLIENTES.find((c) => c.nome === nome);

const pag = (id, data, hora, valor, forma, responsavel) => ({
  id,
  data,
  hora,
  valor,
  forma,
  responsavel,
});

const conta = (
  n,
  nomeCliente,
  vendaId,
  emissao,
  vencimento,
  valorOriginal,
  formaPagamento,
  responsavel,
  pagamentos = [],
) => {
  const c = cliente(nomeCliente);
  return {
    id: codigo(n),
    clienteId: c.id,
    clienteNome: c.nome,
    cpf: c.cpf,
    telefone: c.telefone,
    vendaId,
    documento: `NF-${8000 + n}`,
    emissao,
    vencimento,
    valorOriginal,
    formaPagamento,
    responsavel,
    pagamentos,
    negociacao: null,
    cancelada: null,
    promessa: null,
    observacao: "",
  };
};

/** As 8 primeiras contas reproduzem exatamente a tela de referÃªncia. */
const FIXAS = [
  conta(
    152,
    "JoÃ£o da Silva",
    "V-10452",
    "2026-08-10",
    "2026-08-20",
    500,
    F.PIX,
    "JoÃ£o",
    [
      pag("P-152-1", "2026-08-12", "09:10", 50, F.PIX, "JoÃ£o"),
      pag("P-152-2", "2026-08-15", "14:20", 50, F.DINHEIRO, "Maria"),
      pag("P-152-3", "2026-08-20", "10:32", 100, F.PIX, "JoÃ£o"),
    ],
  ),
  conta(
    153,
    "Maria Santos",
    "V-10460",
    "2026-08-11",
    "2026-08-18",
    180,
    F.DINHEIRO,
    "Maria",
  ),
  conta(
    154,
    "Pedro Lima",
    "V-10465",
    "2026-08-12",
    "2026-08-25",
    320,
    F.PIX,
    "JoÃ£o",
  ),
  conta(
    155,
    "Ana Oliveira",
    "V-10471",
    "2026-08-13",
    "2026-08-15",
    250,
    F.CARTAO_CREDITO,
    "Maria",
    [pag("P-155-1", "2026-08-15", "11:05", 50, F.CARTAO_CREDITO, "Maria")],
  ),
  conta(
    156,
    "Carlos Pereira",
    "V-10472",
    "2026-08-14",
    "2026-08-13",
    150,
    F.PIX,
    "JoÃ£o",
    [pag("P-156-1", "2026-08-16", "16:40", 150, F.PIX, "JoÃ£o")],
  ),
  conta(
    157,
    "Juliana Costa",
    "V-10475",
    "2026-08-15",
    "2026-08-30",
    420,
    F.BOLETO,
    "Maria",
  ),
  conta(
    158,
    "Ricardo Alves",
    "V-10480",
    "2026-08-16",
    "2026-08-05",
    280,
    F.PIX,
    "JoÃ£o",
  ),
  conta(
    159,
    "Fernanda Silva",
    "V-10485",
    "2026-08-17",
    "2026-08-27",
    300,
    F.CARTAO_DEBITO,
    "Maria",
    [pag("P-159-1", "2026-08-18", "15:15", 100, F.CARTAO_DEBITO, "Maria")],
  ),
];

const VALORES = [
  80, 120, 150, 180, 200, 250, 280, 320, 380, 420, 500, 650, 780, 900, 1200,
  1500,
];
const FORMAS = Object.values(F);

function gerarContas() {
  const rng = createRng(2026);
  const out = [];
  for (let n = 160; n <= 240; n += 1) {
    const c = rng.pick(CLIENTES);
    const emissao = addDays("2026-08-01", rng.int(0, 19));
    let vencimento = addDays(emissao, rng.pick([5, 7, 10, 15, 20, 30, 30, 45]));
    const valorOriginal = round2(
      rng.pick(VALORES) - (rng.chance(0.25) ? 0.1 : 0),
    );
    const hora = () => `${pad(rng.int(8, 18))}:${pad(rng.int(0, 59))}`;
    const dataPg = () => min(REFERENCE_DATE, addDays(emissao, rng.int(0, 12)));
    const responsavel = rng.pick(RESPONSAVEIS);
    const forma = rng.pick(FORMAS);
    const r = rng.next();

    const base = {
      id: codigo(n),
      clienteId: c.id,
      clienteNome: c.nome,
      cpf: c.cpf,
      telefone: c.telefone,
      vendaId: `V-${10486 + (n - 160) * 5 + rng.int(0, 4)}`,
      documento: `NF-${8000 + n}`,
      emissao,
      valorOriginal,
      formaPagamento: forma,
      responsavel,
      pagamentos: [],
      negociacao: null,
      cancelada: null,
      promessa: null,
      observacao: "",
    };

    if (r < 0.04) {
      base.cancelada = {
        data: addDays(emissao, 1),
        motivo: "VENDA_CANCELADA",
        observacao: "",
      };
    } else if (r < 0.27) {
      if (rng.chance(0.6)) {
        base.pagamentos = [
          pag(`P-${n}-1`, dataPg(), hora(), valorOriginal, forma, responsavel),
        ];
      } else {
        const metade = round2(valorOriginal / 2);
        base.pagamentos = [
          pag(`P-${n}-1`, dataPg(), hora(), metade, forma, responsavel),
          pag(
            `P-${n}-2`,
            dataPg(),
            hora(),
            round2(valorOriginal - metade),
            rng.pick(FORMAS),
            responsavel,
          ),
        ];
      }
    } else if (r < 0.42) {
      const parte = round2(valorOriginal * rng.pick([0.3, 0.4, 0.5, 0.6]));
      base.pagamentos = [
        pag(`P-${n}-1`, dataPg(), hora(), parte, forma, responsavel),
      ];
    } else if (r < 0.5) {
      const novo = addDays(REFERENCE_DATE, rng.int(5, 25));
      base.negociacao = {
        data: addDays(REFERENCE_DATE, -rng.int(1, 6)),
        vencimentoOriginal: vencimento,
        novoVencimento: novo,
        desconto: rng.pick([0, 0, 10, 20]),
        observacao: "Acordo para pagamento em data Ãºnica",
      };
      vencimento = novo;
    }
    out.push({ ...base, vencimento });
  }
  return out;
}

/** TODO(api): GET /api/contas-receber â€” retorna a lista completa (ou paginada no servidor). */
export const CONTAS_MOCK = [...FIXAS, ...gerarContas()];

