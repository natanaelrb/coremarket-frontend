// Hook responsável exclusivamente pelo painel lateral de detalhes (produto aberto + aba ativa).
import { useState, useCallback } from 'react';
import { DEFAULT_DETAIL_TAB } from '../constants/detailTabs';

export function useProdutoDetail() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [activeTab, setActiveTab] = useState(DEFAULT_DETAIL_TAB);

  const openDetail = useCallback((produto) => {
    setProdutoSelecionado(produto);
    setActiveTab(DEFAULT_DETAIL_TAB);
  }, []);

  const closeDetail = useCallback(() => {
    setProdutoSelecionado(null);
  }, []);

  const isOpen = Boolean(produtoSelecionado);

  return { produtoSelecionado, isOpen, activeTab, setActiveTab, openDetail, closeDetail };
}
