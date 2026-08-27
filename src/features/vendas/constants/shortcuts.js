/**
 * Atalhos de teclado exibidos na barra lateral e usados pelo hook useKeyboardShortcuts.
 */
export const PDV_SHORTCUTS = [
  { key: 'F2', label: 'Buscar produto', action: 'focusBuscaProduto' },
  { key: 'F3', label: 'Buscar cliente', action: 'focusBuscaCliente' },
  { key: 'F4', label: 'Desconto', action: 'focusDesconto' },
  { key: 'F5', label: 'Atualizar', action: 'atualizar' },
  { key: 'F8', label: 'Finalizar venda', action: 'finalizarVenda' },
  { key: 'DEL', label: 'Remover item', action: 'removerItemSelecionado' },
  { key: '+ / -', label: 'Alterar quantidade', action: 'ajustarQuantidade' },
  { key: 'ESC', label: 'Cancelar operação', action: 'cancelarOperacao' },
];

