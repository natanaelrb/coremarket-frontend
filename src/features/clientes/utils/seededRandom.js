/**
 * Gerador pseudo-aleatório determinístico — garante que os dados mockados
 * sejam sempre os mesmos entre renders (evita "flicker" de dados a cada refresh).
 * Usado apenas em `mocks/`. Não tem utilidade em produção.
 */
export function seededRand(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function pad(n) {
  return String(n).padStart(2, "0");
}
