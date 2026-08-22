/**
 * Formata um valor numérico para moeda brasileira (R$)
 */
export function formatCurrency(value) {
  if (value === null || value === undefined) return 'R$ 0,00'
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

/**
 * Formata uma data ISO (yyyy-mm-dd) para dd/mm/yyyy
 */
export function formatDate(date) {
  if (!date) return '-'

  const d = date instanceof Date ? date : new Date(date)

  if (Number.isNaN(d.getTime())) return '-'

  return d.toLocaleDateString('pt-BR')
}

/**
 * Retorna quantos dias se passaram desde uma data ISO até hoje
 */
export function daysSince(isoDate) {
  if (!isoDate) return null
  const then = new Date(isoDate)
  const now = new Date('2026-07-15') // data de referência do sistema (mock)
  const diff = Math.floor((now - then) / (1000 * 60 * 60 * 24))
  return diff
}

/**
 * Formata "há X dias" a partir de uma data ISO
 */
export function formatRelativeDays(isoDate) {
  const days = daysSince(isoDate)
  if (days === null) return ''
  if (days <= 0) return 'hoje'
  if (days === 1) return 'há 1 dia'
  return `há ${days} dias`
}

/**
 * Formata CNPJ (00.000.000/0000-00)
 */
export function formatCNPJ(value) {
  const digits = String(value).replace(/\D/g, '')
  if (digits.length !== 14) return value
  return digits.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
    '$1.$2.$3/$4-$5'
  )
}

/**
 * Formata telefone brasileiro
 */
export function formatPhone(value) {
  const digits = String(value).replace(/\D/g, '')
  if (digits.length === 11) {
    return digits.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }
  if (digits.length === 10) {
    return digits.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
  }
  return value
}

/**
 * Abrevia números grandes para exibição em eixos de gráfico (ex: 12000 -> 12k)
 */
export function formatCompactNumber(value) {
  if (value >= 1000) return `${(value / 1000).toFixed(0)}k`
  return String(value)
}

// /**
//  * Formata um número como moeda brasileira (R$).
//  * @param {number} value
//  * @returns {string}
//  */
// export function formatCurrency(value) {
//   const safe = Number.isFinite(value) ? value : 0;
//   return safe.toLocaleString('pt-BR', {
//     style: 'currency',
//     currency: 'BRL',
//   });
// }

/**
 * Formata um número simples com separador de milhar pt-BR.
 * @param {number} value
 */
export function formatNumber(value) {
  const safe = Number.isFinite(value) ? value : 0;
  return safe.toLocaleString('pt-BR');
}

/**
 * Formata uma porcentagem (ex: 0.084 -> "8,4%").
 * @param {number} value fração decimal (0.084 = 8,4%)
 * @param {number} digits
 */
export function formatPercent(value, digits = 1) {
  const safe = Number.isFinite(value) ? value : 0;
  return `${safe.toLocaleString('pt-BR', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })}%`;
}

// /**
//  * Formata uma data ISO/Date para DD/MM/AAAA.
//  * @param {string | Date} date
//  */
// export function formatDate(date) {
//   const d = date instanceof Date ? date : new Date(date);
//   if (Number.isNaN(d.getTime())) return '--';
//   return d.toLocaleDateString('pt-BR');
// }

/**
 * Formata uma data ISO/Date para DD/MM/AAAA HH:mm.
 * @param {string | Date} date
 */
export function formatDateTime(date) {
  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) return '--';
  return `${d.toLocaleDateString('pt-BR')} ${d.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })}`;
}

/**
 * Formata apenas hora HH:mm:ss.
 * @param {string | Date} date
 */
export function formatTime(date) {
  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) return '--';
  return d.toLocaleTimeString('pt-BR');
}

/**
 * Mascara um CPF exibindo apenas os 3 primeiros dígitos.
 * Ex: 12345678900 -> "123.***.***-**"
 * @param {string} cpf
 */
export function maskCpf(cpf) {
  if (!cpf) return '';
  const digits = cpf.replace(/\D/g, '');
  if (digits.length !== 11) return cpf;
  return `${digits.slice(0, 3)}.***.***-**`;
}

// /**
//  * Formata um telefone brasileiro (fixo ou celular).
//  * @param {string} phone
//  */
// export function formatPhone(phone) {
//   if (!phone) return '';
//   const digits = phone.replace(/\D/g, '');
//   if (digits.length === 11) {
//     return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
//   }
//   if (digits.length === 10) {
//     return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
//   }
//   return phone;
// }

/**
 * Trunca um texto adicionando reticências.
 * @param {string} text
 * @param {number} maxLength
 */
export function truncateText(text, maxLength = 24) {
  if (!text) return '';
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}
