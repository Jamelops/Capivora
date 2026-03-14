import type { PropsWithChildren, ReactNode } from 'react'

type SectionCardProps = PropsWithChildren<{
  title?: string
  description?: string
  action?: ReactNode
  className?: string
}> 

export function SectionCard({
  title,
  description,
  action,
  className = '',
  children,
}: SectionCardProps) {
  return (
    <section
      className={`rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur ${className}`}
    >
      {(title || description || action) && (
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            {title ? (
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
            ) : null}

            {description ? (
              <p className="mt-1 text-sm text-slate-400">{description}</p>
            ) : null}
          </div>

          {action ? <div>{action}</div> : null}
        </div>
      )}

      <div className={title || description || action ? 'mt-6' : ''}>{children}</div>
    </section>
  )
}