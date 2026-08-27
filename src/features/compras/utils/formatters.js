// Funções puras de formatação usadas em toda a feature de Compras.
// Mantidas separadas de componentes para permitir testes unitários isolados.

export function formatCurrency(value) {
  if (value === null || value === undefined || Number.isNaN(value)) return "R$ 0,00";
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatCurrencyCompact(value) {
  if (value === null || value === undefined) return "R$ 0";
  if (Math.abs(value) >= 1000) {
    return `R$ ${(value / 1000).toLocaleString("pt-BR", { maximumFractionDigits: 1 })}k`;
  }
  return formatCurrency(value);
}

export function formatDate(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
}

export function formatDateTime(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return `${date.toLocaleDateString("pt-BR")} às ${date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}

export function formatShortDate(dateString) {
  if (!dateString) return "-";
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

export function formatPercent(value, digits = 1) {
  if (value === null || value === undefined) return "0%";
  return `${value.toFixed(digits)}%`;
}

export function formatCompraNumero(numero) {
  return `#CMP-${String(numero).padStart(6, "0")}`;
}

export function pluralize(count, singular, plural) {
  return count === 1 ? singular : plural;
}
