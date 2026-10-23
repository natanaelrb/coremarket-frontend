import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  CreditCard,
  Download,
  Printer,
  RotateCcw,
  Wallet,
} from 'lucide-react';
import toast from 'react-hot-toast';

import { usePaymentDetail } from '../features/pagamentos/hooks/usePaymentDetail.js';
import { pagamentoService } from '../features/pagamentos/services/pagamentoService.js';

import { Badge } from '../shared/components/ui/Badge.jsx';
import { Button } from '../shared/components/ui/Button.jsx';

import { DetailSection } from '../features/pagamentos/components/PaymentDetailPanel/DetailSection.jsx';
import { DetailRow } from '../features/pagamentos/components/PaymentDetailPanel/DetailSection.jsx';
import { HistoricoTimeline } from '../features/pagamentos/components/PaymentDetailPanel/HistoricoTimeline.jsx';
import { AdquirenteBadge } from '../features/pagamentos/components/PaymentDetailPanel/AdquirenteBadge.jsx';

import {
  STATUS_PAGAMENTO_META,
  TIPO_PAGAMENTO_META,
  FORMA_PAGAMENTO_META,
} from '../features/pagamentos/constants/index.js';

import {
  formatCurrency,
  formatPercent,
} from '../features/pagamentos/utils/formatCurrency.js';

import {
  formatDate,
  formatDateTime,
} from '../features/pagamentos/utils/formatDate.js';

