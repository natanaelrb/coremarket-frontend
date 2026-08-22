import { formatDateTime, formatDate } from "../../../utils/formatters";
import { StatusBadge } from "../../Table/StatusBadge";

export function InformacoesGerais({ detalhe }) {
  const rows = [
    { label: "Fornecedor", value: detalhe.fornecedorNome },
    { label: "Data da compra", value: formatDateTime(detalhe.data) },
    { label: "Previsão de entrega", value: formatDate(detalhe.previsaoEntrega) },
    { label: "Responsável", value: detalhe.responsavel },
    { label: "Pedido", value: detalhe.pedido },
    { label: "Status", value: <StatusBadge status={detalhe.status} /> },
  ];

  return (
    <div>
      <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">Informações gerais</h4>
      <dl className="space-y-2.5">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between text-xs">
            <dt className="text-slate-400 dark:text-slate-500">{row.label}</dt>
            <dd className="text-slate-700 dark:text-slate-200 font-medium">{row.value}</dd>
          </div>
        ))}
      </dl>
      {detalhe.observacoes && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/5">
          <dt className="text-xs text-slate-400 dark:text-slate-500 mb-1">Observações</dt>
          <dd className="text-xs text-slate-600 dark:text-slate-300">{detalhe.observacoes}</dd>
        </div>
      )}
    </div>
  );
}
