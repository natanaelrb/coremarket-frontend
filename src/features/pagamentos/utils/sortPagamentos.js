/**
 * Sorts a list of pagamentos by a given field/direction. Returns a new
 * array — never mutates the input.
 * @param {import('../types/pagamento.types.js').Pagamento[]} pagamentos
 * @param {string} field
 * @param {'asc'|'desc'} direction
 * @returns {import('../types/pagamento.types.js').Pagamento[]}
 */
export function sortPagamentos(pagamentos, field = 'dataCriacao', direction = 'desc') {
  const sorted = [...pagamentos].sort((a, b) => {
    const valueA = a[field];
    const valueB = b[field];

    if (typeof valueA === 'number' && typeof valueB === 'number') {
      return valueA - valueB;
    }
    return String(valueA ?? '').localeCompare(String(valueB ?? ''));
  });

  return direction === 'desc' ? sorted.reverse() : sorted;
}
