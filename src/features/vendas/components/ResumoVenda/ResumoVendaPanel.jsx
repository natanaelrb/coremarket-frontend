import { ReceiptText, ShoppingCart, ShieldCheck } from 'lucide-react';
import Card from '../../../../shared/components/layout/Card.jsx';
import { ResumoLinha } from './ResumoLinha.jsx';
import { TotalDisplay } from './TotalDisplay.jsx';
import { FinalizarVendaButton } from './FinalizarVendaButton.jsx';
import { EstoqueAlert } from './EstoqueAlert.jsx';

export function ResumoVendaPanel({
  resumo,
  onFinalizar,
  processando,
}) {
  const podeFinalizar =
    resumo.quantidadeItens > 0 && resumo.estoqueDisponivel;

  const temDescontos =
    resumo.descontosItens > 0 || resumo.descontoVenda > 0;

  return (
    <Card className="!overflow-hidden !border !border-slate-200 !bg-white !text-slate-800 !shadow-sm">
      <div className="p-4">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#22c55e]">
              <ReceiptText className="h-[18px] w-[18px]" />
            </div>

            <div className="min-w-0">
              <h2 className="text-sm font-bold text-slate-800">
                Resumo da venda
              </h2>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                Confira os valores antes de finalizar
              </p>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-600">
            <ShoppingCart className="h-3.5 w-3.5" />
            {resumo.quantidadeItens}
          </span>
        </div>

        {/* Detalhamento dos valores */}
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/70 p-3">
          <div className="space-y-2.5">
            <ResumoLinha
              label={`Subtotal (${resumo.quantidadeItens} ${
                resumo.quantidadeItens === 1 ? 'item' : 'itens'
              })`}
              valor={resumo.subtotal}
              tone="info"
            />

            {resumo.descontosItens > 0 && (
              <ResumoLinha
                label="Descontos nos itens"
                valor={resumo.descontosItens}
                tone="discount"
              />
            )}

            {resumo.descontoVenda > 0 && (
              <ResumoLinha
                label="Desconto na venda"
                valor={resumo.descontoVenda}
                tone="discount"
              />
            )}

            <ResumoLinha
              label="Acréscimos"
              valor={resumo.acrescimo}
              tone={resumo.acrescimo > 0 ? 'warning' : 'default'}
            />
          </div>

          {temDescontos && (
            <div className="mt-3 flex items-center gap-2 border-t border-slate-200 pt-3 text-xs font-medium text-green-600">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>Descontos aplicados ao pedido</span>
            </div>
          )}
        </div>

        {/* Total a pagar */}
        <div className="my-4">
          <TotalDisplay total={resumo.total} />
        </div>

        {/* Finalização */}
        <div className="space-y-2.5">
          <FinalizarVendaButton
            onFinalizar={onFinalizar}
            loading={processando}
            disabled={!podeFinalizar}
          />

          <EstoqueAlert disponivel={resumo.estoqueDisponivel} />
        </div>

        <p className="mt-4 border-t border-slate-200 pt-3 text-center text-[11px] leading-relaxed text-slate-500">
          O fechamento da venda depende da disponibilidade do estoque.
        </p>
      </div>
    </Card>
  );
}
