import { useNavigate } from 'react-router-dom'
import {
  ArrowDownRight,
  ArrowUpRight,
  PiggyBank,
  Plus,
  Receipt,
  ShoppingBag,
  Smartphone,
  TrendingUp,
  Wallet,
} from 'lucide-react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { SectionCard } from '@/components/ui/section-card'
import { appConfig } from '@/constants/app-config'
import { routes } from '@/constants/routes'

const financialFlowData = [
  { month: 'Jan', income: 5200, expense: 3100 },
  { month: 'Fev', income: 6100, expense: 3600 },
  { month: 'Mar', income: 5900, expense: 4200 },
  { month: 'Abr', income: 6800, expense: 3900 },
  { month: 'Mai', income: 7200, expense: 4400 },
  { month: 'Jun', income: 7600, expense: 4230 },
]

const categoryData = [
  { name: 'Alimentação', value: 860, color: '#10B981' },
  { name: 'Transporte', value: 420, color: '#3B82F6' },
  { name: 'Assinaturas', value: 180, color: '#8B5CF6' },
  { name: 'Lazer', value: 310, color: '#F59E0B' },
  { name: 'Tecnologia', value: 540, color: '#EF4444' },
]

const recentTransactions = [
  {
    title: 'Compra de acessórios',
    date: 'Hoje, 14:20',
    value: '- R$ 320,00',
    type: 'expense',
  },
  {
    title: 'Venda de iPhone 13 Pro',
    date: 'Ontem, 19:10',
    value: '+ R$ 4.500,00',
    type: 'income',
  },
  {
    title: 'Recarga CoinPal',
    date: 'Ontem, 11:05',
    value: '- R$ 2.100,00',
    type: 'expense',
  },
]

const recentPurchases = [
  {
    title: 'iPhone 13 Pro 128GB',
    subtitle: 'Xianyu → ACBuy → CoinPal',
    status: 'Em transporte',
    statusColor: 'text-sky-400',
  },
  {
    title: 'iPhone 14 Pro 256GB',
    subtitle: 'Compra finalizada',
    status: 'Entregue',
    statusColor: 'text-emerald-400',
  },
]

const recentSales = [
  {
    title: 'iPhone 13 Pro 128GB',
    subtitle: 'Vendido para Fulano',
    status: 'Parcialmente pago',
    statusColor: 'text-amber-400',
  },
  {
    title: 'Notebook Dell',
    subtitle: 'Vendido para Ciclano',
    status: 'Pago',
    statusColor: 'text-emerald-400',
  },
]

const insights = [
  'Gastos com transporte subiram 12% nesta semana.',
  'Sua meta mensal já está 71% concluída.',
  'Você teve 3 transações acima de R$ 500 nos últimos 7 dias.',
]

const upcomingBills = [
  { title: 'Netflix', due: 'Vence em 3 dias', value: 'R$ 39,90' },
  { title: 'Internet', due: 'Vence em 5 dias', value: 'R$ 119,90' },
  { title: 'Fatura do cartão', due: 'Vence em 8 dias', value: 'R$ 1.284,00' },
]

function currencyTooltip(value: number) {
  return `R$ ${value.toLocaleString('pt-BR')}`
}

