import { useState } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import ProdutoForm from "./ProdutoForm";
import { cadastrarProduto } from "../../services/produtoService";

const VAZIO = { nome: "", descricao: "", preco: "", quantidadeEstoque: "" };

export default function NovoProdutoModal({
  aberto,
  fechar,
  atualizarProdutos,
  setToast,
}) {
  const [dados, setDados] = useState(VAZIO);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function validar() {
    const erros = {};
    if (!dados.nome?.trim()) erros.nome = "Nome é obrigatório";
    if (!dados.preco || Number(dados.preco) <= 0)
      erros.preco = "Preço inválido";
    if (dados.quantidadeEstoque === "" || Number(dados.quantidadeEstoque) < 0)
      erros.quantidadeEstoque = "Quantidade inválida";
    return erros;
  }

  async function salvar() {
    const erros = validar();
    if (Object.keys(erros).length) {
      setErrors(erros);
      return;
    }

    setLoading(true);
    try {
      await cadastrarProduto({
        ...dados,
        preco: Number(dados.preco),
        quantidadeEstoque: Number(dados.quantidadeEstoque),
      });
      await atualizarProdutos();
      setToast({
        mensagem: "Produto cadastrado com sucesso!",
        tipo: "sucesso",
      });
      setDados(VAZIO);
      setErrors({});
      fechar();
    } catch {
      setToast({ mensagem: "Erro ao cadastrar produto.", tipo: "erro" });
    } finally {
      setLoading(false);
    }
  }

  function handleFechar() {
    setDados(VAZIO);
    setErrors({});
    fechar();
  }

  return (
    <Modal
      aberto={aberto}
      fechar={handleFechar}
      titulo="Novo produto"
      subtitulo="Preencha os dados do produto"
    >
      <ProdutoForm dados={dados} onChange={setDados} errors={errors} />
      <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-slate-200 dark:border-white/10">
        <Button variant="outline" onClick={handleFechar} disabled={loading}>
          Cancelar
        </Button>
        <Button onClick={salvar} loading={loading}>
          Cadastrar produto
        </Button>
      </div>
    </Modal>
  );
}
