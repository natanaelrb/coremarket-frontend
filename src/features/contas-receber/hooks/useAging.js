import { useMemo } from 'react';
import { computeAging } from '../utils';

export const useAging = (contas) => useMemo(() => computeAging(contas), [contas]);
