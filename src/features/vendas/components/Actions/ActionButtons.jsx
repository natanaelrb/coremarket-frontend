import { Plus, ListFilter } from 'lucide-react';
import { Button } from "../../../../shared/components/ui/Button.jsx";

/**
 * Botões de ação da barra superior do PDV.
 * @param {{ onNovaVenda: () => void, onConsultarVendas: () => void }} props
 */
export function ActionButtons({ onNovaVenda, onConsultarVendas }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" icon={Plus} onClick={onNovaVenda}>
        Nova venda
      </Button>
      <Button variant="secondary" icon={ListFilter} onClick={onConsultarVendas}>
        Consultar vendas
      </Button>
    </div>
  );
}

