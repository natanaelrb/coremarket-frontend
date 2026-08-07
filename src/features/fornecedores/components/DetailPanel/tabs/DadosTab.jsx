import InfoCard from '../shared/InfoCard.jsx'

export default function DadosTab({ detalhe }) {
  const { informacoesGerais } = detalhe

  const cadastrais = [
    { label: 'Nome Fantasia', value: informacoesGerais.nomeFantasia },
    { label: 'Razão Social', value: informacoesGerais.razaoSocial },
    { label: 'CNPJ', value: informacoesGerais.cnpj },
    { label: 'Tipo', value: informacoesGerais.tipo },
    { label: 'Inscrição Estadual', value: '19.876.543-2' },
  ]

  const endereco = [
    { label: 'Cidade / Estado', value: informacoesGerais.cidadeEstado },
    { label: 'CEP', value: '64000-000' },
    { label: 'Endereço', value: 'Av. Frei Serafim, 1200' },
    { label: 'Bairro', value: 'Centro' },
  ]

  const contato = [
    { label: 'Telefone', value: informacoesGerais.telefone },
    { label: 'E-mail', value: informacoesGerais.email },
    { label: 'Contato', value: informacoesGerais.contato },
  ]

  return (
    <div className="grid animate-fade-in gap-4 lg:grid-cols-2">
      <InfoCard title="Dados Cadastrais" rows={cadastrais} />
      <InfoCard title="Endereço" rows={endereco} />
      <InfoCard title="Contato" rows={contato} />
    </div>
  )
}
