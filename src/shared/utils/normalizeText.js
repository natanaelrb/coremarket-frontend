/** Minúsculas e sem acentos — usado em buscas. */
export const normalizeText = (s = '') =>
  String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
