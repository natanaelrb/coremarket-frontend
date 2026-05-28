import api from "../api/api";

export const listarClientes = async () => {
    const response = await api.get("/clientes");
    return response.data;
};