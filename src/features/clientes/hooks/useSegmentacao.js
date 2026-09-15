import { useState } from 'react'
import { SEGMENTO_CLIENTE } from "../../../shared/constants/enums.js";
import { MOCK_SEGMENTACAO_CONTAGEM, MOCK_TOP_CLIENTES } from '../data/mockSegmentacao.js'

/** Owns the segmentation modal's selected segment + its top-5 ranking. */
export function useSegmentacao() {
  const [segmentoAtivo, setSegmentoAtivo] = useState(SEGMENTO_CLIENTE.TODOS)

  return {
    segmentoAtivo,
    setSegmentoAtivo,
    contagens: MOCK_SEGMENTACAO_CONTAGEM,
    topClientes: MOCK_TOP_CLIENTES,
  }
}
