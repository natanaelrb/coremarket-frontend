import { Mail, Download, Trash2 } from "lucide-react";
import SecondaryButton from "../../../../shared/components/actions/SecondaryButton";

export default function BulkActionsBar({ count, onEmail, onExport, onDelete }) {
  return (
    <div className="cm-pop flex items-center gap-2 text-[13px]">
      <span className="text-slate-500 dark:text-slate-400">
        {count} selecionado(s)
      </span>

      <SecondaryButton icon={Mail} onClick={onEmail} className="py-1.5">
        E-mail
      </SecondaryButton>

      <SecondaryButton icon={Download} onClick={onExport} className="py-1.5">
        Exportar
      </SecondaryButton>

      <SecondaryButton
        icon={Trash2}
        tone="danger"
        onClick={onDelete}
        className="py-1.5"
      >
        Excluir
      </SecondaryButton>
    </div>
  );
}
