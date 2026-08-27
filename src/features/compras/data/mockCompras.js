// TODO(api): substituir por GET /api/compras?periodo=&status=&fornecedorId=&formaPagamento=&responsavel=&page=&size=
// Endpoint Spring Boot esperado: CompraController#listarCompras (paginação + filtros via CompraFiltro DTO)
import { COMPRA_STATUS } from "../constants/statusConfig";
import { FORMAS_PAGAMENTO } from "../constants/paymentMethods";

const fornecedores = ["Distribuidora ABC", "Atacadão XYZ", "Distribuidora Sul", "Fornecedor Top", "Comercial Bom Preço"];
const responsaveis = ["Natanael", "João", "Maria"];
const statusList = Object.values(COMPRA_STATUS);
const formasPagamento = Object.values(FORMAS_PAGAMENTO);

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function gerarCompra(index) {
  const numero = 241 - index;
  const seed = index + 1;
  const fornecedor = fornecedores[index % fornecedores.length];
  const responsavel = responsaveis[index % responsaveis.length];
  const status = statusList[Math.floor(seededRandom(seed * 3.1) * statusList.length)];
  const formaPagamento = formasPagamento[Math.floor(seededRandom(seed * 5.7) * formasPagamento.length)];
  const produtosCount = Math.floor(seededRandom(seed * 2.3) * 70) + 8;
  const subtotal = Math.round((seededRandom(seed * 4.9) * 9000 + 500) * 100) / 100;
  const desconto = Math.round(subtotal * 0.02 * 100) / 100;
  const frete = Math.round(seededRandom(seed * 1.7) * 200 * 100) / 100;
  const total = Math.round((subtotal - desconto + frete) * 100) / 100;

  const dataBase = new Date(2026, 7, 12);
  dataBase.setDate(dataBase.getDate() - index);

  const previsaoEntrega = new Date(dataBase);
  previsaoEntrega.setDate(previsaoEntrega.getDate() + 3);

  const recebida = [COMPRA_STATUS.RECEBIDA, COMPRA_STATUS.FINALIZADA, COMPRA_STATUS.RECEBIMENTO_PARCIAL].includes(status);
  const dataRecebimento = recebida ? dataBase.toISOString() : null;

  return {
    id: numero,
    numero,
    data: dataBase.toISOString(),
    fornecedorId: (index % fornecedores.length) + 1,
    fornecedorNome: fornecedor,
    produtosCount,
    subtotal,
    desconto,
    frete,
    outrasDespesas: Math.round(seededRandom(seed * 6.3) * 80 * 100) / 100,
    impostos: 0,
    total,
    formaPagamento,
    dataRecebimento,
    previsaoEntrega: previsaoEntrega.toISOString(),
    status,
    responsavel,
    pedido: `PED-${String(numero).padStart(6, "0")}`,
    observacoes: index % 4 === 0 ? "Compra de abastecimento semanal." : "",
  };
}

export const mockCompras = Array.from({ length: 124 }, (_, i) => gerarCompra(i));
