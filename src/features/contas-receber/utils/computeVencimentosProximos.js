import { PROXIMOS_BUCKETS } from '../constants/vencimentoBuckets';
import { computeBucketRows, sumRows } from './computeBucketRows';

/** TODO(api): GET /api/contas-receber/vencimentos-proximos */
export function computeVencimentosProximos(contas) {
  const rows = computeBucketRows(contas, PROXIMOS_BUCKETS);
  return { rows, total: sumRows(rows) };
}
