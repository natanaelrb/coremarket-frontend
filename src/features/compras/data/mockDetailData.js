// TODO(api): substituir por GET /api/compras/{id} (visão detalhada com joins:
// parcelas, recebimento, integrações). Endpoint Spring Boot esperado:
// CompraController#buscarDetalhe -> CompraDetalheDTO
import { mockCompras } from "./mockCompras";
import { calcularTotalParcelasPendentes } from "../utils/compraCalculations";

function gerarParcelas(compra) {
  if (!compra.formaPagamento.startsWith("parcelado")) return [];
  const numParcelas = compra.formaPagamento === "parcelado_30_60" || compra.formaPagamento === "parcelado_28_56" ? 2 : 3;
  const valorParcela = Math.round((compra.total / numParcelas) * 100) / 100;
  const intervalo = compra.formaPagamento === "parcelado_15" ? 15 : 30;

  return Array.from({ length: numParcelas }, (_, i) => {
    const vencimento = new Date(compra.data);
    vencimento.setDate(vencimento.getDate() + intervalo * (i + 1));
    return {
      numero: i + 1,
      total: numParcelas,
      vencimento: vencimento.toISOString(),
      valor: i === numParcelas - 1 ? compra.total - valorParcela * (numParcelas - 1) : valorParcela,
      status: i === 0 && compra.status === "finalizada" ? "paga" : "pendente",
    };
  });
}

export function getCompraDetalhe(compraId) {
  const compra = mockCompras.find((c) => c.id === compraId);
  if (!compra) return null;

  const parcelas = gerarParcelas(compra);
  const totalRecebido = Math.round(compra.produtosCount * (0.9 + (compraId % 5) * 0.02));
  const divergencia = Math.max(0, compra.produtosCount - totalRecebido);

  return {
    ...compra,
    condicoesPagamento: {
      forma: compra.formaPagamento,
      parcelas: parcelas.length || 1,
      intervalo: parcelas.length ? (parcelas[0] ? 30 : 0) : 0,
      primeiroVencimento: parcelas[0]?.vencimento || null,
    },
    parcelas,
    totalParcelasPendentes: calcularTotalParcelasPendentes(parcelas),
    recebimento: {
      dataRecebimento: compra.dataRecebimento,
      totalPedido: compra.produtosCount,
      totalRecebido,
      divergencia,
      situacao: divergencia === 0 ? "completo" : totalRecebido === 0 ? "pendente" : "parcial",
    },
    integracoes: {
      estoque: {
        entradaRealizada: totalRecebido > 0,
        codigoEntrada: `ENT-${String(compraId).padStart(6, "0")}`,
        data: compra.dataRecebimento,
      },
      contasAPagar: {
        parcelasGeradas: parcelas.length,
        total: compra.total,
      },
      notaFiscal: {
        emitida: compra.status !== "pedido_realizado",
        numero: `00${compraId}`.slice(-6),
        serie: 1,
      },
    },
    produtos: gerarProdutosCompra(compra),
    historico: gerarHistorico(compra),
  };
}

function gerarProdutosCompra(compra) {
  const nomes = ["Arroz 5kg", "Feijão Carioca 1kg", "Óleo de Soja 900ml", "Açúcar Refinado 1kg", "Café Torrado 500g", "Macarrão Espaguete 500g", "Farinha de Trigo 1kg", "Leite Integral 1L"];
  const count = Math.min(compra.produtosCount, 8);
  return Array.from({ length: count }, (_, i) => {
    const qtd = Math.floor(((i + 1) * compra.produtosCount) / count / 2) + 5;
    const valorUnit = Math.round(((compra.subtotal / compra.produtosCount) * (0.8 + i * 0.05)) * 100) / 100;
    return {
      id: `${compra.id}-${i}`,
      nome: nomes[i % nomes.length],
      quantidade: qtd,
      valorUnitario: valorUnit,
      valorTotal: Math.round(qtd * valorUnit * 100) / 100,
    };
  });
}

function gerarHistorico(compra) {
  const eventos = [
    { titulo: "Compra criada", responsavel: compra.responsavel },
    { titulo: "Pedido enviado ao fornecedor", responsavel: compra.responsavel },
  ];
  if (compra.status !== "pedido_realizado" && compra.status !== "cancelada") {
    eventos.push({ titulo: "Mercadoria recebida no estoque", responsavel: compra.responsavel });
  }
  if (compra.status === "finalizada" || compra.status === "recebida") {
    eventos.push({ titulo: "Compra finalizada", responsavel: compra.responsavel });
  }
  if (compra.status === "cancelada") {
    eventos.push({ titulo: "Compra cancelada", responsavel: compra.responsavel });
  }

  const dataBase = new Date(compra.data);
  return eventos.map((evento, i) => {
    const data = new Date(dataBase);
    data.setHours(data.getHours() + i * 4);
    return { ...evento, data: data.toISOString() };
  });
}
