import { formatDateBR } from "../../../shared/utils/formatDate";
import { formatDecimal } from "../../../shared/utils/formatNumber";
import { STATUS_META } from './statusConta';
import { FORMA_LABEL } from './formaPagamento';

/** Colunas exportadas (CSV). */
export const EXPORT_COLUMNS = [
  { label: 'Conta',            accessor: (c) => c.id },
  { label: 'Cliente',          accessor: (c) => c.clienteNome },
  { label: 'CPF',              accessor: (c) => c.cpf },
  { label: 'Telefone',         accessor: (c) => c.telefone },
  { label: 'Venda',            accessor: (c) => c.vendaId },
  { label: 'Emissão',          accessor: (c) => formatDateBR(c.emissao) },
  { label: 'Vencimento',       accessor: (c) => formatDateBR(c.vencimento) },
  { label: 'Valor original',   accessor: (c) => formatDecimal(c.valorOriginal) },
  { label: 'Valor pago',       accessor: (c) => formatDecimal(c.valorPago) },
  { label: 'Saldo restante',   accessor: (c) => formatDecimal(c.saldo) },
  { label: 'Dias de atraso',   accessor: (c) => c.diasAtraso },
  { label: 'Status',           accessor: (c) => STATUS_META[c.status].longLabel },
  { label: 'Forma de pagamento', accessor: (c) => FORMA_LABEL[c.formaPagamento] },
  { label: 'Responsável',      accessor: (c) => c.responsavel },
  { label: 'Último pagamento', accessor: (c) => formatDateBR(c.ultimoPagamento) },
];
