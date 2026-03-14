import type { ButtonHTMLAttributes } from 'react'

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function PrimaryButton({
  className = '',
  type = 'button',
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-2xl border border-blue-400/30 bg-blue-500/20 px-4 py-3 text-sm font-medium text-blue-300 transition hover:bg-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      {...props}
    />
  )
}