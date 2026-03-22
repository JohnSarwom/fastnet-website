import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-[5vw] py-4 bg-[rgba(7,8,46,0.8)] backdrop-blur-xl border-b border-white/[0.07]" role="navigation" aria-label="Main navigation">
      <a className="font-extrabold text-[1.35rem] text-white no-underline" href="#">
        <span className="text-bright">FAST</span>Net
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-8 list-none">
        {navItems.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-muted no-underline text-[0.88rem] font-medium transition-colors hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex gap-3 items-center">
        <a href="#" className="hidden sm:inline text-muted no-underline text-[0.88rem] font-medium transition-colors hover:text-white">
          Log In
        </a>
        <a
          href="#contact"
          className="bg-bright text-white py-2 px-5 rounded-lg text-[0.85rem] font-semibold no-underline shadow-[0_0_20px_rgba(79,123,255,0.4)] transition-all hover:opacity-90 hover:-translate-y-px"
        >
          Contact Us
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[rgba(7,8,46,0.95)] backdrop-blur-xl border-b border-white/[0.07] md:hidden">
          <ul className="flex flex-col list-none py-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block px-[5vw] py-3 text-muted no-underline text-[0.95rem] font-medium transition-colors hover:text-white hover:bg-white/[0.04]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="block px-[5vw] py-3 text-muted no-underline text-[0.95rem] font-medium transition-colors hover:text-white hover:bg-white/[0.04]"
                onClick={() => setMenuOpen(false)}
              >
                Log In
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
