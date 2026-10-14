import { mockCompras } from "./mockCompras";

let compras = [...mockCompras];
const listeners = new Set();

function notificar() {
  listeners.forEach((listener) => listener());
}

export function subscribeCompras(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getComprasSnapshot() {
  return compras;
}

export function obterCompra(id) {
  return compras.find((compra) => compra.id === Number(id)) ?? null;
}

export function atualizarCompra(id, alteracoes) {
  const compraExistente = obterCompra(id);

  if (!compraExistente) return false;

  compras = compras.map((compra) =>
    compra.id === Number(id)
      ? {
          ...compra,
          ...alteracoes,
          id: compra.id,
          numero: compra.numero,
        }
      : compra
  );

  notificar();
  return true;
}
