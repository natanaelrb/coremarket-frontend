import {
  Ban,
  Barcode,
  CalendarCheck,
  CircleDollarSign,
  Eye,
  Handshake,
  MessageCircle,
  MoreHorizontal,
  Pencil,
  Printer,
  QrCode,
} from "lucide-react";
import Dropdown, {
  DropdownItem,
} from "../../../../shared/components/ui/Dropdown";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

export function RowActionsMenu({ conta }) {
  const { actions, detail, exportacao } = useContasReceberContext();
  const podeCobrar = conta.aberto;
  return (
    <Dropdown
      width={210}
      trigger={({ toggle }) => (
        <button
          type="button"
          aria-label={`Ações da conta ${conta.id}`}
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          className="grid h-6 w-8 place-items-center rounded-md border border-line bg-surface text-ink-2 transition hover:border-brand hover:text-brand"
        >
          <MoreHorizontal className="size-3.5" />
        </button>
      )}
    >
      <DropdownItem icon={Eye} onClick={() => detail.select(conta.id)}>
        Ver detalhes
      </DropdownItem>
      <DropdownItem
        icon={CircleDollarSign}
        disabled={!podeCobrar}
        onClick={() => actions.registrarRecebimento(conta)}
      >
        Registrar recebimento
      </DropdownItem>
      <DropdownItem
        icon={Handshake}
        disabled={!podeCobrar}
        onClick={() => actions.negociar(conta)}
      >
        Negociar dívida
      </DropdownItem>
            <div className="my-1 border-t border-slate-200 dark:border-white/[0.10]" />
      <DropdownItem
        icon={MessageCircle}
        disabled={!podeCobrar}
        onClick={() => actions.cobrar(conta)}
      >
        Enviar cobrança
      </DropdownItem>
      <DropdownItem
        icon={Barcode}
        disabled={!podeCobrar}
        onClick={() => actions.boleto(conta)}
      >
        Gerar boleto
      </DropdownItem>
      <DropdownItem
        icon={QrCode}
        disabled={!podeCobrar}
        onClick={() => actions.pix(conta)}
      >
        Cobrança PIX
      </DropdownItem>
      <DropdownItem
        icon={CalendarCheck}
        disabled={!podeCobrar}
        onClick={() => actions.promessa(conta)}
      >
        Promessa de pagamento
      </DropdownItem>
            <div className="my-1 border-t border-slate-200 dark:border-white/[0.10]" />
      <DropdownItem
        icon={Pencil}
        disabled={Boolean(conta.cancelada)}
        onClick={() => actions.editar(conta)}
      >
        Editar conta
      </DropdownItem>
      <DropdownItem
        icon={Printer}
        onClick={() => exportacao.imprimirConta(conta)}
      >
        Imprimir
      </DropdownItem>
      <DropdownItem
        icon={Ban}
        tone="danger"
        disabled={!conta.aberto}
        onClick={() => actions.cancelar(conta)}
      >
        Cancelar conta
      </DropdownItem>
    </Dropdown>
  );
}
