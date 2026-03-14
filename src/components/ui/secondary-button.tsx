import type { ButtonHTMLAttributes } from 'react'

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function SecondaryButton({
  className = '',
  type = 'button',
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    />
  )
}