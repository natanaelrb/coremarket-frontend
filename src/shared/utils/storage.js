/** localStorage seguro (não quebra em modo privado / SSR). */
export const storage = {
  get(key, fallback = null) {
    try { return window.localStorage.getItem(key) ?? fallback; } catch { return fallback; }
  },
  set(key, value) {
    try { window.localStorage.setItem(key, value); } catch { /* ignora */ }
  },
};
