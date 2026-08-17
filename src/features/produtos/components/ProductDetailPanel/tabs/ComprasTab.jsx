// Aba "Compras": histórico simplificado de compras deste produto ao fornecedor.
// Endpoint real sugerido: GET /api/produtos/{id}/compras
import { formatCurrency, formatDate, formatNumber } from '../../../utils/formatters';

function gerarComprasMock(produto) {
  const seed = produto.codigo.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return Array.from({ length: 3 }).map((_, i) => ({
    id: `${produto.codigo}-C${i + 1}`,
    data: new Date(Date.now() - (i + 1) * (20 + seed % 10) * 86400000).toISOString().slice(0, 10),
    quantidade: 20 + ((seed + i * 7) % 80),
    valorUnitario: produto.precoCompra,
  }));
}

export function ComprasTab({ produto }) {
  const compras = gerarComprasMock(produto);

  return (
    <div className="px-5">
      <p className="mb-3 text-xs text-gray-400 dark:text-gray-500">Fornecedor atual: <span className="font-medium text-gray-600 dark:text-gray-300">{produto.fornecedor}</span></p>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-400 dark:border-gray-800 dark:text-gray-500">
            <th className="py-2 font-medium">Data</th>
            <th className="py-2 font-medium">Qtd.</th>
            <th className="py-2 font-medium">Valor unit.</th>
            <th className="py-2 font-medium">Total</th>
          </tr>
        </thead>
        <tbody>
          {compras.map((c) => (
            <tr key={c.id} className="border-b border-gray-50 last:border-0 dark:border-gray-800/60">
              <td className="py-2.5 text-gray-600 dark:text-gray-300">{formatDate(c.data)}</td>
              <td className="py-2.5 text-gray-600 dark:text-gray-300">{formatNumber(c.quantidade)}</td>
              <td className="py-2.5 text-gray-600 dark:text-gray-300">{formatCurrency(c.valorUnitario)}</td>
              <td className="py-2.5 font-medium text-gray-800 dark:text-gray-100">{formatCurrency(c.quantidade * c.valorUnitario)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
