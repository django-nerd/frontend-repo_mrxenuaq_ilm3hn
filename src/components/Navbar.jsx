import { useEffect, useState } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

function smoothScrollTo(id) {
  const el = document.querySelector(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    smoothScrollTo(href);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${
      scrolled ? 'bg-black/70 backdrop-blur-md border-b border-red-700/30' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#home" onClick={(e)=>handleNavClick(e,'#home')} className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-red-600">
              <Wrench className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-wide">FlowForge Tools</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e)=>handleNavClick(e,item.href)}
                className="text-sm text-zinc-300 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-red-600 hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#products"
              onClick={(e)=>handleNavClick(e,'#products')}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 transition"
            >
              Shop Now
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-200 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e)=>handleNavClick(e,item.href)}
                  className="rounded-md px-3 py-2 text-zinc-200 hover:bg-zinc-900/60 hover:text-white transition"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#products"
                onClick={(e)=>handleNavClick(e,'#products')}
                className="rounded-md bg-red-600 px-3 py-2 text-white text-center"
              >
                Shop Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
