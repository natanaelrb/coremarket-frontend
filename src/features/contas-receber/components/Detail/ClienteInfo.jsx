import { InfoLabel } from './InfoLabel';

export function ClienteInfo({ conta }) {
  return (
    <div className="space-y-2">
      <div><InfoLabel>Cliente</InfoLabel><p className="text-[14px] font-bold text-ink">{conta.clienteNome}</p></div>
      <div><InfoLabel>CPF</InfoLabel><p className="text-xs text-ink tabular-nums">{conta.cpf}</p></div>
      <div><InfoLabel>Telefone</InfoLabel><p className="text-xs text-ink tabular-nums">{conta.telefone}</p></div>
    </div>
  );
}
