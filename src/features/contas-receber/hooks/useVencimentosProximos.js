import { useMemo } from 'react';
import { computeVencimentosProximos } from '../utils';

export const useVencimentosProximos = (contas) => useMemo(() => computeVencimentosProximos(contas), [contas]);
