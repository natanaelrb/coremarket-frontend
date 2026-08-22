// MOCK DATA — Seção "Análises do período".
// TODO(api): GET /api/estoque/movimentacoes/analises?periodoInicio=&periodoFim=
// Controller sugerido: MovimentacaoEstoqueController#analisesPeriodo

export const MOCK_ENTRADAS_SAIDAS = {
  entradas: 1248,
  saidas: 986,
};

export const MOCK_TOP_PRODUTOS = [
  { nome: 'Coca-Cola 2L', quantidade: 482, imagem: '🥤' },
  { nome: 'Arroz Tio João 5kg', quantidade: 356, imagem: '🌾' },
  { nome: 'Leite Integral 1L', quantidade: 268, imagem: '🥛' },
  { nome: 'Açúcar Cristal 1kg', quantidade: 201, imagem: '🍬' },
  { nome: 'Óleo de Soja 900ml', quantidade: 189, imagem: '🫗' },
];

export const MOCK_MOTIVOS_PERDA = [
  { nome: 'Vencimento', percentual: 58, quantidade: 18, cor: '#EF4444' },
  { nome: 'Avaria', percentual: 25, quantidade: 9, cor: '#F59E0B' },
  { nome: 'Extravio', percentual: 10, quantidade: 3, cor: '#A855F7' },
  { nome: 'Outros', percentual: 7, quantidade: 2, cor: '#3B82F6' },
];

export const MOCK_HORARIOS_MOVIMENTACAO = [
  { hora: '00h', total: 12 }, { hora: '01h', total: 8 }, { hora: '02h', total: 5 },
  { hora: '03h', total: 4 }, { hora: '04h', total: 6 }, { hora: '05h', total: 10 },
  { hora: '06h', total: 22 }, { hora: '07h', total: 45 }, { hora: '08h', total: 98 },
  { hora: '09h', total: 156 }, { hora: '10h', total: 210 }, { hora: '11h', total: 245 },
  { hora: '12h', total: 190 }, { hora: '13h', total: 176 }, { hora: '14h', total: 220 },
  { hora: '15h', total: 260 }, { hora: '16h', total: 298 }, { hora: '17h', total: 340 },
  { hora: '18h', total: 380 }, { hora: '19h', total: 312 }, { hora: '20h', total: 198 },
  { hora: '21h', total: 120 }, { hora: '22h', total: 60 }, { hora: '23h', total: 24 },
];
