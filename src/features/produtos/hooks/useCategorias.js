import { useCallback, useState } from "react";

import {
  listarCategorias,
  criarCategoria,
  editarCategoria,
  excluirCategoria,
} from "../services/categoriaService";

function carregarEstadoInicial() {
  try {
    return {
      categorias: listarCategorias(),
      carregando: false,
      erro: "",
    };
  } catch {
    return {
      categorias: [],
      carregando: false,
      erro: "Não foi possível carregar as categorias.",
    };
  }
}

export function useCategorias() {
  const [estado, setEstado] = useState(carregarEstadoInicial);

  const carregarCategorias = useCallback(() => {
    try {
      setEstado({
        categorias: listarCategorias(),
        carregando: false,
        erro: "",
      });
    } catch {
      setEstado((atual) => ({
        ...atual,
        carregando: false,
        erro: "Não foi possível carregar as categorias.",
      }));
    }
  }, []);

  const adicionar = (nome) => {
    try {
      criarCategoria(nome);
      carregarCategorias();
      return { sucesso: true };
    } catch (error) {
      return { sucesso: false, erro: error.message };
    }
  };

  const atualizar = (id, nome) => {
    try {
      editarCategoria(id, nome);
      carregarCategorias();
      return { sucesso: true };
    } catch (error) {
      return { sucesso: false, erro: error.message };
    }
  };

  const remover = (id) => {
    try {
      excluirCategoria(id);
      carregarCategorias();
      return { sucesso: true };
    } catch (error) {
      return { sucesso: false, erro: error.message };
    }
  };

  return {
    categorias: estado.categorias,
    carregando: estado.carregando,
    erro: estado.erro,
    adicionar,
    atualizar,
    remover,
    recarregar: carregarCategorias,
  };
}