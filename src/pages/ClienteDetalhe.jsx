import { DetalheHeader } from '../features/clienteDetalhe/components/DetalheHeader/index.js'
import { TabsNav } from '../features/clienteDetalhe/components/tabs/TabsNav.jsx'
import { VisaoGeralTab } from '../features/clienteDetalhe/components/tabs/VisaoGeralTab/index.js'
import { ComprasTab } from '../features/clienteDetalhe/components/tabs/ComprasTab/index.js'
import { ContasReceberTab } from '../features/clienteDetalhe/components/tabs/ContasReceberTab/index.js'
import { PagamentosTab } from '../features/clienteDetalhe/components/tabs/PagamentosTab/index.js'
import { HistoricoTab } from '../features/clienteDetalhe/components/tabs/HistoricoTab/index.js'
import { ObservacoesTab } from '../features/clienteDetalhe/components/tabs/ObservacoesTab/index.js'

import { NovoClienteModal } from '../features/clientes/components/modals/NovoClienteModal/index.js'
import { RegistrarPagamentoModal } from '../features/clientes/components/modals/RegistrarPagamentoModal/index.js'

import { useClienteDetalhe } from '../features/clienteDetalhe/hooks/useClienteDetalhe.js'
import { useClienteTabs } from '../features/clienteDetalhe/hooks/useClienteTabs.js'
import { useContasReceber } from '../features/clienteDetalhe/hooks/useContasReceber.js'
import { useHistoricoPagamentos } from '../features/clienteDetalhe/hooks/useHistoricoPagamentos.js'
import { useHistoricoTimeline } from '../features/clienteDetalhe/hooks/useHistoricoTimeline.js'
import { useComprasCliente } from '../features/clienteDetalhe/hooks/useComprasCliente.js'
import { useClienteDetalheModals } from '../features/clienteDetalhe/hooks/useClienteDetalheModals.js'

/**
 * Cliente detail page (with tabs). Pure composition: every piece of state
 * lives in a hook; this component only wires the pieces together.
 */
export default function ClienteDetalhe({ clienteInicial, onVoltar }) {
  const { cliente, aplicarPagamento, aplicarEdicao } = useClienteDetalhe(clienteInicial)
  const { activeTab, setActiveTab, tabs } = useClienteTabs()
  const { contas, contasEmAberto } = useContasReceber(cliente.id)
  const pagamentos = useHistoricoPagamentos(cliente.id)
  const eventos = useHistoricoTimeline(cliente.id)
  const { compras, ultimasCompras } = useComprasCliente(cliente.id)
  const modals = useClienteDetalheModals()

  return (
    <div className="space-y-5 max-w-[1100px] mx-auto">
      <DetalheHeader
        cliente={cliente}
        onVoltar={onVoltar}
        onEditar={modals.abrirEditar}
        onNovaVenda={() => console.info('Ir para PDV com cliente pré-selecionado', cliente.id)}
      />

      <TabsNav tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'visao-geral' && (
        <VisaoGeralTab cliente={cliente} ultimasCompras={ultimasCompras} onVerTodasCompras={() => setActiveTab('compras')} />
      )}
      {activeTab === 'compras' && <ComprasTab compras={compras} />}
      {activeTab === 'contas-receber' && (
        <ContasReceberTab contas={contas} onRegistrarPagamento={() => modals.abrirPagamento()} />
      )}
      {activeTab === 'pagamentos' && <PagamentosTab pagamentos={pagamentos} />}
      {activeTab === 'historico' && <HistoricoTab eventos={eventos} />}
      {activeTab === 'observacoes' && (
        <ObservacoesTab cliente={cliente} onSalvar={(texto) => aplicarEdicao({ observacoes: texto })} />
      )}

      <NovoClienteModal
        open={modals.modal === 'editar'}
        onClose={modals.fechar}
        clienteParaEditar={cliente}
        onSaved={(form) => aplicarEdicao({ nome: form.nomeCompleto, observacoes: form.observacoes })}
      />

      <RegistrarPagamentoModal
        open={modals.modal === 'pagamento'}
        onClose={modals.fechar}
        cliente={cliente}
        contasEmAberto={contasEmAberto}
        onConfirmado={(payload) => aplicarPagamento(Number(payload.valor))}
      />
    </div>
  )
}
