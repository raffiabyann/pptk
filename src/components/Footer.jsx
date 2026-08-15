import React from 'react';
import { useToast } from './Toast';

export default function Footer() {
  const { showToast } = useToast();

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('aces@umn.ac.id');
    showToast('Email aces@umn.ac.id disalin ke clipboard!', 'success');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#e4e2e3] w-full relative border-t-2 border-[#000000] grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 py-12 md:py-16 font-['Libre_Franklin'] text-sm">
      {/* Left Column */}
      <div>
        <img
          alt="PPTK 2026 Logo"
          className="h-14 md:h-16 w-auto object-contain mb-4"
          src="/logopptk.png"
        />
        <div className="font-['Syne'] text-3xl md:text-5xl font-extrabold text-[#000000] mb-3 uppercase tracking-tighter">
          <span className="text-[#86adff]">P</span>PTK <span className="text-[#E85A00]">2026</span>
        </div>
        <p className="font-['JetBrains_Mono'] text-xs text-[#45474c] uppercase tracking-wider mb-4 max-w-xs">
          © 2026 PPTK COMPUTER ENGINEERING UMN. ALL RIGHTS RESERVED.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex flex-col md:items-end justify-between space-y-6">
        <div className="flex flex-col md:items-end gap-3 font-['JetBrains_Mono'] text-xs font-bold">
          <button
            onClick={handleCopyEmail}
            className="text-[#45474c] hover:text-[#E85A00] transition-colors duration-200 flex items-center gap-2 text-left"
            title="Klik untuk menyalin email"
          >
            <span className="material-symbols-outlined text-sm">mail</span>
            <span>aces@umn.ac.id</span>
            <span className="text-[10px] bg-[#001a42] text-white px-1.5 py-0.5 rounded">COPY</span>
          </button>

          <a
            className="text-[#45474c] hover:text-[#E85A00] transition-colors duration-200 flex items-center gap-2"
            href="https://instagram.com/acesumn"
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-sm">alternate_email</span>
            <span>@acesumn</span>
          </a>

          <a
            className="text-[#45474c] hover:text-[#E85A00] transition-colors duration-200 flex items-center gap-2"
            href="https://instagram.com/ppteknikkomputer.umn"
            target="_blank"
            rel="noreferrer"
          >
            <span className="material-symbols-outlined text-sm">alternate_email</span>
            <span>@ppteknikkomputer.umn</span>
          </a>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="btn-brutalist px-4 py-2 font-['JetBrains_Mono'] text-xs font-bold uppercase inline-flex items-center gap-2 chamfered-box self-start md:self-end"
        >
          <span className="material-symbols-outlined text-sm">arrow_upward</span>
          Back To Top
        </button>
      </div>
    </footer>
  );
}
