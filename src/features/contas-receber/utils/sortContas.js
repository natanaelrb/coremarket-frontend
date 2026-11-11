const ACCESSORS = {
  id: (c) => c.id, clienteNome: (c) => c.clienteNome, vendaId: (c) => c.vendaId,
  emissao: (c) => c.emissao, vencimento: (c) => c.vencimento,
  valorOriginal: (c) => c.valorOriginal, valorPago: (c) => c.valorPago, saldo: (c) => c.saldo,
  diasAtraso: (c) => c.diasAtraso, statusOrder: (c) => c.statusOrder,
  formaPagamento: (c) => c.formaPagamento, responsavel: (c) => c.responsavel,
  ultimoPagamento: (c) => c.ultimoPagamento ?? '',
};

/** Ordenação estável por coluna. */
export function sortContas(list, { key, dir }) {
  const get = ACCESSORS[key];
  if (!get) return list;
  const m = dir === 'desc' ? -1 : 1;
  return [...list].sort((a, b) => {
    const x = get(a);
    const y = get(b);
    return typeof x === 'string' ? x.localeCompare(y, 'pt-BR') * m : (x - y) * m;
  });
}
