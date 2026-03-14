import { LayoutDashboard, Receipt, Smartphone, PlusCircle } from 'lucide-react'
import { routes } from './routes'

export const navItems = [
  {
    label: 'Dashboard',
    path: routes.home,
    icon: LayoutDashboard,
  },
  {
    label: 'Transações',
    path: routes.transactions,
    icon: Receipt,
  },
  {
    label: 'Compras de iPhone',
    path: routes.iphonePurchases,
    icon: Smartphone,
  },
  {
    label: 'Nova compra',
    path: routes.newIphonePurchase,
    icon: PlusCircle,
  },
]