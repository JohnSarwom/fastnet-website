const stats = [
  { value: '7+', label: 'IT Services' },
  { value: '100%', label: 'Local Expertise' },
  { value: 'PNG', label: 'Nationwide' },
  { value: '24/7', label: 'Support' },
  { value: '90%', label: 'Client Satisfaction' },
];

export default function StatsBar() {
  return (
    <div className="flex flex-wrap border-t border-b border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] mt-16 mb-16">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`flex-1 min-w-[140px] text-center py-9 px-[2vw] ${i < stats.length - 1 ? 'border-r border-[rgba(255,255,255,0.07)]' : ''}`}
        >
          <span className="text-[2.2rem] font-extrabold text-bright block leading-none">{s.value}</span>
          <span className="text-[0.7rem] font-semibold tracking-widest uppercase text-muted mt-1.5 block">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
