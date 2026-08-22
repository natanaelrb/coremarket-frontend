import { useHotkeys } from '../../../shared/hooks/useHotkeys.js';

/**
 * Liga os atalhos de teclado do PDV (F2, F3, F4, F5, F8, DEL, ESC) às ações
 * correspondentes na venda em andamento.
 * @param {{
 *  onBuscarProduto: () => void,
 *  onBuscarCliente: () => void,
 *  onDesconto: () => void,
 *  onAtualizar: () => void,
 *  onFinalizarVenda: () => void,
 *  onRemoverItemSelecionado: () => void,
 *  onCancelarOperacao: () => void,
 * }} handlers
 */
export function useKeyboardShortcuts({
  onBuscarProduto,
  onBuscarCliente,
  onDesconto,
  onAtualizar,
  onFinalizarVenda,
  onRemoverItemSelecionado,
  onCancelarOperacao,
}) {
  useHotkeys({
    F2: () => onBuscarProduto?.(),
    F3: () => onBuscarCliente?.(),
    F4: () => onDesconto?.(),
    F5: () => onAtualizar?.(),
    F8: () => onFinalizarVenda?.(),
    Delete: () => onRemoverItemSelecionado?.(),
    Escape: () => onCancelarOperacao?.(),
  });
}

