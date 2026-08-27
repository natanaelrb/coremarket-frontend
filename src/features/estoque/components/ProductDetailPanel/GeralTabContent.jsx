import { formatDate } from "../../../movimentacoes/utils/formatDate.js";

/**
 * Content for the "Geral" tab: last purchase/sale/movement, net weight and
 * free-text observations for the product.
 */
export default function GeralTabContent({ produto }) {
  const rows = [
    {
      label: "Última Compra",
      value: `${formatDate(produto.ultimaCompra.data)} · ${produto.ultimaCompra.doc}`,
    },
    {
      label: "Última Venda",
      value: `${formatDate(produto.ultimaVenda.data)} · ${produto.ultimaVenda.doc}`,
    },
    {
      label: "Última Movimentação",
      value: `${formatDate(produto.ultimaMovimentacao.data)} · ${produto.ultimaMovimentacao.tipo}`,
    },
    { label: "Peso Líquido", value: produto.pesoLiquido },
  ];

  return (
    <div className="space-y-4 p-5 animate-fade-in">
      <dl className="space-y-2.5 text-sm">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-3"
          >
            <dt className="text-gray-400 dark:text-gray-500">{row.label}</dt>
            <dd className="truncate text-right font-medium text-gray-800 dark:text-gray-200">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
      <div>
        <p className="mb-1.5 text-xs font-medium text-gray-400 dark:text-gray-500">
          Observações
        </p>
        <p className="rounded-xl bg-gray-50 dark:bg-[#171A38] p-3 text-sm text-gray-600 dark:text-gray-300">
          {produto.observacoes || "Nenhuma observação registrada."}
        </p>
      </div>
    </div>
  );
}
