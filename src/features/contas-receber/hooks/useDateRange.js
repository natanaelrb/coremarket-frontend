import { useCallback, useMemo, useState } from 'react';
import { DATE_PRESETS, DEFAULT_PRESET } from '../constants';
import { getHoje } from '../utils';
import { formatDateBR } from "../../../shared/utils/formatDate";

const resolve = (id) => DATE_PRESETS.find((p) => p.id === id).resolve(getHoje());

/** Intervalo do seletor de datas (presets + personalizado). */
export function useDateRange() {
  const [presetId, setPresetId] = useState(DEFAULT_PRESET);
  const [range, setRange] = useState(() => resolve(DEFAULT_PRESET));

  const applyPreset = useCallback((id) => { setPresetId(id); setRange(resolve(id)); }, []);
  const applyCustom = useCallback((start, end) => {
    if (!start || !end || start > end) return false;
    setPresetId('CUSTOM');
    setRange({ start, end });
    return true;
  }, []);

  const label = useMemo(
    () => (presetId === 'TUDO' ? 'Todo o período' : `${formatDateBR(range.start)} - ${formatDateBR(range.end)}`),
    [presetId, range],
  );
  return { range, presetId, label, applyPreset, applyCustom };
}
