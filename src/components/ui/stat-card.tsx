type StatCardProps = {
  label: string
  value: string
  hint?: string
  hintColor?: string
}

export function StatCard({
  label,
  value,
  hint,
  hintColor = 'text-slate-400',
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur">
      <p className="text-sm text-slate-400">{label}</p>
      <h3 className="mt-3 text-3xl font-bold text-white">{value}</h3>
      {hint ? <p className={`mt-2 text-sm ${hintColor}`}>{hint}</p> : null}
    </div>
  )
}