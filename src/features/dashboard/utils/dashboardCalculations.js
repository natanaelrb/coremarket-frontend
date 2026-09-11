import { TENDENCIA } from '../constants/dashboardConstants';

/** Calcula a variação percentual entre o valor atual e o anterior. */
export function calcularVariacaoPercentual(atual, anterior) {
  if (!anterior) return 0;
  return ((atual - anterior) / anterior) * 100;
}

/** Deriva a tendência (alta/baixa/estável) a partir de uma variação percentual. */
export function calcularTendencia(variacaoPercentual, limiarEstavel = 0.5) {
  if (Math.abs(variacaoPercentual) < limiarEstavel) return TENDENCIA.ESTAVEL;
  return variacaoPercentual > 0 ? TENDENCIA.ALTA : TENDENCIA.BAIXA;
}

/** Calcula a margem de lucro percentual (lucro / faturamento). */
export function calcularMargemLucro(faturamento, lucro) {
  if (!faturamento) return 0;
  return (lucro / faturamento) * 100;
}

/**
 * Estima em quantos dias um produto ficará sem estoque, dado o consumo médio diário.
 * Retorna Infinity quando não há consumo (estoque não se esgota no ritmo atual).
 */
export function estimarDiasParaEsgotar(estoqueAtual, consumoMedioDiario) {
  if (!consumoMedioDiario || consumoMedioDiario <= 0) return Infinity;
  return Math.max(0, Math.round(estoqueAtual / consumoMedioDiario));
}

/** Classifica a urgência da previsão de estoque para colorir o indicador visual. */
export function classificarUrgenciaEstoque(dias) {
  if (dias <= 2) return 'CRITICO';
  if (dias <= 7) return 'ATENCAO';
  return 'OK';
}

/** Calcula o percentual de uma meta atingida, limitado a 0–100 para barras de progresso. */
export function calcularPercentualMeta(valorAtual, meta) {
  if (!meta) return 0;
  return Math.min(100, Math.round((valorAtual / meta) * 100));
}

/** Normaliza um valor dentro de uma matriz (heatmap) para uma intensidade 0–1. */
export function normalizarIntensidade(valor, minimo, maximo) {
  if (maximo === minimo) return 0;
  return (valor - minimo) / (maximo - minimo);
}
