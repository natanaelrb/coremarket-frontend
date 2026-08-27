// Controla a abertura/fechamento do painel lateral de detalhe de uma compra
// e busca (mock) os dados completos daquele registro sob demanda.
// TODO(api): substituir getCompraDetalhe por GET /api/compras/{id}
import { useCallback, useEffect, useState } from "react";
import { getCompraDetalhe } from "../data/mockDetailData";

export function useCompraDetail() {
  const [selectedId, setSelectedId] = useState(null);
  const [detalhe, setDetalhe] = useState(null);
  const [activeTab, setActiveTab] = useState("resumo");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedId === null) {
      setDetalhe(null);
      return;
    }
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setDetalhe(getCompraDetalhe(selectedId));
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, [selectedId]);

  const openDetail = useCallback((id) => {
    setSelectedId(id);
    setActiveTab("resumo");
  }, []);

  const closeDetail = useCallback(() => setSelectedId(null), []);

  return { selectedId, detalhe, isLoading, activeTab, setActiveTab, openDetail, closeDetail, isOpen: selectedId !== null };
}
