import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import ProdutoForm from "./ProdutoForm";
import { atualizarProduto } from "../../services/produtoService";

export default function EditarProdutoModal({
  produto,
  fechar,
  atualizarProdutos,
  setToast,
}) {
  const [dados, setDados] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (produto)
      setDados({
        ...produto,
        preco: String(produto.preco),
        quantidadeEstoque: String(produto.quantidadeEstoque),
      });
  }, [produto]);

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
      await atualizarProduto(produto.id, {
        ...dados,
        preco: Number(dados.preco),
        quantidadeEstoque: Number(dados.quantidadeEstoque),
      });
      await atualizarProdutos();
      setToast({
        mensagem: "Produto atualizado com sucesso!",
        tipo: "sucesso",
      });
      fechar();
    } catch {
      setToast({ mensagem: "Erro ao atualizar produto.", tipo: "erro" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      aberto={!!produto}
      fechar={fechar}
      titulo="Editar produto"
      subtitulo={produto?.nome}
    >
      <ProdutoForm dados={dados} onChange={setDados} errors={errors} />
      <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-slate-200 dark:border-white/10">
        <Button variant="outline" onClick={fechar} disabled={loading}>
          Cancelar
        </Button>
        <Button onClick={salvar} loading={loading}>
          Salvar alterações
        </Button>
      </div>
    </Modal>
  );
}
