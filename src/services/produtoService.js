import axios from "axios";

const API_URL = "http://localhost:8080/produtos";

export async function listarProdutos() {
  const resposta = await axios.get(API_URL);
  return resposta.data;
}

export async function buscarProduto(id) {
  const resposta = await axios.get(`${API_URL}/${id}`);
  return resposta.data;
}

export async function cadastrarProduto(produto) {
  const resposta = await axios.post(API_URL, produto);
  return resposta.data;
}

export async function atualizarProduto(id, produto) {
  const resposta = await axios.put(`${API_URL}/${id}`, produto);

  return resposta.data;
}

export async function excluirProduto(id) {
  await axios.delete(`${API_URL}/${id}`);
}
