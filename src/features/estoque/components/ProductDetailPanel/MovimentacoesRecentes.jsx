import MovimentacaoItem from './MovimentacaoItem.jsx'
import { Button } from "../../../../shared/components/ui/Button.jsx";

/**
 * Recent movements feed + "Ver todas as movimentações" call-to-action.
 * TODO(api): "ver todas" should route to a full movement history view
 * filtered by this product's id (GET /api/estoque/produtos/{id}/movimentacoes).
 */
export default function MovimentacoesRecentes({ movimentacoes, onViewAll }) {
  return (
    <div className="p-5 pt-0 animate-fade-in">
      <p className="mb-1 text-xs font-medium text-gray-400 dark:text-gray-500">Movimentações Recentes</p>
      <ul className="divide-y divide-gray-50 dark:divide-[#1B1E3D]">
        {movimentacoes.map((mv) => (
          <MovimentacaoItem key={mv.id} movimentacao={mv} />
        ))}
      </ul>
      <Button variant="outline" size="sm" className="mt-3 w-full justify-center" onClick={onViewAll}>
        Ver todas as movimentações
      </Button>
    </div>
  )
}
