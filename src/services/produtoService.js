const produtos = [
  {
    id: 1,
    nome: "Arroz 5kg",
    categoria: "Alimentos",
    estoque: 50,
    precoVenda: 32.90
  },
  {
    id: 2,
    nome: "Feijão 1kg",
    categoria: "Alimentos",
    estoque: 80,
    precoVenda: 8.50
  },
  {
    id: 3,
    nome: "Refrigerante 2L",
    categoria: "Bebidas",
    estoque: 40,
    precoVenda: 9.99
  }
];

export async function listarProdutos() {
  return produtos;
}

export async function cadastrarProduto(produto) {
  console.log("Produto cadastrado:", produto);
  return produto;
}

export async function atualizarProduto(id, produto) {
  console.log("Produto atualizado:", id, produto);
  return produto;
}

export async function excluirProduto(id) {
  console.log("Produto removido:", id);
  return true;
}