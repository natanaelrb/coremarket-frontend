import axios from "axios";

const API_URL = "http://localhost:8080";

export async function buscarResumoDashboard() {

  const resposta = await axios.get(
    `${API_URL}/dashboard/resumo`
  );

  return resposta.data;
}