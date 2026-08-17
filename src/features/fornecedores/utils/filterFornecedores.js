/**
 * Aplica os filtros ativos e o termo de busca sobre a lista de fornecedores.
 */
export function filterFornecedores(fornecedores, filters, searchTerm) {
  return fornecedores.filter((f) => {
    if (filters.situacao !== 'todos' && f.status !== filters.situacao) return false
    if (filters.tipo !== 'todos' && f.tipo !== filters.tipo) return false
    if (filters.cidade !== 'todos' && f.cidade !== filters.cidade) return false
    if (filters.estado !== 'todos' && f.estado !== filters.estado) return false

    if (filters.valorComprado !== 'todos') {
      const [min, max] = filters.valorComprado.split('-').map(Number)
      if (f.totalComprado < min || f.totalComprado > max) return false
    }

    if (filters.ultimaCompra !== 'todos') {
      const days = Number(filters.ultimaCompra)
      const then = new Date(f.ultimaCompra)
      const now = new Date('2026-07-15')
      const diffDays = Math.floor((now - then) / (1000 * 60 * 60 * 24))
      if (diffDays > days) return false
    }

    if (searchTerm && searchTerm.trim().length > 0) {
      const term = searchTerm.toLowerCase()
      const haystack = `${f.nomeFantasia} ${f.razaoSocial} ${f.documento}`.toLowerCase()
      if (!haystack.includes(term)) return false
    }

    return true
  })
}

/**
 * Ordena a lista de fornecedores pela chave/direção informadas.
 */
export function sortFornecedores(fornecedores, sortKey, sortDirection) {
  if (!sortKey) return fornecedores

  const sorted = [...fornecedores].sort((a, b) => {
    let valA
    let valB

    switch (sortKey) {
      case 'fornecedor':
        valA = a.nomeFantasia.toLowerCase()
        valB = b.nomeFantasia.toLowerCase()
        break
      case 'cidadeEstado':
        valA = `${a.cidade}${a.estado}`.toLowerCase()
        valB = `${b.cidade}${b.estado}`.toLowerCase()
        break
      case 'ultimaCompra':
        valA = new Date(a.ultimaCompra).getTime()
        valB = new Date(b.ultimaCompra).getTime()
        break
      default:
        valA = a[sortKey]
        valB = b[sortKey]
    }

    if (valA < valB) return sortDirection === 'asc' ? -1 : 1
    if (valA > valB) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  return sorted
}

/**
 * Extrai a página de itens a partir da lista completa, página e itens por página.
 */
export function paginate(items, currentPage, itemsPerPage) {
  const start = (currentPage - 1) * itemsPerPage
  return items.slice(start, start + itemsPerPage)
}
