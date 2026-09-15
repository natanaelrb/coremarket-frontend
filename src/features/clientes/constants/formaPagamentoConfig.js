import { FORMA_PAGAMENTO } from "../../../shared/constants/enums.js";

/** UI presentation config (label, icon name) for each FormaPagamento value. */
export const FORMA_PAGAMENTO_CONFIG = {
  [FORMA_PAGAMENTO.DINHEIRO]: { label: 'Dinheiro' },
  [FORMA_PAGAMENTO.PIX]: { label: 'PIX' },
  [FORMA_PAGAMENTO.CARTAO_CREDITO]: { label: 'Cartão de crédito' },
  [FORMA_PAGAMENTO.CARTAO_DEBITO]: { label: 'Cartão de débito' },
  [FORMA_PAGAMENTO.OUTRO]: { label: 'Outro' },
}
