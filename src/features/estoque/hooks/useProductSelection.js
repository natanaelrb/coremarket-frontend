import { useState } from 'react'

/**
 * Owns the checkbox-selection state for the products table (individual rows
 * + "select all"). Kept separate from pagination/filtering so selection
 * logic can be reasoned about (and tested) in isolation.
 */
export function useProductSelection(visibleItems) {
  const [selectedIds, setSelectedIds] = useState(() => new Set())

  const isSelected = (id) => selectedIds.has(id)

  const toggleOne = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const visibleIds = visibleItems.map((item) => item.id)
  const allVisibleSelected = visibleIds.length > 0 && visibleIds.every((id) => selectedIds.has(id))

  const toggleAllVisible = () => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      if (allVisibleSelected) {
        visibleIds.forEach((id) => next.delete(id))
      } else {
        visibleIds.forEach((id) => next.add(id))
      }
      return next
    })
  }

  const clearSelection = () => setSelectedIds(new Set())

  return {
    selectedIds,
    isSelected,
    toggleOne,
    toggleAllVisible,
    allVisibleSelected,
    clearSelection,
    selectedCount: selectedIds.size,
  }
}
