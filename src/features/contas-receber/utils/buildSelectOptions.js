/** Opções dos selects de Cliente e Responsável, geradas a partir das contas. */
export function buildClienteOptions(contas) {
  const mapa = new Map();
  contas.forEach((c) => mapa.set(String(c.clienteId), c.clienteNome));
  return [...mapa.entries()].sort((a, b) => a[1].localeCompare(b[1], 'pt-BR')).map(([value, label]) => ({ value, label }));
}

export function buildResponsavelOptions(contas) {
  return [...new Set(contas.map((c) => c.responsavel))].sort().map((r) => ({ value: r, label: r }));
}
