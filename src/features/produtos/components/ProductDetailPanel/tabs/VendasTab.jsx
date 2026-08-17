// Aba "Vendas": mini-histórico de vendas recentes + total do mês.
// Endpoint real sugerido: GET /api/produtos/{id}/vendas
import { useProdutoSmartInfo } from '../../../hooks/useProdutoSmartInfo';
import { formatCurrency, formatDate, formatNumber } from '../../../utils/formatters';

function gerarVendasMock(produto) {
  const seed = produto.codigo.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return Array.from({ length: 4 }).map((_, i) => ({
    id: `${produto.codigo}-V${i + 1}`,
    data: new Date(Date.now() - (i + 1) * (3 + seed % 4) * 86400000).toISOString().slice(0, 10),
    quantidade: 5 + ((seed + i * 3) % 25),
  }));
}

export function VendasTab({ produto }) {
  const smartInfo = useProdutoSmartInfo(produto);
  const vendas = gerarVendasMock(produto);

  return (
    <div className="px-5">
      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-gray-50 p-3 dark:bg-white/5">
          <p className="text-xs text-gray-400 dark:text-gray-500">Vendido (mês)</p>
          <p className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-white">{formatNumber(smartInfo.quantidadeVendidaMes)} un</p>
        </div>
        <div className="rounded-xl bg-gray-50 p-3 dark:bg-white/5">
          <p className="text-xs text-gray-400 dark:text-gray-500">Receita (mês)</p>
          <p className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-white">{formatCurrency(smartInfo.receitaGeradaMes)}</p>
        </div>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-400 dark:border-gray-800 dark:text-gray-500">
            <th className="py-2 font-medium">Data</th>
            <th className="py-2 font-medium">Qtd. vendida</th>
          </tr>
        </thead>
        <tbody>
          {vendas.map((v) => (
            <tr key={v.id} className="border-b border-gray-50 last:border-0 dark:border-gray-800/60">
              <td className="py-2.5 text-gray-600 dark:text-gray-300">{formatDate(v.data)}</td>
              <td className="py-2.5 font-medium text-gray-800 dark:text-gray-100">{formatNumber(v.quantidade)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
