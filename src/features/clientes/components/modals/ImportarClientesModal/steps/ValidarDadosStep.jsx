import { CheckCircle2, AlertCircle } from 'lucide-react'

/** Step 3: shows a summary of how many rows are valid vs. have problems. */
export function ValidarDadosStep({ resumo }) {
  if (!resumo) {
    return <p className="text-sm text-slate-400">Validando os dados do arquivo...</p>
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-white light:text-slate-900 mb-1">Resumo da importação</p>
      <div className="flex items-center gap-3 rounded-lg bg-cm-green-dim px-4 py-3">
        <CheckCircle2 size={18} className="text-cm-green shrink-0" />
        <span className="text-sm text-cm-green">{resumo.validos} clientes válidos</span>
      </div>
      {resumo.comProblemas > 0 && (
        <div className="flex items-center gap-3 rounded-lg bg-cm-amber-dim px-4 py-3">
          <AlertCircle size={18} className="text-cm-amber shrink-0" />
          <span className="text-sm text-cm-amber">{resumo.comProblemas} registros com problemas</span>
        </div>
      )}
    </div>
  )
}
