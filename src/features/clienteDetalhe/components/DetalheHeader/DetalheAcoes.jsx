import { Pencil, ShoppingBag } from 'lucide-react'
import { Button } from "../../../../shared/components/ui/Button.jsx";

/** "Editar" and "Nova venda" primary actions in the detail header. */
export function DetalheAcoes({ onEditar, onNovaVenda }) {
  return (
    <div className="flex items-center gap-2">
      <Button variant="secondary" size="sm" icon={Pencil} onClick={onEditar}>
        Editar
      </Button>
      <Button size="sm" icon={ShoppingBag} onClick={onNovaVenda}>
        Nova venda
      </Button>
    </div>
  )
}
