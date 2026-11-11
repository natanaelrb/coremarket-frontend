/**
 * Data de referência ("hoje") usada pelo protótipo para que os dados de exemplo
 * continuem coerentes (dias de atraso, vencimentos próximos etc.).
 * TODO(api): trocar por `new Date()` / data do servidor ao integrar (ver utils/getHoje.js).
 */
export const REFERENCE_DATE = '2026-08-20';

/** Meta mensal de recebimento. TODO(api): GET /api/financeiro/metas?tipo=RECEBIMENTO */
export const META_RECEBIMENTO = 33370;
