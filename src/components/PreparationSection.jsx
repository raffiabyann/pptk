import React from 'react';

export default function PreparationSection() {
  const items = [
    'Buku Catatan / Notebook',
    'Alat Tulis',
    'Bekal Makan',
    'Botol Minum (Tumbler)',
    'Name Tag / Identitas Pribadi dari OMB',
    'Perlengkapan Sholat',
  ];

  return (
    <section className="mb-28 md:mb-32 px-4 md:px-16 max-w-7xl mx-auto w-full" id="preparation">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-[#000000] uppercase inline-block border-b-4 border-[#86adff] pb-2 tracking-tight">
          PREPARATION GUIDE
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
        {/* Left Column: BARANG YANG DIBUTUHKAN */}
        <div className="dossier-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] uppercase mb-6 border-b border-[#737782]/20 pb-2 tracking-wider">
              [ BARANG YANG DIBUTUHKAN ]
            </h3>

            <ul className="space-y-3 font-['Libre_Franklin'] text-sm md:text-base text-[#45474c]">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#E85A00] font-['JetBrains_Mono'] font-bold">•</span>
                  <span className="text-[#000000] font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: PAKAIAN YANG HARUS DIGUNAKAN */}
        <div className="dossier-card p-6 md:p-8 flex flex-col justify-between">
          <div>
            <h3 className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] uppercase mb-6 border-b border-[#737782]/20 pb-2 tracking-wider">
              [ PAKAIAN YANG HARUS DIGUNAKAN ]
            </h3>

            <p className="font-['Libre_Franklin'] text-sm md:text-base text-[#45474c] leading-relaxed mb-6">
              Ketentuan pakaian dan atribut peserta PPTK 2026 mengikuti standar yang telah ditetapkan oleh OMB UMN.
            </p>

            {/* Product Reference Visuals */}
            <div className="grid grid-cols-2 gap-4">
              {/* ATASAN */}
              <div className="bg-[#F7F5F0] p-3 border border-[#737782]/30 flex flex-col items-center justify-between rounded-sm">
                <div className="h-32 sm:h-36 w-full flex items-center justify-center p-1">
                  <img
                    src="/assets/fotopakaian.png"
                    alt="Atasan Polo Shirt Orange"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#001a42] uppercase tracking-wider mt-2 border-t border-[#737782]/20 pt-1.5 w-full text-center">
                  ATASAN
                </span>
              </div>

              {/* BAWAHAN */}
              <div className="bg-[#F7F5F0] p-3 border border-[#737782]/30 flex flex-col items-center justify-between rounded-sm">
                <div className="h-32 sm:h-36 w-full flex items-center justify-center p-1">
                  <img
                    src="/assets/fotocelana.png"
                    alt="Bawahan Celana Hitam"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#001a42] uppercase tracking-wider mt-2 border-t border-[#737782]/20 pt-1.5 w-full text-center">
                  BAWAHAN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
