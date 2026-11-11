import { useCallback, useMemo } from "react";
import { ModalType, QuickAction } from "../constants";
import { formatCurrency } from "../../../shared/utils/formatCurrency";

/**
 * Ações de negócio: abrem modais, chamam as mutações e disparam toasts.
 * Os componentes só chamam `actions.xxx` — nenhuma regra fica nos JSX.
 */
export function useContaActions({
  data,
  modals,
  detail,
  tabela,
  toast,
  exportacao,
}) {
  const { open, close } = modals;

  const salvarNovaConta = useCallback(
    async (form) => {
      const nova = await data.criar(form);
      tabela.sortBy("id", "desc");
      detail.select(nova.id);
      close();
      toast.success(
        "Conta criada",
        `${nova.id} · ${nova.clienteNome} · ${formatCurrency(nova.valorOriginal)}`,
      );
    },
    [data, tabela, detail, close, toast],
  );

  const salvarRecebimento = useCallback(
    async (id, form) => {
      const u = await data.registrarPagamento(id, form);
      detail.select(u.id);
      close();
      toast.success(
        "Recebimento registrado",
        `${formatCurrency(form.valorNumero)} em ${u.id} — ${u.clienteNome}`,
      );
    },
    [data, detail, close, toast],
  );

  const salvarNegociacao = useCallback(
    async (id, form) => {
      await data.negociar(id, form);
      close();
      toast.success("Dívida negociada", `Novo vencimento definido para ${id}.`);
    },
    [data, close, toast],
  );

  const salvarCancelamento = useCallback(
    async (id, form) => {
      await data.cancelar(id, form);
      close();
      toast.success("Conta cancelada", `${id} foi cancelada.`);
    },
    [data, close, toast],
  );

  const salvarEdicao = useCallback(
    async (id, form) => {
      await data.editar(id, form);
      close();
      toast.success("Conta atualizada", `As alterações em ${id} foram salvas.`);
    },
    [data, close, toast],
  );

  const salvarPromessa = useCallback(
    async (id, form) => {
      await data.definirPromessa(id, form);
      close();
      toast.success(
        "Promessa registrada",
        `Pagamento prometido para ${form.data.split("-").reverse().join("/")}.`,
      );
    },
    [data, close, toast],
  );

  const executarRapida = useCallback(
    (acao, conta) => {
      if (!conta) return;
      const map = {
        [QuickAction.WHATSAPP]: () =>
          open(ModalType.WHATSAPP, { contaId: conta.id }),
        [QuickAction.BOLETO]: () =>
          open(ModalType.BOLETO, { contaId: conta.id }),
        [QuickAction.PIX]: () => open(ModalType.PIX, { contaId: conta.id }),
        [QuickAction.PROMESSA]: () =>
          open(ModalType.PROMESSA, { contaId: conta.id }),
        [QuickAction.EDITAR]: () =>
          open(ModalType.EDITAR, { contaId: conta.id }),
        [QuickAction.IMPRIMIR]: () => exportacao.imprimirConta(conta),
        [QuickAction.CANCELAR]: () =>
          open(ModalType.CANCELAR, { contaId: conta.id }),
      };
      map[acao]?.();
    },
    [open, exportacao],
  );

  return useMemo(
    () => ({
      novaConta: () => open(ModalType.NOVA_CONTA),
      registrarRecebimento: (conta) =>
        open(ModalType.RECEBIMENTO, { contaId: conta?.id ?? null }),
      negociar: (conta) => open(ModalType.NEGOCIAR, { contaId: conta.id }),
      cancelar: (conta) => open(ModalType.CANCELAR, { contaId: conta.id }),
      editar: (conta) => open(ModalType.EDITAR, { contaId: conta.id }),
      cobrar: (conta) => open(ModalType.WHATSAPP, { contaId: conta.id }),
      boleto: (conta) => open(ModalType.BOLETO, { contaId: conta.id }),
      pix: (conta) => open(ModalType.PIX, { contaId: conta.id }),
      promessa: (conta) => open(ModalType.PROMESSA, { contaId: conta.id }),
      filtrosAvancados: () => open(ModalType.FILTROS_AVANCADOS),
      executarRapida,
      salvarNovaConta,
      salvarRecebimento,
      salvarNegociacao,
      salvarCancelamento,
      salvarEdicao,
      salvarPromessa,
      cobrarEmLote: (contas) => {
        toast.success(
          "Cobranças enviadas",
          `${contas.length} cliente(s) notificado(s) via WhatsApp (simulação).`,
        );
      },
    }),
    [
      open,
      executarRapida,
      salvarNovaConta,
      salvarRecebimento,
      salvarNegociacao,
      salvarCancelamento,
      salvarEdicao,
      salvarPromessa,
      toast,
    ],
  );
}
