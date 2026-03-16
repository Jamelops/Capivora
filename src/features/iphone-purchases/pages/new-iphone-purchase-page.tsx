import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ArrowUpRight,
  CircleDollarSign,
  PackageCheck,
  Save,
  Smartphone,
  Truck,
} from 'lucide-react'

import { SectionCard } from '@/components/ui/section-card'
import { PrimaryButton } from '@/components/ui/primary-button'
import { SecondaryButton } from '@/components/ui/secondary-button'
import { TextInput } from '@/components/forms/text-input'
import { SelectField } from '@/components/forms/select-field'
import { TextAreaField } from '@/components/forms/text-area-field'

import {
  iphonePurchaseSchema,
  type IphonePurchaseFormValues,
} from '@/features/iphone-purchases/schemas/iphone-purchase-schema'

export function NewIphonePurchasePage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IphonePurchaseFormValues>({
    resolver: zodResolver(iphonePurchaseSchema),
    defaultValues: {
      model: '',
      storage: '128GB',
      color: '',
      version: '',
      notes: '',
      marketplace: 'Xianyu',
      agent: 'ACBuy',
      paymentMethod: 'CoinPal / Bybit / USDT',
      status: 'Aguardando envio',
      deviceCost: '',
      internalShipping: '',
      internationalShipping: '',
      extraFees: '',
      estimatedSalePrice: '',
    },
  })

  const deviceCost = watch('deviceCost')
  const internalShipping = watch('internalShipping')
  const internationalShipping = watch('internationalShipping')
  const extraFees = watch('extraFees')
  const estimatedSalePrice = watch('estimatedSalePrice')
  const selectedStatus = watch('status')

  const parseCurrency = (value: string) => {
    const normalized = value
      .replace(/\./g, '')
      .replace(',', '.')
      .replace(/[^\d.-]/g, '')

    const parsed = Number(normalized)
    return Number.isNaN(parsed) ? 0 : parsed
  }

  const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

  const totals = useMemo(() => {
    const device = parseCurrency(deviceCost || '')
    const internal = parseCurrency(internalShipping || '')
    const international = parseCurrency(internationalShipping || '')
    const extra = parseCurrency(extraFees || '')
    const estimatedSale = parseCurrency(estimatedSalePrice || '')

    const fees = internal + international + extra
    const totalCost = device + fees
    const estimatedProfit = estimatedSale - totalCost

    return {
      device,
      fees,
      totalCost,
      estimatedSale,
      estimatedProfit,
    }
  }, [
    deviceCost,
    internalShipping,
    internationalShipping,
    extraFees,
    estimatedSalePrice,
  ])

  const statusTone = useMemo(() => {
    switch (selectedStatus) {
      case 'Aguardando envio':
        return 'text-amber-400 bg-amber-500/15 border-amber-500/20'
      case 'Em transporte':
        return 'text-sky-400 bg-sky-500/15 border-sky-500/20'
      case 'Recebido':
      case 'Em análise/testes':
        return 'text-violet-400 bg-violet-500/15 border-violet-500/20'
      case 'Anunciado para venda':
      case 'Reservado':
        return 'text-blue-400 bg-blue-500/15 border-blue-500/20'
      case 'Vendido':
        return 'text-emerald-400 bg-emerald-500/15 border-emerald-500/20'
      case 'Cancelado':
        return 'text-rose-400 bg-rose-500/15 border-rose-500/20'
      default:
        return 'text-slate-300 bg-white/5 border-white/10'
    }
  }, [selectedStatus])

  const onSubmit = async (data: IphonePurchaseFormValues) => {
    console.log('Dados da compra:', data)
    alert('Compra validada com sucesso. Próximo passo: salvar no Supabase.')
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 px-5 py-5 shadow-xl backdrop-blur">
        <div className="grid gap-5 xl:grid-cols-[1.55fr_1fr] xl:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
              Cadastro de compra
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white xl:text-[2rem]">
              Nova compra de iPhone
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Registre aparelho, origem da compra, custos da operação e projeção
              de revenda em um único fluxo.
            </p>

            <div className="mt-4 flex flex-wrap gap-2.5">
              <div className="rounded-2xl border border-sky-500/10 bg-sky-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-sky-300/80">
                  Fluxo padrão
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Xianyu → ACBuy
                </p>
              </div>

              <div className="rounded-2xl border border-violet-500/10 bg-violet-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300/80">
                  Pagamento
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  CoinPal + Bybit
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/10 bg-emerald-500/10 px-3.5 py-2.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300/80">
                  Lucro projetado
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {formatCurrency(totals.estimatedProfit)}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-2.5">
            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
              <p className="text-sm text-slate-400">Status selecionado</p>
              <div
                className={`mt-2 inline-flex rounded-full border px-3 py-1.5 text-sm font-medium ${statusTone}`}
              >
                {selectedStatus}
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3.5">
              <p className="text-sm text-slate-400">Leitura rápida</p>
              <p className="mt-1.5 font-medium leading-6 text-white">
                O sistema já calcula automaticamente custo total e lucro estimado
                conforme os valores preenchidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-6 xl:grid-cols-[1.5fr_0.95fr]"
      >
        <div className="space-y-6">
          <SectionCard title="Informações do aparelho">
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label="Modelo"
                placeholder="Ex: iPhone 13 Pro"
                error={errors.model?.message}
                {...register('model')}
              />

              <SelectField
                label="Armazenamento"
                error={errors.storage?.message}
                {...register('storage')}
              >
                <option value="128GB">128GB</option>
                <option value="256GB">256GB</option>
                <option value="512GB">512GB</option>
                <option value="1TB">1TB</option>
              </SelectField>

              <TextInput
                label="Cor"
                placeholder="Ex: Green"
                error={errors.color?.message}
                {...register('color')}
              />

              <TextInput
                label="Versão"
                placeholder="Ex: US Version / Factory Unlocked"
                error={errors.version?.message}
                {...register('version')}
              />

              <div className="md:col-span-2">
                <TextAreaField
                  label="Observações"
                  rows={4}
                  placeholder="Ex: bateria, condição estética, Face ID, histórico do aparelho..."
                  error={errors.notes?.message}
                  {...register('notes')}
                />
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Origem e logística">
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label="Marketplace"
                placeholder="Ex: Xianyu"
                error={errors.marketplace?.message}
                {...register('marketplace')}
              />

              <TextInput
                label="Agente"
                placeholder="Ex: ACBuy"
                error={errors.agent?.message}
                {...register('agent')}
              />

              <TextInput
                label="Meio de pagamento"
                placeholder="Ex: CoinPal / Bybit / USDT"
                error={errors.paymentMethod?.message}
                {...register('paymentMethod')}
              />

              <SelectField
                label="Status"
                error={errors.status?.message}
                {...register('status')}
              >
                <option value="Aguardando envio">Aguardando envio</option>
                <option value="Em transporte">Em transporte</option>
                <option value="Recebido">Recebido</option>
                <option value="Em análise/testes">Em análise/testes</option>
                <option value="Anunciado para venda">Anunciado para venda</option>
                <option value="Reservado">Reservado</option>
                <option value="Vendido">Vendido</option>
                <option value="Cancelado">Cancelado</option>
              </SelectField>
            </div>
          </SectionCard>

          <SectionCard title="Custos da operação">
            <div className="grid gap-4 md:grid-cols-2">
              <TextInput
                label="Preço do aparelho"
                placeholder="R$ 0,00"
                error={errors.deviceCost?.message}
                {...register('deviceCost')}
              />

              <TextInput
                label="Frete interno / warehouse"
                placeholder="R$ 0,00"
                error={errors.internalShipping?.message}
                {...register('internalShipping')}
              />

              <TextInput
                label="Frete internacional"
                placeholder="R$ 0,00"
                error={errors.internationalShipping?.message}
                {...register('internationalShipping')}
              />

              <TextInput
                label="Taxas extras"
                placeholder="R$ 0,00"
                error={errors.extraFees?.message}
                {...register('extraFees')}
              />
            </div>
          </SectionCard>
        </div>

        <aside className="space-y-6">
          <SectionCard title="Resumo da compra">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Custo do aparelho</p>
                  <p className="mt-1 text-2xl font-bold text-white">
                    {formatCurrency(totals.device)}
                  </p>
                </div>

                <div className="rounded-2xl bg-sky-500/15 p-2.5 text-sky-400">
                  <Smartphone size={18} />
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 px-4 py-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Fretes + taxas</span>
                  <span className="text-white">{formatCurrency(totals.fees)}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Custo total</span>
                  <span className="text-xl font-semibold text-white">
                    {formatCurrency(totals.totalCost)}
                  </span>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Revenda e margem">
            <TextInput
              label="Preço estimado de venda"
              placeholder="R$ 0,00"
              error={errors.estimatedSalePrice?.message}
              {...register('estimatedSalePrice')}
            />

            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl bg-white/5 px-4 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Venda estimada</p>
                    <p className="mt-1 text-xl font-semibold text-white">
                      {formatCurrency(totals.estimatedSale)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-violet-500/15 p-2.5 text-violet-400">
                    <CircleDollarSign size={18} />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 px-4 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Lucro estimado</p>
                    <p
                      className={`mt-1 text-2xl font-bold ${
                        totals.estimatedProfit >= 0
                          ? 'text-emerald-400'
                          : 'text-rose-400'
                      }`}
                    >
                      {formatCurrency(totals.estimatedProfit)}
                    </p>
                  </div>

                  <div
                    className={`rounded-2xl p-2.5 ${
                      totals.estimatedProfit >= 0
                        ? 'bg-emerald-500/15 text-emerald-400'
                        : 'bg-rose-500/15 text-rose-400'
                    }`}
                  >
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Ações">
            <div className="grid gap-3">
              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Salvando...' : 'Salvar compra'}
              </PrimaryButton>

              <SecondaryButton type="button">
                <div className="inline-flex items-center gap-2">
                  <Save size={16} />
                  <span>Salvar como rascunho</span>
                </div>
              </SecondaryButton>
            </div>
          </SectionCard>

          <SectionCard title="Status da operação">
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
                <Truck size={16} className="text-sky-400" />
                <span className="text-sm text-slate-300">
                  Fluxo logístico e comercial preparado para múltiplos estágios.
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
                <PackageCheck size={16} className="text-emerald-400" />
                <span className="text-sm text-slate-300">
                  Depois, lucro estimado e lucro realizado poderão ser tratados separadamente.
                </span>
              </div>
            </div>
          </SectionCard>
        </aside>
      </form>
    </div>
  )
}