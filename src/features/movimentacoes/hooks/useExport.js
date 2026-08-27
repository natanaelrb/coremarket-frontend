import { useState } from 'react';
import { buildExportFileName } from '../utils/exportHelpers';

// TODO(api): GET /api/estoque/movimentacoes/exportar?formato={formato}&filtro={filtro}
export function useExport(filteredCount, totalCount) {
  const [isExporting, setIsExporting] = useState(false);
  const [lastExport, setLastExport] = useState(null);

  function exportAs(formato, escopo = 'filtradas') {
    setIsExporting(true);
    setTimeout(() => {
      setLastExport({ fileName: buildExportFileName(formato), formato, escopo });
      setIsExporting(false);
    }, 900);
  }

  return { isExporting, lastExport, exportAs, filteredCount, totalCount };
}
