import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'HOME', href: '#' },
    { id: 'guide', label: 'GUIDE', href: '#guide' },
    { id: 'preparation', label: 'PREPARATION', href: '#preparation' },
    { id: 'reels', label: 'REELS', href: '#reels' },
    { id: 'events', label: 'EVENTS', href: '#events' },
    { id: 'groups', label: 'GROUPS', href: '#groups' },
    { id: 'committee', label: 'COMMITTEE', href: '#committee' },
    { id: 'gallery', label: 'GALLERY', href: '#gallery' },
    { id: 'aces', label: 'ACES', href: '#aces' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'guide', 'preparation', 'reels', 'events', 'groups', 'committee', 'gallery', 'aces'];

      if (window.scrollY < 400) {
        setActiveSection('hero');
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        if (sectionId === 'hero') continue;
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);

    if (href === '#' || id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-[#F7F5F0]/90 fixed top-0 w-full z-50 backdrop-blur-md border-b border-[#737782]/20 flex justify-between items-center px-4 md:px-16 py-3.5 transition-all">
      {/* Brand Logo & Title */}
      <a
        href="#"
        onClick={(e) => handleNavClick(e, '#', 'hero')}
        className="font-['Syne'] font-extrabold text-2xl md:text-3xl tracking-tighter text-[#000000] flex items-center gap-3 group cursor-pointer"
      >
        <img
          alt="PPTK 2026 Logo"
          className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          src="/logopptk.png"
        />
        <div className="flex items-center">
          <span className="text-[#86adff]">P</span>PTK <span className="text-[#E85A00] ml-1.5">2026</span>
        </div>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex gap-6 lg:gap-8 items-center font-['JetBrains_Mono'] text-xs font-bold tracking-wider">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href, item.id)}
              className={`transition-all duration-150 py-1 px-1.5 ${
                isActive
                  ? 'text-[#E85A00] border-b-2 border-[#E85A00]'
                  : 'text-[#45474c] hover:text-[#000000] hover:bg-[#e4e2e3]/50'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center gap-3">
        <a
          href="#gallery"
          onClick={(e) => handleNavClick(e, '#gallery', 'gallery')}
          className="bg-[#001a42] text-white font-['JetBrains_Mono'] text-[10px] font-bold px-3 py-1.5 chamfered-box"
        >
          GALLERY
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[#000000] focus:outline-none p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded active:bg-[#e4e2e3]"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Backdrop & Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#001a42]/60 backdrop-blur-sm z-40">
          <div className="bg-[#F7F5F0] border-b-4 border-[#001a42] p-6 flex flex-col space-y-3 font-['JetBrains_Mono'] text-sm font-bold shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="text-[10px] text-[#737782] border-b border-[#737782]/20 pb-2 mb-1">
              [ NAVIGATION MENU // PPTK 2026 ]
            </div>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className={`py-2 px-3 chamfered-box flex justify-between items-center ${
                  activeSection === item.id
                    ? 'bg-[#001a42] text-white'
                    : 'text-[#000000] hover:bg-[#e4e2e3]'
                }`}
              >
                <span>// {item.label}</span>
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#guide"
                onClick={(e) => handleNavClick(e, '#guide', 'guide')}
                className="w-full bg-[#E85A00] text-black text-center py-3 block chamfered-box font-extrabold uppercase"
              >
                EXPLORE GUIDELINES
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
