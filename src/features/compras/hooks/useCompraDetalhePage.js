import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCompraDetalhe } from "../data/mockDetailData";

export function useCompraDetalhePage() {
  const { id } = useParams();

  const [detalhe, setDetalhe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("resumo");

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      const compra = getCompraDetalhe(Number(id));

      setDetalhe(compra);
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [id]);

  return {
    detalhe,
    isLoading,
    activeTab,
    setActiveTab,
  };
}