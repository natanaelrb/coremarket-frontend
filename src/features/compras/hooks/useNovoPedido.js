
import { useMemo, useState } from "react";
import { mockFornecedores } from "../data/mockFornecedores";
import { MOCK_PRODUTOS } from "../../vendas/data/mockProdutos";

const hoje = new Date().toLocaleDateString("en-CA");

export function useNovoPedido() {
  const [fornecedorId, setFornecedorId] = useState("");
  const [previsaoEntrega, setPrevisaoEntrega] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [itens, setItens] = useState([]);
  const [erro, setErro] = useState("");

  const produtosDisponiveis = MOCK_PRODUTOS ?? [];

  const total = useMemo(
    () =>
      itens.reduce(
        (soma, item) => soma + item.quantidade * item.precoUnitario,
        0
      ),
    [itens]
  );

  function adicionarProduto(produtoId) {
    const produto = produtosDisponiveis.find(
      (item) => String(item.id) === String(produtoId)
    );

    if (!produto) return;

    setErro("");

    setItens((atuais) => {
      const existente = atuais.find(
        (item) => String(item.produtoId) === String(produto.id)
      );

      if (existente) {
        return atuais.map((item) =>
          String(item.produtoId) === String(produto.id)
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [
        ...atuais,
        {
          produtoId: produto.id,
          nome: produto.nome,
          codigoBarras: produto.codigoBarras ?? "",
          quantidade: 1,
          precoUnitario: Number(produto.preco) || 0,
        },
      ];
    });
  }

  function alterarQuantidade(produtoId, quantidade) {
    const valor = Math.floor(Number(quantidade));

    if (!Number.isFinite(valor) || valor < 1) {
      setItens((atuais) =>
        atuais.filter(
          (item) => String(item.produtoId) !== String(produtoId)
        )
      );
      return;
    }

    setItens((atuais) =>
      atuais.map((item) =>
        String(item.produtoId) === String(produtoId)
          ? { ...item, quantidade: valor }
          : item
      )
    );
  }

  function alterarPreco(produtoId, preco) {
    const valor = Number(preco);

    if (!Number.isFinite(valor) || valor < 0) return;

    setItens((atuais) =>
      atuais.map((item) =>
        String(item.produtoId) === String(produtoId)
          ? { ...item, precoUnitario: valor }
          : item
      )
    );
  }

  function removerProduto(produtoId) {
    setItens((atuais) =>
      atuais.filter(
        (item) => String(item.produtoId) !== String(produtoId)
      )
    );
  }

  function limparFormulario() {
    setFornecedorId("");
    setPrevisaoEntrega("");
    setObservacoes("");
    setItens([]);
    setErro("");
  }

  function montarPedido() {
    if (!fornecedorId) {
      setErro("Selecione o fornecedor do pedido.");
      return null;
    }

    if (itens.length === 0) {
      setErro("Adicione pelo menos um produto ao pedido.");
      return null;
    }

    if (previsaoEntrega && previsaoEntrega < hoje) {
      setErro("A previsão de entrega não pode ser uma data passada.");
      return null;
    }

    const fornecedor = mockFornecedores.find(
      (item) => String(item.id) === String(fornecedorId)
    );

    return {
      id: `PED-${Date.now()}`,
      numero: `PED-${Date.now().toString().slice(-6)}`,
      fornecedorId,
      fornecedorNome: fornecedor?.nome ?? "Fornecedor",
      dataCriacao: new Date().toISOString(),
      previsaoEntrega: previsaoEntrega || null,
      observacoes: observacoes.trim(),
      itens: itens.map((item) => ({ ...item })),
      produtosCount: itens.length,
      quantidadeTotal: itens.reduce(
        (soma, item) => soma + item.quantidade,
        0
      ),
      totalEstimado: Number(total.toFixed(2)),
      status: "Pendente de envio",
    };
  }

  return {
    fornecedorId,
    setFornecedorId,
    fornecedores: mockFornecedores,
    previsaoEntrega,
    setPrevisaoEntrega,
    observacoes,
    setObservacoes,
    itens,
    produtosDisponiveis,
    total,
    erro,
    setErro,
    adicionarProduto,
    alterarQuantidade,
    alterarPreco,
    removerProduto,
    limparFormulario,
    montarPedido,
  };
}
