import { STATUS_VENDA } from '../constants/statusVenda.js';
import { FORMA_PAGAMENTO } from '../constants/formaPagamento.js';

// TODO(api): substituir por GET /api/vendas?periodo=&status=&pagamento=&clienteId=&operadorId=&page=&size=
// Controller esperado: VendaController#listar (retorno paginado - Spring Data Page<VendaResumoDTO>)

const CLIENTES_NOMES = ['Maria Silva', 'José Oliveira', 'Carla Santos', 'Consumidor', 'Ana Paula', 'Pedro Lima'];
const OPERADORES_NOMES = ['João Silva', 'Ana Paula', 'Bruno Costa'];
const PAGAMENTOS = [
  FORMA_PAGAMENTO.PIX,
  FORMA_PAGAMENTO.DINHEIRO,
  FORMA_PAGAMENTO.DEBITO,
  FORMA_PAGAMENTO.CREDITO,
];

function seededRandom(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function gerarVendas(total = 127) {
  const rand = seededRandom(42);
  const vendas = [];
  const agora = new Date('2026-08-13T11:18:00');

  for (let i = 0; i < total; i += 1) {
    const numero = `#000${18472 - i}`;
    const dataHora = new Date(agora.getTime() - i * 1000 * 60 * (12 + Math.floor(rand() * 30)));
    const quantidadeItens = 1 + Math.floor(rand() * 10);
    const total = Math.round((quantidadeItens * (8 + rand() * 30)) * 100) / 100;
    const cancelada = rand() < 0.06;
    const pendente = !cancelada && rand() < 0.03;

    vendas.push({
      id: `v-${i}`,
      numero,
      dataHora: dataHora.toISOString(),
      clienteNome: CLIENTES_NOMES[Math.floor(rand() * CLIENTES_NOMES.length)],
      operadorNome: OPERADORES_NOMES[Math.floor(rand() * OPERADORES_NOMES.length)],
      quantidadeItens,
      total,
      formaPagamento: PAGAMENTOS[Math.floor(rand() * PAGAMENTOS.length)],
      parcelas: rand() < 0.2 ? 2 + Math.floor(rand() * 3) : null,
      status: cancelada
        ? STATUS_VENDA.CANCELADA
        : pendente
          ? STATUS_VENDA.PENDENTE
          : STATUS_VENDA.CONCLUIDA,
    });
  }

  return vendas;
}

export const MOCK_VENDAS = gerarVendas(127);

