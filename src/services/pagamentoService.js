export async function registrarPagamento(idCompra, valor) {
  console.log("Pagamento registrado:", {
    idCompra,
    valor
  });

  return {
    sucesso: true,
    mensagem: "Pagamento registrado com sucesso"
  };
}