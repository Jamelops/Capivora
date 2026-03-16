import {
  ArrowDownRight,
  ArrowUpRight,
  Funnel,
  Plus,
  Search,
  Wallet,
} from 'lucide-react'

import { SectionCard } from '@/components/ui/section-card'

export function TransactionsPage() {
  const categories = [
    { name: 'Alimentação', total: 'R$ 820,00', color: 'bg-amber-400', percent: '19%' },
    { name: 'Mobilidade', total: 'R$ 460,00', color: 'bg-sky-400', percent: '11%' },
    { name: 'Entretenimento', total: 'R$ 290,00', color: 'bg-pink-400', percent: '7%' },
    { name: 'Operações iPhone', total: 'R$ 2.430,00', color: 'bg-blue-400', percent: '57%' },
  ]

  const transactions = [
    {
      id: 1,
      title: 'Venda de iPhone 13 Pro',
      category: 'Operações iPhone',
      date: '14/03/2026',
      type: 'Receita',
      amount: '+ R$ 4.500,00',
      amountColor: 'text-emerald-400',
    },
    {
      id: 2,
      title: 'Recarga CoinPal',
      category: 'Operações iPhone',
      date: '13/03/2026',
      type: 'Despesa',
      amount: '- R$ 2.100,00',
      amountColor: 'text-rose-400',
    },
    {
      id: 3,
      title: 'Almoço',
      category: 'Alimentação',
      date: '13/03/2026',
      type: 'Despesa',
      amount: '- R$ 42,00',
      amountColor: 'text-rose-400',
    },
    {
      id: 4,
      title: 'Uber',
      category: 'Mobilidade',
      date: '12/03/2026',
      type: 'Despesa',
      amount: '- R$ 28,00',
      amountColor: 'text-rose-400',
    },
    {
      id: 5,
      title: 'Frete internacional',
      category: 'Operações iPhone',
      date: '12/03/2026',
      type: 'Despesa',
      amount: '- R$ 180,00',
      amountColor: 'text-rose-400',
    },
    {
      id: 6,
      title: 'Streaming',
      category: 'Entretenimento',
      date: '11/03/2026',
      type: 'Despesa',
      amount: '- R$ 39,90',
      amountColor: 'text-rose-400',
    },
  ]

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-xl backdrop-blur">
        <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr] xl:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
              Finanças
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white xl:text-[2rem]">
              Histórico financeiro
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Gerencie entradas, saídas e movimentações ligadas ao seu fluxo
              pessoal e às operações com iPhone.
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300/80">
                  Receita consolidada
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  R$ 8.420,00
                </p>
              </div>

              <div className="rounded-2xl border border-rose-500/10 bg-rose-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-rose-300/80">
                  Despesa consolidada
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  R$ 4.230,00
                </p>
              </div>

              <div className="rounded-2xl border border-sky-500/10 bg-sky-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
                  Resultado líquido
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  R$ 4.190,00
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-2.5">
            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
              <p className="text-sm text-slate-400">Visão rápida</p>
              <p className="mt-1.5 font-medium leading-6 text-white">
                As operações de iPhone representam a maior fatia das movimentações deste período.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
              <p className="text-sm text-slate-400">Observação</p>
              <p className="mt-1.5 font-medium leading-6 text-white">
                Seu fluxo segue positivo mesmo com saídas operacionais relevantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 shadow-xl backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Receitas do mês</p>
              <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">
                R$ 8.420,00
              </h3>
            </div>

            <div className="rounded-2xl bg-emerald-500/15 p-2.5 text-emerald-400">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-emerald-400">Entradas consolidadas</p>
            <span className="text-xs text-slate-400">mês atual</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 shadow-xl backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Despesas do mês</p>
              <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">
                R$ 4.230,00
              </h3>
            </div>

            <div className="rounded-2xl bg-rose-500/15 p-2.5 text-rose-400">
              <ArrowDownRight size={18} />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-rose-400">Saídas por categorias</p>
            <span className="text-xs text-slate-400">mês atual</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 shadow-xl backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-slate-400">Saldo do mês</p>
              <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">
                R$ 4.190,00
              </h3>
            </div>

            <div className="rounded-2xl bg-sky-500/15 p-2.5 text-sky-400">
              <Wallet size={18} />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-sky-400">Resultado líquido atual</p>
            <span className="text-xs text-slate-400">positivo</span>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.05fr_1.7fr]">
        <SectionCard
          title="Categorias"
          description="Acompanhe para onde seu dinheiro está indo."
        >
          <div className="space-y-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${category.color}`} />
                    <div>
                      <p className="font-medium text-white">{category.name}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        Participação estimada: {category.percent}
                      </p>
                    </div>
                  </div>

                  <span className="text-sm font-semibold text-slate-200">
                    {category.total}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Histórico financeiro"
          description="Entradas e saídas pessoais, incluindo movimentações das operações com iPhone."
          action={
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="relative">
                <Search
                  size={16}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />
                <input
                  type="text"
                  placeholder="Buscar lançamento..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40 lg:w-[240px]"
                />
              </div>

              <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10">
                <Funnel size={16} />
                Filtrar
              </button>

              <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-400/30 bg-blue-500/20 px-4 py-2.5 text-sm font-medium text-blue-300 transition hover:bg-blue-500/30">
                <Plus size={16} />
                Nova movimentação
              </button>
            </div>
          }
        >
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <div className="grid grid-cols-[1.8fr_1fr_1fr_1fr] bg-white/5 px-5 py-4 text-sm text-slate-400">
              <span>Descrição</span>
              <span>Categoria</span>
              <span>Data</span>
              <span className="text-right">Valor</span>
            </div>

            <div className="divide-y divide-white/10">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="grid grid-cols-[1.8fr_1fr_1fr_1fr] items-center px-5 py-4 text-sm transition hover:bg-white/[0.04]"
                >
                  <div>
                    <p className="font-medium text-white">{transaction.title}</p>
                    <p className="mt-1 text-xs text-slate-500">{transaction.type}</p>
                  </div>

                  <span className="text-slate-300">{transaction.category}</span>
                  <span className="text-slate-300">{transaction.date}</span>
                  <span className={`text-right font-semibold ${transaction.amountColor}`}>
                    {transaction.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>
      </section>
    </div>
  )
}