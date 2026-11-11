export const onlyDigits = (v = '') => String(v).replace(/\D/g, '');

export const maskCPF = (v) =>
  onlyDigits(v).slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

export const maskPhone = (v) =>
  onlyDigits(v).slice(0, 11)
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})$/, '$1-$2');

/** Máscara monetária por centavos: "12345" -> "123,45" */
export const maskMoney = (v) => {
  const digits = onlyDigits(v);
  if (!digits) return '';
  return (Number(digits) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};
/** "1.250,50" -> 1250.5 */
export const parseMoney = (v) => {
  if (typeof v === 'number') return v;
  if (!v) return 0;
  const n = Number(String(v).replace(/\./g, '').replace(',', '.'));
  return Number.isFinite(n) ? n : 0;
};
/** 1250.5 -> "1.250,50" */
export const moneyToInput = (n) =>
  (Number(n) || 0).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
