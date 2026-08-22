import {
  MoreVertical,
  Eye,
  Pencil,
  ArrowLeftRight,
  PackagePlus,
  PackageMinus,
  Trash2,
} from "lucide-react";
import Dropdown from "../../../../shared/components/ui/Dropdown.jsx";
import IconButton from "../../../../shared/components/actions/IconButton.jsx";

const MENU_ITEMS = [
  { key: "ver", label: "Ver detalhes", icon: Eye },
  { key: "editar", label: "Editar produto", icon: Pencil },
  { key: "entrada", label: "Registrar entrada", icon: PackagePlus },
  { key: "saida", label: "Registrar saída", icon: PackageMinus },
  { key: "transferir", label: "Transferir", icon: ArrowLeftRight },
  { key: "excluir", label: "Excluir", icon: Trash2, danger: true },
];

/**
 * Row-level "..." actions menu. onSelect receives (actionKey, produto) so
 * the page can wire each action to its real handler/modal later.
 */
export default function ActionsMenu({ produto, onSelect }) {
  return (
    <Dropdown trigger={<IconButton icon={MoreVertical} />}>
      {MENU_ITEMS.map(({ key, label, icon: Icon, danger }) => (
        <button
          key={key}
          onClick={() => onSelect(key, produto)}
          className={`flex w-full items-center gap-2 px-3.5 py-2 text-left text-sm transition-colors hover:bg-gray-50 dark:hover:bg-[#1E2142] ${
            danger
              ? "text-rose-600 dark:text-rose-400"
              : "text-gray-700 dark:text-gray-200"
          }`}
        >
          <Icon size={15} />
          {label}
        </button>
      ))}
    </Dropdown>
  );
}
