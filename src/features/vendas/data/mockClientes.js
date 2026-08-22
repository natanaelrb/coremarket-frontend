// TODO(api): substituir por GET /api/clientes/buscar?termo={termo}
// Controller esperado: ClienteController#buscarPorTermo
export const MOCK_CLIENTES = [
  {
    id: 'c-001',
    nome: 'Maria Silva',
    cpf: '12345678900',
    telefone: '11987654321',
    dividaAberta: 120.0,
  },
  {
    id: 'c-002',
    nome: 'José Oliveira',
    cpf: '98765432100',
    telefone: '11976543210',
    dividaAberta: 0,
  },
  {
    id: 'c-003',
    nome: 'Carla Santos',
    cpf: '45678912300',
    telefone: '11965432109',
    dividaAberta: 45.5,
  },
];

