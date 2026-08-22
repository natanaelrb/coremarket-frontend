import { formatCurrency } from '../../../../shared/utils/formatters.js';

/**
 * Linha "label - valor" usada no resumo da venda.
 * @param {{ label: string, valor: number, tone?: 'default' | 'negative' | 'positive' }} props
 */
export function ResumoLinha({ label, valor, tone = 'default' }) {
  const toneClass =
    tone === 'negative' ? 'text-cm-danger' : tone === 'positive' ? 'text-cm-success' : 'text-cm-text';
  const prefixo = tone === 'negative' ? '- ' : '';

  return (
    <div className="flex items-center justify-between py-1 text-sm">
      <span className="text-cm-text-muted">{label}</span>
      <span className={`font-medium ${toneClass}`}>
        {prefixo}
        {formatCurrency(Math.abs(valor))}
      </span>
    </div>
  );
}

