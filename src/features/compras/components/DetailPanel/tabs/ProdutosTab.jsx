import { formatCurrency } from "../../../utils/formatters";

export function ProdutosTab({ detalhe }) {
  return (
    <div className="animate-fade-in">
      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
        Produtos da compra <span className="font-normal">({detalhe.produtos.length})</span>
      </h4>
      <div className="rounded-xl border border-slate-100 dark:border-white/5 overflow-hidden">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-slate-50 dark:bg-white/[0.03] text-slate-400 dark:text-slate-500">
              <th className="px-3 py-2 text-left font-medium">Produto</th>
              <th className="px-3 py-2 text-right font-medium">Qtd.</th>
              <th className="px-3 py-2 text-right font-medium">Unit.</th>
              <th className="px-3 py-2 text-right font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {detalhe.produtos.map((p) => (
              <tr key={p.id} className="border-t border-slate-50 dark:border-white/[0.03]">
                <td className="px-3 py-2 text-slate-700 dark:text-slate-200">{p.nome}</td>
                <td className="px-3 py-2 text-right text-slate-600 dark:text-slate-300">{p.quantidade}</td>
                <td className="px-3 py-2 text-right text-slate-600 dark:text-slate-300">{formatCurrency(p.valorUnitario)}</td>
                <td className="px-3 py-2 text-right font-medium text-slate-800 dark:text-white">{formatCurrency(p.valorTotal)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
