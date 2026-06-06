import { useEffect, useState } from "react";

import {
  listarProdutos,
  cadastrarProduto,
  excluirProduto,
  atualizarProduto,
} from "../services/produtoService";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  const [produtoEditando, setProdutoEditando] = useState(null);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    descricao: "",
    preco: "",
    quantidadeEstoque: "",
  });

  async function carregarProdutos() {
    try {
      const dados = await listarProdutos();
      setProdutos(dados);
    } catch (erro) {
      console.error("Erro ao carregar produtos:", erro);
    }
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function salvarProduto() {
    try {
      const dadosProduto = {
        ...novoProduto,
        preco: Number(novoProduto.preco),
        quantidadeEstoque: Number(novoProduto.quantidadeEstoque),
      };

      if (produtoEditando) {
        await atualizarProduto(produtoEditando.id, dadosProduto);
      } else {
        await cadastrarProduto(dadosProduto);
      }

      setNovoProduto({
        nome: "",
        descricao: "",
        preco: "",
        quantidadeEstoque: "",
      });

      setProdutoEditando(null);

      setMostrarFormulario(false);

      carregarProdutos();
    } catch (erro) {
      console.error("Erro ao salvar produto:", erro);
    }
  }

  async function removerProduto(id) {
    const confirmar = window.confirm("Deseja realmente excluir este produto?");

    if (!confirmar) {
      return;
    }

    try {
      await excluirProduto(id);

      carregarProdutos();
    } catch (erro) {
      console.error("Erro ao excluir produto:", erro);
    }
  }

  function editarProduto(produto) {
    setProdutoEditando(produto);

    setNovoProduto({
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco,
      quantidadeEstoque: produto.quantidadeEstoque,
    });

    setMostrarFormulario(true);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Produtos</h1>

          <p className="text-gray-500 mt-1">Gerencie seu estoque</p>
        </div>

        <button
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
          className="
            bg-purple-600
            hover:bg-purple-700
            text-white
            px-5
            py-3
            rounded-xl
            font-medium
          "
        >
          Novo Produto
        </button>
      </div>

      {mostrarFormulario && (
        <div
          className="
            bg-white
            p-6
            rounded-3xl
            shadow-sm
            mb-8
          "
        >
          <h2 className="text-xl font-bold mb-4">
            {produtoEditando ? "Editar Produto" : "Cadastrar Produto"}
          </h2>

          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Nome"
              value={novoProduto.nome}
              onChange={(e) =>
                setNovoProduto({
                  ...novoProduto,
                  nome: e.target.value,
                })
              }
              className="border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="Descrição"
              value={novoProduto.descricao}
              onChange={(e) =>
                setNovoProduto({
                  ...novoProduto,
                  descricao: e.target.value,
                })
              }
              className="border p-3 rounded-xl"
            />

            <input
              type="number"
              placeholder="Preço"
              value={novoProduto.preco}
              onChange={(e) =>
                setNovoProduto({
                  ...novoProduto,
                  preco: e.target.value,
                })
              }
              className="border p-3 rounded-xl"
            />

            <input
              type="number"
              placeholder="Quantidade em estoque"
              value={novoProduto.quantidadeEstoque}
              onChange={(e) =>
                setNovoProduto({
                  ...novoProduto,
                  quantidadeEstoque: e.target.value,
                })
              }
              className="border p-3 rounded-xl"
            />

            <button
              onClick={salvarProduto}
              className="
                bg-green-600
                hover:bg-green-700
                text-white
                p-3
                rounded-xl
              "
            >
              {produtoEditando ? "Atualizar Produto" : "Salvar Produto"}
            </button>
          </div>
        </div>
      )}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="
              bg-white
              rounded-3xl
              p-6
              shadow-sm
              border
              border-gray-100
            "
          >
            <h3 className="text-xl font-bold text-gray-800">{produto.nome}</h3>

            <p className="text-gray-500 mt-2">{produto.descricao}</p>

            <div className="mt-4">
              <p className="text-sm text-gray-500">Preço</p>

              <p className="text-2xl font-bold text-green-600">
                R$ {produto.preco}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500">Estoque</p>

              <p className="font-semibold">{produto.quantidadeEstoque}</p>
            </div>

            <div className="mt-6">
              <button
                onClick={() => editarProduto(produto)}
                className="
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    py-2
                    rounded-xl
                    mb-2
                    "
              >
                Editar
              </button>

              <button
                onClick={() => removerProduto(produto.id)}
                className="
                    w-full
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    py-2
                    rounded-xl
                    "
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
