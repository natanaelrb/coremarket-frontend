export const currency = (value) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const formatDate = (date) =>
  date ? new Date(date).toLocaleDateString("pt-BR") : "—";

export const initials = (fullName) =>
  fullName.split(" ").map((p) => p[0]).slice(0, 2).join("");
