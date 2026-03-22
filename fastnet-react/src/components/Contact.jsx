import { useState } from 'react';

const contactInfo = [
  { icon: '📍', label: 'Location', value: 'Kimbe, West New Britain Province, PNG' },
  { icon: '🌐', label: 'Website', value: 'www.fastnet.com.pg' },
  { icon: '✉️', label: 'Email', value: 'info@fastnet.com.pg' },
  { icon: '📞', label: 'Phone', value: '+675 XXX XXXX' },
];

const serviceOptions = [
  'Internet Services (LEO Satellite)',
  'Digital Business Processes',
  'Website & Online Presence',
  'Secure Network Infrastructure',
  'WiFi Deployment',
  'Digital Training & Upskilling',
  'Tailored Technology Solutions',
];

const inputClass =
  'bg-white/[0.05] border border-white/10 text-white rounded-xl py-3 px-4 text-[0.9rem] transition-all focus:outline-none focus:border-bright/60 focus:bg-bright/[0.07]';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-[5vw] bg-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <div className="inline-block bg-pill border border-bright/30 text-white/80 text-[0.72rem] font-bold tracking-[1.5px] uppercase py-1.5 px-4 rounded-full mb-6">Contact Us</div>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] mb-4 tracking-tight">Start the<br />Conversation</h2>
          <p className="text-muted text-[0.97rem] leading-[1.82] max-w-[560px]">Tell us about your business needs and we'll recommend the right ICT solution for you.</p>

          <div className="flex flex-col gap-5 mt-8">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl shrink-0 bg-bright/15 border border-bright/20 flex items-center justify-center text-[1.1rem]" aria-hidden="true">
                  {info.icon}
                </div>
                <div>
                  <h5 className="text-[0.7rem] font-bold tracking-widest uppercase text-muted mb-0.5">{info.label}</h5>
                  <p className="text-[0.9rem] font-medium">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-[0.7rem] font-bold tracking-wider uppercase text-muted">First Name</label>
              <input id="firstName" name="firstName" type="text" required placeholder="John" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-[0.7rem] font-bold tracking-wider uppercase text-muted">Last Name</label>
              <input id="lastName" name="lastName" type="text" required placeholder="Doe" className={inputClass} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[0.7rem] font-bold tracking-wider uppercase text-muted">Email Address</label>
            <input id="email" name="email" type="email" required placeholder="john@company.com.pg" className={inputClass} />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="service" className="text-[0.7rem] font-bold tracking-wider uppercase text-muted">Service Interested In</label>
            <select id="service" name="service" className={`${inputClass} [&>option]:bg-[#0f1140] [&>option]:text-white`}>
              <option value="">Select a service...</option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-[0.7rem] font-bold tracking-wider uppercase text-muted">Message</label>
            <textarea id="message" name="message" required placeholder="Tell us about your business and connectivity needs..." className={`${inputClass} resize-y min-h-[115px]`} />
          </div>

          <button type="submit" className="bg-bright text-white border-none py-3.5 px-8 rounded-xl text-[0.95rem] font-bold cursor-pointer transition-all shadow-[0_0_24px_rgba(79,123,255,0.4)] hover:opacity-90 hover:-translate-y-px">
            {submitted ? "Thanks! We'll be in touch shortly." : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  );
}
