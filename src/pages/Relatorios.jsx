import { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import {
  BarChart3, TrendingUp, Users, ShoppingCart, Wallet,
  Package, Download, Calendar, ArrowUpRight, ArrowDownRight,
  AlertCircle,
} from "lucide-react";

// ── Dados mockados — substituir por chamadas à API quando disponíveis ──────────

const vendasMensais = [
  { mes: "Jan", receita: 4200, compras: 2800 },
  { mes: "Fev", receita: 3800, compras: 2200 },
  { mes: "Mar", receita: 5100, compras: 3100 },
  { mes: "Abr", receita: 4700, compras: 2900 },
  { mes: "Mai", receita: 6200, compras: 3800 },
  { mes: "Jun", receita: 5800, compras: 3500 },
  { mes: "Jul", receita: 7100, compras: 4200 },
  { mes: "Ago", receita: 6500, compras: 3900 },
  { mes: "Set", receita: 7800, compras: 4600 },
  { mes: "Out", receita: 7200, compras: 4300 },
  { mes: "Nov", receita: 8900, compras: 5100 },
  { mes: "Dez", receita: 9400, compras: 5800 },
];

const inadimplencia = [
  { mes: "Jul", valor: 1200 },
  { mes: "Ago", valor: 980 },
  { mes: "Set", valor: 1450 },
  { mes: "Out", valor: 820 },
  { mes: "Nov", valor: 1100 },
  { mes: "Dez", valor: 760 },
];

const topClientes = [
  { nome: "João Silva",   total: 2400 },
  { nome: "Maria Souza",  total: 1980 },
  { nome: "Pedro Costa",  total: 1650 },
  { nome: "Ana Lima",     total: 1320 },
  { nome: "Carlos Neto",  total: 980  },
];

const statusPagamentos = [
  { name: "Pagos",     value: 62, color: "#10B981" },
  { name: "Pendentes", value: 25, color: "#F59E0B" },
  { name: "Vencidos",  value: 13, color: "#EF4444" },
];

const topProdutos = [
  { nome: "Arroz Tipo 1 5kg",  vendas: 148 },
  { nome: "Feijão Carioca",    vendas: 134 },
  { nome: "Óleo de Soja 900ml",vendas: 121 },
  { nome: "Açúcar Cristal 1kg",vendas: 109 },
  { nome: "Café 500g",         vendas: 97  },
];

// ── Helpers ────────────────────────────────────────────────────────────────────

function formatMoeda(v) {
  return Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-slate-900 rounded-lg px-3 py-2 shadow-sm text-xs">
      <p className="text-slate-500 mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="font-semibold">
          {p.name}: {p.name === "receita" || p.name === "compras" || p.name === "valor"
            ? formatMoeda(p.value)
            : p.value}
        </p>
      ))}
    </div>
  );
};

// ── Sub-componentes ────────────────────────────────────────────────────────────

function MetricCard({ title, value, change, up, icon, color }) {
  const colors = {
    violet: "bg-violet-50 text-violet-600",
    green:  "bg-emerald-50 text-emerald-600",
    amber:  "bg-amber-50 text-amber-600",
    red:    "bg-red-50 text-red-600",
    blue:   "bg-blue-50 text-blue-600",
  };
  return (
    <div className="bg-white rounded-xl border border-slate-900 p-4 hover:border-slate-200 transition">
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{title}</p>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${colors[color] || colors.violet}`}>
          {icon}
        </div>
      </div>
      <p className="text-2xl font-semibold text-slate-800 mb-1">{value}</p>
      <div className={`flex items-center gap-1 text-xs ${up ? "text-emerald-600" : "text-red-500"}`}>
        {up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
        <span>{change}</span>
      </div>
    </div>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-4">
      <h2 className="text-sm font-semibold text-slate-700">{title}</h2>
      {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl border border-slate-100 p-5 ${className}`}>
      {children}
    </div>
  );
}

// ── Abas ──────────────────────────────────────────────────────────────────────

const ABAS = [
  { key: "visao-geral",  label: "Visão geral",    icon: BarChart3 },
  { key: "financeiro",   label: "Financeiro",      icon: TrendingUp },
  { key: "clientes",     label: "Clientes",        icon: Users },
  { key: "produtos",     label: "Produtos",        icon: Package },
  { key: "inadimplencia",label: "Inadimplência",   icon: Wallet },
];

