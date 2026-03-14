import { LayoutDashboard, Wallet, Smartphone, PlusCircle } from 'lucide-react'
import { routes } from './routes'

export const navItems = [
  {
    label: 'Dashboard',
    path: routes.home,
    icon: LayoutDashboard,
  },
  {
    label: 'Finanças',
    path: routes.finances,
    icon: Wallet,
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