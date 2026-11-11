import { BucketKind } from '../constants/vencimentoBuckets';
import { Exposure } from '../constants/statusConta';

/** A conta (enriquecida) pertence à faixa de vencimento/atraso? */
export function matchBucket(conta, bucket) {
  switch (bucket.kind) {
    case BucketKind.AHEAD:
      return conta.aberto && conta.diasAtraso === 0 && conta.diasParaVencer >= bucket.min && conta.diasParaVencer <= bucket.max;
    case BucketKind.LATE:
      return conta.exposure === Exposure.VENCIDO && conta.diasAtraso >= bucket.min && conta.diasAtraso <= bucket.max;
    case BucketKind.CURRENT:
      return conta.aberto && conta.diasAtraso === 0;
    default:
      return false;
  }
}
