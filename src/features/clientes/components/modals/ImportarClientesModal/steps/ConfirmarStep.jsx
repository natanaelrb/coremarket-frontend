import { PartyPopper } from 'lucide-react'

/** Step 4: final confirmation before committing the import. */
export function ConfirmarStep({ resumo }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 py-6">
      <div className="w-12 h-12 rounded-full bg-cm-violet-dim flex items-center justify-center">
        <PartyPopper size={22} className="text-cm-violet-soft" />
      </div>
      <p className="text-sm text-white light:text-slate-900 font-medium">Tudo pronto para importar</p>
      <p className="text-xs text-slate-400 light:text-slate-500 max-w-xs">
        {resumo?.validos ?? 0} clientes serão adicionados à sua base. Registros com problemas serão ignorados.
      </p>
    </div>
  )
}
