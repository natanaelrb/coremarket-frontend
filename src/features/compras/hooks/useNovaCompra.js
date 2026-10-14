import { useMemo, useState } from "react";
import { MOCK_PRODUTOS } from "../../vendas/data/mockProdutos";
import { mockFornecedores } from "../data/mockFornecedores";

const hoje = new Date().toLocaleDateString("en-CA");

export function useNovaCompra() {
  const [fornecedorId, setFornecedorId] = useState("");
  const [dataCompra, setDataCompra] = useState(hoje);
  const [previsaoEntrega, setPrevisaoEntrega] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("BOLETO");
  const [desconto, setDesconto] = useState("0");
  const [frete, setFrete] = useState("0");
  const [outrasDespesas, setOutrasDespesas] = useState("0");
  const [observacoes, setObservacoes] = useState("");
  const [buscaProduto, setBuscaProduto] = useState("");
  const [itens, setItens] = useState([]);
  const [erro, setErro] = useState("");

  const produtosEncontrados = useMemo(() => {
    const termo = buscaProduto.trim().toLowerCase();
    if (!termo) return [];

    return MOCK_PRODUTOS.filter((produto) =>
      `${produto.nome} ${produto.codigoBarras}`.toLowerCase().includes(termo)
    ).slice(0, 8);
  }, [buscaProduto]);

  const subtotal = itens.reduce(
    (soma, item) => soma + item.quantidade * item.precoUnitario,
    0
  );

  const valorDesconto = Math.max(0, Number(desconto) || 0);
  const valorFrete = Math.max(0, Number(frete) || 0);
  const valorOutrasDespesas = Math.max(0, Number(outrasDespesas) || 0);
  const total = Math.max(
    0,
    subtotal - valorDesconto + valorFrete + valorOutrasDespesas
  );

  function adicionarProduto(produto) {
    setItens((atuais) => {
      const existente = atuais.find((item) => item.produtoId === produto.id);

      if (existente) {
        return atuais.map((item) =>
          item.produtoId === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [
        ...atuais,
        {
          produtoId: produto.id,
          nome: produto.nome,
          codigoBarras: produto.codigoBarras,
          quantidade: 1,
          precoUnitario: Number(produto.preco) || 0,
        },
      ];
    });

    setBuscaProduto("");
    setErro("");
  }

  function atualizarItem(produtoId, campo, valor) {
    const numero = Number(valor);

    setItens((atuais) =>
      atuais.map((item) =>
        item.produtoId === produtoId
          ? {
              ...item,
              [campo]:
                campo === "quantidade"
                  ? Math.max(0, Number.isFinite(numero) ? numero : 0)
                  : Math.max(0, Number.isFinite(numero) ? numero : 0),
            }
          : item
      )
    );
  }

  function removerProduto(produtoId) {
    setItens((atuais) =>
      atuais.filter((item) => item.produtoId !== produtoId)
    );
  }

  function validar() {
    if (!fornecedorId) {
      setErro("Selecione o fornecedor da compra.");
      return false;
    }

    if (!dataCompra) {
      setErro("Informe a data da compra.");
      return false;
    }

    if (itens.length === 0) {
      setErro("Adicione pelo menos um produto à compra.");
      return false;
    }

    if (itens.some((item) => item.quantidade <= 0)) {
      setErro("Todos os produtos precisam ter quantidade maior que zero.");
      return false;
    }

    if (valorDesconto > subtotal) {
      setErro("O desconto não pode ser maior que o subtotal.");
      return false;
    }

    return true;
  }

  function montarCompra() {
    if (!validar()) return null;

    const fornecedor = mockFornecedores.find(
      (item) => String(item.id) === String(fornecedorId)
    );

    return {
      id: `TMP-${Date.now()}`,
      fornecedorId: fornecedor.id,
      fornecedorNome: fornecedor.nome,
      data: dataCompra,
      previsaoEntrega: previsaoEntrega || null,
      formaPagamento,
      itens: itens.map((item) => ({ ...item })),
      produtosCount: itens.reduce((soma, item) => soma + item.quantidade, 0),
      subtotal,
      desconto: valorDesconto,
      frete: valorFrete,
      outrasDespesas: valorOutrasDespesas,
      total,
      observacoes,
      status: "PENDENTE",
      origem: "local-temporaria",
    };
  }

  function limparFormulario() {
    setFornecedorId("");
    setDataCompra(hoje);
    setPrevisaoEntrega("");
    setFormaPagamento("BOLETO");
    setDesconto("0");
    setFrete("0");
    setOutrasDespesas("0");
    setObservacoes("");
    setBuscaProduto("");
    setItens([]);
    setErro("");
  }

  return {
    fornecedores: mockFornecedores,
    fornecedorId,
    setFornecedorId,
    dataCompra,
    setDataCompra,
    previsaoEntrega,
    setPrevisaoEntrega,
    formaPagamento,
    setFormaPagamento,
    desconto,
    setDesconto,
    frete,
    setFrete,
    outrasDespesas,
    setOutrasDespesas,
    observacoes,
    setObservacoes,
    buscaProduto,
    setBuscaProduto,
    produtosEncontrados,
    itens,
    subtotal,
    valorDesconto,
    valorFrete,
    valorOutrasDespesas,
    total,
    erro,
    setErro,
    adicionarProduto,
    atualizarItem,
    removerProduto,
    montarCompra,
    limparFormulario,
  };
}
