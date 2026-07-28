const clientes = [
  { id: 1, nome: "Mercadinho Central" },
  { id: 2, nome: "Supermercado União" },
  { id: 3, nome: "Atacadão Silva" },
  { id: 4, nome: "Distribuidora Oliveira" }
];

const clienteService = {
  async listar() {
    return {
      data: clientes
    };
  }
};

export default clienteService;