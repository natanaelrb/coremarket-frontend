import axios from "axios";

const API_URL = "http://localhost:8080";

export async function buscarResumoDashboard() {

  const clientes = await axios.get(`${API_URL}/clientes`);
  const compras = await axios.get(`${API_URL}/compras`);

  return {
    totalClientes: clientes.data.length,
    totalCompras: compras.data.length,
  };

}