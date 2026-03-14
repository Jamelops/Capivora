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
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
          <p className="text-sm text-slate-400">Receitas do mês</p>
          <h3 className="mt-3 text-3xl font-bold text-white">R$ 8.420,00</h3>
          <p className="mt-2 text-sm text-emerald-400">Entradas consolidadas</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
          <p className="text-sm text-slate-400">Despesas do mês</p>
          <h3 className="mt-3 text-3xl font-bold text-white">R$ 4.230,00</h3>
          <p className="mt-2 text-sm text-rose-400">Saídas por categorias</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
          <p className="text-sm text-slate-400">Saldo do mês</p>
          <h3 className="mt-3 text-3xl font-bold text-white">R$ 4.190,00</h3>
          <p className="mt-2 text-sm text-blue-400">Resultado líquido atual</p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_1.6fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
          <div>
            <h2 className="text-2xl font-semibold text-white">Categorias</h2>
            <p className="mt-1 text-sm text-slate-400">
              Acompanhe para onde seu dinheiro está indo.
            </p>
          </div>

          <div className="mt-6 space-y-4">
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
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Histórico financeiro</h2>
              <p className="mt-1 text-sm text-slate-400">
                Entradas e saídas pessoais, incluindo movimentações das operações com iPhone.
              </p>
            </div>

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
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
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
        </div>
      </section>
    </div>
  )
}