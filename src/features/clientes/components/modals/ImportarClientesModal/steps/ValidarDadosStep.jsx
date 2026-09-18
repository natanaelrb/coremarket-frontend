import { CheckCircle2, AlertCircle } from "lucide-react";

/** Step 3: shows a summary of how many rows are valid vs. have problems. */
export function ValidarDadosStep({ resumo }) {
  if (!resumo) {
    return (
      <p className="text-sm text-slate-400">
        Validando os dados do arquivo...
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <p className="mb-1 text-sm font-medium text-[#0f172a] dark:text-white">
        Resumo da importação
      </p>

      <div
        className="
          flex items-center gap-3
          rounded-lg
          border border-[#16a34a]/20
          bg-[#dcfce7]
          px-4 py-3
          dark:border-emerald-500/20
          dark:bg-emerald-950/20
        "
      >
        <CheckCircle2
          size={18}
          className="shrink-0 text-[#16a34a] dark:text-emerald-400"
        />

        <span className="text-sm font-medium text-[#15803d] dark:text-emerald-400">
          {resumo.validos} clientes válidos
        </span>
      </div>

      {resumo.comProblemas > 0 && (
        <div
          className="
            flex items-center gap-3
            rounded-lg
            border border-[#f59e0b]/20
            bg-[#fef3c7]
            px-4 py-3
            dark:border-amber-500/20
            dark:bg-amber-950/20
          "
        >
          <AlertCircle
            size={18}
            className="shrink-0 text-[#d97706] dark:text-amber-400"
          />

          <span className="text-sm font-medium text-[#b45309] dark:text-amber-400">
            {resumo.comProblemas} registros com problemas
          </span>
        </div>
      )}
    </div>
  );
}