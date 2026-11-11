import { useCallback } from 'react';
import { downloadFile } from "../../../shared/utils/download";
import { printHtml } from "../../../shared/utils/printHtml";
import { getVendaDaConta } from '../data';
import { buildContaPrintHtml, buildContasCsv, buildContasJson, buildListaPrintHtml, exportFileName } from '../utils';

/** Exportar (CSV/JSON) e imprimir (lista ou conta). Usa a seleção quando houver. */
export function useExportacao({ sorted, selection, range, hoje, toast }) {
  const alvo = useCallback((somenteSelecionadas) => (somenteSelecionadas ? selection.selectedContas : sorted), [selection.selectedContas, sorted]);

  const exportar = useCallback((formato, somenteSelecionadas = false) => {
    const lista = alvo(somenteSelecionadas);
    if (!lista.length) { toast.warning('Nada para exportar', 'Ajuste os filtros e tente novamente.'); return; }
    if (formato === 'csv') downloadFile(exportFileName(hoje, 'csv'), buildContasCsv(lista), 'text/csv;charset=utf-8');
    else downloadFile(exportFileName(hoje, 'json'), buildContasJson(lista), 'application/json');
    toast.success('Exportação concluída', `${lista.length} conta(s) exportada(s) em ${formato.toUpperCase()}.`);
  }, [alvo, hoje, toast]);

  const imprimirLista = useCallback(() => {
    if (!sorted.length) { toast.warning('Nada para imprimir', 'A lista está vazia.'); return; }
    printHtml(buildListaPrintHtml(sorted, range));
  }, [sorted, range, toast]);

  const imprimirConta = useCallback((conta) => {
    if (!conta) { toast.warning('Selecione uma conta', 'Clique em uma linha para escolher.'); return; }
    printHtml(buildContaPrintHtml(conta, getVendaDaConta(conta)));
  }, [toast]);

  return { exportar, imprimirLista, imprimirConta };
}
