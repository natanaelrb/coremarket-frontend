import { useState } from 'react'

export function useRowSelection() {
  const [selectedIds, setSelectedIds] = useState([])

  const toggleRow = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    )
  }

  const toggleAll = (ids) => {
    setSelectedIds((prev) => (prev.length === ids.length ? [] : ids))
  }

  const clearSelection = () => setSelectedIds([])

  const isSelected = (id) => selectedIds.includes(id)

  return { selectedIds, toggleRow, toggleAll, clearSelection, isSelected }
}
