/**
 * Options used to populate the filter <select> controls in the Estoque
 * toolbar. TODO(api): replace static arrays with data fetched from:
 *  - GET /api/categorias
 *  - GET /api/fornecedores
 *  - GET /api/depositos/localizacoes
 */
export const CATEGORIA_OPTIONS = [
  { value: 'todas', label: 'Todas' },
  { value: 'Alimentos', label: 'Alimentos' },
  { value: 'Bebidas', label: 'Bebidas' },
  { value: 'Laticínios', label: 'Laticínios' },
  { value: 'Limpeza', label: 'Limpeza' },
  { value: 'Padaria', label: 'Padaria' },
  { value: 'Frios', label: 'Frios' },
]

export const FORNECEDOR_OPTIONS = [
  { value: 'todos', label: 'Todos' },
  { value: 'Tio João Alimentos', label: 'Tio João Alimentos' },
  { value: 'Italac Laticínios', label: 'Italac Laticínios' },
  { value: 'Coca-Cola FEMSA', label: 'Coca-Cola FEMSA' },
  { value: 'Química Amparo (Ypê)', label: 'Química Amparo (Ypê)' },
  { value: 'Pullman Panificados', label: 'Pullman Panificados' },
  { value: 'Frios do Vale', label: 'Frios do Vale' },
]

export const LOCALIZACAO_OPTIONS = [
  { value: 'todas', label: 'Todas' },
  { value: 'Depósito 01 - Corredor A', label: 'Depósito 01 - Corredor A' },
  { value: 'Depósito 01 - Corredor B', label: 'Depósito 01 - Corredor B' },
  { value: 'Depósito 01 - Corredor C', label: 'Depósito 01 - Corredor C' },
  { value: 'Depósito 02 - Corredor A', label: 'Depósito 02 - Corredor A' },
  { value: 'Depósito 02 - Corredor B', label: 'Depósito 02 - Corredor B' },
  { value: 'Câmara Fria 01 - Prateleira 2', label: 'Câmara Fria 01 - Prateleira 2' },
]

export const SITUACAO_OPTIONS = [
  { value: 'todos', label: 'Todos' },
  { value: 'normal', label: 'Normal' },
  { value: 'baixo_estoque', label: 'Baixo Estoque' },
  { value: 'sem_estoque', label: 'Sem estoque' },
  { value: 'proximo_validade', label: 'Próximo da validade' },
  { value: 'vence_hoje', label: 'Vence hoje' },
  { value: 'vencido', label: 'Vencido' },
]

export const VALIDADE_OPTIONS = [
  { value: 'todos', label: 'Todos' },
  { value: '7', label: 'Vence em até 7 dias' },
  { value: '30', label: 'Vence em até 30 dias' },
  { value: '90', label: 'Vence em até 90 dias' },
  { value: 'vencidos', label: 'Já vencidos' },
]

export const TIPO_OPTIONS = [
  { value: 'todos', label: 'Todos' },
  { value: 'materia-prima', label: 'Matéria-prima' },
  { value: 'revenda', label: 'Revenda' },
  { value: 'produzido', label: 'Produzido' },
]

export const STATUS_ATIVO_OPTIONS = [
  { value: 'ativo', label: 'Ativo' },
  { value: 'inativo', label: 'Inativo' },
  { value: 'todos', label: 'Todos' },
]

export const ITEMS_PER_PAGE_OPTIONS = [10, 25, 50, 100]
