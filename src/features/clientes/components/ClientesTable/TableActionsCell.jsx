import {
  Eye,
  Pencil,
  MoreVertical,
  Trash2,
  Wallet,
} from "lucide-react";
import IconButton from "../../../../shared/components/actions/IconButton.jsx";
import Dropdown from "../../../../shared/components/ui/Dropdown.jsx";

/** View / edit / more-actions controls for a single client row. */
export function TableActionsCell({
  onView,
  onEdit,
  onRegistrarPagamento,
  onExcluir,
}) {
  return (
    <div className="flex items-center justify-end gap-0.5">
      <IconButton
        icon={Eye}
        label="Ver detalhes"
        onClick={onView}
      />

      <IconButton
        icon={Pencil}
        label="Editar"
        onClick={onEdit}
      />

      <Dropdown
        align="right"
        trigger={
          <IconButton
            icon={MoreVertical}
            label="Mais ações"
          />
        }
        items={[
          {
            label: "Registrar pagamento",
            icon: Wallet,
            onClick: onRegistrarPagamento,
          },
          {
            label: "Excluir cliente",
            icon: Trash2,
            tone: "danger",
            onClick: onExcluir,
          },
        ]}
      />
    </div>
  );
}