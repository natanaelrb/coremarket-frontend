import { ModalType } from '../../constants';
import { useContasReceberContext } from '../../hooks/useContasReceberContext';
import { AdvancedFiltersModal } from '../Filters/AdvancedFiltersModal';
import { NovaContaModal } from './NovaContaModal';
import { RegistrarRecebimentoModal } from './RegistrarRecebimentoModal';
import { NegociarDividaModal } from './NegociarDividaModal';
import { CancelarContaModal } from './CancelarContaModal';
import { EditarContaModal } from './EditarContaModal';
import { PromessaModal } from './PromessaModal';
import { CobrancaWhatsAppModal } from './CobrancaWhatsAppModal';
import { CobrancaPixModal } from './CobrancaPixModal';
import { BoletoModal } from './BoletoModal';

const MODALS = {
  [ModalType.NOVA_CONTA]: NovaContaModal,
  [ModalType.RECEBIMENTO]: RegistrarRecebimentoModal,
  [ModalType.NEGOCIAR]: NegociarDividaModal,
  [ModalType.CANCELAR]: CancelarContaModal,
  [ModalType.EDITAR]: EditarContaModal,
  [ModalType.PROMESSA]: PromessaModal,
  [ModalType.WHATSAPP]: CobrancaWhatsAppModal,
  [ModalType.PIX]: CobrancaPixModal,
  [ModalType.BOLETO]: BoletoModal,
  [ModalType.FILTROS_AVANCADOS]: AdvancedFiltersModal,
};

/** Renderiza o modal aberto. `key` zera o formulário a cada abertura. */
export function ModalsHost() {
  const { modals } = useContasReceberContext();
  const { type, payload } = modals.modal;
  const Component = MODALS[type];
  if (!Component) return null;
  return <Component key={`${type}-${payload?.contaId ?? ''}`} contaId={payload?.contaId} />;
}
