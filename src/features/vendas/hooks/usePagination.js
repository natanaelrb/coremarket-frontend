import { useEffect, useMemo, useState } from 'react';

/**
 * Controla o estado de paginação (página atual e tamanho de página) para
 * uma lista já filtrada, recalculando o total de páginas automaticamente.
 * @param {number} totalItens
 * @param {number} [tamanhoInicial=5]
 */
export function usePagination(totalItens, tamanhoInicial = 5) {
  const [pagina, setPagina] = useState(1);
  const [tamanhoPagina, setTamanhoPagina] = useState(tamanhoInicial);

  const totalPaginas = Math.max(1, Math.ceil(totalItens / tamanhoPagina));

  useEffect(() => {
    if (pagina > totalPaginas) setPagina(totalPaginas);
  }, [pagina, totalPaginas]);

  const paginasVisiveis = useMemo(() => {
    const janela = 3;
    const inicio = Math.max(1, pagina - 1);
    const fim = Math.min(totalPaginas, inicio + janela - 1);
    const paginas = [];
    for (let p = inicio; p <= fim; p += 1) paginas.push(p);
    return paginas;
  }, [pagina, totalPaginas]);

  function irPara(novaPagina) {
    setPagina(Math.min(Math.max(1, novaPagina), totalPaginas));
  }

  function proxima() {
    irPara(pagina + 1);
  }

  function anterior() {
    irPara(pagina - 1);
  }

  function alterarTamanhoPagina(novoTamanho) {
    setTamanhoPagina(novoTamanho);
    setPagina(1);
  }

  return {
    pagina,
    tamanhoPagina,
    totalPaginas,
    paginasVisiveis,
    irPara,
    proxima,
    anterior,
    alterarTamanhoPagina,
    temAnterior: pagina > 1,
    temProxima: pagina < totalPaginas,
  };
}

