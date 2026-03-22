export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-[5vw] py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 animate-grid-pulse"
          style={{
            backgroundImage:
              'linear-gradient(rgba(79,123,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,123,255,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating gradient orbs */}
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(79,123,255,0.15)_0%,transparent_70%)] animate-orb1 blur-3xl" />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.1)_0%,transparent_70%)] animate-orb2 blur-3xl" />
        <div className="absolute bottom-[5%] left-[40%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(22,54,184,0.2)_0%,transparent_70%)] animate-orb3 blur-3xl" />

        {/* Top center glow */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[700px] h-[480px] bg-[radial-gradient(ellipse,rgba(79,123,255,0.18)_0%,transparent_70%)]" />

        {/* Scattered dot particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-bright"
            style={{
              top: `${8 + ((i * 37) % 84)}%`,
              left: `${5 + ((i * 53) % 90)}%`,
              opacity: 0.15 + ((i * 17) % 35) / 100,
              animation: `floatC ${3 + (i % 4)}s ${(i % 3)}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Pill */}
      <div className="inline-flex items-center gap-2 bg-pill border border-bright/35 text-white/85 text-[0.78rem] font-semibold tracking-wider py-1.5 px-4 rounded-full mb-6 relative z-[3] animate-fade-up">
        <span className="w-1.5 h-1.5 rounded-full bg-bright shadow-[0_0_8px_var(--color-bright)] animate-blink" />
        Full-Service IT Solutions for PNG Businesses
      </div>

      <h1 className="text-[clamp(2.8rem,6.5vw,5.2rem)] font-extrabold leading-[1.07] mb-5 tracking-tight relative z-[3] animate-fade-up-1">
        Transform Your Business<br />With <span className="text-bright">Smart IT Services</span>
      </h1>

      <p className="text-base leading-[1.78] text-muted max-w-[520px] mx-auto mb-10 relative z-[3] animate-fade-up-2">
        FASTNet delivers complete IT solutions — from digital transformation and secure networks to websites, training, and cloud integration — built specifically for businesses across Papua New Guinea.
      </p>

      <div className="flex gap-4 justify-center flex-wrap relative z-[3] animate-fade-up-3 mb-14">
        <a href="#services" className="inline-flex items-center gap-2 bg-bright text-white py-3.5 px-8 rounded-xl font-bold text-[0.95rem] no-underline shadow-[0_0_30px_rgba(79,123,255,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(79,123,255,0.7)]">
          View Our IT Services <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm" aria-hidden="true">→</span>
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 border border-white/[0.18] text-white py-3.5 px-8 rounded-xl font-semibold text-[0.95rem] no-underline transition-all hover:border-bright/50 hover:bg-bright/[0.08]">
          Get a Free Consultation
        </a>
      </div>

      {/* Floating Cards */}
      <div className="relative z-[3] hidden md:flex gap-6 justify-center items-end flex-wrap animate-fade-up-4">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <div className="bg-white/[0.07] border border-white/[0.13] rounded-2xl p-5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="text-[0.68rem] font-semibold tracking-widest uppercase text-muted mb-1">IT Services Active</div>
            <div className="text-[2rem] font-extrabold text-bright leading-none">7+ <span className="text-base text-white/50">Solutions</span></div>
            <div className="inline-flex items-center gap-1 bg-[rgba(0,200,100,0.15)] text-[#00d464] text-[0.7rem] font-bold py-1 px-3 rounded-full mt-2">
              <span aria-hidden="true">✓</span> End-to-End IT
            </div>
          </div>
          <div className="bg-white/[0.06] border border-white/10 rounded-xl p-4 backdrop-blur-md text-[0.82rem] text-muted">
            <strong className="text-white block mb-0.5">100% Local Expertise</strong>PNG-based IT professionals
          </div>
        </div>

        {/* Center card */}
        <div className="bg-[linear-gradient(160deg,rgba(22,54,184,0.75),rgba(7,8,46,0.95))] border border-bright/35 rounded-2xl p-6 w-60 backdrop-blur-2xl shadow-[0_30px_80px_rgba(79,123,255,0.22)] animate-float">
          <div className="text-[0.7rem] font-bold tracking-widest uppercase text-white/45 mb-2">FASTNet IT Dashboard</div>
          <div className="text-[1.35rem] font-extrabold leading-tight mb-4">Digitalising <span className="text-cyan">Businesses</span><br />Across PNG</div>
          <div className="bg-white/10 rounded-full h-1.5 overflow-hidden mb-1.5">
            <div className="h-full rounded-full bg-gradient-to-r from-bright to-cyan" style={{ width: '87%' }} />
          </div>
          <div className="text-[0.74rem] text-muted leading-relaxed">87% of clients report improved efficiency after FASTNet's digital transformation</div>
          <div className="mt-4 flex gap-2 flex-wrap">
            {['Networks', 'Websites', 'Training'].map((t) => (
              <span key={t} className="bg-white/10 rounded-md py-1 px-3 text-[0.7rem] font-semibold">
                {t} <span aria-hidden="true">✓</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div className="bg-white/[0.06] border border-bright/25 rounded-2xl p-5 w-[195px] backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-float-delayed">
          <div className="inline-flex items-center gap-1 bg-bright/20 text-bright text-[0.68rem] font-bold py-0.5 px-2.5 rounded-full mb-2">
            <span aria-hidden="true">✓</span> Live Project
          </div>
          <div className="text-[0.68rem] text-muted mb-1">Latest Deployment</div>
          <div className="text-[1.2rem] font-extrabold leading-tight mb-1">Secure LAN<br />+ Cloud Setup</div>
          <div className="text-[0.72rem] text-[#00d464] font-semibold">40% Faster Operations</div>
          <div className="flex mt-3 items-center gap-2">
            <div className="flex" aria-hidden="true">
              {[{ bg: '#4f7bff', l: 'A' }, { bg: '#00d4ff', l: 'B' }, { bg: '#7c5cbf', l: 'C' }].map((av, i) => (
                <div
                  key={av.l}
                  className="w-[22px] h-[22px] rounded-full border-2 border-bg flex items-center justify-center text-[0.52rem] font-bold"
                  style={{ background: av.bg, marginLeft: i > 0 ? '-6px' : 0 }}
                >
                  {av.l}
                </div>
              ))}
            </div>
            <span className="text-[0.7rem] text-muted">90% Clients Satisfied</span>
          </div>
        </div>
      </div>
    </section>
  );
}
