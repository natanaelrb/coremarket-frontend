import { formatDateTime, formatDate } from "../../../utils/formatters";
import { StatusBadge } from "../../Table/StatusBadge";

function InfoRow({ label, children }) {
  return (
    <div className="grid grid-cols-1 gap-1.5 border-b border-slate-100 py-3 last:border-b-0 dark:border-white/[0.06] sm:grid-cols-[minmax(120px,0.85fr)_minmax(0,1.15fr)] sm:items-center sm:gap-4">
      <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">
        {label}
      </dt>

      <dd className="min-w-0 break-words text-sm font-semibold text-slate-800 dark:text-slate-100 sm:text-right">
        {children || (
          <span className="font-normal text-slate-400 dark:text-slate-500">
            Não informado
          </span>
        )}
      </dd>
    </div>
  );
}

export function InformacoesGerais({ detalhe }) {
  const fornecedor =
    typeof detalhe.fornecedor === "string"
      ? detalhe.fornecedor
      : detalhe.fornecedor?.nome || detalhe.fornecedorNome;

  return (
    <div className="min-w-0">
      <div className="mb-5 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            />
          </svg>
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
            Informações gerais
          </h4>
          <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            Dados principais e identificação da compra.
          </p>
        </div>
      </div>

      <dl className="min-w-0">
        <InfoRow label="Fornecedor">{fornecedor}</InfoRow>

        <InfoRow label="Data da compra">
          {detalhe.data ? formatDateTime(detalhe.data) : null}
        </InfoRow>

        <InfoRow label="Previsão de entrega">
          {detalhe.previsaoEntrega
            ? formatDate(detalhe.previsaoEntrega)
            : null}
        </InfoRow>

        <InfoRow label="Responsável">{detalhe.responsavel}</InfoRow>

        <InfoRow label="Pedido">{detalhe.pedido}</InfoRow>

        <div className="grid grid-cols-1 gap-1.5 py-3 sm:grid-cols-[minmax(120px,0.85fr)_minmax(0,1.15fr)] sm:items-center sm:gap-4">
          <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Status
          </dt>

          <dd className="flex sm:justify-end">
            <StatusBadge status={detalhe.status} />
          </dd>
        </div>
      </dl>

      {detalhe.observacoes && (
        <div className="mt-4 rounded-xl border border-slate-200/70 bg-slate-50/80 p-4 dark:border-white/[0.06] dark:bg-white/[0.025]">
          <h5 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Observações
          </h5>

          <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {detalhe.observacoes}
          </p>
        </div>
      )}
    </div>
  );
}
