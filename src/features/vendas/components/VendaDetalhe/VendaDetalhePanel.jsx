import Card from "../../../../shared/components/layout/Card.jsx";
import { VendaDetalheHeader } from "./VendaDetalheHeader.jsx";
import { VendaDetalheInfo } from "./VendaDetalheInfo.jsx";
import { VendaDetalheItens } from "./VendaDetalheItens.jsx";
import { VendaDetalheResumo } from "./VendaDetalheResumo.jsx";
import { VendaDetalhePagamento } from "./VendaDetalhePagamento.jsx";
import { VendaDetalheActions } from "./VendaDetalheActions.jsx";
import { STATUS_VENDA } from "../../constants/statusVenda.js";
import { FORMA_PAGAMENTO } from "../../constants/formaPagamento.js";
import { calcularSubtotalLiquidoItem } from "../../utils/calculators.js";

export function VendaDetalhePanel({
  numeroVenda,
  caixaNumero,
  operadorNome,
  clienteNome,
  itens,
  resumo,
}) {
  const itensRecibo = itens.map((item) => ({
    nome: item.nome,
    quantidade: item.quantidade,
    subtotal: calcularSubtotalLiquidoItem(item),
  }));

  return (
    <Card className="overflow-hidden !rounded-2xl !border !border-slate-200/80 !bg-white !shadow-[0_10px_35px_-22px_rgba(15,23,42,0.28)]">
      {/* Cabeçalho do comprovante */}
      <div className="relative overflow-hidden border-b border-green-100 bg-gradient-to-br from-green-50 via-white to-sky-50/70 px-5 py-5 sm:px-6">
        <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-green-100/40 blur-2xl" />

        <div className="relative ">
          <div className="mb-1 flex items-center gap-3">
          </div>

          <VendaDetalheHeader
            numero={numeroVenda}
            status={STATUS_VENDA.CONCLUIDA}
          />
        </div>
      </div>

      {/* Dados da operação */}
      <section className="px-5 py-5 sm:px-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-5 w-1 rounded-full bg-sky-500" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
            Dados da operação
          </h3>
        </div>

        <VendaDetalheInfo
          dataHora={new Date().toISOString()}
          caixaNumero={caixaNumero}
          operadorNome={operadorNome}
          clienteNome={clienteNome}
        />
      </section>

      {/* Produtos */}
      <section className="border-t border-slate-100 bg-slate-50/50 px-5 py-5 sm:px-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-5 w-1 rounded-full bg-teal-500" />
          <h3 className="text-sm font-bold text-slate-800">
            Itens da venda
          </h3>
        </div>

        <VendaDetalheItens
          itens={
            itensRecibo.length > 0
              ? itensRecibo
              : [{ nome: "Sem itens", quantidade: 0, subtotal: 0 }]
          }
        />
      </section>

      {/* Valores */}
      <section className="border-t border-slate-100 px-5 py-5 sm:px-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-5 w-1 rounded-full bg-emerald-500" />
          <h3 className="text-sm font-bold text-slate-800">
            Resumo financeiro
          </h3>
        </div>

        <VendaDetalheResumo
          subtotal={resumo.subtotal}
          descontoItens={resumo.descontosItens}
          descontoVenda={resumo.descontoVenda}
          total={resumo.total}
        />
      </section>

      {/* Pagamento */}
      <section className="border-t border-slate-100 bg-sky-50/40 px-5 py-5 sm:px-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-5 w-1 rounded-full bg-sky-500" />
          <h3 className="text-sm font-bold text-slate-800">
            Pagamento
          </h3>
        </div>

        <VendaDetalhePagamento
          formaPagamento={FORMA_PAGAMENTO.PIX}
          valor={resumo.total}
          pagoEm={new Date().toISOString()}
        />
      </section>

      {/* Ações */}
      <div className="border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
        <VendaDetalheActions />
      </div>
    </Card>
  );
}
