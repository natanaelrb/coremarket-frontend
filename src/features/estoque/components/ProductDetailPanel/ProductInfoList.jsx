/**
 * Key/value list of core product identifiers (SKU, código de barras,
 * categoria, fornecedor, unidade, localização).
 */
export default function ProductInfoList({ produto }) {
  const rows = [
    { label: 'SKU', value: produto.sku },
    { label: 'Código de Barras', value: produto.codigoBarras },
    { label: 'Categoria', value: produto.categoria },
    { label: 'Fornecedor', value: produto.fornecedor },
    { label: 'Unidade', value: produto.unidade },
    { label: 'Localização', value: produto.localizacao },
  ]

  return (
    <dl className="space-y-2.5 px-5 pb-4 text-sm">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between gap-3">
          <dt className="text-gray-400 dark:text-gray-500">{row.label}</dt>
          <dd className="truncate text-right font-medium text-gray-800 dark:text-gray-200">{row.value}</dd>
        </div>
      ))}
    </dl>
  )
}
