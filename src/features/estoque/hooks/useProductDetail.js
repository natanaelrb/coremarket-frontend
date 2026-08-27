import { useState } from 'react'

/**
 * Owns which product is currently shown in the right-hand detail panel.
 * Defaults to the first product so the panel is never empty on load,
 * matching the reference design.
 */
export function useProductDetail(produtos) {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const openProductDetail = (produto) => setSelectedProduct(produto)
  const closeProductDetail = () => setSelectedProduct(null)

  const activeProduct = selectedProduct ?? produtos[0] ?? null

  return { activeProduct, openProductDetail, closeProductDetail, isPanelOpen: Boolean(selectedProduct) }
}
