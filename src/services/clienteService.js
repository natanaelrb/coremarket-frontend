import api from "./api"

const clienteService = {

  listar() {
    return api.get("/clientes")
  }

}

export default clienteService