export function DashboardPage() {
  const navigate = useNavigate()
  const { iphone, sales } = appConfig.modules

  const topStats = [
    {
      title: 'Saldo total',
      value: 'R$ 12.480,00',
      hint: '+8.2% este mês',
      hintClass: 'text-emerald-400',
      meta: 'em crescimento',
      metaIcon: <ArrowUpRight size={13} />,
      icon: (
        <div className="rounded-2xl bg-emerald-500/15 p-2.5 text-emerald-400">
          <Wallet size={18} />
        </div>
      ),
    },
    {
      title: 'Gastos do mês',
      value: 'R$ 4.230,00',
      hint: '12 lançamentos recentes',
      hintClass: 'text-rose-400',
      meta: 'mais ativos neste mês',
      metaIcon: null,
      icon: (
        <div className="rounded-2xl bg-rose-500/15 p-2.5 text-rose-400">
          <ArrowDownRight size={18} />
        </div>
      ),
    },
    ...(sales
      ? [
          {
            title: 'Vendas registradas',
            value: '3',
            hint: 'R$ 3.600,00 pendentes',
            hintClass: 'text-amber-400',
            meta: 'módulo ativo',
            metaIcon: null,
            icon: (
              <div className="rounded-2xl bg-violet-500/15 p-2.5 text-violet-400">
                <ShoppingBag size={18} />
              </div>
            ),
          },
        ]
      : []),
    ...(iphone
      ? [
          {
            title: 'Compras de iPhone',
            value: '3 registradas',
            hint: '1 em andamento',
            hintClass: 'text-sky-400',
            meta: 'fluxo ativo',
            metaIcon: null,
            icon: (
              <div className="rounded-2xl bg-sky-500/15 p-2.5 text-sky-400">
                <Smartphone size={18} />
              </div>
            ),
          },
        ]
      : []),
  ]

  const quickActions = [
    {
      title: 'Nova transação',
      subtitle: 'Registrar entrada ou saída',
      icon: <Plus size={18} />,
      wrapper: 'bg-emerald-500/15 text-emerald-400',
      onClick: () => navigate(routes.finances),
    },
    ...(sales
      ? [
          {
            title: 'Nova venda',
            subtitle: 'Registrar produto vendido',
            icon: <ShoppingBag size={18} />,
            wrapper: 'bg-violet-500/15 text-violet-400',
            onClick: () => navigate(routes.sales),
          },
        ]
      : []),
    ...(iphone
      ? [
          {
            title: 'Nova compra de iPhone',
            subtitle: 'Adicionar ao fluxo de importação',
            icon: <Smartphone size={18} />,
            wrapper: 'bg-sky-500/15 text-sky-400',
            onClick: () => navigate(routes.newIphonePurchase),
          },
        ]
      : []),
    {
      title: 'Ver lançamentos',
      subtitle: 'Abrir histórico financeiro',
      icon: <Receipt size={18} />,
      wrapper: 'bg-violet-500/15 text-violet-400',
      onClick: () => navigate(routes.finances),
    },
    {
      title: 'Relatórios',
      subtitle: 'Analisar desempenho do mês',
      icon: <TrendingUp size={18} />,
      wrapper: 'bg-amber-500/15 text-amber-400',
      onClick: () => navigate(routes.home),
    },
  ]

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-xl backdrop-blur">
        <div className="grid gap-5 xl:grid-cols-[1.6fr_1fr] xl:items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
              Painel geral
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white xl:text-[2rem]">
              Visão financeira
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Acompanhe fluxo financeiro, metas, categorias e módulos ativos em um só lugar.
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300/80">
                  Saldo projetado
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  R$ 14.200,00
                </p>
              </div>

              <div className="rounded-2xl border border-sky-500/10 bg-sky-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
                  Meta mensal
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  71% concluída
                </p>
              </div>

              <div className="rounded-2xl border border-violet-500/10 bg-violet-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300/80">
                  Módulos ativos
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {Number(sales) + Number(iphone)} opcionais
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-2.5">
            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
              <p className="text-sm text-slate-400">Principal insight</p>
              <p className="mt-1.5 font-medium leading-6 text-white">
                Seu saldo segue positivo e a estrutura modular do produto mantém o painel adaptável ao perfil do usuário.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
              <p className="text-sm text-slate-400">Status do ambiente</p>
              <p className="mt-1.5 font-medium leading-6 text-white">
                {sales && iphone
                  ? 'Os módulos de vendas e iPhone estão ativos neste cenário.'
                  : sales
                    ? 'Somente o módulo de vendas está ativo neste cenário.'
                    : iphone
                      ? 'Somente o módulo de iPhone está ativo neste cenário.'
                      : 'Apenas o núcleo financeiro está ativo neste cenário.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`grid gap-5 ${topStats.length >= 4 ? 'xl:grid-cols-4' : 'xl:grid-cols-3'}`}>
        {topStats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 shadow-xl backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">{stat.title}</p>
                <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">
                  {stat.value}
                </h3>
              </div>

              {stat.icon}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <p className={`text-sm ${stat.hintClass}`}>{stat.hint}</p>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                {stat.metaIcon}
                <span>{stat.meta}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="grid items-start gap-5 2xl:grid-cols-[1.7fr_1fr]">
        <SectionCard title="Fluxo financeiro dos últimos 6 meses">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-sm text-slate-300">Entradas</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500" />
              <span className="text-sm text-slate-300">Saídas</span>
            </div>
          </div>

          <div className="h-[260px] w-full xl:h-[280px] 2xl:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={financialFlowData}>
                <defs>
                  <linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="expenseFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.28} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis
                  dataKey="month"
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `R$ ${Number(value) / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    background: '#0F172A',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16,
                    color: '#fff',
                  }}
                  formatter={(value) => [currencyTooltip(Number(value)), 'Valor']}
                />

                <Area
                  type="monotone"
                  dataKey="income"
                  stroke="#10B981"
                  fill="url(#incomeFill)"
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  dataKey="expense"
                  stroke="#3B82F6"
                  fill="url(#expenseFill)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </SectionCard>

        <SectionCard title="Ações rápidas">
          <div className="grid gap-2.5">
            {quickActions.map((action) => (
              <button
                key={action.title}
                onClick={action.onClick}
                className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-4 text-left transition hover:bg-white/10"
              >
                <div className={`rounded-xl p-2 ${action.wrapper}`}>{action.icon}</div>
                <div>
                  <p className="font-medium text-white">{action.title}</p>
                  <p className="text-sm text-slate-400">{action.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </SectionCard>
      </section>

      <section className="grid gap-5 2xl:grid-cols-[1.45fr_1fr]">
        <SectionCard title="Últimas movimentações">
          <div className="space-y-3.5">
            {recentTransactions.map((transaction) => (
              <div
                key={`${transaction.title}-${transaction.date}`}
                className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-4"
              >
                <div>
                  <p className="text-lg font-semibold text-white">{transaction.title}</p>
                  <p className="text-sm text-slate-400">{transaction.date}</p>
                </div>

                <p
                  className={`text-xl font-semibold ${
                    transaction.type === 'income' ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {transaction.value}
                </p>
              </div>
            ))}
          </div>
        </SectionCard>

        <div className="grid gap-5">
          <SectionCard title="Meta financeira do mês">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Objetivo</p>
                  <p className="mt-1 text-3xl font-bold text-white">R$ 2.000,00</p>
                </div>

                <div className="rounded-2xl bg-emerald-500/15 p-2.5 text-emerald-400">
                  <PiggyBank size={18} />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Progresso atual</span>
                  <span className="font-medium text-emerald-400">71%</span>
                </div>

                <div className="h-3 rounded-full bg-white/10">
                  <div className="h-3 w-[71%] rounded-full bg-emerald-500" />
                </div>

                <p className="mt-3 text-sm text-slate-400">
                  Você já acumulou <span className="font-medium text-white">R$ 1.420,00</span> da sua meta.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Insights rápidos">
            <div className="space-y-2.5">
              {insights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </section>

      <section
        className={`grid gap-5 ${
          iphone && sales
            ? '2xl:grid-cols-2'
            : iphone || sales
              ? '2xl:grid-cols-[1.45fr_1fr]'
              : 'grid-cols-1'
        }`}
      >
        {iphone && (
          <SectionCard title="Compras recentes">
            <div className="space-y-3.5">
              {recentPurchases.map((purchase) => (
                <div
                  key={purchase.title}
                  className="rounded-2xl bg-white/5 px-4 py-5"
                >
                  <p className="text-xl font-semibold text-white">{purchase.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{purchase.subtitle}</p>
                  <p className={`mt-4 text-sm font-medium ${purchase.statusColor}`}>
                    {purchase.status}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>
        )}

        {sales && (
          <SectionCard title="Vendas recentes">
            <div className="space-y-3.5">
              {recentSales.map((sale) => (
                <div
                  key={sale.title}
                  className="rounded-2xl bg-white/5 px-4 py-5"
                >
                  <p className="text-xl font-semibold text-white">{sale.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{sale.subtitle}</p>
                  <p className={`mt-4 text-sm font-medium ${sale.statusColor}`}>
                    {sale.status}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>
        )}
      </section>

      <section className="grid gap-5 2xl:grid-cols-[1.45fr_1fr]">
        <SectionCard title="Resumo por categorias">
          <div className="grid gap-4 lg:grid-cols-[140px_1fr] lg:items-center">
            <div className="h-[160px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={38}
                    outerRadius={58}
                    paddingAngle={3}
                  >
                    {categoryData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: '#0F172A',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: 16,
                      color: '#fff',
                    }}
                    formatter={(value) => [currencyTooltip(Number(value)), 'Categoria']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2.5">
              {categoryData.map((category) => (
                <div
                  key={category.name}
                  className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-sm text-slate-300">{category.name}</span>
                  </div>
                  <span className="text-sm font-medium text-white">
                    R$ {category.value.toLocaleString('pt-BR')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Próximos compromissos">
          <div className="space-y-2.5">
            {upcomingBills.map((bill) => (
              <div
                key={bill.title}
                className="rounded-2xl bg-white/5 px-4 py-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-white">{bill.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{bill.due}</p>
                  </div>
                  <span className="text-sm font-medium text-white">{bill.value}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>
    </div>
  )
}