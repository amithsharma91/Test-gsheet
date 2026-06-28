import { useState, useEffect } from 'react';

interface NavbarProps {
  logo?: string;
}

const navItems = [
  { label: 'Home', to: 'hero' },
  { label: 'Upcoming Events', to: 'events' },
  { label: 'How It Works', to: 'how-it-works' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar({ logo = 'EventFlow CMS' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-4 md:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <i className="ri-flashlight-line text-white text-lg"></i>
            </div>
            <span
              className={`font-heading font-bold text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              {logo}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.to}
                href={`#${item.to}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  scrolled
                    ? 'text-gray-700 hover:text-primary-500 hover:bg-primary-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="ml-3 px-5 py-2.5 rounded-lg bg-primary-500 text-white text-sm font-semibold whitespace-nowrap hover:bg-primary-600 transition-all duration-300 cursor-pointer btn-ripple"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-white/95 backdrop-blur-xl border-t border-gray-100">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 text-sm font-medium hover:bg-primary-50 hover:text-primary-500 transition-all duration-200 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-3 rounded-lg bg-primary-500 text-white text-sm font-semibold text-center hover:bg-primary-600 transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}