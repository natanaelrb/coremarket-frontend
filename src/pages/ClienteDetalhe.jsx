import { useNavigate, useParams } from "react-router-dom";

import { DetalheHeader } from "../features/clienteDetalhe/components/DetalheHeader/index.js";
import { TabsNav } from "../features/clienteDetalhe/components/tabs/TabsNav.jsx";
import { VisaoGeralTab } from "../features/clienteDetalhe/components/tabs/VisaoGeralTab/index.js";
import { ComprasTab } from "../features/clienteDetalhe/components/tabs/ComprasTab/index.js";
import { ContasReceberTab } from "../features/clienteDetalhe/components/tabs/ContasReceberTab/index.js";
import { PagamentosTab } from "../features/clienteDetalhe/components/tabs/PagamentosTab/index.js";
import { HistoricoTab } from "../features/clienteDetalhe/components/tabs/HistoricoTab/index.js";
import { ObservacoesTab } from "../features/clienteDetalhe/components/tabs/ObservacoesTab/index.js";

import { NovoClienteModal } from "../features/clientes/components/modals/NovoClienteModal/index.js";
import { RegistrarPagamentoModal } from "../features/clientes/components/modals/RegistrarPagamentoModal/index.js";

import { useClientesList } from "../features/clientes/hooks/useClientesList.js";

import { useClienteDetalhe } from "../features/clienteDetalhe/hooks/useClienteDetalhe.js";
import { useClienteTabs } from "../features/clienteDetalhe/hooks/useClienteTabs.js";
import { useContasReceber } from "../features/clienteDetalhe/hooks/useContasReceber.js";
import { useHistoricoPagamentos } from "../features/clienteDetalhe/hooks/useHistoricoPagamentos.js";
import { useHistoricoTimeline } from "../features/clienteDetalhe/hooks/useHistoricoTimeline.js";
import { useComprasCliente } from "../features/clienteDetalhe/hooks/useComprasCliente.js";
import { useClienteDetalheModals } from "../features/clienteDetalhe/hooks/useClienteDetalheModals.js";

export default function ClienteDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { clientes } = useClientesList();

  const clienteInicial = clientes.find(
    (cliente) => String(cliente.id) === String(id)
  );

  const { cliente, aplicarPagamento, aplicarEdicao } =
    useClienteDetalhe(clienteInicial);

  // Todos os hooks precisam ser executados antes de qualquer retorno condicional.
  const { activeTab, setActiveTab, tabs } = useClienteTabs();

  const { contas, contasEmAberto } = useContasReceber(cliente?.id);
  const pagamentos = useHistoricoPagamentos(cliente?.id);
  const eventos = useHistoricoTimeline(cliente?.id);
  const { compras, ultimasCompras } = useComprasCliente(cliente?.id);

  const modals = useClienteDetalheModals();

  if (!cliente) {
    return (
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">
            Cliente não encontrado
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            O cliente informado não existe ou não está disponível.
          </p>

          <button
            onClick={() => navigate("/clientes")}
            className="
              mt-4
              rounded-md
              bg-[#22c55e]
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition-colors
              hover:bg-[#16a34a]
            "
          >
            Voltar para clientes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1400px] space-y-5">
      <DetalheHeader
        cliente={cliente}
        onVoltar={() => navigate("/clientes")}
        onEditar={modals.abrirEditar}
        onNovaVenda={() =>
          console.info(
            "Ir para PDV com cliente pré-selecionado",
            cliente.id
          )
        }
      />

      <TabsNav
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {activeTab === "visao-geral" && (
        <VisaoGeralTab
          cliente={cliente}
          ultimasCompras={ultimasCompras}
          onVerTodasCompras={() => setActiveTab("compras")}
        />
      )}

      {activeTab === "compras" && (
        <ComprasTab compras={compras} />
      )}

      {activeTab === "contas-receber" && (
        <ContasReceberTab
          contas={contas}
          onRegistrarPagamento={(conta) =>
            modals.abrirPagamento(conta)
          }
        />
      )}

      {activeTab === "pagamentos" && (
        <PagamentosTab pagamentos={pagamentos} />
      )}

      {activeTab === "historico" && (
        <HistoricoTab eventos={eventos} />
      )}

      {activeTab === "observacoes" && (
        <ObservacoesTab
          cliente={cliente}
          onSalvar={(texto) =>
            aplicarEdicao({ observacoes: texto })
          }
        />
      )}

      <NovoClienteModal
        open={modals.modal === "editar"}
        onClose={modals.fechar}
        clienteParaEditar={cliente}
        onSaved={(form) =>
          aplicarEdicao({
            nome: form.nomeCompleto,
            observacoes: form.observacoes,
          })
        }
      />

      <RegistrarPagamentoModal
        open={modals.modal === "pagamento"}
        onClose={modals.fechar}
        cliente={cliente}
        contasEmAberto={contasEmAberto}
        contaSelecionada={modals.contaSelecionada}
        onConfirmado={(payload) =>
          aplicarPagamento(Number(payload.valor))
        }
      />
    </div>
  );
}