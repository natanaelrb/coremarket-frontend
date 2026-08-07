// Definição das colunas da tabela de produtos.
// key: propriedade do objeto produto | label: cabeçalho | sortable: habilita ordenação
// A propriedade "toggleable" indica se a coluna pode ser escondida pelo menu "Colunas".

export const PRODUCT_TABLE_COLUMNS = [
  { key: 'imagem', label: 'Imagem', sortable: false, toggleable: false, width: 'w-16' },
  { key: 'codigo', label: 'Código', sortable: true, toggleable: false },
  { key: 'codigoBarras', label: 'Código de Barras', sortable: false, toggleable: true },
  { key: 'nome', label: 'Produto', sortable: true, toggleable: false },
  { key: 'categoria', label: 'Categoria', sortable: true, toggleable: true },
  { key: 'marca', label: 'Marca', sortable: true, toggleable: true },
  { key: 'precoVenda', label: 'Preço Venda', sortable: true, toggleable: true },
  { key: 'estoque', label: 'Estoque', sortable: true, toggleable: true },
  { key: 'estoqueMinimo', label: 'Est. Mínimo', sortable: true, toggleable: true },
  { key: 'validade', label: 'Validade (mais próxima)', sortable: true, toggleable: true },
  { key: 'status', label: 'Status', sortable: true, toggleable: false },
  { key: 'acoes', label: 'Ações', sortable: false, toggleable: false, width: 'w-16' },
];

export const DEFAULT_VISIBLE_COLUMNS = PRODUCT_TABLE_COLUMNS.map((c) => c.key);

export const ITEMS_PER_PAGE_OPTIONS = [10, 20, 50, 100];

export const DEFAULT_ITEMS_PER_PAGE = 20;
