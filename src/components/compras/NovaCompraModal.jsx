import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import CompraForm from "./CompraForm";
import clienteService from "../../services/clienteService";
import { salvarCompra } from "../../services/compraService";

const VAZIO = {
  clienteId: "",
  valorTotal: "",
  valorPago: "0",
  formaPagamento: "",
  statusPagamento: "PENDENTE",
  status: "PENDENTE",
  dataVencimento: "",
};

export default function NovaCompraModal({
  aberto,
  fechar,
  atualizarCompras,
  setToast,
}) {
  const [dados, setDados] = useState(VAZIO);
  const [clientes, setClientes] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function carregarClientes() {
      try {
        const res = await clienteService.listar();
        setClientes(res.data);
      } catch {
        /* silencioso */
      }
    }
    if (aberto) carregarClientes();
  }, [aberto]);

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
      await salvarCompra({
        clienteId: Number(dados.clienteId),
        valorTotal: Number(dados.valorTotal),
        valorPago: Number(dados.valorPago || 0),
        formaPagamento: dados.formaPagamento,
        statusPagamento: dados.statusPagamento,
        status: dados.status,
        dataVencimento: dados.dataVencimento || null,
      });
      await atualizarCompras();
      setToast({ mensagem: "Compra registrada com sucesso!", tipo: "sucesso" });
      setDados(VAZIO);
      setErrors({});
      fechar();
    } catch {
      setToast({ mensagem: "Erro ao registrar compra.", tipo: "erro" });
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
      titulo="Nova compra"
      subtitulo="Registre uma compra para um cliente"
    >
      <CompraForm
        dados={dados}
        onChange={setDados}
        clientes={clientes}
        errors={errors}
      />
      <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-slate-200 dark:border-white/10">
        <Button variant="outline" onClick={handleFechar} disabled={loading}>
          Cancelar
        </Button>
        <Button onClick={salvar} loading={loading}>
          Registrar compra
        </Button>
      </div>
    </Modal>
  );
}
