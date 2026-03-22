const points = [
  { num: '01', title: 'End-to-End IT Ownership', desc: 'We design, deploy, and support your entire technology stack — networks, websites, cloud, and staff training — under one roof.' },
  { num: '02', title: "Built for PNG's Business Context", desc: 'We understand the local regulatory environment, infrastructure constraints, and business culture of Papua New Guinea.' },
  { num: '03', title: 'Affordable & Scalable', desc: 'Right-sized IT solutions for SMEs, NGOs, and enterprises — no over-engineering, no unnecessary costs, just what you actually need.' },
  { num: '04', title: 'Backed by Reliable Connectivity', desc: 'Where internet is needed, we provide it — including LEO satellite for remote sites — so your IT systems stay online everywhere.' },
];

const bars = [
  { name: 'Network Infrastructure', val: 'LAN / WAN / WiFi', pct: 100 },
  { name: 'Digital Transformation', val: 'Cloud & Automation', pct: 90 },
  { name: 'Web & Brand Presence', val: 'Sites & Email', pct: 85 },
  { name: 'Staff Training & Upskilling', val: 'Workshops & Webinars', pct: 80 },
  { name: 'Internet & Connectivity', val: 'LEO Satellite', pct: 70 },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-32 px-[5vw] bg-bg2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-block bg-pill border border-[rgba(79,123,255,0.3)] text-[rgba(255,255,255,0.8)] text-[0.72rem] font-bold tracking-[1.5px] uppercase py-1.5 px-4 rounded-full mb-6">Why FASTNet</div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] mb-4 tracking-tight">Your Complete IT Partner<br />Across PNG</h2>
          <p className="text-muted text-[0.97rem] leading-[1.82] max-w-[560px]">We go beyond just connectivity — FASTNet handles every layer of your technology needs, from infrastructure to training, so you can focus on running your business.</p>

          <div className="flex flex-col gap-6 mt-8">
            {points.map((pt) => (
              <div key={pt.num} className="flex gap-4 items-start">
                <div className="w-[34px] h-[34px] rounded-[10px] bg-[rgba(79,123,255,0.18)] border border-[rgba(79,123,255,0.3)] flex items-center justify-center text-[0.78rem] font-extrabold text-bright shrink-0">
                  {pt.num}
                </div>
                <div>
                  <h4 className="text-[0.95rem] font-bold mb-1">{pt.title}</h4>
                  <p className="text-[0.85rem] text-muted leading-[1.65]">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speed visualization */}
        <div className="bg-card border border-border rounded-[20px] p-8">
          <h4 className="text-[0.75rem] font-bold tracking-widest uppercase text-muted mb-7">What FASTNet Delivers</h4>
          {bars.map((bar) => (
            <div key={bar.name} className="mb-5">
              <div className="flex justify-between mb-2">
                <span className="text-[0.82rem] font-medium">{bar.name}</span>
                <span className="text-[0.82rem] font-bold text-bright">{bar.val}</span>
              </div>
              <div className="bg-[rgba(255,255,255,0.07)] rounded-full h-[7px] overflow-hidden">
                <div className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-bright),var(--color-cyan))]" style={{ width: `${bar.pct}%` }} />
              </div>
            </div>
          ))}
          <p className="text-[0.75rem] text-muted text-center mt-6 leading-relaxed">
            FASTNet covers the <strong className="text-white">full IT spectrum</strong> — not just connectivity. We're your technology partner from strategy to daily operations.
          </p>
        </div>
      </div>
    </section>
  );
}
