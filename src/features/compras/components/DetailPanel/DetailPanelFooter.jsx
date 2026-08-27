import { Pencil, Printer, ChevronDown, XCircle } from "lucide-react";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../../../../shared/hooks/useOnClickOutside";

export function DetailPanelFooter({ onCancelar, onEditar, onImprimir }) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setShowMenu(false));

  return (
    <div className="flex items-center gap-2 px-5 py-4 border-t border-slate-100 dark:border-white/5">
      <button
        onClick={onCancelar}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors"
      >
        <XCircle className="w-3.5 h-3.5" />
        Cancelar compra
      </button>
      <button
        onClick={onEditar}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
      >
        <Pencil className="w-3.5 h-3.5" />
        Editar
      </button>
      <div className="relative ml-auto" ref={ref}>
        <button
          onClick={() => setShowMenu((v) => !v)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-violet-600 hover:bg-violet-500 text-white transition-colors"
        >
          <Printer className="w-3.5 h-3.5" />
          Imprimir / Mais ações
          <ChevronDown className="w-3 h-3" />
        </button>
        {showMenu && (
          <div className="absolute right-0 bottom-full mb-1 w-48 bg-white dark:bg-[#1B2044] border border-slate-200 dark:border-white/10 rounded-xl shadow-lg py-1 animate-fade-in-scale origin-bottom-right">
            <button onClick={onImprimir} className="w-full text-left px-3 py-2 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5">
              Imprimir compra
            </button>
            <button onClick={onImprimir} className="w-full text-left px-3 py-2 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5">
              Gerar PDF
            </button>
            <button onClick={onImprimir} className="w-full text-left px-3 py-2 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5">
              Duplicar compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
