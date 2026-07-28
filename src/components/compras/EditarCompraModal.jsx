import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import CompraForm from "./CompraForm";
import clienteService from "../../services/clienteService";
import { atualizarCompra } from "../../services/compraService";

export default function EditarCompraModal({
  compra,
  fechar,
  atualizarCompras,
  setToast,
}) {
  const [dados, setDados] = useState({});
  const [clientes, setClientes] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (compra) {
      setDados({
        clienteId: String(compra.cliente?.id || compra.clienteId || ""),
        valorTotal: String(compra.valorTotal || ""),
        valorPago: String(compra.valorPago || "0"),
        formaPagamento: compra.formaPagamento || "",
        statusPagamento: compra.statusPagamento || "PENDENTE",
        status: compra.status || "PENDENTE",
        dataVencimento: compra.dataVencimento || "",
      });
    }
  }, [compra]);

  useEffect(() => {
    async function carregarClientes() {
      try {
        const res = await clienteService.listar();
        setClientes(res.data);
      } catch {
        /* silencioso */
      }
    }
    if (compra) carregarClientes();
  }, [compra]);

  function validar() {
    const erros = {};
    if (!dados.clienteId) erros.clienteId = "Selecione um cliente";
    if (!dados.valorTotal || Number(dados.valorTotal) <= 0)
      erros.valorTotal = "Valor inválido";
    if (!dados.formaPagamento)
      erros.formaPagamento = "Selecione a forma de pagamento";
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
      await atualizarCompra(compra.id, {
        clienteId: Number(dados.clienteId),
        valorTotal: Number(dados.valorTotal),
        valorPago: Number(dados.valorPago || 0),
        formaPagamento: dados.formaPagamento,
        statusPagamento: dados.statusPagamento,
        status: dados.status,
        dataVencimento: dados.dataVencimento || null,
      });
      await atualizarCompras();
      setToast({ mensagem: "Compra atualizada com sucesso!", tipo: "sucesso" });
      fechar();
    } catch {
      setToast({ mensagem: "Erro ao atualizar compra.", tipo: "erro" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      aberto={!!compra}
      fechar={fechar}
      titulo="Editar compra"
      subtitulo={`Compra #${compra?.id}`}
    >
      <CompraForm
        dados={dados}
        onChange={setDados}
        clientes={clientes}
        errors={errors}
      />
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
