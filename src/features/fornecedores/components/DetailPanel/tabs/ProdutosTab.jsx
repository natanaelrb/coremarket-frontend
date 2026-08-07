import { formatCurrency } from '../../../../../shared/utils/formatters.js'

// MOCK — substituir por: GET /api/fornecedores/:id/produtos
const produtosMock = [
  { nome: 'Arroz 5kg Premium', categoria: 'Grãos', preco: 32.9, estoque: 120 },
  { nome: 'Arroz 2kg', categoria: 'Grãos', preco: 14.5, estoque: 85 },
  { nome: 'Feijão Carioca 1kg', categoria: 'Grãos', preco: 8.9, estoque: 60 },
  { nome: 'Açúcar Refinado 1kg', categoria: 'Mercearia', preco: 5.2, estoque: 12 },
]

export default function ProdutosTab() {
  return (
    <div className="animate-fade-in overflow-hidden rounded-xl border border-gray-100 dark:border-[#1c2044]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50 dark:border-[#1c2044] dark:bg-[#10132c]">
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase text-gray-400">Produto</th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase text-gray-400">Categoria</th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase text-gray-400">Preço</th>
            <th className="px-3 py-2.5 text-left text-xs font-semibold uppercase text-gray-400">Estoque</th>
          </tr>
        </thead>
        <tbody>
          {produtosMock.map((produto) => (
            <tr key={produto.nome} className="border-b border-gray-50 last:border-0 dark:border-[#181c3a]">
              <td className="px-3 py-2.5 font-medium text-gray-700 dark:text-gray-200">{produto.nome}</td>
              <td className="px-3 py-2.5 text-gray-500 dark:text-gray-400">{produto.categoria}</td>
              <td className="px-3 py-2.5 text-gray-700 dark:text-gray-200">{formatCurrency(produto.preco)}</td>
              <td className="px-3 py-2.5">
                <span
                  className={
                    produto.estoque < 20
                      ? 'font-medium text-amber-600 dark:text-amber-400'
                      : 'text-gray-600 dark:text-gray-300'
                  }
                >
                  {produto.estoque} un.
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
