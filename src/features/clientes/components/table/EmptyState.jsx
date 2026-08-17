import { Inbox } from "lucide-react";
import PrimaryButton from "../../../../shared/components/PrimaryButton";
import { Plus } from "lucide-react";

export default function EmptyState({ onNovoCliente }) {
  return (
    <tr>
      <td colSpan={10}>
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-4 cm-float">
            <Inbox size={26} className="text-slate-300 dark:text-slate-600" />
          </div>
          <p className="text-[15px] font-semibold text-slate-700 dark:text-slate-200">
            Nenhum cliente encontrado
          </p>
          <p className="text-[13px] text-slate-400 mt-1 mb-5">
            Tente ajustar os filtros ou cadastre um novo cliente.
          </p>
          <PrimaryButton
            icon={Plus}
            onClick={onNovoCliente}
          >
            Novo cliente
          </PrimaryButton>
        </div>
      </td>
    </tr>
  );
}
