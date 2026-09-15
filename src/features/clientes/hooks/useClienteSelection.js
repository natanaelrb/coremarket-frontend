import { useState } from 'react'

/** Tracks checkbox selection across the clients table (for bulk actions). */
export function useClienteSelection() {
  const [selectedIds, setSelectedIds] = useState([])

  function toggle(id) {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  function toggleAll(ids) {
    setSelectedIds((prev) => (prev.length === ids.length ? [] : ids))
  }

  function clear() {
    setSelectedIds([])
  }

  return { selectedIds, toggle, toggleAll, clear }
}
