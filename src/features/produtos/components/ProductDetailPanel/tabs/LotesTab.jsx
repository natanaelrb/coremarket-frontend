// Aba "Lotes": lista os lotes ativos do produto (mock local baseado em produto.lotesCount).
// Endpoint real sugerido: GET /api/produtos/{id}/lotes
import { formatDate } from '../../../utils/formatters';
import { getDaysUntil } from '../../../utils/validadeUtils';

function gerarLotesMock(produto) {
  return Array.from({ length: produto.lotesCount }).map((_, i) => {
    const offsetDias = 5 + i * 25;
    const validade = produto.validadeMaisProxima
      ? new Date(new Date(produto.validadeMaisProxima).getTime() + i * 20 * 86400000).toISOString().slice(0, 10)
      : null;
    return {
      id: `${produto.codigo}-L${i + 1}`,
      lote: `L${(i + 1).toString().padStart(3, '0')}`,
      quantidade: Math.max(5, Math.round(produto.estoque / (produto.lotesCount || 1))),
      validade,
    };
  });
}

export function LotesTab({ produto }) {
  const lotes = gerarLotesMock(produto);

  if (lotes.length === 0) {
    return <div className="px-5 py-10 text-center text-sm text-gray-400 dark:text-gray-500">Nenhum lote cadastrado para este produto.</div>;
  }

  return (
    <div className="px-5">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-left text-xs uppercase tracking-wide text-gray-400 dark:border-gray-800 dark:text-gray-500">
            <th className="py-2 font-medium">Lote</th>
            <th className="py-2 font-medium">Quantidade</th>
            <th className="py-2 font-medium">Validade</th>
          </tr>
        </thead>
        <tbody>
          {lotes.map((lote) => {
            const dias = lote.validade ? getDaysUntil(lote.validade) : null;
            return (
              <tr key={lote.id} className="border-b border-gray-50 last:border-0 dark:border-gray-800/60">
                <td className="py-2.5 font-medium text-gray-700 dark:text-gray-200">{lote.lote}</td>
                <td className="py-2.5 text-gray-600 dark:text-gray-300">{lote.quantidade}</td>
                <td className="py-2.5">
                  <span className={dias !== null && dias < 0 ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'}>
                    {formatDate(lote.validade)}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
