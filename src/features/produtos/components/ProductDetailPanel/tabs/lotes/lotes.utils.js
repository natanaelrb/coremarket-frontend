export function getLotes(produto) {
  if (Array.isArray(produto?.lotes)) {
    return produto.lotes;
  }

  if (Array.isArray(produto?.lotesProduto)) {
    return produto.lotesProduto;
  }

  return [];
}

export function getQuantidadeTotal(lotes) {
  return lotes.reduce(
    (total, lote) =>
      total + Number(lote.quantidade ?? 0),
    0
  );
}

export function getDiasRestantes(validade) {
  if (!validade) return null;

  const hoje = new Date();
  const dataValidade = new Date(validade);

  if (Number.isNaN(dataValidade.getTime())) {
    return null;
  }

  hoje.setHours(0, 0, 0, 0);
  dataValidade.setHours(0, 0, 0, 0);

  return Math.ceil(
    (dataValidade.getTime() - hoje.getTime()) /
      86400000
  );
}

export function formatDate(date) {
  if (!date) return "—";

  const value = new Date(date);

  if (Number.isNaN(value.getTime())) {
    return date;
  }

  return value.toLocaleDateString("pt-BR");
}

export function getLoteStatus(lote) {
  const dias = getDiasRestantes(lote?.validade);

  if (dias === null) {
    return {
      label: "Sem validade",
      type: "neutral",
    };
  }

  if (dias < 0) {
    return {
      label: "Vencido",
      type: "danger",
    };
  }

  if (dias <= 30) {
    return {
      label: "Próximo",
      type: "warning",
    };
  }

  return {
    label: "Ativo",
    type: "success",
  };
}