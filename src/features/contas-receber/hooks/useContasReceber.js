import { useCallback, useEffect, useRef, useState } from 'react';
import { contasReceberService as svc } from '../services/contasReceberService';
import { getHoje } from '../utils';

/** Fonte de dados (contas "cruas") + mutações. Trocar o service por Axios quando integrar. */
export function useContasReceber() {
  const hoje = getHoje();
  const [contasRaw, setContasRaw] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ref = useRef([]);
  ref.current = contasRaw;

  const carregar = useCallback(async () => {
    setLoading(true);
    setError(null);
    try { setContasRaw(await svc.listar()); } catch (e) { setError(e); } finally { setLoading(false); }
  }, []);

  useEffect(() => { carregar(); }, [carregar]);

  const substituir = useCallback((u) => setContasRaw((p) => p.map((c) => (c.id === u.id ? u : c))), []);
  const buscar = (id) => ref.current.find((c) => c.id === id);

  const criar = useCallback(async (form) => {
    const nova = await svc.criar(form, ref.current);
    setContasRaw((p) => [...p, nova]);
    return nova;
  }, []);
  const registrarPagamento = useCallback(async (id, form) => { const u = await svc.registrarPagamento(buscar(id), form); substituir(u); return u; }, [substituir]);
  const negociar = useCallback(async (id, form) => { const u = await svc.negociar(buscar(id), form, hoje); substituir(u); return u; }, [substituir, hoje]);
  const cancelar = useCallback(async (id, form) => { const u = await svc.cancelar(buscar(id), form, hoje); substituir(u); return u; }, [substituir, hoje]);
  const editar = useCallback(async (id, form) => { const u = await svc.editar(buscar(id), form); substituir(u); return u; }, [substituir]);
  const definirPromessa = useCallback(async (id, form) => { const u = await svc.definirPromessa(buscar(id), form); substituir(u); return u; }, [substituir]);

  return { hoje, contasRaw, loading, error, carregar, criar, registrarPagamento, negociar, cancelar, editar, definirPromessa };
}
