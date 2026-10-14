import { useState, useRef } from "react";
import {
  Pencil,
  Printer,
  ChevronDown,
  XCircle,
  FileDown,
  Copy,
} from "lucide-react";
import { useOnClickOutside } from "../../../../shared/hooks/useOnClickOutside";

export function DetailPanelFooter({
  onCancelar,
  onEditar,
  onImprimir,
  onGerarPDF,
  onDuplicar,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setShowMenu(false));

  const handleAction = (callback) => {
    setShowMenu(false);
    callback?.();
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onCancelar}
          className="
            inline-flex min-h-10 flex-1 items-center justify-center gap-2
            rounded-xl border border-red-200 bg-white px-3 py-2
            text-xs font-semibold text-red-600 transition-colors
            hover:bg-red-50
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-red-400
            dark:border-red-400/25 dark:bg-transparent dark:text-red-400
            dark:hover:bg-red-400/10
          "
        >
          <XCircle size={15} />
          Cancelar
        </button>

        <button
          type="button"
          onClick={onEditar}
          className="
            inline-flex min-h-10 flex-1 items-center justify-center gap-2
            rounded-xl border border-slate-200 bg-white px-3 py-2
            text-xs font-semibold text-slate-700 transition-colors
            hover:border-slate-300 hover:bg-slate-50
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-emerald-500
            dark:border-slate-700 dark:bg-slate-800/50
            dark:text-slate-200 dark:hover:bg-slate-800
          "
        >
          <Pencil size={14} />
          Editar
        </button>

        <div className="relative flex-1" ref={ref}>
          <button
            type="button"
            onClick={() => setShowMenu((current) => !current)}
            aria-expanded={showMenu}
            aria-haspopup="menu"
            className="
              inline-flex min-h-10 w-full items-center justify-center gap-2
              rounded-xl bg-emerald-600 px-3 py-2 text-xs font-semibold
              text-white shadow-sm shadow-emerald-900/10 transition-colors
              hover:bg-emerald-700
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-emerald-500 focus-visible:ring-offset-2
              dark:bg-emerald-500 dark:hover:bg-emerald-400
              dark:focus-visible:ring-offset-[#151b28]
            "
          >
            <Printer size={15} />
            <span>Mais ações</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${
                showMenu ? "rotate-180" : ""
              }`}
            />
          </button>

          {showMenu && (
            <div
              role="menu"
              className="
                absolute bottom-full right-0 z-50 mb-2 w-52
                origin-bottom-right animate-fade-in-scale
                overflow-hidden rounded-xl border border-slate-200
                bg-white p-1.5 shadow-xl shadow-slate-900/10
                dark:border-slate-700 dark:bg-[#1b2432]
                dark:shadow-black/25
              "
            >
              <button
                type="button"
                role="menuitem"
                onClick={() => handleAction(onImprimir)}
                disabled={!onImprimir}
                className="
                  flex w-full items-center gap-3 rounded-lg px-3 py-2.5
                  text-left text-sm font-medium text-slate-700
                  transition-colors hover:bg-slate-100
                  disabled:cursor-not-allowed disabled:opacity-40
                  dark:text-slate-200 dark:hover:bg-slate-800
                "
              >
                <Printer
                  size={16}
                  className="shrink-0 text-emerald-600 dark:text-emerald-400"
                />
                Imprimir compra
              </button>

              <button
                type="button"
                role="menuitem"
                onClick={() => handleAction(onGerarPDF)}
                disabled={!onGerarPDF}
                className="
                  flex w-full items-center gap-3 rounded-lg px-3 py-2.5
                  text-left text-sm font-medium text-slate-700
                  transition-colors hover:bg-slate-100
                  disabled:cursor-not-allowed disabled:opacity-40
                  dark:text-slate-200 dark:hover:bg-slate-800
                "
              >
                <FileDown
                  size={16}
                  className="shrink-0 text-sky-600 dark:text-sky-400"
                />
                Gerar PDF
              </button>

              <div className="my-1 border-t border-slate-100 dark:border-slate-700" />

              <button
                type="button"
                role="menuitem"
                onClick={() => handleAction(onDuplicar)}
                disabled={!onDuplicar}
                className="
                  flex w-full items-center gap-3 rounded-lg px-3 py-2.5
                  text-left text-sm font-medium text-slate-700
                  transition-colors hover:bg-slate-100
                  disabled:cursor-not-allowed disabled:opacity-40
                  dark:text-slate-200 dark:hover:bg-slate-800
                "
              >
                <Copy
                  size={16}
                  className="shrink-0 text-amber-600 dark:text-amber-400"
                />
                Duplicar compra
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="text-center text-[11px] text-slate-400 dark:text-slate-500">
        Gerencie as ações desta compra
      </p>
    </div>
  );
}
