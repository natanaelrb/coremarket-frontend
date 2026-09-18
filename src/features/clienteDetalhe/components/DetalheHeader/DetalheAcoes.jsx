import { Pencil, ShoppingBag } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button.jsx";

/** "Editar" and "Nova venda" primary actions in the detail header. */
export function DetalheAcoes({ onEditar, onNovaVenda }) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="secondary"
        size="sm"
        icon={Pencil}
        onClick={onEditar}
        className="
          border-[#22c55e]/40
          bg-white
          !text-[#22c55e]
          hover:border-[#22c55e]/60
          hover:bg-[#f0fdf4]
          hover:!text-[#166534]
        "
      >
        Editar
      </Button>

      <Button
        size="sm"
        icon={ShoppingBag}
        onClick={onNovaVenda}
        className="
          border-[#22c55e]
          !bg-[#22c55e]
          !text-white
          shadow-sm
          hover:border-[#16a34a]
          hover:!bg-[#16a34a]
        "
      >
        Nova venda
      </Button>
    </div>
  );
}