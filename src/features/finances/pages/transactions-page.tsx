import { SectionCard } from '@/components/ui/section-card'
import { StatCard } from '@/components/ui/stat-card'

export function TransactionsPage() {
  const categories = [
    { name: 'Alimentação', total: 'R$ 820,00', color: 'bg-amber-400' },
    { name: 'Mobilidade', total: 'R$ 460,00', color: 'bg-sky-400' },
    { name: 'Entretenimento', total: 'R$ 290,00', color: 'bg-pink-400' },
    { name: 'Operações iPhone', total: 'R$ 2.430,00', color: 'bg-blue-400' },
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
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard
          label="Receitas do mês"
          value="R$ 8.420,00"
          hint="Entradas consolidadas"
          hintColor="text-emerald-400"
        />

        <StatCard
          label="Despesas do mês"
          value="R$ 4.230,00"
          hint="Saídas por categorias"
          hintColor="text-rose-400"
        />

        <StatCard
          label="Saldo do mês"
          value="R$ 4.190,00"
          hint="Resultado líquido atual"
          hintColor="text-blue-400"
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_1.6fr]">
        <SectionCard
          title="Categorias"
          description="Acompanhe para onde seu dinheiro está indo."
        >
          <div className="space-y-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${category.color}`} />
                    <span className="font-medium text-white">{category.name}</span>
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
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Buscar lançamento..."
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
              />
              <button className="rounded-2xl border border-blue-400/30 bg-blue-500/20 px-4 py-2.5 text-sm font-medium text-blue-300 transition hover:bg-blue-500/30">
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