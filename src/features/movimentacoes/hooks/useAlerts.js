import { useState, useEffect } from 'react';
import { MOCK_ALERTS } from '../data/mockAlerts';

// TODO(api): GET /api/estoque/alertas?tipo=movimentacao
export function useAlerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => setAlerts(MOCK_ALERTS), 200);
    return () => clearTimeout(timeout);
  }, []);

  return { alerts };
}
