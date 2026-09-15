import { FORMA_PAGAMENTO } from "../../../shared/constants/enums.js";

// TODO(api): substituir por GET /api/clientes/{clienteId}/pagamentos
export const MOCK_HISTORICO_PAGAMENTOS = {
  'CLI-000124': [
    { id: 'PAG-3311', data: '2026-09-10', conta: '#VEN-1020', valor: 100.0, forma: FORMA_PAGAMENTO.PIX, registradoPor: 'Admin' },
    { id: 'PAG-3288', data: '2026-09-01', conta: '#VEN-0988', valor: 150.0, forma: FORMA_PAGAMENTO.DINHEIRO, registradoPor: 'Admin' },
    { id: 'PAG-3204', data: '2026-08-25', conta: '#VEN-0971', valor: 200.0, forma: FORMA_PAGAMENTO.CARTAO_CREDITO, registradoPor: 'Admin' },
    { id: 'PAG-3150', data: '2026-08-15', conta: '#VEN-0950', valor: 120.0, forma: FORMA_PAGAMENTO.PIX, registradoPor: 'Admin' },
  ],
}