export default function PagamentoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    detail,
    isLoading,
    error,
  } = usePaymentDetail(id);

  const pagamento = detail?.pagamento;
  const statusMeta = pagamento
    ? STATUS_PAGAMENTO_META[pagamento.status]
    : null;

  const tipoMeta = pagamento
    ? TIPO_PAGAMENTO_META[pagamento.tipo]
    : null;

  const formaLabel = pagamento
    ? FORMA_PAGAMENTO_META[pagamento.forma]?.label
    : '';

  async function handleBaixarComprovante() {
    try {
      await pagamentoService.baixarComprovante(pagamento.id);
      toast.success('Comprovante gerado.');
    } catch {
      toast.error('Não foi possível gerar o comprovante.');
    }
  }

  async function handleEstornar() {
    try {
      await pagamentoService.estornar(pagamento.id);
      toast.success('Pagamento estornado.');
      navigate('/pagamentos');
    } catch {
      toast.error('Não foi possível estornar o pagamento.');
    }
  }

  function handleImprimir() {
    window.print();
  }

  if (isLoading) {
    return (
      <div className="mx-auto -mt-4 w-full max-w-[1400px] space-y-5 animate-pulse">
        <div className="h-8 w-56 rounded-lg bg-slate-200 dark:bg-white/10" />
        <div className="h-28 rounded-2xl bg-slate-200 dark:bg-white/10" />
        <div className="h-32 rounded-2xl bg-slate-200 dark:bg-white/10" />
        <div className="h-64 rounded-2xl bg-slate-200 dark:bg-white/10" />
      </div>
    );
  }

  if (error || !detail || !pagamento) {
    return (
      <div className="mx-auto -mt-4 w-full max-w-[1100px]">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-[#151936]">
          <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
            Pagamento não encontrado
          </h1>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {error || 'O pagamento informado não existe ou não está disponível.'}
          </p>

          <Button
            className="mt-5"
            onClick={() => navigate('/pagamentos')}
          >
            Voltar para pagamentos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto -mt-4 w-full max-w-[1400px] space-y-5 pb-8">
      <button
        type="button"
        onClick={() => navigate('/pagamentos')}
        className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-green-50 hover:text-green-700 dark:text-slate-300 dark:hover:bg-green-500/10 dark:hover:text-green-400 print:hidden"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar para pagamentos
      </button>

      <header className="flex flex-wrap items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#151936]">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
            <CreditCard className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-green-700 dark:text-green-400">
              Pagamentos / Detalhes
            </p>

            <h1 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
              Pagamento #{pagamento.codigo}
            </h1>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Consulte os valores, a origem e o histórico desta transação.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {tipoMeta && (
            <Badge tone="neutral">{tipoMeta.label}</Badge>
          )}

          {statusMeta && (
            <Badge tone={statusMeta.tone}>{statusMeta.label}</Badge>
          )}
        </div>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <ResumoFinanceiro
          titulo="Valor bruto"
          valor={formatCurrency(detail.valorBruto)}
          descricao="Valor total da transação"
          icone={Wallet}
          destaque="neutral"
        />

        <ResumoFinanceiro
          titulo="Taxas"
          valor={formatCurrency(detail.taxaValor)}
          descricao={`${formatPercent(detail.taxaPercentual)} sobre o valor bruto`}
          icone={CreditCard}
          destaque="warning"
        />

        <ResumoFinanceiro
          titulo="Valor líquido"
          valor={formatCurrency(detail.valorLiquido)}
          descricao="Valor após as taxas"
          icone={Wallet}
          destaque="success"
        />
      </section>

      <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-2">
        <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#151936] sm:p-6">
          <DetailSection title="Informações gerais">
            <DetailRow label="Código">{pagamento.codigo}</DetailRow>
            <DetailRow label="Tipo">{tipoMeta?.label || pagamento.tipo}</DetailRow>
            <DetailRow label="Forma de pagamento">{formaLabel || pagamento.forma}</DetailRow>
            <DetailRow label="Valor bruto">{formatCurrency(detail.valorBruto)}</DetailRow>
            <DetailRow label="Taxa">{formatCurrency(detail.taxaValor)} ({formatPercent(detail.taxaPercentual)})</DetailRow>
            <DetailRow label="Valor líquido">
              <span className="font-semibold text-green-600 dark:text-green-400">
                {formatCurrency(detail.valorLiquido)}
              </span>
            </DetailRow>

            {pagamento.parcelas > 1 && (
              <DetailRow label="Parcelas">
                {pagamento.parcelas}x de {formatCurrency(pagamento.valor / pagamento.parcelas)}
              </DetailRow>
            )}

            {detail.bandeira && (
              <DetailRow label="Bandeira">
                <AdquirenteBadge bandeira={detail.bandeira} />
              </DetailRow>
            )}
          </DetailSection>
        </section>

        <section className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#151936] sm:p-6">
          <DetailSection title="Origem e responsável">
            <DetailRow label="Origem">{pagamento.origem || '—'}</DetailRow>
            <DetailRow label="Referência">{pagamento.origemReferencia || '—'}</DetailRow>
            <DetailRow label="Cliente / responsável">{pagamento.pessoa || '—'}</DetailRow>
          </DetailSection>
        </section>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#151936] sm:p-6">
        <DetailSection title="Datas e liquidação">
          <DetailRow label="Data de criação">
            {formatDateTime(pagamento.dataCriacao)}
          </DetailRow>
          <DetailRow label="Data do pagamento">
            {formatDateTime(pagamento.dataPagamento)}
          </DetailRow>
          <DetailRow label="Previsão de liquidação">
            {formatDate(detail.previsaoLiquidacao)}
          </DetailRow>
          <DetailRow label="Data de liquidação">
            {formatDateTime(detail.dataLiquidacao)}
          </DetailRow>
        </DetailSection>
      </section>

      {detail.adquirente && (
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#151936] sm:p-6">
          <DetailSection title="Dados da transação">
            <DetailRow label="Adquirente">{detail.adquirente}</DetailRow>
            <DetailRow label="NSU">{detail.nsu || '—'}</DetailRow>
            <DetailRow label="Autorização">{detail.autorizacao || '—'}</DetailRow>
            <DetailRow label="Terminal">{detail.terminal || '—'}</DetailRow>
            <DetailRow label="Status na adquirente">
              <Badge tone={detail.statusAdquirente === 'Aprovado' ? 'success' : 'warning'}>
                {detail.statusAdquirente || 'Não informado'}
              </Badge>
            </DetailRow>
          </DetailSection>
        </section>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#151936] sm:p-6">
        <DetailSection title="Histórico">
          <HistoricoTimeline eventos={detail.historico || []} />
        </DetailSection>
      </section>

      <section className="flex flex-wrap items-center justify-end gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-[#151936] print:hidden">
        <Button variant="outline" icon={Printer} onClick={handleImprimir}>
          Imprimir comprovante
        </Button>

        <Button variant="outline" icon={Download} onClick={handleBaixarComprovante}>
          Baixar comprovante
        </Button>

        <Button variant="danger" icon={RotateCcw} onClick={handleEstornar}>
          Estornar pagamento
        </Button>
      </section>
    </div>
  );
}

function ResumoFinanceiro({ titulo, valor, descricao, icone: Icone, destaque }) {
  const cores = {
    neutral: 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300',
    warning: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
    success: 'bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400',
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#151936]">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{titulo}</p>
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${cores[destaque]}`}>
          <Icone className="h-5 w-5" />
        </span>
      </div>

      <p className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        {valor}
      </p>

      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{descricao}</p>
    </article>
  );
}
