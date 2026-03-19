import { useMemo } from 'react'
import {
  BadgeDollarSign,
  Calculator,
  Package,
  Receipt,
  ShoppingBag,
  UserRound,
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { PrimaryButton } from '@/components/ui/primary-button'
import { SecondaryButton } from '@/components/ui/secondary-button'
import { SectionCard } from '@/components/ui/section-card'
import {
  currencyToNumber,
  formatCpfCnpjInput,
  formatCurrency,
  formatCurrencyInput,
  formatPhoneInput,
} from '@/lib/formatters'
import {
  limitCharacters,
  onlyLetters,
  onlyLettersAndCommonText,
  onlyNumbers,
} from '@/lib/sanitizers'

const newSaleSchema = z.object({
  productName: z
    .string()
    .min(2, 'Informe o produto vendido.')
    .max(80, 'Máximo de 80 caracteres.'),
  category: z
    .string()
    .min(2, 'Informe a categoria.')
    .max(40, 'Máximo de 40 caracteres.'),
  customerName: z
    .string()
    .min(2, 'Informe o nome do cliente.')
    .max(80, 'Máximo de 80 caracteres.'),
  customerDocument: z
    .string()
    .min(11, 'Informe um CPF ou CNPJ válido.')
    .max(18, 'Documento inválido.'),
  customerPhone: z
    .string()
    .min(14, 'Informe um telefone válido.')
    .max(15, 'Telefone inválido.'),
  quantity: z
    .string()
    .min(1, 'Informe a quantidade.')
    .refine((value) => Number(value) > 0, 'A quantidade deve ser maior que zero.'),
  unitPrice: z.string().min(1, 'Informe o valor unitário.'),
  receivedAmount: z.string().min(1, 'Informe o valor recebido.'),
  notes: z.string().max(300, 'Máximo de 300 caracteres.').optional(),
})

type NewSaleFormData = z.infer<typeof newSaleSchema>

function getStatusInfo(total: number, received: number) {
  const pending = total - received

  if (received <= 0) {
    return {
      label: 'Em aberto',
      color: 'text-sky-400',
      bg: 'bg-sky-500/15',
    }
  }

  if (pending <= 0) {
    return {
      label: 'Pago',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/15',
    }
  }

  return {
    label: 'Parcialmente pago',
    color: 'text-amber-400',
    bg: 'bg-amber-500/15',
  }
}

export function NewSalePage() {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewSaleFormData>({
    resolver: zodResolver(newSaleSchema),
    defaultValues: {
      productName: '',
      category: '',
      customerName: '',
      customerDocument: '',
      customerPhone: '',
      quantity: '1',
      unitPrice: '',
      receivedAmount: '',
      notes: '',
    },
  })

  const quantity = watch('quantity')
  const unitPrice = watch('unitPrice')
  const receivedAmount = watch('receivedAmount')

  const quantityValue = Number(quantity || 0)
  const unitPriceValue = currencyToNumber(unitPrice)
  const receivedValue = currencyToNumber(receivedAmount)

  const totalValue = useMemo(() => {
    return quantityValue * unitPriceValue
  }, [quantityValue, unitPriceValue])

  const pendingValue = useMemo(() => {
    const result = totalValue - receivedValue
    return result > 0 ? result : 0
  }, [totalValue, receivedValue])

  const status = useMemo(() => {
    return getStatusInfo(totalValue, receivedValue)
  }, [totalValue, receivedValue])

  const onSubmit = async (data: NewSaleFormData) => {
    const payload = {
      ...data,
      quantity: Number(data.quantity),
      unitPrice: currencyToNumber(data.unitPrice),
      receivedAmount: currencyToNumber(data.receivedAmount),
      totalValue,
      pendingValue,
      status: status.label,
      customerDocument: data.customerDocument.replace(/\D/g, ''),
      customerPhone: data.customerPhone.replace(/\D/g, ''),
    }

    console.log('Nova venda:', payload)

    reset()
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-xl backdrop-blur">
        <div className="grid gap-5 xl:grid-cols-[1.6fr_1fr] xl:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
              Módulo de vendas
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white xl:text-[2rem]">
              Nova venda
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Registre uma nova venda, acompanhe o valor recebido e visualize
              rapidamente o saldo pendente da operação.
            </p>
          </div>

          <div className="grid gap-2.5">
            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
              <p className="text-sm text-slate-400">Leitura rápida</p>
              <p className="mt-1.5 font-medium leading-6 text-white">
                Ideal para qualquer tipo de produto, com foco em controle de
                recebimento e cobrança.
              </p>
            </div>
          </div>
        </div>
      </section>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <section className="grid gap-5 xl:grid-cols-[1.7fr_1fr]">
          <SectionCard
            title="Dados da venda"
            description="Informações principais do item vendido e do cliente."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Produto
                </label>
                <input
                  {...register('productName')}
                  type="text"
                  placeholder="Ex.: Notebook Dell, Monitor LG, iPhone 13..."
                  onChange={(e) =>
                    setValue(
                      'productName',
                      limitCharacters(onlyLettersAndCommonText(e.target.value), 80),
                      { shouldValidate: true },
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
                {errors.productName && (
                  <p className="mt-2 text-xs text-rose-400">{errors.productName.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Categoria
                </label>
                <input
                  {...register('category')}
                  type="text"
                  placeholder="Ex.: Eletrônicos"
                  onChange={(e) =>
                    setValue(
                      'category',
                      limitCharacters(onlyLettersAndCommonText(e.target.value), 40),
                      { shouldValidate: true },
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
                {errors.category && (
                  <p className="mt-2 text-xs text-rose-400">{errors.category.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Quantidade
                </label>
                <input
                  {...register('quantity')}
                  type="text"
                  inputMode="numeric"
                  placeholder="1"
                  onChange={(e) =>
                    setValue('quantity', onlyNumbers(e.target.value).slice(0, 4), {
                      shouldValidate: true,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
                {errors.quantity && (
                  <p className="mt-2 text-xs text-rose-400">{errors.quantity.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Cliente
                </label>
                <input
                  {...register('customerName')}
                  type="text"
                  placeholder="Nome do cliente"
                  onChange={(e) =>
                    setValue(
                      'customerName',
                      limitCharacters(onlyLetters(e.target.value), 80),
                      { shouldValidate: true },
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
                {errors.customerName && (
                  <p className="mt-2 text-xs text-rose-400">{errors.customerName.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  CPF / CNPJ
                </label>
                <input
                  {...register('customerDocument')}
                  type="text"
                  inputMode="numeric"
                  placeholder="000.000.000-00"
                  onChange={(e) =>
                    setValue('customerDocument', formatCpfCnpjInput(e.target.value), {
                      shouldValidate: true,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
                {errors.customerDocument && (
                  <p className="mt-2 text-xs text-rose-400">{errors.customerDocument.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Telefone
                </label>
                <input
                  {...register('customerPhone')}
                  type="text"
                  inputMode="numeric"
                  placeholder="(65) 99999-9999"
                  onChange={(e) =>
                    setValue('customerPhone', formatPhoneInput(e.target.value), {
                      shouldValidate: true,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
                {errors.customerPhone && (
                  <p className="mt-2 text-xs text-rose-400">{errors.customerPhone.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Observações
                </label>
                <textarea
                  {...register('notes')}
                  rows={4}
                  placeholder="Informações adicionais sobre a venda, forma de pagamento, prazo combinado, observações gerais..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
                {errors.notes && (
                  <p className="mt-2 text-xs text-rose-400">{errors.notes.message}</p>
                )}
              </div>
            </div>
          </SectionCard>

          <SectionCard
            title="Financeiro"
            description="Valores da venda e controle do que já foi recebido."
          >
            <div className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Valor unitário
                </label>
                <input
                  {...register('unitPrice')}
                  type="text"
                  inputMode="numeric"
                  placeholder="R$ 0,00"
                  onChange={(e) =>
                    setValue('unitPrice', formatCurrencyInput(e.target.value), {
                      shouldValidate: true,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
                {errors.unitPrice && (
                  <p className="mt-2 text-xs text-rose-400">{errors.unitPrice.message}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Valor recebido
                </label>
                <input
                  {...register('receivedAmount')}
                  type="text"
                  inputMode="numeric"
                  placeholder="R$ 0,00"
                  onChange={(e) =>
                    setValue('receivedAmount', formatCurrencyInput(e.target.value), {
                      shouldValidate: true,
                    })
                  }
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40"
                />
                {errors.receivedAmount && (
                  <p className="mt-2 text-xs text-rose-400">{errors.receivedAmount.message}</p>
                )}
              </div>
            </div>
          </SectionCard>
        </section>

        <section className="grid gap-5 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Valor total</p>
                <h3 className="mt-2 text-[2rem] font-bold leading-none text-white">
                  {formatCurrency(totalValue)}
                </h3>
              </div>

              <div className="rounded-2xl bg-violet-500/15 p-2.5 text-violet-400">
                <BadgeDollarSign size={18} />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Recebido</p>
                <h3 className="mt-2 text-[2rem] font-bold leading-none text-emerald-400">
                  {formatCurrency(receivedValue)}
                </h3>
              </div>

              <div className="rounded-2xl bg-emerald-500/15 p-2.5 text-emerald-400">
                <Receipt size={18} />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Pendente</p>
                <h3 className="mt-2 text-[2rem] font-bold leading-none text-amber-400">
                  {formatCurrency(pendingValue)}
                </h3>
              </div>

              <div className="rounded-2xl bg-amber-500/15 p-2.5 text-amber-400">
                <Calculator size={18} />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Status</p>
                <div className="mt-3">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${status.bg} ${status.color}`}
                  >
                    {status.label}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-sky-500/15 p-2.5 text-sky-400">
                <ShoppingBag size={18} />
              </div>
            </div>
          </div>
        </section>

        <SectionCard title="Resumo da venda">
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="rounded-2xl bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2 text-slate-300">
                <Package size={16} />
                <span className="text-sm">Produto</span>
              </div>
              <p className="font-medium text-white">{watch('productName') || 'Não informado'}</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2 text-slate-300">
                <UserRound size={16} />
                <span className="text-sm">Cliente</span>
              </div>
              <p className="font-medium text-white">{watch('customerName') || 'Não informado'}</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2 text-slate-300">
                <Receipt size={16} />
                <span className="text-sm">Telefone</span>
              </div>
              <p className="font-medium text-white">{watch('customerPhone') || 'Não informado'}</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <div className="mb-3 flex items-center gap-2 text-slate-300">
                <BadgeDollarSign size={16} />
                <span className="text-sm">Total</span>
              </div>
              <p className="font-medium text-white">{formatCurrency(totalValue)}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton type="submit" disabled={isSubmitting}>
              Salvar venda
            </PrimaryButton>

            <SecondaryButton type="button" onClick={() => reset()}>
              Limpar campos
            </SecondaryButton>
          </div>
        </SectionCard>
      </form>
    </div>
  )
}