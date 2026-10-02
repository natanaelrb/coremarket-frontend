// Menu de ações de uma linha da tabela (⋮):
// editar, duplicar, código de barras, etiqueta e excluir.

import {
  MoreVertical,
  Pencil,
  Copy,
  Barcode,
  Tag,
  Trash2,
} from "lucide-react";

import Dropdown, {
  DropdownItem,
} from "../../../../shared/components/ui/Dropdown";

export function RowActionsMenu({
  produto,
  onEdit,
  onDuplicate,
  onGenerateBarcode,
  onPrintLabel,
  onDelete,
}) {
  const productName = produto?.nome || "produto";

  return (
    <Dropdown
        align="right"
        trigger={
          <button
            type="button"
            aria-label={`Mais ações para ${productName}`}
            title="Mais ações"
            className="
              flex h-8 w-8
              items-center justify-center
              rounded-lg
              border border-transparent
              text-slate-400
              outline-none
              transition-all duration-200
              hover:border-slate-200
              hover:bg-white
              hover:text-slate-700
              focus-visible:border-emerald-400
              focus-visible:ring-4
              focus-visible:ring-emerald-500/10
              dark:text-slate-500
              dark:hover:border-white/[0.10]
              dark:hover:bg-white/[0.06]
              dark:hover:text-slate-200
              dark:focus-visible:border-emerald-400
            "
          >
            <MoreVertical size={16} strokeWidth={2} aria-hidden="true" />
          </button>
        }
      >
      <DropdownItem
        icon={Pencil}
        onClick={() => onEdit?.(produto)}
      >
        Editar
      </DropdownItem>

      <DropdownItem
        icon={Copy}
        onClick={() => onDuplicate?.(produto)}
      >
        Duplicar
      </DropdownItem>

      <DropdownItem
        icon={Barcode}
        onClick={() => onGenerateBarcode?.(produto)}
      >
        Código de barras
      </DropdownItem>

      <DropdownItem
        icon={Tag}
        onClick={() => onPrintLabel?.(produto)}
      >
        Etiqueta
      </DropdownItem>

      <DropdownItem
        icon={Trash2}
        danger
        onClick={() => onDelete?.(produto)}
      >
        Excluir
      </DropdownItem>
    </Dropdown>
  );
}

