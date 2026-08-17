// Menu de ações de uma linha da tabela (⋮): editar, duplicar, código de barras, etiqueta, excluir.
import { MoreVertical, Pencil, Copy, Barcode, Tag, Trash2 } from 'lucide-react';
import Dropdown, { DropdownItem } from "../../../../shared/components/Dropdown";

export function RowActionsMenu({ produto, onEdit, onDuplicate, onGenerateBarcode, onPrintLabel, onDelete }) {
  return (
    <Dropdown
      trigger={
        <button
          type="button"
          aria-label="Mais ações"
          className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/5 dark:hover:text-gray-200"
        >
          <MoreVertical size={15} />
        </button>
      }
    >
      <DropdownItem icon={Pencil} onClick={() => onEdit?.(produto)}>Editar</DropdownItem>
      <DropdownItem icon={Copy} onClick={() => onDuplicate?.(produto)}>Duplicar</DropdownItem>
      <DropdownItem icon={Barcode} onClick={() => onGenerateBarcode?.(produto)}>Código de barras</DropdownItem>
      <DropdownItem icon={Tag} onClick={() => onPrintLabel?.(produto)}>Etiqueta</DropdownItem>
      <DropdownItem icon={Trash2} danger onClick={() => onDelete?.(produto)}>Excluir</DropdownItem>
    </Dropdown>
  );
}
