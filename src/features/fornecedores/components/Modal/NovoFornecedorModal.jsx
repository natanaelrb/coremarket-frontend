import { X } from 'lucide-react'
import { useState } from 'react'

const initialForm = {
  nomeFantasia: '',
  razaoSocial: '',
  cnpj: '',
  telefone: '',
  email: '',
  cidade: '',
}

export default function NovoFornecedorModal({ isOpen, onClose, onSave }) {
  const [form, setForm] = useState(initialForm)

  if (!isOpen) return null

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave?.(form)
    setForm(initialForm)
    onClose()
  }

  return (
    <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="animate-scale-in w-full max-w-lg rounded-xl bg-white shadow-xl dark:bg-[#141833]">
        <div className="flex items-center justify-between border-b border-gray-100 p-4 dark:border-[#1c2044]">
          <h3 className="font-semibold text-gray-800 dark:text-gray-100">Novo Fornecedor</h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-[#1f234a]"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 p-4">
          <FormField label="Nome Fantasia" value={form.nomeFantasia} onChange={handleChange('nomeFantasia')} required />
          <FormField label="Razão Social" value={form.razaoSocial} onChange={handleChange('razaoSocial')} required />
          <div className="grid grid-cols-2 gap-3">
            <FormField label="CNPJ" value={form.cnpj} onChange={handleChange('cnpj')} placeholder="00.000.000/0000-00" />
            <FormField label="Telefone" value={form.telefone} onChange={handleChange('telefone')} placeholder="(00) 00000-0000" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <FormField label="E-mail" type="email" value={form.email} onChange={handleChange('email')} />
            <FormField label="Cidade" value={form.cidade} onChange={handleChange('cidade')} />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-[#252a4a] dark:text-gray-300 dark:hover:bg-[#1a1e3d]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-700"
            >
              Salvar Fornecedor
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function FormField({ label, value, onChange, type = 'text', placeholder, required }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition-colors focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:border-[#252a4a] dark:bg-[#0f1230] dark:text-gray-200 dark:focus:ring-violet-500/20"
      />
    </label>
  )
}
