import { useEffect, useState } from 'react'
import { fornecedoresMock, fornecedoresStatsMock } from '../mocks/fornecedoresMock.js'

// TODO: substituir pelo client HTTP real (axios) apontando para:
// GET /api/fornecedores
// GET /api/fornecedores/stats
export function useFornecedores() {
  const [fornecedores, setFornecedores] = useState([])
  const [stats, setStats] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    setIsLoading(true)

    const timer = setTimeout(() => {
      if (!isMounted) return
      try {
        setFornecedores(fornecedoresMock)
        setStats(fornecedoresStatsMock)
        setIsLoading(false)
      } catch (err) {
        setError(err)
        setIsLoading(false)
      }
    }, 400)

    return () => {
      isMounted = false
      clearTimeout(timer)
    }
  }, [])

  return { fornecedores, stats, isLoading, error }
}
