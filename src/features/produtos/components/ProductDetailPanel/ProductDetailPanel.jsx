// Composer do painel lateral de detalhes do produto. Sem lógica de negócio própria:
// tudo (produto selecionado, aba ativa) chega via hooks/props de ProdutosPage.
import { SlideOver } from '../../../../shared/components/ui/SlideOver';
import { DetailHeader } from './DetailHeader';
import { DetailTabs } from './DetailTabs';
import { QuickActions } from './QuickActions';
import { SmartInfoSection } from './SmartInfoSection';
import { GeralTab, EstoqueTab, LotesTab, ComprasTab, VendasTab, FinanceiroTab, HistoricoTab } from './tabs';

const TAB_COMPONENTS = {
  geral: GeralTab,
  estoque: EstoqueTab,
  lotes: LotesTab,
  compras: ComprasTab,
  vendas: VendasTab,
  financeiro: FinanceiroTab,
  historico: HistoricoTab,
};

export function ProductDetailPanel({ isOpen, produto, activeTab, setActiveTab, onClose, onQuickAction }) {
  const ActiveTabComponent = TAB_COMPONENTS[activeTab] ?? GeralTab;

  return (
    <SlideOver open={isOpen} onClose={onClose} width="w-full sm:w-[440px]">
      {produto && (
        <>
          <DetailHeader produto={produto} onClose={onClose} />
          <DetailTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="py-4">
            <ActiveTabComponent produto={produto} />
          </div>
          <QuickActions onAction={onQuickAction} />
          <SmartInfoSection produto={produto} />
        </>
      )}
    </SlideOver>
  );
}
