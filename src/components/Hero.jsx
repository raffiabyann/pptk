import React, { useState, useEffect } from 'react';

export default function Hero() {
  const heroPhotos = [
    '/assets/fotoperprod1.jpeg',
    '/assets/fotoperprod2.jpeg',
    '/assets/fotoperprod3.jpeg',
    '/assets/fotoperprod4.jpeg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Preload all hero photos instantly into browser memory
    heroPhotos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroPhotos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroPhotos.length]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[720px] md:min-h-[800px] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-20 md:mb-28 pt-[110px] md:pt-[140px] px-4 md:px-16 max-w-7xl mx-auto w-full">
      {/* Left Column: Headline & Action Buttons */}
      <div className="md:w-1/2 z-10 relative">
        <div className="inline-flex items-center gap-2 bg-[#E85A00] text-black font-['JetBrains_Mono'] text-xs font-bold px-3 py-1 mb-6 shadow-[2px_2px_0px_0px_#001a42] rotate-1">
          <span className="w-2 h-2 rounded-full bg-black"></span>
          PPTK 2026 // TEKNIK KOMPUTER UMN
        </div>

        <h1 className="font-['Syne'] font-extrabold text-[36px] sm:text-[54px] md:text-[70px] text-[#000000] uppercase leading-[0.92] mb-6 md:mb-8 relative tracking-tight">
          <span className="block -ml-0.5">FACE THE UNKNOWN.</span>
          <span className="block text-[#86adff] relative z-10 text-[28px] sm:text-[44px] md:text-[56px] mt-3 md:mt-4">
            UNLOCK YOUR POTENTIAL.
          </span>
        </h1>

        <p className="font-['Libre_Franklin'] text-sm sm:text-base md:text-lg text-[#45474c] mb-8 max-w-lg border-l-4 border-[#E85A00] pl-4">
          Digital archive dan panduan visual perkenalan prodi untuk mahasiswa baru Teknik Komputer Universitas Multimedia Nusantara 2026.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 font-['JetBrains_Mono'] text-xs font-bold">
          <a
            href="#events"
            onClick={(e) => handleSmoothScroll(e, 'events')}
            className="btn-brutalist px-6 md:px-8 py-3.5 md:py-4 uppercase inline-flex items-center gap-2 chamfered-box cursor-pointer active:scale-95 shadow-md"
          >
            <span className="material-symbols-outlined">explore</span>
            Discover Events
          </a>

          <a
            href="#guide"
            onClick={(e) => handleSmoothScroll(e, 'guide')}
            className="bg-white text-[#001a42] border-2 border-[#001a42] px-6 md:px-8 py-3.5 md:py-4 uppercase inline-flex items-center gap-2 chamfered-box hover:bg-[#e4e2e3] transition-colors active:scale-95 shadow-md"
          >
            <span className="material-symbols-outlined">menu_book</span>
            Read Guidelines
          </a>
        </div>
      </div>

      {/* Right Column: Automatic Sliding Editorial Showcase (Non-interactive) */}
      <div className="md:w-1/2 relative h-[360px] sm:h-[440px] md:h-[500px] w-full mt-8 md:mt-0 pointer-events-none select-none">
        {/* Primary Auto-sliding Photo Frame */}
        <div className="absolute right-0 top-0 w-[90%] md:w-[85%] h-[280px] sm:h-[360px] md:h-[420px] polaroid-scrap rotate-1 shadow-2xl overflow-hidden border-4 border-white">
          {heroPhotos.map((photo, idx) => (
            <img
              key={photo}
              src={photo}
              alt="PPTK Visual Showcase"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            />
          ))}
        </div>

        {/* Secondary Layered Frame for Visual Depth */}
        <div className="absolute left-0 bottom-2 w-[65%] md:w-[58%] h-[200px] sm:h-[260px] md:h-[300px] polaroid-scrap -rotate-3 z-20 shadow-xl border-4 border-white overflow-hidden">
          {heroPhotos.map((photo, idx) => {
            const secondaryIdx = (idx + 1) % heroPhotos.length;
            return (
              <img
                key={photo + '-secondary'}
                src={photo}
                alt="PPTK Secondary Showcase"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  secondaryIdx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              />
            );
          })}
        </div>

        {/* Static System Badge */}
        <div className="absolute right-4 sm:right-10 bottom-8 sm:bottom-14 z-30 bg-white border border-[#737782] px-4 py-2.5 shadow-[4px_4px_0px_0px_#001a42] flex items-center gap-2 rotate-3">
          <span className="w-2 h-2 rounded-full bg-[#E85A00]"></span>
          <span className="font-['JetBrains_Mono'] text-[10px] sm:text-xs font-bold text-[#000000] uppercase tracking-widest">
            PPTK 2026 // ARCHIVE
          </span>
        </div>
      </div>
    </section>
  );
}
