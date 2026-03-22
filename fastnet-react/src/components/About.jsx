export default function About() {
  return (
    <section id="about" className="py-32 px-[5vw] bg-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block bg-pill border border-[rgba(79,123,255,0.3)] text-[rgba(255,255,255,0.8)] text-[0.72rem] font-bold tracking-[1.5px] uppercase py-1.5 px-4 rounded-full mb-6">Who We Are</div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] mb-4 tracking-tight">PNG's Leading<br />IT Services Company</h2>
          <p className="text-muted text-[0.97rem] leading-[1.82] max-w-[560px] mb-8">FASTNet is a full-service IT solutions company based in Kimbe, West New Britain Province. We help businesses across PNG modernise their operations, secure their networks, build their online presence, and upskill their teams — all under one roof.</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-bright text-white py-3.5 px-8 rounded-[10px] font-bold text-[0.95rem] no-underline shadow-[0_0_30px_rgba(79,123,255,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(79,123,255,0.7)]">
            Get Started <span className="w-7 h-7 rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center text-[0.85rem]">→</span>
          </a>
        </div>

        <div className="flex flex-col gap-5">
          {[
            { badge: 'Our Vision', title: "PNG's Most Trusted ICT Partner", desc: 'To drive economic empowerment through smart, inclusive, and sustainable technology solutions across all of Papua New Guinea.' },
            { badge: 'Our Mission', title: 'Simplify Digital Transformation', desc: 'To provide affordable, innovative, and practical ICT services to businesses of all sizes — especially in remote and underserved communities — unlocking growth and productivity.' },
          ].map((card) => (
            <div key={card.badge} className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -bottom-[30px] -right-[30px] w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle,rgba(79,123,255,0.15),transparent)]" />
              <div className="inline-block bg-pill text-bright text-[0.65rem] font-bold tracking-[1.5px] uppercase py-0.5 px-3 rounded-full mb-4">{card.badge}</div>
              <h3 className="text-[1.1rem] font-bold mb-2">{card.title}</h3>
              <p className="text-[0.87rem] text-muted leading-[1.78]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
