import axios from "axios";

const API_URL = "http://localhost:8080";

export async function buscarComprasPendentes() {
  const resposta = await axios.get(`${API_URL}/compras/pendentes`);

  return resposta.data;
}
