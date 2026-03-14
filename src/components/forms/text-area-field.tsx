import type { TextareaHTMLAttributes } from 'react'

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  error?: string
}

export function TextAreaField({
  label,
  error,
  className = '',
  ...props
}: TextAreaFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300">{label}</label>
      <textarea
        className={`w-full rounded-2xl border px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400/40 ${
          error
            ? 'border-rose-400/50 bg-rose-500/5'
            : 'border-white/10 bg-white/5'
        } ${className}`}
        {...props}
      />
      {error ? <p className="mt-2 text-xs text-rose-400">{error}</p> : null}
    </div>
  )
}