type PageIntroProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
      {eyebrow ? (
        <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-2 text-2xl font-semibold text-white">{title}</h2>

      {description ? (
        <p className="mt-2 text-sm text-slate-400">{description}</p>
      ) : null}
    </section>
  )
}