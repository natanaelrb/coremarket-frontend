import TimelineTabsNav from "./TimelineTabsNav.jsx";
import TimelineList from "./TimelineList.jsx";
import AnexosRecentes from "../Anexos/AnexosRecentes.jsx";

function EmptyState({ message }) {
  return (
    <div
      className="
        flex min-h-32 items-center justify-center
        rounded-lg border border-dashed
        border-slate-200 bg-slate-50
        px-4 py-8 text-center
        dark:border-[#3a4168] dark:bg-[#0f1230]
      "
    >
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {message}
      </p>
    </div>
  );
}

function ContatosContent({ contatos }) {
  if (!contatos || contatos.length === 0) {
    return (
      <EmptyState message="Nenhum contato registrado para este fornecedor." />
    );
  }

  return (
    <div className="space-y-3">
      {contatos.map((contato, index) => (
        <div
          key={contato.id ?? index}
          className="
            rounded-lg border border-slate-200
            bg-slate-50 p-4
            dark:border-[#3a4168] dark:bg-[#0f1230]
          "
        >
          <p className="font-medium text-slate-800 dark:text-slate-100">
            {contato.nome ?? "Contato sem nome"}
          </p>

          {contato.cargo && (
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {contato.cargo}
            </p>
          )}

          {contato.telefone && (
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Telefone: {contato.telefone}
            </p>
          )}

          {contato.email && (
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              E-mail: {contato.email}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function ObservacoesContent({ observacoes }) {
  if (!observacoes || observacoes.length === 0) {
    return (
      <EmptyState message="Nenhuma observação registrada para este fornecedor." />
    );
  }

  return (
    <div className="space-y-3">
      {observacoes.map((observacao, index) => (
        <div
          key={observacao.id ?? index}
          className="
            rounded-lg border border-slate-200
            bg-slate-50 p-4
            dark:border-[#3a4168] dark:bg-[#0f1230]
          "
        >
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {typeof observacao === "string"
              ? observacao
              : observacao.texto ?? observacao.descricao ?? "Sem descrição."}
          </p>

          {typeof observacao !== "string" && observacao.data && (
            <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
              {observacao.data}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function HistoricoFinanceiroContent({ historicoFinanceiro }) {
  if (!historicoFinanceiro || historicoFinanceiro.length === 0) {
    return (
      <EmptyState message="Nenhum registro financeiro disponível para este fornecedor." />
    );
  }

  return (
    <div className="space-y-3">
      {historicoFinanceiro.map((item, index) => (
        <div
          key={item.id ?? index}
          className="
            flex flex-col gap-1 rounded-lg
            border border-slate-200 bg-slate-50 p-4
            dark:border-[#3a4168] dark:bg-[#0f1230]
          "
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="font-medium text-slate-800 dark:text-slate-100">
              {item.titulo ?? item.tipo ?? "Movimentação financeira"}
            </p>

            {item.valor && (
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                {item.valor}
              </span>
            )}
          </div>

          {item.detalhe && (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {item.detalhe}
            </p>
          )}

          {item.data && (
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
              {item.data}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function TimelineSection({
  activeSidePanel,
  onChangeSidePanel,
  detalhe,
}) {
  const timelineItems = detalhe?.timeline ?? [];
  const contatos = detalhe?.contatos ?? [];
  const anexos = detalhe?.anexos ?? [];
  const observacoes = detalhe?.observacoes ?? [];
  const historicoFinanceiro = detalhe?.historicoFinanceiro ?? [];

  function renderContent() {
    switch (activeSidePanel) {
      case "timeline":
        if (timelineItems.length === 0) {
          return (
            <EmptyState message="Nenhum evento registrado para este fornecedor." />
          );
        }

        return <TimelineList items={timelineItems} />;

      case "contatos":
        return <ContatosContent contatos={contatos} />;

      case "anexos":
        if (anexos.length === 0) {
          return (
            <EmptyState message="Nenhum anexo registrado para este fornecedor." />
          );
        }

        return <AnexosRecentes anexos={anexos} />;

      case "observacoes":
        return <ObservacoesContent observacoes={observacoes} />;

      case "historico-financeiro":
        return (
          <HistoricoFinanceiroContent
            historicoFinanceiro={historicoFinanceiro}
          />
        );

      default:
        return <EmptyState message="Selecione uma seção para visualizar os dados." />;
    }
  }

  return (
    <section
      className="
        animate-fade-in-up stagger-4
        flex flex-col overflow-hidden rounded-xl
        border border-slate-200/80 bg-white
        shadow-sm shadow-slate-900/[0.02]
        dark:border-[#252a4a] dark:bg-[#141833]
        dark:shadow-black/10
      "
    >
      <TimelineTabsNav
        activeSidePanel={activeSidePanel}
        onChangeSidePanel={onChangeSidePanel}
      />

      <div className="p-4 sm:p-5">
        {renderContent()}
      </div>
    </section>
  );
}