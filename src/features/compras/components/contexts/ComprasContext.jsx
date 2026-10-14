
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { mockCompras } from "../data/mockCompras";

const ComprasContext = createContext(null);

export function ComprasProvider({ children }) {
  const [compras, setCompras] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const carregarCompras = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 350));
      setCompras([...mockCompras]);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const atualizarCompra = useCallback((id, alteracoes) => {
    let compraAtualizada = null;

    setCompras((atuais) =>
      atuais.map((compra) => {
        if (compra.id !== Number(id)) return compra;

        compraAtualizada = {
          ...compra,
          ...alteracoes,
          id: compra.id,
          numero: compra.numero,
        };

        return compraAtualizada;
      })
    );

    return compraAtualizada;
  }, []);

  const obterCompra = useCallback(
    (id) => compras.find((compra) => compra.id === Number(id)) ?? null,
    [compras]
  );

  useEffect(() => {
    carregarCompras();
  }, [carregarCompras]);

  return (
    <ComprasContext.Provider
      value={{
        compras,
        isLoading,
        error,
        atualizar: carregarCompras,
        atualizarCompra,
        obterCompra,
      }}
    >
      {children}
    </ComprasContext.Provider>
  );
}

export function useComprasCompartilhadas() {
  const context = useContext(ComprasContext);

  if (!context) {
    throw new Error(
      "useComprasCompartilhadas deve ser usado dentro de ComprasProvider."
    );
  }

  return context;
}
