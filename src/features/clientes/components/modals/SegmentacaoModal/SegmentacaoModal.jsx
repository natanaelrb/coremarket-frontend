import { Modal } from "../../../../../shared/components/ui/Modal.jsx";
import { SegmentoList } from './SegmentoList.jsx'
import { Top5ClientesTable } from './Top5ClientesTable.jsx'
import { useSegmentacao } from '../../../hooks/useSegmentacao.js'

/** "Segmentação de clientes" modal: segment list + top-5 ranking. */
export function SegmentacaoModal({ open, onClose }) {
  const { segmentoAtivo, setSegmentoAtivo, contagens, topClientes } = useSegmentacao()

  return (
    <Modal open={open} onClose={onClose} title="Segmentação de clientes" size="lg">
      <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-6">
        <SegmentoList segmentoAtivo={segmentoAtivo} onSelect={setSegmentoAtivo} contagens={contagens} />
        <Top5ClientesTable clientes={topClientes} />
      </div>
    </Modal>
  )
}
