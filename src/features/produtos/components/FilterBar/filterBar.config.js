// Monta as opções (com "Todos" prefixado) para cada select simples da FilterBar,
// a partir dos mocks de categoria/fornecedor/marca e das constantes de status/tipo.
import { CATEGORIAS_MOCK } from '../../mocks/categorias.mock';
import { FORNECEDORES_MOCK } from '../../mocks/fornecedores.mock';
import { MARCAS_MOCK } from '../../mocks/marcas.mock';
import { STATUS_CONFIG, STOCK_SITUATION_OPTIONS, PRODUCT_TYPE_OPTIONS } from '../../constants/statusConfig';

const withTodos = (list) => [{ value: 'todos', label: 'Todos' }, ...list];

export function buildFilterOptions() {
  return {
    categoria: withTodos(CATEGORIAS_MOCK.map((c) => ({ value: c.nome, label: c.nome }))),
    fornecedor: withTodos(FORNECEDORES_MOCK.map((f) => ({ value: f.nome, label: f.nome }))),
    marca: withTodos(MARCAS_MOCK.map((m) => ({ value: m.nome, label: m.nome }))),
    status: withTodos(Object.entries(STATUS_CONFIG).map(([value, cfg]) => ({ value, label: cfg.label }))),
    situacaoEstoque: STOCK_SITUATION_OPTIONS,
    tipo: PRODUCT_TYPE_OPTIONS,
  };
}
