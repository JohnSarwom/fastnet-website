const services = [
  { icon: '⚙️', title: 'Digital Business Transformation', desc: 'Turn paper-based workflows into smart, automated digital systems. Cloud integration, process automation, and operations that are future-ready from day one.', hot: true },
  { icon: '🔒', title: 'Secure Network Infrastructure', desc: 'Expert LAN/WAN design and implementation — connecting offices, branches, and remote teams with seamless, enterprise-grade security.' },
  { icon: '🌐', title: 'Website & Online Branding', desc: 'Professionally designed websites, custom email domains, and social media strategies that grow your brand and connect you with customers online.' },
  { icon: '📶', title: 'Wireless WiFi Deployment', desc: 'Reliable, high-performance wireless networks for offices and commercial facilities — fast, stable connectivity for staff and clients alike.' },
  { icon: '🎓', title: 'Digital Training & Upskilling', desc: 'Hands-on workshops, webinars, and team collaboration tools to build digital capability and close the ICT skills gap within your organisation.' },
  { icon: '🧩', title: 'Tailored Technology Solutions', desc: 'Every business is different. We assess your needs and implement the most cost-effective, practical technology solutions matched to your goals.' },
  { icon: '🏢', title: 'Enterprise IT Consulting', desc: "Strategic ICT planning, vendor management, and multi-year technology roadmaps designed specifically for PNG's evolving business landscape." },
  { icon: '🛰️', title: 'High-Speed Internet Access', desc: 'Where needed, we supplement IT services with LEO satellite internet up to 250 Mbps — keeping your business connected even in remote PNG regions.' },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-[5vw] bg-bg2">
      <div className="text-center mb-16">
        <div className="inline-block bg-pill border border-bright/30 text-white/80 text-[0.72rem] font-bold tracking-[1.5px] uppercase py-1.5 px-4 rounded-full mb-6">Our IT Services</div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] mb-4 tracking-tight">Complete IT Solutions, Built<br />for PNG Businesses</h2>
        <p className="text-muted text-[0.97rem] leading-[1.82] max-w-[560px] mx-auto">From digital transformation and secure network infrastructure to websites, training, and cloud services — FASTNet is your end-to-end IT partner across Papua New Guinea.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((svc) => (
          <div
            key={svc.title}
            className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-250 ${
              svc.hot
                ? 'bg-[linear-gradient(140deg,var(--color-bright),#2048d6)] border border-bright'
                : 'bg-card border border-border hover:-translate-y-1.5 hover:border-bright/40 hover:shadow-[0_20px_50px_rgba(79,123,255,0.12)]'
            }`}
          >
            {/* Top gradient line */}
            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-bright to-cyan origin-left transition-transform duration-300 ${svc.hot ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />

            <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 ${svc.hot ? 'bg-white/20' : 'bg-bright/[0.18]'}`}>
              {svc.icon}
            </div>
            <h3 className="text-[0.95rem] font-bold mb-2">{svc.title}</h3>
            <p className={`text-[0.85rem] leading-[1.7] ${svc.hot ? 'text-white/80' : 'text-muted'}`}>{svc.desc}</p>
            <a href="#contact" className={`inline-flex items-center gap-1 text-[0.8rem] font-semibold mt-4 no-underline transition-colors hover:text-white ${svc.hot ? 'text-white/80' : 'text-muted'}`}>
              Learn more<span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
