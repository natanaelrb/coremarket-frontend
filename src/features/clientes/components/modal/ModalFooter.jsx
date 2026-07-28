import React from "react";
import { Loader2 } from "lucide-react";

export default function ModalFooter({ saving, onClose, onSave }) {
  return (
    <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-slate-100 dark:border-white/5">
      <button
        type="button"
        onClick={onClose}
        className="px-4 py-2 rounded-lg text-[13px] font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
      >
        Cancelar
      </button>

      <button
        type="button"
        onClick={onSave}
        disabled={saving}
        className="px-4 py-2 rounded-lg text-[13px] font-medium bg-violet-600 text-[var(--sidebar-text)] hover:bg-violet-700 disabled:opacity-60 transition-colors flex items-center gap-2"
      >
        {saving && <Loader2 size={14} className="animate-spin" />}

        {saving ? "Salvando..." : "Salvar cliente"}
      </button>
    </div>
  );
}
