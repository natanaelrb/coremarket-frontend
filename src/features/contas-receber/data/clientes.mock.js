import { createRng } from './seed';
import { maskCPF } from '../../../shared/utils/masks';

const BASE = [
  ['JoÃ£o da Silva', '000.000.000-00', '(89) 99999-9999'],
  ['Maria Santos', '111.111.111-11', '(89) 98888-8888'],
  ['Pedro Lima', '222.222.222-22', '(89) 97777-7777'],
  ['Ana Oliveira', '333.333.333-33', '(89) 96666-6666'],
  ['Carlos Pereira', '444.444.444-44', '(89) 95555-5555'],
  ['Juliana Costa', '555.555.555-55', '(89) 94444-4444'],
  ['Ricardo Alves', '666.666.666-66', '(89) 93333-3333'],
  ['Fernanda Silva', '777.777.777-77', '(89) 92222-2222'],
];
const EXTRAS = [
  'Lucas Rocha', 'Beatriz Souza', 'Marcos Ferreira', 'Camila Nunes', 'Paulo Mendes', 'Larissa Barros',
  'Rafael Gomes', 'PatrÃ­cia Lopes', 'Diego Martins', 'Tatiane AraÃºjo', 'Gustavo Ribeiro', 'Aline Moreira',
  'Bruno Castro', 'Vanessa Teixeira', 'Felipe Cardoso', 'Renata Dias',
];

const rng = createRng(77);
const gerados = EXTRAS.map((nome) => [
  nome,
  maskCPF(`${rng.int(100000000, 999999999)}${rng.int(10, 99)}`),
  `(89) 9${rng.int(1000, 9999)}-${rng.int(1000, 9999)}`,
]);

/** TODO(api): GET /api/clientes?somenteComContasReceber=true */
export const CLIENTES = [...BASE, ...gerados].map(([nome, cpf, telefone], i) => ({ id: i + 1, nome, cpf, telefone }));

