
import { useMemo, useState } from "react";
import { mockFornecedores } from "../data/mockFornecedores";
import { MOCK_PRODUTOS } from "../../vendas/data/mockProdutos";

const hoje = new Date().toLocaleDateString("en-CA");

export function useNovaCotacao() {
  const [titulo, setTitulo] = useState("");
  const [dataLimite, setDataLimite] = useState("");
  const [fornecedoresSelecionados, setFornecedoresSelecionados] =
    useState([]);
  const [itens, setItens] = useState([]);
  const [observacoes, setObservacoes] = useState("");
  const [erro, setErro] = useState("");

  const produtosDisponiveis = MOCK_PRODUTOS ?? [];

  const quantidadeTotal = useMemo(
    () => itens.reduce((soma, item) => soma + item.quantidade, 0),
    [itens]
  );

  function alternarFornecedor(id) {
    setFornecedoresSelecionados((atuais) =>
      atuais.includes(id)
        ? atuais.filter((item) => item !== id)
        : [...atuais, id]
    );
    setErro("");
  }

  function adicionarProduto(produtoId) {
    const produto = produtosDisponiveis.find(
      (item) => String(item.id) === String(produtoId)
    );

    if (!produto) return;

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
        },
      ];
    });

    setErro("");
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

  function removerProduto(produtoId) {
    setItens((atuais) =>
      atuais.filter(
        (item) => String(item.produtoId) !== String(produtoId)
      )
    );
  }

  function limparFormulario() {
    setTitulo("");
    setDataLimite("");
    setFornecedoresSelecionados([]);
    setItens([]);
    setObservacoes("");
    setErro("");
  }

  function montarCotacao() {
    if (!titulo.trim()) {
      setErro("Informe um título para a cotação.");
      return null;
    }

    if (fornecedoresSelecionados.length === 0) {
      setErro("Selecione pelo menos um fornecedor.");
      return null;
    }

    if (itens.length === 0) {
      setErro("Adicione pelo menos um produto.");
      return null;
    }

    if (dataLimite && dataLimite < hoje) {
      setErro("A data limite não pode estar no passado.");
      return null;
    }

    const fornecedores = mockFornecedores.filter((fornecedor) =>
      fornecedoresSelecionados.includes(fornecedor.id)
    );

    return {
      id: `COT-${Date.now()}`,
      numero: `COT-${Date.now().toString().slice(-6)}`,
      titulo: titulo.trim(),
      dataCriacao: new Date().toISOString(),
      dataLimite: dataLimite || null,
      fornecedores,
      fornecedoresIds: fornecedores.map((fornecedor) => fornecedor.id),
      itens: itens.map((item) => ({ ...item })),
      quantidadeProdutos: itens.length,
      quantidadeTotal,
      observacoes: observacoes.trim(),
      status: "Aguardando propostas",
    };
  }

  return {
    titulo,
    setTitulo,
    dataLimite,
    setDataLimite,
    fornecedores: mockFornecedores,
    fornecedoresSelecionados,
    alternarFornecedor,
    itens,
    produtosDisponiveis,
    quantidadeTotal,
    observacoes,
    setObservacoes,
    erro,
    setErro,
    adicionarProduto,
    alterarQuantidade,
    removerProduto,
    limparFormulario,
    montarCotacao,
  };
}
