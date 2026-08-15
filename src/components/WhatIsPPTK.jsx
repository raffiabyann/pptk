import React from 'react';

export default function WhatIsPPTK() {
  return (
    <section className="mb-20 md:mb-28 px-4 md:px-16 max-w-7xl mx-auto w-full" id="about">
      <div className="bg-white border-2 border-[#001a42] p-8 md:p-12 shadow-[6px_6px_0px_0px_#001a42]">
        <div className="flex items-center gap-2 mb-6 font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] tracking-wider uppercase">
          <span className="w-2.5 h-2.5 bg-[#E85A00] inline-block"></span>
          <span>PPTK 2026 // ORIENTASI PRODI</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="font-['Syne'] font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#000000] uppercase tracking-tight leading-none">
              WHAT IS <br className="hidden sm:inline" />
              <span className="text-[#325ca9]">PPTK?</span>
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-5 font-['Libre_Franklin'] text-base sm:text-lg text-[#333333] leading-relaxed border-l-4 border-[#E85A00] pl-6 md:pl-8">
            <p>
              PPTK merupakan rangkaian kegiatan pengenalan Program Studi Teknik Komputer UMN yang membantu mahasiswa baru mengenal lingkungan akademik, budaya, dan berbagai bidang yang ada di Teknik Komputer.
            </p>
            <p>
              Lewat rangkaian kegiatan ini, mahasiswa baru diajak mengenal lebih dekat kehidupan perkuliahan, teman satu angkatan, serta komunitas yang akan menjadi bagian dari perjalanan mereka di Teknik Komputer UMN.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
