// Composer do painel lateral de detalhes do produto.
// Toda a lógica de seleção e navegação chega via props.

import { SlideOver } from '../../../../shared/components/ui/SlideOver';

import { DetailHeader } from './DetailHeader';
import { DetailTabs } from './DetailTabs';
import { QuickActions } from './QuickActions';
import { SmartInfoSection } from './SmartInfoSection';

import {
  GeralTab,
  EstoqueTab,
  LotesTab,
  ComprasTab,
  VendasTab,
  FinanceiroTab,
  HistoricoTab,
} from './tabs';

const TAB_COMPONENTS = {
  geral: GeralTab,
  estoque: EstoqueTab,
  lotes: LotesTab,
  compras: ComprasTab,
  vendas: VendasTab,
  financeiro: FinanceiroTab,
  historico: HistoricoTab,
};

export function ProductDetailPanel({
  isOpen,
  produto,
  activeTab,
  setActiveTab,
  onClose,
  onQuickAction,
}) {
  const ActiveTabComponent =
    TAB_COMPONENTS[activeTab] ?? GeralTab;

  if (!produto) {
    return (
      <SlideOver
        open={isOpen}
        onClose={onClose}
        width="w-full sm:w-[440px]"
      />
    );
  }

  return (
    <SlideOver
      open={isOpen}
      onClose={onClose}
      width="w-full sm:w-[440px]"
    >
      <div className="flex min-w-0 flex-col">
        {/* Cabeçalho do produto */}
        <DetailHeader
          produto={produto}
          onClose={onClose}
        />

        {/* Navegação das abas */}
        <DetailTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Conteúdo da aba ativa */}
        <div
          id={`produto-tabpanel-${activeTab}`}
          role="tabpanel"
          aria-label={`Conteúdo da aba ${activeTab}`}
          className="min-w-0 py-2"
        >
          <ActiveTabComponent produto={produto} />
        </div>

        {/* Ações rápidas */}
        <QuickActions
          onAction={onQuickAction}
        />

        {/* Indicadores derivados */}
        <SmartInfoSection
          produto={produto}
        />
      </div>
    </SlideOver>
  );
}