export const PRINT_STYLES = `
  *{box-sizing:border-box} body{font-family:Arial,Helvetica,sans-serif;color:#0f172a;margin:28px;font-size:12px}
  h1{font-size:20px;margin:0 0 2px} h2{font-size:13px;margin:22px 0 8px;border-bottom:1px solid #e2e8f0;padding-bottom:4px}
  .muted{color:#64748b} .head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px}
  table{width:100%;border-collapse:collapse;margin-top:6px} th,td{padding:6px 8px;border-bottom:1px solid #e2e8f0;text-align:left;font-size:11px}
  th{background:#f1f5f9;font-size:10px;text-transform:uppercase;letter-spacing:.03em} td.r,th.r{text-align:right}
  .kv{display:grid;grid-template-columns:150px 1fr;gap:4px 12px;font-size:12px} .kv b{color:#475569;font-weight:600}
  .tag{display:inline-block;padding:2px 8px;border-radius:99px;background:#e2e8f0;font-size:10px;font-weight:700}
  .total{font-size:15px;font-weight:700} @media print{body{margin:14mm}}
`;
