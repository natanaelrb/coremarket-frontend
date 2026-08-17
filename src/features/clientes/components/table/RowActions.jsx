import { Eye, Pencil, Trash2 } from "lucide-react";
import IconButton from "../../../../shared/components/IconButton";

export default function RowActions({
  cliente,
  onView,
  onEdit,
  onDelete,
}) {
  return (
    <div
  className="
    flex
    items-center
    justify-end
    gap-2

    opacity-0
    translate-x-2

    group-hover:opacity-100
    group-hover:translate-x-0

    transition-all
    duration-300
  "
>
      <IconButton
        icon={Eye}
        title="Visualizar"
        color="blue"
        onClick={() => onView(cliente)}
      />

      <IconButton
        icon={Pencil}
        title="Editar"
        color="amber"
        onClick={() => onEdit(cliente)}
      />

      <IconButton
        icon={Trash2}
        title="Excluir"
        color="red"
        onClick={() => onDelete(cliente)}
      />

    </div>
  );
}