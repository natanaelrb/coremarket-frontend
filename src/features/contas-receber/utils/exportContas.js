import { toCSV } from "../../../shared/utils/csv";
import { EXPORT_COLUMNS } from "../constants/exportColumns";

export const buildContasCsv = (contas) => toCSV(contas, EXPORT_COLUMNS);

export const buildContasJson = (contas) =>
  JSON.stringify(
    contas.map(({ busca, statusOrder, ...c }) => c),
    null,
    2,
  );

export const exportFileName = (hoje, ext) => `contas-a-receber_${hoje}.${ext}`;
