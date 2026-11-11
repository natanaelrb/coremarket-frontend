import { AGING_BUCKETS, BucketKind } from '../constants/vencimentoBuckets';
import { computeBucketRows, sumRows } from './computeBucketRows';

/** TODO(api): GET /api/contas-receber/aging */
export function computeAging(contas) {
  const rows = computeBucketRows(contas, AGING_BUCKETS);
  const late = rows.filter((_, i) => AGING_BUCKETS[i].kind === BucketKind.LATE);
  return { rows, total: sumRows(late) };
}
