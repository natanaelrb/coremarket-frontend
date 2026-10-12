// Definição das colunas da tabela de movimentações.
//
// Centralizado para facilitar:
// - ordenação
// - visibilidade de colunas
// - responsividade
// - manutenção da tabela

export const TABLE_COLUMNS = [
  {
    key: 'dataHora',
    label: 'Data / Hora',
    sortable: true,
    sortKey: 'dataHora',
    width: 'w-[150px]',
  },

  {
    key: 'produto',
    label: 'Produto',
    sortable: false,
    width: 'w-[220px]',
  },

  {
    key: 'tipo',
    label: 'Tipo',
    sortable: false,
    width: 'w-[150px]',
  },

  {
    key: 'origem',
    label: 'Origem',
    sortable: false,
    width: 'w-[190px]',
  },

  {
    key: 'quantidade',
    label: 'Quantidade',
    sortable: true,
    sortKey: 'quantidade',
    width: 'w-[110px]',
  },

  {
    key: 'antes',
    label: 'Antes',
    sortable: true,
    sortKey: 'antes',
    width: 'w-[80px]',
  },

  {
    key: 'depois',
    label: 'Depois',
    sortable: true,
    sortKey: 'depois',
    width: 'w-[80px]',
  },

  {
    key: 'usuario',
    label: 'Usuário',
    sortable: false,
    width: 'w-[170px]',
  },

  {
    key: 'status',
    label: 'Status',
    sortable: false,
    width: 'w-[110px]',
  },

  {
    key: 'acoes',
    label: 'Ações',
    sortable: false,
    width: 'w-[90px]',
  },
];