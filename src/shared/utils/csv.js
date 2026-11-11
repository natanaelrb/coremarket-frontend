const escapeCell = (v) => {
  const s = v == null ? '' : String(v);
  return /[";\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

/** Gera CSV com separador ";" e BOM (abre direto no Excel pt-BR). */
export function toCSV(rows, columns) {
  const head = columns.map((c) => escapeCell(c.label)).join(';');
  const body = rows.map((r) => columns.map((c) => escapeCell(c.accessor(r))).join(';'));
  return `\uFEFF${[head, ...body].join('\r\n')}`;
}
