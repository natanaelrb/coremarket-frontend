import { useEffect, useState } from "react";
import { buscarComprasPendentes } from "../services/compraService";
import { registrarPagamento } from "../services/pagamentoService";

import { Wallet, AlertCircle, Clock3 } from "lucide-react";

export default function ContasReceber() {
  const [compras, setCompras] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [compraSelecionada, setCompraSelecionada] = useState(null);
  const [valorPagamento, setValorPagamento] = useState("");

  async function carregarPendencias() {
    try {
      const dados = await buscarComprasPendentes();
      setCompras(dados);
    } catch (erro) {
      console.error("Erro ao carregar pendências:", erro);
    }
  }

  useEffect(() => {
    carregarPendencias();
  }, []);

  async function salvarPagamento() {
    try {
      await registrarPagamento({
        compraId: compraSelecionada.id,
        clienteId: 1,
        empresaId: 1,
        valorPago: Number(valorPagamento),
        observacao: "Pagamento realizado pelo sistema",
      });

      await carregarPendencias();

      alert("Pagamento registrado!");

      setModalAberto(false);
      setValorPagamento("");
    } catch (erro) {
      console.error(erro);

      alert("Erro ao registrar pagamento");
    }
  }

  const totalDevedor = compras.reduce(
    (total, compra) => total + Number(compra.saldoDevedor),
    0,
  );

  const totalPendentes = compras.filter(
    (compra) => compra.statusPagamento === "PENDENTE",
  ).length;

  const totalParciais = compras.filter(
    (compra) => compra.statusPagamento === "PARCIAL",
  ).length;

  const formatarMoeda = (valor) => {
    return Number(valor).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString("pt-BR");
  };

  function abrirModal(compra) {
    setCompraSelecionada(compra);
    setModalAberto(true);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800">Contas a Receber</h1>

      <p className="text-gray-500 mt-1 mb-8">
        Gerencie os clientes com pagamentos pendentes
      </p>

      {/* Cards Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500 text-sm">Total Devedor</h3>

              <p className="text-3xl font-bold text-red-600 mt-2">
                {formatarMoeda(totalDevedor)}
              </p>
            </div>

            <Wallet size={40} className="text-red-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500 text-sm">Pendentes</h3>

              <p className="text-3xl font-bold text-red-600 mt-2">
                {totalPendentes}
              </p>
            </div>

            <AlertCircle size={40} className="text-red-500" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500 text-sm">Parciais</h3>

              <p className="text-3xl font-bold text-yellow-500 mt-2">
                {totalParciais}
              </p>
            </div>

            <Clock3 size={40} className="text-yellow-500" />
          </div>
        </div>
      </div>

      {/* Lista de Devedores */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {compras.map((compra) => (
          <div
            key={compra.id}
            className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {compra.nomeCliente}
                </h3>

                <p className="text-sm text-gray-500">
                  Cliente com débito ativo
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  compra.statusPagamento === "PARCIAL"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {compra.statusPagamento}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Saldo Devedor</p>

                <p className="text-3xl font-bold text-red-600">
                  {formatarMoeda(compra.saldoDevedor)}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Vencimento</p>

                <p className="font-medium text-gray-800">
                  {formatarData(compra.dataVencimento)}
                </p>
              </div>
            </div>

            <button
              onClick={() => abrirModal(compra)}
              className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-medium transition"
            >
              Registrar Pagamento
            </button>
          </div>
        ))}
      </div>

      {modalAberto && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Registrar Pagamento</h2>

            <p className="mb-2">
              Cliente:
              <strong> {compraSelecionada?.nomeCliente}</strong>
            </p>

            <input
              type="number"
              placeholder="Valor pago"
              value={valorPagamento}
              onChange={(e) => setValorPagamento(e.target.value)}
              className="w-full border rounded-xl p-3 mb-4"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setModalAberto(false)}
                className="flex-1 bg-gray-200 py-2 rounded-xl"
              >
                Cancelar
              </button>

              <button
                onClick={salvarPagamento}
                className="flex-1 bg-purple-600 text-white py-2 rounded-xl"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
