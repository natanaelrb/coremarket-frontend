
# 🏪 CoreMarket — Frontend

Interface web do **CoreMarket**, um sistema de gestão comercial desenvolvido para pequenos mercados. O projeto busca reunir, em uma experiência simples e organizada, as principais áreas da operação do negócio.

O frontend está sendo desenvolvido com foco em uma interface moderna, responsiva e consistente, facilitando o acesso às informações e a navegação entre os módulos do sistema.

## 🎯 Objetivo

Construir uma interface que ajude comerciantes a acompanhar clientes, produtos, estoque, compras, vendas e pagamentos em um único lugar, com telas claras e recursos que apoiem a rotina do mercado.

## ✨ Módulos da aplicação

O frontend conta com páginas e fluxos em desenvolvimento para:

- **Dashboard:** visão geral das informações e indicadores do negócio.
- **Clientes:** consulta, cadastro e visualização de detalhes dos clientes.
- **Fornecedores:** organização dos fornecedores.
- **Produtos:** consulta e gerenciamento de produtos.
- **Estoque:** acompanhamento de quantidades e movimentações.
- **Compras:** registro e acompanhamento de compras.
- **Vendas — PDV:** interface de ponto de venda, com busca de produtos, carrinho e fluxo de venda.
- **Pagamentos:** acompanhamento de valores e movimentações financeiras.
- **Análises de vendas:** visualização do desempenho comercial, incluindo análises por categoria.

Os módulos estão em diferentes etapas de implementação e aprimoramento.

## 🛠️ Tecnologias

- React
- Vite
- JavaScript
- Tailwind CSS
- Axios
- React Router DOM
- Lucide React
- Motion

## 🎨 Interface e experiência

O desenvolvimento da interface prioriza:

- Componentes reutilizáveis e padrões visuais consistentes.
- Navegação organizada entre os módulos.
- Formulários, tabelas, filtros e modais para as operações do sistema.
- Layout adaptável a diferentes tamanhos de tela.
- Separação de páginas, componentes, hooks e serviços para facilitar a manutenção.

## 🧱 Organização do projeto

A aplicação utiliza uma estrutura por páginas e funcionalidades, com componentes compartilhados para elementos reutilizados na interface.

```text
src/
├── features/      # Funcionalidades organizadas por módulo
├── pages/         # Páginas da aplicação
├── shared/        # Componentes e recursos compartilhados
└── ...
```

## 🔗 Integração com o backend

O frontend faz parte do ecossistema CoreMarket e está sendo preparado para trabalhar com a API backend desenvolvida em Java e Spring Boot. A integração e a substituição de dados locais ou de teste fazem parte da evolução do projeto.

## 🚧 Status

Em desenvolvimento. O foco atual está na evolução da interface, na organização dos módulos e no aprimoramento dos fluxos de uso.

## 👨‍💻 Autor

Desenvolvido por Natanael Ribeiro.
