const STORAGE_KEY = "coremarket:vendas";

/**
 * Recupera as vendas armazenadas no navegador.
 */
function obterArmazenamento() {
  try {
    const dados = localStorage.getItem(STORAGE_KEY);

    if (!dados) return [];

    const vendas = JSON.parse(dados);

    return Array.isArray(vendas) ? vendas : [];
  } catch (error) {
    console.error("Erro ao recuperar vendas:", error);
    return [];
  }
}

/**
 * Persiste a lista de vendas no navegador.
 */
function persistirVendas(vendas) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(vendas));
}

/**
 * Registra uma nova venda.
 */
export function salvarVenda(venda) {
  if (!venda?.id) {
    throw new Error("A venda precisa possuir um identificador.");
  }

  const vendas = obterArmazenamento();

  const jaExiste = vendas.some((item) => item.id === venda.id);

  if (jaExiste) {
    throw new Error("Esta venda já está registrada.");
  }

  const novasVendas = [venda, ...vendas];

  persistirVendas(novasVendas);

  return venda;
}

/**
 * Retorna todas as vendas registradas.
 */
export function listarVendas() {
  return obterArmazenamento();
}

/**
 * Busca uma venda pelo identificador.
 */
export function buscarVendaPorId(id) {
  return obterArmazenamento().find((venda) => venda.id === id) ?? null;
}

/**
 * Remove uma venda pelo identificador.
 */
export function removerVenda(id) {
  const vendas = obterArmazenamento();

  const novasVendas = vendas.filter((venda) => venda.id !== id);

  if (novasVendas.length === vendas.length) {
    return false;
  }

  persistirVendas(novasVendas);

  return true;
}
