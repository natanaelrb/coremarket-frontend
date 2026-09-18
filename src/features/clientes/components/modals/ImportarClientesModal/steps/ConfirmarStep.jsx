import { PartyPopper } from "lucide-react";

/** Step 4: final confirmation before committing the import. */
export function ConfirmarStep({ resumo }) {
  return (
    <div className="flex flex-col items-center gap-3 py-6 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ede9fe]">
        <PartyPopper size={22} className="text-[#7c3aed]" />
      </div>

      <p className="text-sm font-medium text-[#0f172a] dark:text-white">
        Tudo pronto para importar
      </p>

      <p className="max-w-xs text-xs text-[#64748b] dark:text-slate-400">
        {resumo?.validos ?? 0} clientes serão adicionados à sua base.
        Registros com problemas serão ignorados.
      </p>
    </div>
  );
}