// Opções estáticas usadas nos selects do painel de filtros.
// Em produção, `categorias` e `usuarios` vêm da API (ver hooks/useMovements.js).

export const TIPO_MOVIMENTACAO_OPTIONS = [
  { value: 'TODAS', label: 'Todas' },
  { value: 'ENTRADA', label: 'Entrada' },
  { value: 'SAIDA', label: 'Saída' },
  { value: 'AJUSTE', label: 'Ajuste' },
  { value: 'PERDA', label: 'Perda' },
  { value: 'TRANSFERENCIA', label: 'Transferência' },
  { value: 'DEVOLUCAO_CLIENTE', label: 'Devolução de Cliente' },
  { value: 'DEVOLUCAO_FORNECEDOR', label: 'Devolução de Fornecedor' },
  { value: 'INVENTARIO', label: 'Inventário' },
];

export const ORIGEM_MOVIMENTACAO_OPTIONS = [
  { value: 'TODAS', label: 'Todas as origens' },
  { value: 'COMPRA', label: 'Compra' },
  { value: 'VENDA', label: 'Venda' },
  { value: 'AJUSTE_MANUAL', label: 'Ajuste manual' },
  { value: 'TRANSFERENCIA_INTERNA', label: 'Transferência interna' },
  { value: 'DEVOLUCAO', label: 'Devolução' },
  { value: 'PRODUTO_VENCIDO', label: 'Produto vencido' },
  { value: 'INVENTARIO', label: 'Inventário' },
];

export const STATUS_OPTIONS = [
  { value: 'TODOS', label: 'Todos' },
  { value: 'CONCLUIDA', label: 'Concluída' },
  { value: 'PENDENTE', label: 'Pendente' },
  { value: 'CANCELADA', label: 'Cancelada' },
  { value: 'ESTORNADA', label: 'Estornada' },
];

export const PERIODO_PRESETS = [
  { value: 'HOJE', label: 'Hoje' },
  { value: 'ONTEM', label: 'Ontem' },
  { value: '7_DIAS', label: 'Últimos 7 dias' },
  { value: '30_DIAS', label: 'Últimos 30 dias' },
  { value: 'ESTE_MES', label: 'Este mês' },
  { value: 'PERSONALIZADO', label: 'Personalizado' },
];
