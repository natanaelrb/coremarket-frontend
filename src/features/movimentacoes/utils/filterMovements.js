// Função pura de filtragem — usada pelo hook useMovementFilters.
// Em produção esta lógica roda no backend; mantida no front para a demo com mock data.

export function filterMovements(movements, filters) {
  const { tipo, status, produtoBusca, quickFilter } = filters;

  return movements.filter((m) => {
    if (quickFilter && quickFilter !== 'TODAS' && m.tipo !== quickFilter) return false;
    if (tipo && tipo !== 'TODAS' && m.tipo !== tipo) return false;
    if (status && status !== 'TODOS' && m.status !== status) return false;
    if (produtoBusca) {
      const busca = produtoBusca.toLowerCase();
      const matchNome = m.produto.nome.toLowerCase().includes(busca);
      const matchSku = m.produto.sku.toLowerCase().includes(busca);
      if (!matchNome && !matchSku) return false;
    }
    return true;
  });
}

export function countByType(movements) {
  return movements.reduce((acc, m) => {
    acc[m.tipo] = (acc[m.tipo] || 0) + 1;
    return acc;
  }, {});
}
