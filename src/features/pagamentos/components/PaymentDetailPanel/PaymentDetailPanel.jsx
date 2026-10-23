import { X, Printer, Download, RotateCcw, CreditCard, Wallet, CalendarDays, UserRound, ReceiptText,} from 'lucide-react';

import { Badge } from '../../../../shared/components/ui/Badge.jsx';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import IconButton from '../../../../shared/components/actions/IconButton.jsx';
import { DetailSection, DetailRow } from './DetailSection.jsx';
import { HistoricoTimeline } from './HistoricoTimeline.jsx';
import { AdquirenteBadge } from './AdquirenteBadge.jsx';
import { formatCurrency, formatPercent } from '../../utils/formatCurrency.js';
import { formatDate, formatDateTime } from '../../utils/formatDate.js';
import {
  STATUS_PAGAMENTO_META,
  TIPO_PAGAMENTO_META,
  FORMA_PAGAMENTO_META,
} from '../../constants/index.js';

export function PaymentDetailPanel({
  isOpen,
  detail,
  isLoading,
  onClose,
  onBaixarComprovante,
  onEstornar,
}) {
  if (!isOpen) return null;

  const pagamento = detail?.pagamento;
  const statusMeta = pagamento
    ? STATUS_PAGAMENTO_META[pagamento.status]
    : null;
  const tipoMeta = pagamento
    ? TIPO_PAGAMENTO_META[pagamento.tipo]
    : null;
  const formaLabel = pagamento
    ? FORMA_PAGAMENTO_META[pagamento.forma]?.label || pagamento.forma || '—'
    : '—';

  const handlePrint = () => {
    window.print();
  };

  const valorBruto = detail?.valorBruto ?? pagamento?.valor ?? 0;
  const taxaValor = detail?.taxaValor ?? 0;
  const valorLiquido = detail?.valorLiquido ?? valorBruto - taxaValor;

  return (
    <>
      <button
        type="button"
        aria-label="Fechar detalhes do pagamento"
        className="fixed inset-0 z-30 cursor-default bg-slate-950/30 backdrop-blur-[2px] animate-fade-in lg:hidden"
        onClick={onClose}
      />

      <aside
        aria-label="Detalhes do pagamento"
        aria-modal="true"
        role="dialog"
        className="fixed inset-y-0 right-0 z-40 flex h-dvh w-full max-w-lg flex-col border-l border-slate-200/80 bg-white shadow-2xl animate-slide-in-right dark:border-white/10 dark:bg-slate-950 lg:sticky lg:top-0 lg:z-0 lg:h-screen lg:max-w-md lg:shadow-none"
      >
        {/* Cabeçalho */}
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-200/80 px-5 py-4 dark:border-white/10 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <ReceiptText size={20} />
            </div>

            <div className="min-w-0">
              <h2 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                Detalhes do pagamento
              </h2>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Informações e movimentações financeiras
              </p>
            </div>
          </div>

          <IconButton icon={X} label="Fechar" onClick={onClose} />
        </header>

        {/* Conteúdo */}
        <div className="min-h-0 flex-1 overflow-y-auto px-5 sm:px-6">
          {isLoading || !detail ? (
            <div className="space-y-5 py-6" aria-label="Carregando detalhes">
              <div className="skeleton h-24 w-full rounded-2xl" />
              <div className="grid grid-cols-2 gap-3">
                <div className="skeleton h-24 rounded-xl" />
                <div className="skeleton h-24 rounded-xl" />
              </div>
              <div className="skeleton h-40 w-full rounded-xl" />
              <div className="skeleton h-32 w-full rounded-xl" />
            </div>
          ) : (
            <>
              {/* Identificação */}
              <section className="border-b border-slate-200/70 py-5 dark:border-white/[0.08]">
                <div className="flex flex-wrap items-center gap-2">
                  {tipoMeta?.label && (
                    <Badge tone="neutral">{tipoMeta.label}</Badge>
                  )}
                  {pagamento.codigo && (
                    <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs font-semibold text-slate-600 dark:bg-white/[0.06] dark:text-slate-300">
                      #{pagamento.codigo}
                    </span>
                  )}
                  {statusMeta && (
                    <Badge tone={statusMeta.tone}>{statusMeta.label}</Badge>
                  )}
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Valor líquido
                </p>

                <p className="mt-1 text-3xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
                  {formatCurrency(valorLiquido)}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
                  {pagamento.dataCriacao && (
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      Criado em {formatDate(pagamento.dataCriacao)}
                    </span>
                  )}
                  {pagamento.pessoa && (
                    <span className="inline-flex items-center gap-1.5">
                      <UserRound size={14} />
                      {pagamento.pessoa}
                    </span>
                  )}
                </div>
              </section>

              {/* Resumo financeiro */}
              <section className="grid grid-cols-2 gap-3 border-b border-slate-200/70 py-5 dark:border-white/[0.08]">
                <ResumoFinanceiro
                  label="Valor bruto"
                  valor={formatCurrency(valorBruto)}
                  icon={Wallet}
                  destaque="neutro"
                />

                <ResumoFinanceiro
                  label="Taxas"
                  valor={formatCurrency(taxaValor)}
                  complemento={
                    detail.taxaPercentual != null
                      ? formatPercent(detail.taxaPercentual)
                      : null
                  }
                  icon={CreditCard}
                  destaque="taxa"
                />
              </section>

              {/* Informações gerais */}
              <DetailSection title="Informações gerais">
                <DetailRow label="Forma de pagamento">
                  {formaLabel}
                </DetailRow>

                {detail.bandeira && (
                  <DetailRow label="Bandeira">
                    <AdquirenteBadge bandeira={detail.bandeira} />
                  </DetailRow>
                )}

                {pagamento.parcelas > 1 && (
                  <DetailRow label="Parcelamento">
                    {pagamento.parcelas}x de{' '}
                    {formatCurrency(pagamento.valor / pagamento.parcelas)}
                  </DetailRow>
                )}
              </DetailSection>

              {/* Origem */}
              <DetailSection title="Origem">
                <DetailRow label="Origem">
                  {pagamento.origem || '—'}
                </DetailRow>
                <DetailRow label="Referência">
                  {pagamento.origemReferencia || '—'}
                </DetailRow>
                <DetailRow label="Cliente">
                  {pagamento.pessoa || '—'}
                </DetailRow>
              </DetailSection>

              {/* Datas */}
              <DetailSection title="Datas">
                <DetailRow label="Data de criação">
                  {pagamento.dataCriacao
                    ? formatDateTime(pagamento.dataCriacao)
                    : '—'}
                </DetailRow>
                <DetailRow label="Data do pagamento">
                  {pagamento.dataPagamento
                    ? formatDateTime(pagamento.dataPagamento)
                    : '—'}
                </DetailRow>
                <DetailRow label="Previsão de liquidação">
                  {detail.previsaoLiquidacao
                    ? formatDate(detail.previsaoLiquidacao)
                    : '—'}
                </DetailRow>
                <DetailRow label="Data de liquidação">
                  {detail.dataLiquidacao
                    ? formatDateTime(detail.dataLiquidacao)
                    : '—'}
                </DetailRow>
              </DetailSection>

              {/* Dados da transação */}
              {detail.adquirente && (
                <DetailSection title="Dados da transação">
                  <DetailRow label="Adquirente">
                    {detail.adquirente}
                  </DetailRow>
                  <DetailRow label="NSU">
                    {detail.nsu || '—'}
                  </DetailRow>
                  <DetailRow label="Autorização">
                    {detail.autorizacao || '—'}
                  </DetailRow>
                  <DetailRow label="Terminal">
                    {detail.terminal || '—'}
                  </DetailRow>
                  <DetailRow label="Status na adquirente">
                    <Badge
                      tone={
                        detail.statusAdquirente === 'Aprovado'
                          ? 'success'
                          : 'warning'
                      }
                    >
                      {detail.statusAdquirente || 'Pendente'}
                    </Badge>
                  </DetailRow>
                </DetailSection>
              )}

              {/* Histórico */}
              <DetailSection title="Histórico">
                <HistoricoTimeline eventos={detail.historico || []} />
              </DetailSection>
            </>
          )}
        </div>

        {/* Ações fixas no rodapé */}
        {!isLoading && detail && pagamento && (
          <footer className="shrink-0 space-y-2 border-t border-slate-200/80 bg-white/95 px-5 py-4 backdrop-blur dark:border-white/10 dark:bg-slate-950/95 sm:px-6">
            <Button
              variant="outline"
              className="w-full"
              icon={Printer}
              onClick={handlePrint}
            >
              Imprimir comprovante
            </Button>

            <Button
              variant="outline"
              className="w-full"
              icon={Download}
              onClick={() => onBaixarComprovante(pagamento.id)}
            >
              Baixar comprovante
            </Button>

            <Button
              variant="danger"
              className="w-full"
              icon={RotateCcw}
              onClick={() => onEstornar(pagamento.id)}
            >
              Estornar pagamento
            </Button>
          </footer>
        )}
      </aside>
    </>
  );
}

function ResumoFinanceiro({ label, valor, complemento, icon: Icon, destaque }) {
  const estilos = {
    neutro: {
      card: 'border-slate-200/80 bg-slate-50/80 dark:border-white/10 dark:bg-white/[0.03]',
      icon: 'bg-white text-slate-500 dark:bg-white/[0.06] dark:text-slate-300',
      valor: 'text-slate-900 dark:text-white',
    },
    taxa: {
      card: 'border-amber-200/70 bg-amber-50/60 dark:border-amber-500/15 dark:bg-amber-500/[0.04]',
      icon: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
      valor: 'text-amber-700 dark:text-amber-400',
    },
  };

  const estilo = estilos[destaque] || estilos.neutro;

  return (
    <div className={`min-w-0 rounded-2xl border p-3.5 ${estilo.card}`}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${estilo.icon}`}>
          <Icon size={16} />
        </span>
      </div>

      <p className={`mt-3 break-words text-lg font-bold tracking-tight ${estilo.valor}`}>
        {valor}
      </p>

      {complemento && (
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {complemento}
        </p>
      )}
    </div>
  );
}
