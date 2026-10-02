import { Modal } from "../../../../shared/components/ui/Modal";
import { Button } from "../../../../shared/components/ui/Button";
import { Check, X } from "lucide-react";

import { ProdutoInformacoes } from "./ProdutoInformacoes";
import { ProdutoPrecos } from "./ProdutoPrecos";
import { ProdutoEstoque } from "./ProdutoEstoque";
import { ProdutoCaracteristicas } from "./ProdutoCaracteristicas";

import { useNovoProduto } from "../../hooks/useNovoProduto";

export function NovoProdutoModal({
  isOpen,
  onClose,
  onSave,
}) {
  const {
    form,
    error,
    handleChange,
    handleSubmit,
  } = useNovoProduto({
    onSuccess: (novoProduto) => {
      onSave?.(novoProduto);
      onClose();
    },
  });

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Novo produto"
      subtitle="Cadastre um novo produto no catálogo do CoreMarket."
      size="full"
      footer={
        <>
          <Button
            type="button"
            variant="secondary"
            icon={X}
            onClick={onClose}
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            variant="primary"
            icon={Check}
            form="novo-produto-form"
          >
            Cadastrar produto
          </Button>
        </>
      }
    >
      <form
        id="novo-produto-form"
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {error ? (
          <div
            className="
              rounded-lg
              border border-red-200
              bg-red-50
              px-4 py-3
              text-sm
              text-red-700
              dark:border-red-500/20
              dark:bg-red-500/10
              dark:text-red-400
            "
          >
            {error}
          </div>
        ) : null}

        <ProdutoInformacoes
          form={form}
          onChange={handleChange}
        />

        <ProdutoPrecos
          form={form}
          onChange={handleChange}
        />

        <ProdutoEstoque
          form={form}
          onChange={handleChange}
        />

        <ProdutoCaracteristicas
          form={form}
          onChange={handleChange}
        />
      </form>
    </Modal>
  );
}