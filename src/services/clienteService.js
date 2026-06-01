import api from "./api"

const clienteService = {

  listar() {
    return api.get("/clientes")
  },

  criar(cliente) {
  return api.post("/clientes", cliente)
}

}

export default clienteService