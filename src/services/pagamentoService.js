import axios from "axios";

const API_URL = "http://localhost:8080";

export async function registrarPagamento(dados) {
  const response = await axios.post(`${API_URL}/pagamentos`, dados);

  return response.data;
}
