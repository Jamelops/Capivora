import type { SelectHTMLAttributes, ReactNode } from 'react'

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  children: ReactNode
  error?: string
}

export function SelectField({
  label,
  error,
  className = '',
  children,
  ...props
}: SelectFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300">{label}</label>
      <select
        className={`w-full rounded-2xl border px-4 py-3 text-white outline-none focus:border-blue-400/40 ${
          error
            ? 'border-rose-400/50 bg-rose-500/5'
            : 'border-white/10 bg-[#1b2438]'
        } ${className}`}
        {...props}
      >
        {children}
      </select>
      {error ? <p className="mt-2 text-xs text-rose-400">{error}</p> : null}
    </div>
  )
}