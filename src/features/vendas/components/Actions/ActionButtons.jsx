import { Plus, ListFilter } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button.jsx";

export function ActionButtons({ onNovaVenda, onConsultarVendas }) {
  return (
    <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
      <Button
        variant="primary"
        icon={Plus}
        onClick={onNovaVenda}
      >
        Nova venda
      </Button>

      <Button
        variant="secondary"
        icon={ListFilter}
        onClick={onConsultarVendas}
      >
        Consultar vendas
      </Button>
    </div>
  );
}
