const DIA_EM_MS = 1000 * 60 * 60 * 24;

/**
 * Filtra vendas do histórico por período relativo à data de referência.
 * @param {import('../types/venda.types.js').VendaHistorico[]} vendas
 * @param {string} periodo 'HOJE' | 'ONTEM' | '7_DIAS' | '30_DIAS' | 'PERSONALIZADO'
 * @param {Date} referencia
 */
export function filtrarPorPeriodo(vendas, periodo, referencia = new Date('2026-08-13T23:59:59')) {
  if (periodo === 'PERSONALIZADO') return vendas;

  const inicioHoje = new Date(referencia);
  inicioHoje.setHours(0, 0, 0, 0);

  return vendas.filter((venda) => {
    const data = new Date(venda.dataHora);
    switch (periodo) {
      case 'HOJE':
        return data >= inicioHoje;
      case 'ONTEM': {
        const inicioOntem = new Date(inicioHoje.getTime() - DIA_EM_MS);
        return data >= inicioOntem && data < inicioHoje;
      }
      case '7_DIAS':
        return data >= new Date(inicioHoje.getTime() - 7 * DIA_EM_MS);
      case '30_DIAS':
        return data >= new Date(inicioHoje.getTime() - 30 * DIA_EM_MS);
      default:
        return true;
    }
  });
}

/**
 * Aplica os filtros de status, forma de pagamento, cliente e operador ao histórico.
 * @param {import('../types/venda.types.js').VendaHistorico[]} vendas
 * @param {{ status?: string, pagamento?: string, cliente?: string, operador?: string }} filtros
 */
export function filtrarHistorico(vendas, filtros) {
  return vendas.filter((venda) => {
    if (filtros.status && filtros.status !== 'TODOS' && venda.status !== filtros.status) {
      return false;
    }
    if (
      filtros.pagamento &&
      filtros.pagamento !== 'TODOS' &&
      venda.formaPagamento !== filtros.pagamento
    ) {
      return false;
    }
    if (
      filtros.cliente &&
      !venda.clienteNome.toLowerCase().includes(filtros.cliente.toLowerCase())
    ) {
      return false;
    }
    if (filtros.operador && filtros.operador !== 'TODOS' && venda.operadorNome !== filtros.operador) {
      return false;
    }
    return true;
  });
}

/**
 * Pagina uma lista já filtrada.
 * @template T
 * @param {T[]} lista
 * @param {number} pagina 1-indexed
 * @param {number} tamanhoPagina
 */
export function paginar(lista, pagina, tamanhoPagina) {
  const inicio = (pagina - 1) * tamanhoPagina;
  return lista.slice(inicio, inicio + tamanhoPagina);
}

