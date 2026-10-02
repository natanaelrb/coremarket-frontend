import { FileText, Download } from "lucide-react";
import { formatDate } from "../../../../shared/utils/formatters.js";

export default function AnexoItem({ anexo }) {
  if (!anexo) return null;

  const nome = anexo.nome ?? "Arquivo sem nome";
  const tamanho = anexo.tamanho ?? "Tamanho desconhecido";
  const dataFormatada = anexo.data
    ? formatDate(anexo.data)
    : "Data não informada";

  return (
    <div
      className="
        row-hover flex items-center gap-3 rounded-lg p-2
        transition-colors hover:bg-slate-50
        dark:hover:bg-[#181d3b]
      "
    >
      <div
        className="
          flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg
          bg-rose-100 text-rose-600
          dark:bg-rose-500/10 dark:text-rose-400
        "
      >
        <FileText size={16} strokeWidth={1.8} aria-hidden="true" />
      </div>

      <div className="min-w-0 flex-1">
        <p
          className="truncate text-sm font-medium text-slate-700 dark:text-slate-200"
          title={nome}
        >
          {nome}
        </p>

        <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
          {tamanho} · {dataFormatada}
        </p>
      </div>

      <button
        type="button"
        disabled
        aria-label={`Baixar ${nome}`}
        title="Download ainda não implementado"
        className="
          flex-shrink-0 rounded-lg p-2 text-slate-400
          transition-colors
          hover:bg-emerald-50 hover:text-emerald-600
          disabled:cursor-not-allowed disabled:opacity-60
          dark:hover:bg-emerald-500/10 dark:hover:text-emerald-400
        "
      >
        <Download size={15} strokeWidth={1.8} aria-hidden="true" />
      </button>
    </div>
  );
}