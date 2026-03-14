import { NavLink } from 'react-router-dom'
import { navItems } from '@/constants/nav-items'

export function Sidebar() {
  return (
    <aside className="w-full max-w-xs rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur">
      <div className="mb-6 px-3 pt-2">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Sistema
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white">PhoneLedger</h2>
      </div>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-blue-500/20 text-white border border-blue-400/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}