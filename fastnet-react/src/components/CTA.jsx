export default function CTA() {
  return (
    <section className="py-28 px-[5vw] bg-[linear-gradient(135deg,rgba(22,54,184,0.45),rgba(79,123,255,0.18))] border-t border-b border-[rgba(79,123,255,0.2)] text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(79,123,255,0.14),transparent_70%)]" />

      <div className="relative z-[1]">
        <div className="inline-block bg-pill border border-[rgba(79,123,255,0.3)] text-[rgba(255,255,255,0.8)] text-[0.72rem] font-bold tracking-[1.5px] uppercase py-1.5 px-4 rounded-full mb-5">Ready to Transform?</div>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] mb-4 tracking-tight">Let's Modernise Your Business<br />with Smart IT Solutions</h2>
        <p className="text-muted text-base max-w-[480px] mx-auto mb-10 leading-[1.8]">Whether you need a secure network, a new website, cloud integration, or staff training — FASTNet has the right IT solution for your PNG business.</p>
        <a href="#contact" className="inline-flex items-center gap-2 bg-bright text-white py-3.5 px-8 rounded-[10px] font-bold text-[0.95rem] no-underline shadow-[0_0_30px_rgba(79,123,255,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_48px_rgba(79,123,255,0.7)]">
          Get a Free IT Consultation <span className="w-7 h-7 rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center text-[0.85rem]">→</span>
        </a>
      </div>
    </section>
  );
}
