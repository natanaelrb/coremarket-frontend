import { STATUS_CONTA_RECEBER } from "../../../shared/constants/enums.js";

// TODO(api): substituir por GET /api/clientes/{clienteId}/contas-a-receber
export const MOCK_CONTAS_RECEBER = {
  'CLI-000124': [
    { id: '#VEN-1048', vencimento: '2026-09-15', valor: 200.0, pago: 100.0, saldo: 100.0, status: STATUS_CONTA_RECEBER.PARCIAL },
    { id: '#VEN-1020', vencimento: '2026-09-05', valor: 180.0, pago: 0.0, saldo: 180.0, status: STATUS_CONTA_RECEBER.EM_ATRASO },
    { id: '#VEN-0988', vencimento: '2026-08-28', valor: 320.0, pago: 320.0, saldo: 0.0, status: STATUS_CONTA_RECEBER.PAGO },
    { id: '#VEN-0971', vencimento: '2026-08-20', valor: 150.0, pago: 0.0, saldo: 150.0, status: STATUS_CONTA_RECEBER.PAGO },
  ],
}
