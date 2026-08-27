/**
 * Column definitions for the products table. Centralizing this makes it
 * trivial to add/remove/reorder columns without touching table markup.
 */
export const TABLE_COLUMNS = [
  { key: 'produto', label: 'Produto', align: 'left' },
  { key: 'sku', label: 'SKU', align: 'left' },
  { key: 'codigoBarras', label: 'Código de Barras', align: 'left' },
  { key: 'categoria', label: 'Categoria', align: 'left' },
  { key: 'localizacao', label: 'Localização', align: 'left' },
  { key: 'quantidade', label: 'Quantidade', align: 'left' },
  { key: 'disponivel', label: 'Disponível', align: 'left' },
  { key: 'estMinimo', label: 'Est. Mínimo', align: 'left' },
  { key: 'validade', label: 'Validade', align: 'left' },
  { key: 'status', label: 'Status', align: 'left' },
  { key: 'valorEmEstoque', label: 'Valor em Estoque', align: 'left' },
  { key: 'acoes', label: 'Ações', align: 'center' },
]
