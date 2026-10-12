import { useMemo, useState } from "react";

export function useMovimentoForm({
  tipo,
  produto,
  onConfirm,
}) {
  const [produtoSelecionado, setProdutoSelecionado] =
    useState(produto ?? null);

  const [quantidade, setQuantidade] = useState("");
  const [custoUnitario, setCustoUnitario] = useState("");
  const [motivo, setMotivo] = useState("Venda");
  const [observacao, setObservacao] = useState("");
  const [erro, setErro] = useState("");

  const isEntrada = tipo === "entrada";

  const produtoAtual = produtoSelecionado;

  const estoqueAtual = Number(
    produtoAtual?.quantidade ?? 0,
  );

  const quantidadeNumerica = Number(
    quantidade || 0,
  );

  const novaQuantidade = useMemo(() => {
    return isEntrada
      ? estoqueAtual + quantidadeNumerica
      : estoqueAtual - quantidadeNumerica;
  }, [
    isEntrada,
    estoqueAtual,
    quantidadeNumerica,
  ]);

  const quantidadeValida =
    !!produtoAtual &&
    Number.isInteger(quantidadeNumerica) &&
    quantidadeNumerica > 0 &&
    (isEntrada ||
      quantidadeNumerica <= estoqueAtual);

  function handleQuantidadeChange(event) {
    const value = event.target.value;

    if (
      value !== "" &&
      !/^\d+$/.test(value)
    ) {
      return;
    }

    setQuantidade(value);

    const valor = Number(value || 0);

    if (!isEntrada && valor > estoqueAtual) {
      setErro(
        `O estoque possui apenas ${estoqueAtual} unidades.`,
      );
      return;
    }

    setErro("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!produtoAtual) {
      setErro("Selecione um produto.");
      return;
    }

    if (!quantidadeValida) {
      setErro(
        !quantidadeNumerica
          ? "Informe uma quantidade válida."
          : `O estoque possui apenas ${estoqueAtual} unidades.`,
      );

      return;
    }

    onConfirm?.({
      tipo,
      produtoId: produtoAtual.id,
      quantidade: quantidadeNumerica,
      observacao: observacao.trim(),
      custoUnitario: isEntrada
        ? Number(
            custoUnitario.replace(",", "."),
          ) || null
        : null,
      motivo: isEntrada ? null : motivo,
    });
  }

  return {
    quantidade,
    custoUnitario,
    motivo,
    observacao,
    erro,

    produtoSelecionado,
    setProdutoSelecionado,

    setCustoUnitario,
    setMotivo,
    setObservacao,

    estoqueAtual,
    quantidadeNumerica,
    novaQuantidade,
    quantidadeValida,
    isEntrada,

    handleQuantidadeChange,
    handleSubmit,
  };
}