import { useState } from "react";
import { useProdutos } from "./useProdutos";
import { INITIAL_FORM } from "../constants/novoProduto.constants";

export function useNovoProduto({ onSuccess }) {
  const { addProduto } = useProdutos();

  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.nome.trim()) {
      setError("Informe o nome do produto.");
      return;
    }

    if (!form.categoria) {
      setError("Selecione uma categoria.");
      return;
    }

    if (!form.precoVenda) {
      setError("Informe o preço de venda.");
      return;
    }

    const produto = {
      nome: form.nome.trim(),
      codigoBarras: form.codigoBarras.trim(),
      sku: form.sku.trim(),
      categoria: form.categoria,
      marca: form.marca.trim() || "Sem marca",
      fornecedor:
        form.fornecedor.trim() || "Fornecedor não informado",
      tipo: form.tipo,
      unidade: form.unidade,
      ncm: form.ncm.trim() || "0000.00.00",

      precoCompra: Number(form.precoCompra) || 0,
      precoVenda: Number(form.precoVenda) || 0,

      estoque: Number(form.estoque) || 0,
      estoqueMinimo: Number(form.estoqueMinimo) || 0,
      estoqueMaximo: Number(form.estoqueMaximo) || 0,

      pesoKg: Number(form.pesoKg) || 0,
      volumeL: form.volumeL
        ? Number(form.volumeL)
        : null,

      imagemCor: "#22C55E",
      imagemEmoji: "📦",
    };

    const novoProduto = addProduto(produto);

    onSuccess(novoProduto);
  };

  return {
    form,
    error,
    handleChange,
    handleSubmit,
  };
}

