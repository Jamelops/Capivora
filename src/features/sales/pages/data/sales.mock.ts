export type SaleStatus = 'Pago' | 'Parcialmente pago' | 'Em aberto'

export type Sale = {
  id: number
  product: string
  category: string
  customer: string
  date: string
  total: number
  received: number
  pending: number
  status: SaleStatus
}

export const salesMock: Sale[] = [
  {
    id: 1,
    product: 'Notebook Dell Inspiron',
    category: 'Informática',
    customer: 'Carlos Henrique',
    date: '14/03/2026',
    total: 4500,
    received: 2000,
    pending: 2500,
    status: 'Parcialmente pago',
  },
  {
    id: 2,
    product: 'Monitor LG 27"',
    category: 'Periféricos',
    customer: 'Marina Souza',
    date: '10/03/2026',
    total: 3200,
    received: 3200,
    pending: 0,
    status: 'Pago',
  },
  {
    id: 3,
    product: 'Teclado Mecânico Keychron',
    category: 'Periféricos',
    customer: 'Rafael Lima',
    date: '08/03/2026',
    total: 1100,
    received: 0,
    pending: 1100,
    status: 'Em aberto',
  },
]