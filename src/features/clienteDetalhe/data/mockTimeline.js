// TODO(api): substituir por GET /api/clientes/{clienteId}/historico
export const MOCK_TIMELINE = {
  'CLI-000124': [
    { id: 'evt-1', dataHora: '2026-09-10T14:32:00', tipo: 'alerta', texto: 'Cliente ativo e sem problemas.' },
    { id: 'evt-2', dataHora: '2026-09-10T14:20:00', tipo: 'venda', texto: 'Venda #VEN-1048 realizada.' },
    { id: 'evt-3', dataHora: '2026-09-05T10:14:00', tipo: 'alerta', texto: 'Possui valor em aberto.' },
    { id: 'evt-4', dataHora: '2025-03-12T09:00:00', tipo: 'cadastro', texto: 'Cliente cadastrado.' },
  ],
}
