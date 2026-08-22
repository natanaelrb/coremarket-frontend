/**
 * Pure filtering function for the Estoque product list. Kept isolated from
 * hooks/components so it's trivially unit-testable and reusable if the same
 * logic is ever needed server-side or in a worker.
 *
 * `filters.categoria` / `fornecedor` / `localizacao` are expected to be the
 * *display label* (or the sentinel 'todas'/'todos') rather than a slug, so
 * matching against the raw product fields stays simple and unambiguous.
 */
export function filterProdutos(produtos, filters) {
  const { search, categoria, fornecedor, localizacao, situacao, validade } = filters

  return produtos.filter((produto) => {
    if (search) {
      const term = search.toLowerCase()
      const matchesSearch =
        produto.nome.toLowerCase().includes(term) ||
        produto.sku.toLowerCase().includes(term) ||
        produto.codigoBarras.includes(term)
      if (!matchesSearch) return false
    }

    if (categoria && categoria !== 'todas' && produto.categoria !== categoria) return false
    if (fornecedor && fornecedor !== 'todos' && produto.fornecedor !== fornecedor) return false
    if (localizacao && localizacao !== 'todas' && produto.localizacao !== localizacao) return false
    if (situacao && situacao !== 'todos' && produto.status !== situacao) return false

    if (validade && validade !== 'todos') {
      if (validade === 'vencidos') {
        if (produto.status !== 'vencido') return false
      } else if (!produto.validade) {
        return false
      }
    }

    return true
  })
}
