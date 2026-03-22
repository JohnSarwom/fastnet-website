export default function Footer() {
  return (
    <footer className="bg-bg2 border-t border-[rgba(255,255,255,0.07)] py-10 px-[5vw] flex items-center justify-between flex-wrap gap-4">
      <div>
        <div className="font-extrabold text-[1.2rem]"><span className="text-bright">FAST</span>Net Limited</div>
        <p className="text-[0.82rem] text-muted mt-1">Kimbe, West New Britain Province, PNG</p>
      </div>
      <p className="text-[0.82rem] text-muted">© 2025 FASTNet Limited. All rights reserved.</p>
      <div className="flex gap-7">
        {[
          { label: 'Services', href: '#services' },
          { label: 'About', href: '#about' },
          { label: 'Why Us', href: '#why' },
          { label: 'Contact', href: '#contact' },
        ].map((link) => (
          <a key={link.label} href={link.href} className="text-muted no-underline text-[0.82rem] font-medium transition-colors hover:text-white">
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
