import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { navItems } from '@/constants/nav-items'
import { branding } from '@/assets/branding'

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`relative h-fit shrink-0 rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur transition-all duration-300 ${
        collapsed ? 'w-[96px] px-3 py-4' : 'w-[280px] p-4'
      }`}
    >
      <div
        className={`mb-4 flex items-center ${
          collapsed ? 'justify-center pt-1' : 'justify-between px-2 pt-1'
        }`}
      >
        <div className="flex items-center justify-center">
          {collapsed ? (
            <img
              src={branding.icon}
              alt="Capivora"
              className="h-[64px] w-[64px] object-contain"
            />
          ) : (
            <img
              src={branding.logo}
              alt="Capivora"
              className="h-[64px] w-auto object-contain"
            />
          )}
        </div>

        {!collapsed && (
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            className="rounded-xl p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
            aria-label="Recolher menu"
          >
            <PanelLeftClose size={18} />
          </button>
        )}
      </div>

      {collapsed && (
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="mb-4 flex w-full items-center justify-center rounded-xl p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Expandir menu"
        >
          <PanelLeftOpen size={18} />
        </button>
      )}

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.path}
              to={item.path}
              title={collapsed ? item.label : undefined}
              className={({ isActive }) =>
                `flex items-center rounded-2xl text-sm font-medium transition ${
                  collapsed
                    ? 'justify-center px-3 py-3'
                    : 'gap-3 px-4 py-3'
                } ${
                  isActive
                    ? 'border border-blue-400/30 bg-blue-500/20 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <Icon size={18} />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}