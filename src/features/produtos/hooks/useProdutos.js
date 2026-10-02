// Hook responsável por carregar e manipular a lista de produtos.
// Troca simples: substituir a leitura do mock por chamadas à API.

import { useEffect, useMemo, useState } from "react";
import { PRODUTOS_MOCK } from "../mocks/produtos.mock";
import { resolveProductStatus } from "../utils/validadeUtils";

export function useProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ativo = true;

    setIsLoading(true);

    // TODO: substituir por `api.get('/produtos')`
    const timeout = setTimeout(() => {
      if (!ativo) return;

      try {
        const comStatus = PRODUTOS_MOCK.map((p) => ({
          ...p,
          status: resolveProductStatus(p),
        }));

        setProdutos(comStatus);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => {
      ativo = false;
      clearTimeout(timeout);
    };
  }, []);

  // Atualização manual da lista
  const refetch = () => {
    setIsLoading(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const comStatus = PRODUTOS_MOCK.map((p) => ({
            ...p,
            status: resolveProductStatus(p),
          }));

          setProdutos(comStatus);
          setError(null);

          resolve(comStatus);
        } catch (err) {
          setError(err);
          resolve(null);
        } finally {
          setIsLoading(false);
        }
      }, 400);
    });
  };

  // Adiciona um novo produto à lista local.
  // Futuramente será substituído por `POST /api/produtos`.
  const addProduto = (produto) => {
    const novoProduto = {
      ...produto,
      id: `PROD-${Date.now()}`,
      codigo: produto.codigo || `PROD-${Date.now()}`,
      ativo: true,
      estoqueReservado: 0,
      lotesCount: 0,
      validadeMaisProxima: null,
      status: resolveProductStatus({
        ...produto,
        ativo: true,
        estoqueReservado: 0,
        lotesCount: 0,
        validadeMaisProxima: null,
      }),
    };

    setProdutos((current) => [novoProduto, ...current]);

    return novoProduto;
  };

  return useMemo(
    () => ({
      produtos,
      isLoading,
      error,
      refetch,
      addProduto,
    }),
    [produtos, isLoading, error]
  );
}

