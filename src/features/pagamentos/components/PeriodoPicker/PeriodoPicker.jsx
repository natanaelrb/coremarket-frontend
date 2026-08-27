import { DateRangePicker } from "../../../../shared/components/ui/DateRangePicker.jsx";

/**
 * Thin adapter that wires the shared DateRangePicker to the `usePeriodo`
 * hook's shape.
 * @param {{ periodo: ReturnType<typeof import('../../hooks/usePeriodo.js').usePeriodo> }} props
 */
export function PeriodoPicker({ periodo }) {
  return (
    <DateRangePicker
      label={periodo.label}
      value={periodo.preset}
      onChange={periodo.onChangePreset}
      startDate={periodo.range.start}
      endDate={periodo.range.end}
      onCustomChange={periodo.onChangeCustomRange}
    />
  );
}
