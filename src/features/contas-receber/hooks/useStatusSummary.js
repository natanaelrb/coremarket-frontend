import { useMemo } from 'react';
import { computeStatusSummary } from '../utils';

export const useStatusSummary = (baseFiltered) => useMemo(() => computeStatusSummary(baseFiltered), [baseFiltered]);
