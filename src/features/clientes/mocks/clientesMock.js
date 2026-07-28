import { seededRand, pad } from "../utils/seededRandom";
import { CIDADES } from "./cidadesMock";
import { NOMES } from "./nomesMock";

function makeCPF(seed) {
  const d = () => pad(Math.floor(seededRand(seed++) * 100)).slice(0, 2);
  return `${d()}${d()}.${d()}${d()}${d().slice(0, 1)}.${d()}${d()}${d().slice(0, 1)}-${d().slice(0, 2)}`;
}

function makePhone(seed) {
  const n = Math.floor(seededRand(seed) * 90000000 + 10000000);
  return `(89) 9${String(n).slice(0, 4)}-${String(n).slice(4, 8)}`;
}

/**
 * Gera a base de clientes fictícia usada na demonstração.
 * >>> Em produção, substituir por: clienteService.listar(filtros, paginacao)
 */
export function generateClientesMock() {
  return NOMES.map((nome, i) => {
    const seed = i * 37 + 11;
    const ativo = seededRand(seed + 1) > 0.18;
    const vip = seededRand(seed + 2) > 0.78;
    const inadimplente = ativo && seededRand(seed + 3) > 0.82;
    const valorGasto = Math.round(seededRand(seed + 4) * 18000 + (vip ? 8000 : 0));
    const diasAtras = Math.floor(seededRand(seed + 5) * 240);
    const ultimaCompra = new Date();
    ultimaCompra.setDate(ultimaCompra.getDate() - diasAtras);

    return {
      id: i + 1,
      codigo: `CLI-${String(1000 + i)}`,
      nome,
      tipo: seededRand(seed + 6) > 0.75 ? "Pessoa Jurídica" : "Pessoa Física",
      cpf: makeCPF(seed + 7),
      telefone: makePhone(seed + 8),
      email: `${nome.toLowerCase().split(" ")[0]}.${nome.toLowerCase().split(" ").slice(-1)[0]}@email.com`,
      cidade: CIDADES[i % CIDADES.length],
      ultimaCompra: diasAtras > 200 ? null : ultimaCompra,
      valorGasto,
      status: ativo ? "Ativo" : "Inativo",
      vip,
      inadimplente,
    };
  });
}
