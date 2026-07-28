import Input from "../ui/Input";

export default function ProdutoForm({ dados, onChange, errors = {} }) {
  function handle(campo) {
    return (e) => onChange({ ...dados, [campo]: e.target.value });
  }

  return (
    <div className="space-y-4">
      <Input
        label="Nome do produto *"
        placeholder="Ex: Arroz Tipo 1 5kg"
        value={dados.nome || ""}
        onChange={handle("nome")}
        error={errors.nome}
      />
      <Input
        label="Descrição"
        placeholder="Detalhes do produto, marca, etc."
        value={dados.descricao || ""}
        onChange={handle("descricao")}
      />
      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Preço (R$) *"
          type="number"
          placeholder="0,00"
          min="0"
          step="0.01"
          value={dados.preco || ""}
          onChange={handle("preco")}
          error={errors.preco}
        />
        <Input
          label="Qtd. em estoque *"
          type="number"
          placeholder="0"
          min="0"
          step="1"
          value={dados.quantidadeEstoque || ""}
          onChange={handle("quantidadeEstoque")}
          error={errors.quantidadeEstoque}
        />
      </div>
    </div>
  );
}
