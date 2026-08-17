import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AcesSection() {
  const divisions = [
    {
      id: 'bph',
      fileName: 'bph.exe',
      title: 'BPH',
      role: 'Badan Pengurus Harian',
      caption:
        'Sebagai inti kepemimpinan organisasi, BPH berperan dalam mengarahkan, mengoordinasikan, dan memastikan setiap langkah berjalan selaras dengan visi bersama.',
      coverImage: '/images/aces/bph-divisi.jpg',
      featured: true,
      slides: [
        { url: '/images/aces/bph-roster Kristian Keagan Lim.jpg', name: 'Kristian Keagan Lim', role: 'Ketua ACES' },
        { url: '/images/aces/bph-roster Chandra Firdaus.jpg', name: 'Chandra Firdaus', role: 'Wakil Ketua' },
        { url: '/images/aces/bph-roster Adhityo Hartanto.jpg', name: 'Adhityo Hartanto', role: 'Sekretaris' },
        { url: '/images/aces/bph-roster Malvin Brian Jahanto.jpg', name: 'Malvin Brian Jahanto', role: 'Bendahara' },
      ],
    },
    {
      id: 'akademik',
      fileName: 'akademik.txt',
      title: 'Akademik',
      role: 'Divisi Akademik',
      caption:
        'Mendukung perkembangan intelektual, prestasi, dan semangat belajar anggota.',
      coverImage: '/images/aces/akademik-divisi.jpg',
      slides: [
        { url: '/images/aces/akademik-roster Marchel Raikonnen.jpg', name: 'Marchel Raikonnen', role: 'Lead Akademik' },
        { url: '/images/aces/akademik-roster Andri Abdul Aziz Jaha.jpg', name: 'Andri Abdul Aziz Jaha', role: 'Anggota' },
      ],
    },
    {
      id: 'kesma',
      fileName: 'kesma.net',
      title: 'Kesma',
      role: 'Kesejahteraan Mahasiswa',
      caption:
        'Menjaga kenyamanan, kepedulian, dan kebersamaan antar anggota.',
      coverImage: '/images/aces/kesma-divisi.jpg',
      slides: [
        { url: '/images/aces/kesma-roster Melvin Timothy.jpg', name: 'Melvin Timothy', role: 'Lead Kesma' },
      ],
    },
    {
      id: 'rnd',
      fileName: 'rnd.js',
      title: 'RnD',
      role: 'Research & Development',
      caption:
        'Berfokus pada pengembangan ide, inovasi, serta peningkatan kualitas program organisasi.',
      coverImage: '/images/aces/rnd-divisi.jpg',
      slides: [
        { url: '/images/aces/rnd-roster Raffi Abyan Zizou.jpg', name: 'Raffi Abyan Zizou', role: 'Lead R&D' },
        { url: '/images/aces/rnd-roster Handri Suhandri.jpg', name: 'Handri Suhandri', role: 'Anggota' },
        { url: '/images/aces/rnd-roster Milano Bonaventura Pandey.jpg', name: 'Milano Bonaventura Pandey', role: 'Anggota' },
      ],
    },
    {
      id: 'visual_pr',
      fileName: 'visual&pr.psd',
      title: 'Visual & PR',
      role: 'Visual & Public Relations',
      caption:
        'Tim kreatif yang mengubah ide menjadi karya bermakna melalui desain, publikasi, dan identitas organisasi.',
      coverImage: '/images/aces/visual&pr-divisi.jpg',
      slides: [
        { url: '/images/aces/visual&pr-roster Zachary S Sechan.jpg', name: 'Zachary S Sechan', role: 'Lead Visual & PR' },
        { url: '/images/aces/visual&pr-roster Deswanto Wandy Wong.jpg', name: 'Deswanto Wandy Wong', role: 'Anggota' },
        { url: '/images/aces/visual&pr-roster M Berlino Calvin R.jpg', name: 'M Berlino Calvin R', role: 'Anggota' },
      ],
    },
  ];

  const acesMudaMembers = [
    'Raja Salomo Lumban Tobing',
    'Mohamad Rizki Patriotik',
    'Darius Emmanuel Eudia Hariman',
    'Muhammad Muzakki Rizqullah',
  ];

  const bph = divisions[0];
  const otherDivisions = divisions.slice(1);

  // Modal state
  const [activeModalDiv, setActiveModalDiv] = useState(null);
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  // Touch swipe support
  const touchStartX = useRef(null);

  const openModal = (div) => {
    setActiveModalDiv(div);
    setCurrentSlideIdx(0);
  };

  const closeModal = () => {
    setActiveModalDiv(null);
    setCurrentSlideIdx(0);
  };

  const nextSlide = () => {
    if (!activeModalDiv) return;
    setCurrentSlideIdx((prev) => (prev + 1) % activeModalDiv.slides.length);
  };

  const prevSlide = () => {
    if (!activeModalDiv) return;
    setCurrentSlideIdx((prev) =>
      prev === 0 ? activeModalDiv.slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (activeModalDiv) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModalDiv]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeModalDiv) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalDiv]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  const currentSlide = activeModalDiv?.slides[currentSlideIdx];

  return (
    <section className="mb-28 md:mb-32 px-4 md:px-16 max-w-7xl mx-auto w-full" id="aces">

      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-[#000000] uppercase inline-block border-b-4 border-[#86adff] pb-2 tracking-tight">
          ACES
        </h2>
      </div>

      {/* Intro */}
      <div className="bg-white border-2 border-[#001a42] p-8 md:p-10 shadow-[6px_6px_0px_0px_#001a42] mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 flex items-center gap-4">
            <div className="bg-[#F7F5F0] p-3 border-2 border-[#001a42] shadow-[3px_3px_0px_0px_#001a42] shrink-0">
              <img src="/LogoACES.png" alt="ACES Logo" className="h-14 md:h-16 w-auto object-contain" />
            </div>
            <div>
              <div className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#E85A00] tracking-wider uppercase mb-1">
                // GEN XVI
              </div>
              <h3 className="font-['Syne'] font-extrabold text-2xl md:text-3xl text-[#000000] uppercase tracking-tight leading-none">
                ABOUT <span className="text-[#325ca9]">ACES</span>
              </h3>
            </div>
          </div>
          <div className="lg:col-span-8 font-['Libre_Franklin'] text-base md:text-lg text-[#333333] leading-relaxed border-l-4 border-[#E85A00] pl-6 md:pl-8">
            <p>
              ACES (Association of Computer Engineering Students) adalah himpunan mahasiswa Program Studi Teknik Komputer UMN. ACES menjadi wadah bagi mahasiswa Teknik Komputer untuk berkembang dalam bidang akademik, minat bakat, dan kekeluargaan.
            </p>
          </div>
        </div>
      </div>

      {/* Divisi Label */}
      <div className="flex items-center gap-2 mb-6 font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] tracking-wider uppercase">
        <span className="w-2.5 h-2.5 bg-[#E85A00] inline-block"></span>
        <span>DIVISI ACES GEN XVI</span>
      </div>

      {/* BPH — Featured Card (full width, horizontal) */}
      <div
        onClick={() => openModal(bph)}
        className="bg-white border-2 border-[#001a42] shadow-[6px_6px_0px_0px_#001a42] hover:shadow-[10px_10px_0px_0px_#E85A00] hover:-translate-y-1 transition-all duration-200 cursor-pointer group overflow-hidden mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* BPH Cover Image */}
          <div className="relative h-56 md:h-72 overflow-hidden">
            <img
              src={bph.coverImage}
              alt={bph.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001a42]/60 via-transparent to-transparent md:bg-gradient-to-r"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a42]/50 via-transparent to-transparent md:from-transparent"></div>
            <div className="absolute top-4 left-4 font-['JetBrains_Mono'] text-[11px] font-bold bg-[#001a42]/80 text-[#86adff] px-2.5 py-1 backdrop-blur-sm">
              {bph.fileName}
            </div>
            <div className="absolute bottom-4 left-4 md:hidden">
              <span className="font-['Syne'] font-extrabold text-white text-3xl uppercase tracking-wide drop-shadow-lg">
                {bph.title}
              </span>
            </div>
          </div>

          {/* BPH Info */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="hidden md:block">
              <span className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-[#000000] uppercase tracking-tight">
                {bph.title}
              </span>
            </div>
            <div className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#325ca9] uppercase tracking-wider mt-2 mb-3">
              {bph.role}
            </div>
            <p className="font-['Libre_Franklin'] text-sm text-[#45474c] leading-relaxed mb-5">
              {bph.caption}
            </p>

            {/* BPH Members Preview */}
            <div className="flex flex-wrap gap-2 mb-5">
              {bph.slides.map((s, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-[#F7F5F0] border border-[#001a42]/20 px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E85A00]"></span>
                  <span className="font-['Libre_Franklin'] text-xs font-semibold text-[#000000]">{s.name}</span>
                  <span className="font-['JetBrains_Mono'] text-[9px] text-[#737782]">{s.role}</span>
                </div>
              ))}
            </div>

            <div className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#737782] group-hover:text-[#E85A00] transition-colors">
              Lihat {bph.slides.length} foto pengurus &rarr;
            </div>
          </div>
        </div>
      </div>

      {/* Other 4 Divisions — 2x2 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {otherDivisions.map((div) => (
          <div
            key={div.id}
            onClick={() => openModal(div)}
            className="bg-white border-2 border-[#001a42] shadow-[5px_5px_0px_0px_#001a42] hover:shadow-[8px_8px_0px_0px_#E85A00] hover:-translate-y-1 transition-all duration-200 cursor-pointer group overflow-hidden"
          >
            {/* Cover */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={div.coverImage}
                alt={div.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a42]/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-4">
                <span className="font-['Syne'] font-extrabold text-white text-2xl uppercase tracking-wide drop-shadow-lg">
                  {div.title}
                </span>
              </div>
              <div className="absolute top-3 right-3 font-['JetBrains_Mono'] text-[10px] font-bold bg-[#001a42]/80 text-[#86adff] px-2 py-1 backdrop-blur-sm">
                {div.fileName}
              </div>
            </div>

            {/* Body */}
            <div className="p-4">
              <div className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#325ca9] uppercase tracking-wider mb-1.5">
                {div.role}
              </div>
              <p className="font-['Libre_Franklin'] text-sm text-[#45474c] leading-relaxed mb-3">
                {div.caption}
              </p>
              <div className="pt-3 border-t border-[#737782]/15 font-['JetBrains_Mono'] text-[11px] font-bold text-[#737782] flex justify-between items-center group-hover:text-[#E85A00] transition-colors">
                <span>{div.slides.length} anggota</span>
                <span>Lihat foto &rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ACES Muda */}
      <div className="bg-white border-2 border-[#001a42] p-6 md:p-8 shadow-[6px_6px_0px_0px_#001a42]">
        <div className="flex items-center justify-between mb-6 border-b border-[#737782]/20 pb-4">
          <div>
            <div className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#E85A00] tracking-wider uppercase mb-1">
              // PART OF ACES
            </div>
            <h3 className="font-['Syne'] font-extrabold text-2xl md:text-3xl text-[#000000] uppercase tracking-tight">
              ACES <span className="text-[#325ca9]">MUDA</span>
            </h3>
          </div>
          <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#737782]">
            {acesMudaMembers.length} anggota
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {acesMudaMembers.map((name, idx) => (
            <div
              key={idx}
              className="bg-[#F7F5F0] p-3.5 border border-[#001a42]/30 shadow-[2px_2px_0px_0px_#001a42] hover:shadow-[4px_4px_0px_0px_#E85A00] hover:-translate-y-0.5 transition-all flex items-center gap-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#325ca9] shrink-0"></span>
              <span className="font-['Libre_Franklin'] font-semibold text-sm text-[#000000]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox — starts from individual roster photos */}
      {activeModalDiv && (
        <div
          className="fixed inset-0 z-50 bg-[#001a42]/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="bg-white border-3 border-[#001a42] shadow-[10px_10px_0px_0px_#E85A00] max-w-3xl w-full overflow-hidden flex flex-col max-h-[90vh]">

            {/* Header */}
            <div className="bg-[#001a42] text-white px-5 py-3 flex items-center justify-between font-['JetBrains_Mono'] text-sm shrink-0">
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#86adff]">{activeModalDiv.fileName}</span>
                <span className="text-[#737782] text-xs hidden sm:inline">
                  {activeModalDiv.title} — {activeModalDiv.role}
                </span>
              </div>
              <button
                onClick={closeModal}
                className="text-white hover:text-[#E85A00] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Area — swipeable */}
            <div
              className="bg-[#F7F5F0] relative flex items-center justify-center p-4 h-[50vh] md:h-[55vh]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                key={currentSlideIdx}
                src={currentSlide?.url}
                alt={currentSlide?.name}
                className="max-h-full max-w-full object-contain"
              />

              {activeModalDiv.slides.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#001a42] text-white p-2.5 border-2 border-white shadow-[3px_3px_0px_0px_#E85A00] hover:bg-[#325ca9] active:scale-95 transition-all cursor-pointer"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#001a42] text-white p-2.5 border-2 border-white shadow-[3px_3px_0px_0px_#E85A00] hover:bg-[#325ca9] active:scale-95 transition-all cursor-pointer"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Person Info + Counter */}
            <div className="bg-white px-5 py-3.5 border-t-2 border-[#001a42] shrink-0 flex items-center justify-between">
              <div>
                <div className="font-['Syne'] font-extrabold text-base text-[#000000] uppercase">
                  {currentSlide?.name}
                </div>
                <div className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#325ca9] uppercase">
                  {currentSlide?.role}
                </div>
              </div>
              <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#737782]">
                {currentSlideIdx + 1} / {activeModalDiv.slides.length}
              </span>
            </div>

            {/* Thumbnail Strip */}
            {activeModalDiv.slides.length > 1 && (
              <div className="flex justify-center gap-2 px-5 py-3 bg-[#F7F5F0] border-t border-[#737782]/15 shrink-0 overflow-x-auto">
                {activeModalDiv.slides.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIdx(idx)}
                    className={`h-12 w-12 border-2 overflow-hidden transition-all cursor-pointer shrink-0 ${
                      currentSlideIdx === idx
                        ? 'border-[#E85A00] shadow-[2px_2px_0px_0px_#001a42]'
                        : 'border-[#737782]/40 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={s.url} alt={s.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