// ── Conteúdo por aba ──────────────────────────────────────────────────────────

function AbaVisaoGeral() {
  return (
    <div className="space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <MetricCard title="Receita total" value="R$ 73.600" change="+18% vs ano anterior" up icon={<TrendingUp size={16} />} color="green" />
        <MetricCard title="Total de clientes" value="142" change="+12% este mês" up icon={<Users size={16} />} color="violet" />
        <MetricCard title="Compras registradas" value="386" change="+8% este mês" up icon={<ShoppingCart size={16} />} color="blue" />
        <MetricCard title="Inadimplência" value="R$ 6.310" change="+3% vs mês anterior" up={false} icon={<Wallet size={16} />} color="red" />
      </div>

      {/* Gráfico receita vs compras */}
      <Card>
        <SectionHeader title="Receita × Compras — 2025" subtitle="Comparativo mensal de entradas e saídas" />
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={vendasMensais} barSize={16}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis dataKey="mes" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false}
              tickFormatter={(v) => `R$${v >= 1000 ? (v/1000).toFixed(0)+"k" : v}`} width={48} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "#F8F7FF" }} />
            <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="receita" name="receita" fill="#7C3AED" radius={[4,4,0,0]} />
            <Bar dataKey="compras" name="compras" fill="#DDD6FE" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Status pagamentos + Top produtos */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Card>
          <SectionHeader title="Status dos pagamentos" subtitle="Distribuição atual" />
          <div className="flex items-center gap-6">
            <ResponsiveContainer width={160} height={160}>
              <PieChart>
                <Pie data={statusPagamentos} cx="50%" cy="50%" innerRadius={45} outerRadius={70}
                  paddingAngle={3} dataKey="value">
                  {statusPagamentos.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 flex-1">
              {statusPagamentos.map((s) => (
                <div key={s.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                    <span className="text-sm text-slate-600">{s.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">{s.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <SectionHeader title="Produtos mais vendidos" subtitle="Top 5 do período" />
          <div className="space-y-3">
            {topProdutos.map((p, i) => (
              <div key={p.nome} className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-300 w-4">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-700 truncate">{p.nome}</span>
                    <span className="text-xs font-semibold text-slate-800 ml-2">{p.vendas}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full">
                    <div className="h-1.5 bg-violet-400 rounded-full"
                      style={{ width: `${(p.vendas / topProdutos[0].vendas) * 100}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function AbaFinanceiro() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
        <MetricCard title="Receita do mês" value="R$ 9.400" change="+5,6% vs mês anterior" up icon={<TrendingUp size={16} />} color="green" />
        <MetricCard title="Compras do mês" value="R$ 5.800" change="+3,1% vs mês anterior" up={false} icon={<ShoppingCart size={16} />} color="amber" />
        <MetricCard title="Lucro estimado" value="R$ 3.600" change="+9,2% vs mês anterior" up icon={<TrendingUp size={16} />} color="violet" />
      </div>
      <Card>
        <SectionHeader title="Evolução financeira — 12 meses" subtitle="Receita e compras ao longo do ano" />
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={vendasMensais}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis dataKey="mes" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false}
              tickFormatter={(v) => `R$${v >= 1000 ? (v/1000).toFixed(0)+"k" : v}`} width={48} />
            <Tooltip content={<CustomTooltip />} />
            <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="receita" name="receita" stroke="#7C3AED" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="compras" name="compras" stroke="#DDD6FE" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

function AbaClientes() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
        <MetricCard title="Total de clientes" value="142" change="+12% este mês" up icon={<Users size={16} />} color="violet" />
        <MetricCard title="Novos este mês" value="17" change="+4 vs mês anterior" up icon={<Users size={16} />} color="green" />
        <MetricCard title="Com dívida ativa" value="28" change="19,7% da base" up={false} icon={<AlertCircle size={16} />} color="red" />
      </div>
      <Card>
        <SectionHeader title="Clientes que mais compraram" subtitle="Ranking por valor total" />
        <div className="space-y-3">
          {topClientes.map((c, i) => (
            <div key={c.nome} className="flex items-center gap-4">
              <div className="w-7 h-7 rounded-full bg-violet-50 flex items-center justify-center text-xs font-bold text-violet-600 flex-shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-slate-700 font-medium truncate">{c.nome}</span>
                  <span className="text-sm font-semibold text-slate-800 ml-2">{formatMoeda(c.total)}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full">
                  <div className="h-1.5 bg-violet-500 rounded-full"
                    style={{ width: `${(c.total / topClientes[0].total) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function AbaProdutos() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
        <MetricCard title="Total de produtos" value="91" change="+15 adicionados" up icon={<Package size={16} />} color="violet" />
        <MetricCard title="Estoque baixo" value="8" change="produtos abaixo de 10 un." up={false} icon={<AlertCircle size={16} />} color="amber" />
        <MetricCard title="Valor em estoque" value="R$ 42.300" change="+6% vs mês anterior" up icon={<TrendingUp size={16} />} color="green" />
      </div>
      <Card>
        <SectionHeader title="Produtos mais vendidos" subtitle="Quantidade vendida no período" />
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={topProdutos} layout="vertical" barSize={14}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="nome" tick={{ fontSize: 11, fill: "#64748B" }}
              axisLine={false} tickLine={false} width={140} />
            <Tooltip cursor={{ fill: "#F8F7FF" }} />
            <Bar dataKey="vendas" name="Vendas" fill="#7C3AED" radius={[0,4,4,0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

function AbaInadimplencia() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
        <MetricCard title="Total em aberto" value="R$ 6.310" change="+3% vs mês anterior" up={false} icon={<Wallet size={16} />} color="red" />
        <MetricCard title="Clientes inadimplentes" value="28" change="19,7% da base" up={false} icon={<Users size={16} />} color="amber" />
        <MetricCard title="Média por cliente" value="R$ 225" change="por devedor ativo" up={false} icon={<TrendingUp size={16} />} color="red" />
      </div>
      <Card>
        <SectionHeader title="Evolução da inadimplência" subtitle="Saldo devedor dos últimos 6 meses" />
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={inadimplencia}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
            <XAxis dataKey="mes" tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#94A3B8" }} axisLine={false} tickLine={false}
              tickFormatter={(v) => `R$${v >= 1000 ? (v/1000).toFixed(1)+"k" : v}`} width={52} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="valor" name="valor" stroke="#EF4444" strokeWidth={2} dot={{ fill: "#EF4444", r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Aviso de dados mockados */}
      <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
        <AlertCircle size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800">
          Os dados desta aba são ilustrativos. Quando o endpoint <code className="bg-amber-100 px-1 rounded">/relatorios/inadimplencia</code> estiver disponível, substitua os dados mockados pela chamada real.
        </p>
      </div>
    </div>
  );
}

const CONTEUDO_ABAS = {
  "visao-geral":   <AbaVisaoGeral />,
  "financeiro":    <AbaFinanceiro />,
  "clientes":      <AbaClientes />,
  "produtos":      <AbaProdutos />,
  "inadimplencia": <AbaInadimplencia />,
};

// ── Página principal ──────────────────────────────────────────────────────────

export default function Relatorios() {
  const [abaAtiva, setAbaAtiva] = useState("visao-geral");

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-violet-50 rounded-xl flex items-center justify-center">
            <BarChart3 size={18} className="text-violet-600" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Relatórios</h1>
            <p className="text-xs text-slate-400">Visão analítica do seu negócio</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition">
            <Calendar size={13} />
            Junho 2025
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition">
            <Download size={13} />
            Exportar
          </button>
        </div>
      </div>

      {/* Aviso geral de dados mockados */}
      <div className="flex items-start gap-2.5 bg-violet-50 border border-violet-100 rounded-xl px-4 py-3">
        <AlertCircle size={15} className="text-violet-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-violet-800">
          Os dados exibidos são ilustrativos. Conforme você implementar os endpoints de relatórios no backend, substitua os dados mockados pelas chamadas reais à API.
        </p>
      </div>

      {/* Abas */}
      <div className="flex gap-1 bg-slate-100 p-1 rounded-xl w-fit flex-wrap">
        {ABAS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setAbaAtiva(key)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition ${
              abaAtiva === key
                ? "bg-white text-violet-700 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Icon size={13} />
            {label}
          </button>
        ))}
      </div>

      {/* Conteúdo da aba ativa */}
      {CONTEUDO_ABAS[abaAtiva]}
    </div>
  );
}
