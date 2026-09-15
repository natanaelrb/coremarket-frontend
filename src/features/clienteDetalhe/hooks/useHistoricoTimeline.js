import { useMemo } from 'react'
import { MOCK_TIMELINE } from '../data/mockTimeline.js'

/** Returns the client's activity timeline, newest first. */
export function useHistoricoTimeline(clienteId) {
  return useMemo(() => MOCK_TIMELINE[clienteId] ?? [], [clienteId])
}
