import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const photos = {
  bersama: [
    { src: '/images/gallery/foto-maba1.jpg' },
    { src: '/images/gallery/foto-maba2.jpg' },
    { src: '/images/gallery/fotomaba-panitia1.jpg' },
    { src: '/images/gallery/fotomaba-panitia2.jpg' },
  ],
  pemenang: [
    { src: '/images/gallery/juara-grup-kelompokpwm.jpg', isWinner: true },
    { src: '/images/gallery/fotobest1.jpg' },
    { src: '/images/gallery/fotobest2.jpg' },
    { src: '/images/gallery/fotobest3.jpg' },
  ],
  dokumentasi: [
    { src: '/images/gallery/doc-dsc_0027.jpg' },
    { src: '/images/gallery/doc-dsc_0100.jpg' },
    { src: '/images/gallery/doc-dsc_0210.jpg' },
    { src: '/images/gallery/doc-dsc_0273.jpg' },
    { src: '/images/gallery/doc-dsc_0329.jpg' },
    { src: '/images/gallery/doc-dsc_0337.jpg' },
    { src: '/images/gallery/doc-dsc_0348.jpg' },
    { src: '/images/gallery/doc-dsc_0434.jpg' },
    { src: '/images/gallery/img_3083.jpg' },
    { src: '/images/gallery/img_3094.jpg' },
    { src: '/images/gallery/img_3118.jpg' },
    { src: '/images/gallery/img_3143.jpg' },
    { src: '/images/gallery/img_3160.jpg' },
    { src: '/images/gallery/img_3214.jpg' },
    { src: '/images/gallery/img_3307.jpg' },
    { src: '/images/gallery/img_3310.jpg' },
    { src: '/images/gallery/img_3313.jpg' },
  ],
};

const segments = [
  { key: 'bersama', label: 'Foto Bersama', count: photos.bersama.length },
  { key: 'pemenang', label: 'Pemenang', count: photos.pemenang.length },
  { key: 'dokumentasi', label: 'Dokumentasi', count: photos.dokumentasi.length },
];

export default function GallerySection() {
  const [activeSegment, setActiveSegment] = useState('bersama');
  const [lightbox, setLightbox] = useState(null);
  const touchStartX = useRef(null);

  const currentPhotos = photos[activeSegment] || [];

  const openLightbox = (index) => {
    setLightbox({ list: currentPhotos, index });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const goNext = () => {
    if (!lightbox) return;
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.list.length,
    }));
  };

  const goPrev = () => {
    if (!lightbox) return;
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.list.length) % prev.list.length,
    }));
  };

  // Keyboard navigation
  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = 'hidden';

    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightbox]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  const activePhoto = lightbox ? lightbox.list[lightbox.index] : null;

  return (
    <section className="mb-24 md:mb-32 px-4 md:px-12 max-w-6xl mx-auto w-full" id="gallery">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-['Syne'] font-bold text-3xl md:text-5xl text-[#001a42] uppercase tracking-tight inline-block border-b-4 border-[#86adff] pb-2">
          GALLERY
        </h2>
      </div>

      {/* Segment Selector: Clean Pill Floating Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-[#e8e6e1] p-1.5 rounded-full shadow-inner gap-1">
          {segments.map((seg) => {
            const isActive = activeSegment === seg.key;
            return (
              <button
                key={seg.key}
                onClick={() => setActiveSegment(seg.key)}
                className={`px-5 py-2 rounded-full font-['Libre_Franklin'] text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#001a42] text-white shadow-md'
                    : 'text-[#45474c] hover:text-[#000000] hover:bg-black/5'
                }`}
              >
                <span>{seg.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-['JetBrains_Mono'] ${
                    isActive ? 'bg-[#E85A00] text-white' : 'bg-black/10 text-[#737782]'
                  }`}
                >
                  {seg.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Special Highlight for PEMENANG Segment: Juara 1 Hero Feature on top */}
      {activeSegment === 'pemenang' ? (
        <div className="space-y-8">
          {/* Main Winner Spotlight (Full Width / Featured Card) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E85A00]"></span>
              <h3 className="font-['JetBrains_Mono'] text-xs font-bold text-[#001a42] uppercase tracking-wider">
                JUARA KELOMPOK — PWM
              </h3>
            </div>
            <div
              onClick={() => openLightbox(0)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-black/10 shadow-md hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={currentPhotos[0].src}
                  alt="Juara Kelompok PWM PPTK 2026"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Sub Winners / Peserta Terbaik (3 Columns Grid Below) */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#325ca9]"></span>
              <h3 className="font-['JetBrains_Mono'] text-xs font-bold text-[#001a42] uppercase tracking-wider">
                PESERTA TERBAIK
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
              {currentPhotos.slice(1).map((photo, idx) => {
                const originalIndex = idx + 1;
                return (
                  <div
                    key={photo.src}
                    onClick={() => openLightbox(originalIndex)}
                    className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-black/10 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                  >
                    <img
                      src={photo.src}
                      alt="Peserta Terbaik PPTK 2026"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Regular Clean Grid for Foto Bersama & Dokumentasi */
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {currentPhotos.map((photo, i) => (
            <div
              key={photo.src}
              onClick={() => openLightbox(i)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl border border-black/10 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
            >
              <img
                src={photo.src}
                alt="Dokumentasi PPTK 2026"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightbox &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-4 right-4 z-50 flex items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Download Button */}
              <a
                href={activePhoto.src}
                download
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-[#E85A00] text-white px-4 py-2 font-['Libre_Franklin'] text-xs font-semibold rounded-full transition-all duration-200 border border-white/20 shadow-sm"
                title="Download Foto"
              >
                <span className="material-symbols-outlined text-base">download</span>
                <span>Download</span>
              </a>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors border border-white/20 cursor-pointer"
                title="Tutup (Esc)"
              >
                <span className="material-symbols-outlined text-2xl block">close</span>
              </button>
            </div>

            {/* Prev Navigation */}
            {lightbox.list.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-3 rounded-full transition-colors hidden sm:block cursor-pointer backdrop-blur-sm"
                title="Foto Sebelumnya"
              >
                <span className="material-symbols-outlined text-3xl block">chevron_left</span>
              </button>
            )}

            {/* Main Image in Lightbox */}
            <div
              className="max-w-5xl w-full flex flex-col items-center justify-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activePhoto.src}
                alt="Dokumentasi PPTK 2026"
                className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl select-none"
              />
              <div className="mt-3.5 font-['JetBrains_Mono'] text-xs text-white/50 tracking-wider">
                {lightbox.index + 1} / {lightbox.list.length}
              </div>
            </div>

            {/* Next Navigation */}
            {lightbox.list.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-3 rounded-full transition-colors hidden sm:block cursor-pointer backdrop-blur-sm"
                title="Foto Selanjutnya"
              >
                <span className="material-symbols-outlined text-3xl block">chevron_right</span>
              </button>
            )}
          </div>,
          document.body
        )}
    </section>
  );
}
