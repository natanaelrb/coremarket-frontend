import { FileCheck2, Paperclip, Download } from "lucide-react";

export function NFAnexosTab({ detalhe }) {
  const { notaFiscal } = detalhe.integracoes;

  return (
    <div className="space-y-4 animate-fade-in">
      <div>
        <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">Nota fiscal</h4>
        {notaFiscal.emitida ? (
          <div className="flex items-center gap-3 rounded-xl border border-slate-100 dark:border-white/5 p-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center shrink-0">
              <FileCheck2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-slate-700 dark:text-slate-200">NF-e {notaFiscal.numero}</p>
              <p className="text-[11px] text-slate-400 dark:text-slate-500">Série {notaFiscal.serie}</p>
            </div>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10">
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <p className="text-xs text-slate-400 dark:text-slate-500">Nota fiscal ainda não emitida para esta compra.</p>
        )}
      </div>

      <div className="pt-4 border-t border-slate-100 dark:border-white/5">
        <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">Anexos</h4>
        <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
          <Paperclip className="w-3.5 h-3.5" />
          Nenhum anexo adicionado a esta compra.
        </div>
      </div>
    </div>
  );
}
