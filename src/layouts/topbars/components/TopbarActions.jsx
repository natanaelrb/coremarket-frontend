import { Plus } from "lucide-react";
import PrimaryButton from "../../../shared/components/actions/PrimaryButton";

export default function TopbarActions({ action }) {
  switch (action) {
    case "cliente":
      return <PrimaryButton icon={Plus}>Novo Cliente</PrimaryButton>;

    case "produto":
      return <PrimaryButton icon={Plus}>Novo Produto</PrimaryButton>;

    case "fornecedor":
      return <PrimaryButton icon={Plus}>Novo Fornecedor</PrimaryButton>;

    case "compra":
      return <PrimaryButton icon={Plus}>Nova Compra</PrimaryButton>;

    case "venda":
      return <PrimaryButton icon={Plus}>Nova Venda</PrimaryButton>;

    default:
      return null;
  }
}
