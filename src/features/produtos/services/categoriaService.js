import { CATEGORIAS_MOCK } from "../mocks/categorias.mock";

const STORAGE_KEY = "coremarket:categorias";

function gerarId(nome) {
  return nome
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function listarCategorias() {
  try {
    const armazenadas = localStorage.getItem(STORAGE_KEY);

    if (armazenadas !== null) {
      return JSON.parse(armazenadas);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(CATEGORIAS_MOCK));
    return CATEGORIAS_MOCK;
  } catch {
    return CATEGORIAS_MOCK;
  }
}

export function salvarCategorias(categorias) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(categorias));
}

export function criarCategoria(nome) {
  const categorias = listarCategorias();
  const nomeNormalizado = nome.trim();

  if (!nomeNormalizado) {
    throw new Error("Informe o nome da categoria.");
  }

  const existe = categorias.some(
    (categoria) =>
      categoria.nome.toLowerCase() === nomeNormalizado.toLowerCase()
  );

  if (existe) {
    throw new Error("Já existe uma categoria com esse nome.");
  }

  const novaCategoria = {
    id: gerarId(nomeNormalizado),
    nome: nomeNormalizado,
  };

  const atualizadas = [...categorias, novaCategoria];
  salvarCategorias(atualizadas);

  return novaCategoria;
}

export function editarCategoria(id, nome) {
  const categorias = listarCategorias();
  const nomeNormalizado = nome.trim();

  if (!nomeNormalizado) {
    throw new Error("Informe o nome da categoria.");
  }

  const duplicada = categorias.some(
    (categoria) =>
      categoria.id !== id &&
      categoria.nome.toLowerCase() === nomeNormalizado.toLowerCase()
  );

  if (duplicada) {
    throw new Error("Já existe uma categoria com esse nome.");
  }

  const atualizadas = categorias.map((categoria) =>
    categoria.id === id
      ? { ...categoria, nome: nomeNormalizado }
      : categoria
  );

  salvarCategorias(atualizadas);

  return atualizadas.find((categoria) => categoria.id === id);
}

export function excluirCategoria(id) {
  const categorias = listarCategorias();
  const atualizadas = categorias.filter((categoria) => categoria.id !== id);

  salvarCategorias(atualizadas);
  return atualizadas;
}
