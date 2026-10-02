
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const initialForm = {
  nomeFantasia: "",
  razaoSocial: "",
  cnpj: "",
  telefone: "",
  email: "",
  cidade: "",
};

export default function NovoFornecedorModal({
  isOpen,
  onClose,
  onSave,
}) {
  const [form, setForm] = useState(initialForm);

  // Controla a tecla Escape e o scroll da página
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleChange = (field) => (event) => {
    const { value } = event.target;

    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSave?.(form);
    setForm(initialForm);
    onClose?.();
  };

  function handleClose() {
    setForm(initialForm);
    onClose?.();
  }

  if (!isOpen) return null;

  return createPortal(
    <div
      className="
        animate-fade-in
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-slate-950/55
        p-4
        backdrop-blur-sm
      "
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      {/* Modal */}
      <div
        className="
          animate-modal-up
          flex w-full max-w-lg
          max-h-[calc(100vh-2rem)]
          flex-col
          overflow-hidden
          rounded-xl
          border border-slate-200
          bg-white
          shadow-2xl
          dark:border-[#252a4a]
          dark:bg-[#141833]
        "
        role="dialog"
        aria-modal="true"
        aria-labelledby="novo-fornecedor-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div
          className="
            flex shrink-0 items-center justify-between
            border-b border-slate-200
            px-5 py-4
            dark:border-[#252a4a]
          "
        >
          <div>
            <h2
              id="novo-fornecedor-title"
              className="
                text-base font-semibold
                text-slate-900
                dark:text-white
              "
            >
              Novo Fornecedor
            </h2>

            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              Cadastre os dados do fornecedor.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Fechar modal"
            className="
              rounded-lg p-2
              text-slate-400
              transition-colors
              hover:bg-slate-100
              hover:text-slate-700
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-emerald-500/50
              dark:hover:bg-[#1f234a]
              dark:hover:text-slate-200
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Formulário com rolagem interna */}
        <form
          onSubmit={handleSubmit}
          className="min-h-0 space-y-4 overflow-y-auto p-5"
        >
          <FormField
            id="nomeFantasia"
            label="Nome Fantasia"
            value={form.nomeFantasia}
            onChange={handleChange("nomeFantasia")}
            required
            autoFocus
          />

          <FormField
            id="razaoSocial"
            label="Razão Social"
            value={form.razaoSocial}
            onChange={handleChange("razaoSocial")}
            required
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              id="cnpj"
              label="CNPJ"
              value={form.cnpj}
              onChange={handleChange("cnpj")}
              placeholder="00.000.000/0000-00"
              inputMode="numeric"
            />

            <FormField
              id="telefone"
              label="Telefone"
              value={form.telefone}
              onChange={handleChange("telefone")}
              placeholder="(00) 00000-0000"
              inputMode="tel"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormField
              id="email"
              label="E-mail"
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              inputMode="email"
            />

            <FormField
              id="cidade"
              label="Cidade"
              value={form.cidade}
              onChange={handleChange("cidade")}
            />
          </div>

          {/* Ações */}
          <div
            className="
              flex flex-col-reverse gap-2
              border-t border-slate-100
              pt-4
              sm:flex-row sm:justify-end
              dark:border-[#252a4a]
            "
          >
            <button
              type="button"
              onClick={handleClose}
              className="
                rounded-lg
                border border-slate-200
                px-4 py-2.5
                text-sm font-medium
                text-slate-600
                transition-colors
                hover:bg-slate-50
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-500/50
                dark:border-[#252a4a]
                dark:text-slate-300
                dark:hover:bg-[#1a1e3d]
              "
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="
                rounded-lg
                bg-emerald-600
                px-4 py-2.5
                text-sm font-semibold
                text-white
                transition-colors
                hover:bg-emerald-700
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-500/50
                focus-visible:ring-offset-2
              "
            >
              Salvar Fornecedor
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}

function FormField({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  autoFocus = false,
  inputMode,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-1.5 block
          text-xs font-semibold
          text-slate-600
          dark:text-slate-300
        "
      >
        {label}

        {required && (
          <span className="ml-1 text-rose-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
        inputMode={inputMode}
        className="
          w-full rounded-lg
          border border-slate-200
          bg-white
          px-3 py-2.5
          text-sm text-slate-700
          outline-none
          transition-colors
          placeholder:text-slate-400
          focus:border-emerald-500
          focus:ring-2 focus:ring-emerald-500/15
          dark:border-[#252a4a]
          dark:bg-[#0f1230]
          dark:text-slate-200
          dark:placeholder:text-slate-500
          dark:focus:border-emerald-500
          dark:focus:ring-emerald-500/20
        "
      />
    </div>
  );
}