import { useEffect, useState } from 'react';
import { MOCK_RESUMO_RAPIDO } from '../mock/mockResumoRapido.js';

// TODO(api): trocar pelo pagamentoService/caixaService quando o endpoint existir.
/** Loads the sidebar "Resumo rápido" figures. */
export function useResumoRapido() {
  const [resumo, setResumo] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setResumo(MOCK_RESUMO_RAPIDO), 200);
    return () => clearTimeout(timer);
  }, []);

  return { resumo: resumo ?? MOCK_RESUMO_RAPIDO, isLoading: !resumo };
}
