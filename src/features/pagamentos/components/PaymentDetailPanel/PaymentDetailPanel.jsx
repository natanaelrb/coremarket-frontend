import { X, Printer, Download, RotateCcw } from 'lucide-react';
import { Badge } from '../../../../shared/components/ui/Badge.jsx';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import IconButton from '../../../../shared/components/actions/IconButton.jsx';
import { DetailSection, DetailRow } from './DetailSection.jsx';
import { HistoricoTimeline } from './HistoricoTimeline.jsx';
import { AdquirenteBadge } from './AdquirenteBadge.jsx';
import { formatCurrency, formatPercent } from '../../utils/formatCurrency.js';
import { formatDate, formatDateTime } from '../../utils/formatDate.js';
import { STATUS_PAGAMENTO_META, TIPO_PAGAMENTO_META, FORMA_PAGAMENTO_META } from '../../constants/index.js';
import { cn } from '../../../../shared/utils/cn.js';

/**
 * Right-side "Detalhes do pagamento" panel. Slides in from the right and
 * shows the full breakdown (valor bruto/líquido, origem, datas, dados da
 * transação, histórico) plus print/download/estornar actions.
 * @param {{
 *  isOpen: boolean, detail: object|null, isLoading: boolean,
 *  onClose: () => void, onBaixarComprovante: (id:string) => void, onEstornar: (id:string) => void,
 * }} props
 */
export function PaymentDetailPanel({ isOpen, detail, isLoading, onClose, onBaixarComprovante, onEstornar }) {
  if (!isOpen) return null;

  const pagamento = detail?.pagamento;
  const statusMeta = pagamento ? STATUS_PAGAMENTO_META[pagamento.status] : null;
  const tipoMeta = pagamento ? TIPO_PAGAMENTO_META[pagamento.tipo] : null;
  const formaLabel = pagamento ? FORMA_PAGAMENTO_META[pagamento.forma]?.label : '';

  return (
    <>
      <div className="fixed inset-0 z-30 bg-slate-900/20 backdrop-blur-[1px] animate-fade-in lg:hidden" onClick={onClose} />
      <aside className="fixed right-0 top-0 z-40 h-screen w-full max-w-sm animate-slide-in-right border-l border-slate-200 bg-white shadow-[var(--shadow-panel)] dark:border-slate-800 dark:bg-slate-900 lg:sticky lg:z-0 lg:shadow-none">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">Detalhes do pagamento</h2>
            <IconButton icon={X} label="Fechar" onClick={onClose} />
          </div>

          <div className="flex-1 overflow-y-auto px-5">
            {isLoading || !detail ? (
              <div className="space-y-3 py-5">
                <div className="skeleton h-6 w-40" />
                <div className="skeleton h-4 w-full" />
                <div className="skeleton h-4 w-full" />
                <div className="skeleton h-4 w-2/3" />
              </div>
            ) : (
              <>
                <div className="flex flex-wrap items-center gap-2 py-4">
                  <Badge tone="neutral">{tipoMeta.label} #{pagamento.codigo}</Badge>
                  <Badge tone={statusMeta.tone}>{statusMeta.label}</Badge>
                </div>

                <DetailSection title="Informações gerais">
                  <DetailRow label="Valor bruto">{formatCurrency(detail.valorBruto)}</DetailRow>
                  <DetailRow label="Taxa">
                    {formatCurrency(detail.taxaValor)} ({formatPercent(detail.taxaPercentual)})
                  </DetailRow>
                  <DetailRow label="Valor líquido" valueClassName="text-green-600 dark:text-green-400">
                    {formatCurrency(detail.valorLiquido)}
                  </DetailRow>
                  <DetailRow label="Forma de pagamento">{formaLabel}</DetailRow>
                  {detail.bandeira ? (
                    <DetailRow label="Bandeira">
                      <AdquirenteBadge bandeira={detail.bandeira} />
                    </DetailRow>
                  ) : null}
                  {pagamento.parcelas > 1 ? (
                    <DetailRow label="Parcelas">
                      {pagamento.parcelas}x de {formatCurrency(pagamento.valor / pagamento.parcelas)}
                    </DetailRow>
                  ) : null}
                </DetailSection>

                <DetailSection title="Origem">
                  <DetailRow label="Origem">{pagamento.origem}</DetailRow>
                  <DetailRow label="Referência">{pagamento.origemReferencia}</DetailRow>
                  <DetailRow label="Cliente">{pagamento.pessoa}</DetailRow>
                </DetailSection>

                <DetailSection title="Datas">
                  <DetailRow label="Data de criação">{formatDateTime(pagamento.dataCriacao)}</DetailRow>
                  <DetailRow label="Data do pagamento">{formatDateTime(pagamento.dataPagamento)}</DetailRow>
                  <DetailRow label="Previsão de liquidação">{formatDate(detail.previsaoLiquidacao)}</DetailRow>
                  <DetailRow label="Data de liquidação">{formatDateTime(detail.dataLiquidacao)}</DetailRow>
                </DetailSection>

                {detail.adquirente ? (
                  <DetailSection title="Dados da transação">
                    <DetailRow label="Adquirente">{detail.adquirente}</DetailRow>
                    <DetailRow label="NSU">{detail.nsu}</DetailRow>
                    <DetailRow label="Autorização">{detail.autorizacao}</DetailRow>
                    <DetailRow label="Terminal">{detail.terminal}</DetailRow>
                    <DetailRow label="Status na adquirente">
                      <Badge tone={detail.statusAdquirente === 'Aprovado' ? 'success' : 'warning'}>
                        {detail.statusAdquirente}
                      </Badge>
                    </DetailRow>
                  </DetailSection>
                ) : null}

                <DetailSection title="Histórico">
                  <HistoricoTimeline eventos={detail.historico} />
                </DetailSection>
              </>
            )}
          </div>

          {!isLoading && detail ? (
            <div className="space-y-2 border-t border-slate-100 px-5 py-4 dark:border-slate-800">
              <Button variant="outline" className="w-full" icon={Printer}>
                Imprimir comprovante
              </Button>
              <Button variant="outline" className="w-full" icon={Download} onClick={() => onBaixarComprovante(pagamento.id)}>
                Baixar PDF
              </Button>
              <Button variant="danger" className="w-full" icon={RotateCcw} onClick={() => onEstornar(pagamento.id)}>
                Estornar pagamento
              </Button>
            </div>
          ) : null}
        </div>
      </aside>
    </>
  );
}
