import React from 'react';

export default function PreparationSection() {
  const items = [
    'Buku Catatan / Notebook',
    'Alat Tulis Lengkap',
    'Bekal Makan Siang',
    'Botol Minum (Tumbler)',
    'Name Tag / Co-Card Identitas Pribadi OMB',
    'Perlengkapan Sholat (bagi yang membutuhkan)',
  ];

  const outfitList = [
    {
      code: 'ATASAN',
      title: 'Kaos Berkerah / Polo',
      desc: 'Sesuai ketentuan warna & standar yang ditetapkan oleh OMB UMN.',
      imgSrc: '/assets/fotopakaian.png',
      alt: 'Kaos Berkerah Polo',
      tag: 'OMBA_TOP',
    },
    {
      code: 'BAWAHAN',
      title: 'Celana Bahan',
      desc: 'Celana bahan rapi berwarna gelap (bukan jeans/chinos/legging).',
      imgSrc: '/assets/fotocelana.png',
      alt: 'Celana Bahan Hitam',
      tag: 'OMBA_BOTTOM',
    },
    {
      code: 'SEPATU',
      title: 'Sepatu Kets Bertali',
      desc: 'Sepatu kets bertali tertutup penuh, rapi, dan nyaman untuk mobilitas.',
      imgSrc: '/assets/fotosepatu.png',
      alt: 'Sepatu Kets Bertali',
      tag: 'OMBA_SHOES',
    },
  ];

  return (
    <section className="mb-28 md:mb-32 px-4 md:px-16 max-w-7xl mx-auto w-full" id="preparation">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-[#000000] uppercase inline-block border-b-4 border-[#86adff] pb-2 tracking-tight">
          PREPARATION GUIDE
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
        {/* Left Column: BARANG YANG DIBUTUHKAN */}
        <div className="lg:col-span-4 dossier-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6 border-b border-[#737782]/20 pb-3">
              <h3 className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] uppercase tracking-wider">
                [ BARANG YANG DIBUTUHKAN ]
              </h3>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#737782] font-semibold">
                REQUIRED_ITEMS
              </span>
            </div>

            <ul className="space-y-4 font-['Libre_Franklin'] text-sm md:text-base text-[#45474c]">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <span className="text-[#E85A00] font-['JetBrains_Mono'] font-bold text-sm border border-[#E85A00]/30 bg-[#E85A00]/10 px-1.5 py-0.5 rounded-sm">
                    0{index + 1}
                  </span>
                  <span className="text-[#000000] font-semibold group-hover:text-[#E85A00] transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-[#737782]/20 font-['JetBrains_Mono'] text-[11px] text-[#737782] bg-[#f0edee] p-3 border border-[#737782]/20">
            💡 <strong className="text-black">Tips:</strong> Pastikan semua perlengkapan dimasukkan ke dalam tas sebelum berangkat ke kampus.
          </div>
        </div>

        {/* Right Column: PAKAIAN YANG HARUS DIGUNAKAN */}
        <div className="lg:col-span-8 dossier-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4 border-b border-[#737782]/20 pb-3">
              <h3 className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] uppercase tracking-wider">
                [ PAKAIAN YANG HARUS DIGUNAKAN ]
              </h3>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#737782] font-semibold">
                DRESSCODE_SPEC
              </span>
            </div>

            <p className="font-['Libre_Franklin'] text-xs md:text-sm text-[#45474c] leading-relaxed mb-6">
              Ketentuan pakaian dan atribut peserta PPTK 2026 mengikuti standar yang telah ditetapkan oleh <strong className="text-black">OMB UMN</strong>.
            </p>

            {/* 3 Outfit Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {outfitList.map((outfit) => (
                <div
                  key={outfit.code}
                  className="bg-[#F7F5F0] border-2 border-[#001a42] p-3.5 flex flex-col justify-between rounded-sm shadow-[3px_3px_0px_0px_#001a42] hover:-translate-y-1 transition-transform duration-200 group"
                >
                  <div>
                    {/* Header Badge */}
                    <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[10px] font-bold mb-2">
                      <span className="bg-[#001a42] text-white px-2 py-0.5 uppercase tracking-widest">
                        {outfit.code}
                      </span>
                      <span className="text-[#E85A00]">{outfit.tag}</span>
                    </div>

                    {/* Image Box */}
                    <div className="h-32 sm:h-36 w-full bg-white border border-[#737782]/30 flex items-center justify-center p-2 mb-3 overflow-hidden">
                      <img
                        src={outfit.imgSrc}
                        alt={outfit.alt}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Title */}
                    <h4 className="font-['Syne'] font-bold text-sm md:text-base text-[#000000] mb-1 leading-snug">
                      {outfit.title}
                    </h4>

                    {/* Description */}
                    <p className="font-['Libre_Franklin'] text-[11px] md:text-xs text-[#45474c] leading-normal">
                      {outfit.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#737782]/20 font-['JetBrains_Mono'] text-[9px] text-[#737782] font-semibold tracking-wider">
                    STATUS: MANDATORY
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
