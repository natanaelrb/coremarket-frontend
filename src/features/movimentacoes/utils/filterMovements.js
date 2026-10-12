// Funções puras de filtragem e contagem.
// Em produção, parte dessa lógica poderá ser delegada ao backend.
// Mantida no front para a demonstração com mock data.

export function filterMovements(movements, filters) {
  const {
    tipo,
    status,
    produtoBusca,
    quickFilter,
  } = filters;

  return movements.filter((movement) => {
    // ─────────────────────────────────────────────
    // Filtro rápido
    // ─────────────────────────────────────────────
    if (
      quickFilter &&
      quickFilter !== 'TODAS' &&
      !matchesQuickFilter(movement, quickFilter)
    ) {
      return false;
    }

    // ─────────────────────────────────────────────
    // Filtro avançado por tipo
    // ─────────────────────────────────────────────
    if (
      tipo &&
      tipo !== 'TODAS' &&
      movement.tipo !== tipo
    ) {
      return false;
    }

    // ─────────────────────────────────────────────
    // Status
    // ─────────────────────────────────────────────
    if (
      status &&
      status !== 'TODOS' &&
      movement.status !== status
    ) {
      return false;
    }

    // ─────────────────────────────────────────────
    // Busca por produto ou SKU
    // ─────────────────────────────────────────────
    if (produtoBusca) {
      const busca = produtoBusca.toLowerCase().trim();

      const nomeProduto =
        movement.produto?.nome?.toLowerCase() || '';

      const skuProduto =
        movement.produto?.sku?.toLowerCase() || '';

      const matchNome = nomeProduto.includes(busca);
      const matchSku = skuProduto.includes(busca);

      if (!matchNome && !matchSku) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Determina se uma movimentação pertence ao filtro rápido selecionado.
 */
function matchesQuickFilter(movement, quickFilter) {
  switch (quickFilter) {
    case 'AJUSTE_POSITIVO':
      return (
        movement.tipo === 'AJUSTE' &&
        movement.quantidade > 0
      );

    case 'AJUSTE_NEGATIVO':
      return (
        movement.tipo === 'AJUSTE' &&
        movement.quantidade < 0
      );

    default:
      return movement.tipo === quickFilter;
  }
}

export function countByType(movements) {
  return movements.reduce((acc, movement) => {
    acc[movement.tipo] =
      (acc[movement.tipo] || 0) + 1;

    return acc;
  }, {});
}