import React from 'react';

export default function HelpdeskSection() {
  const contactName = 'Kak Tyo';
  const contactRole = 'Panitia PPTK 2026';
  const rawPhone = '6285156850945';
  const formattedPhone = '+62 851-5685-0945';
  
  const messageText = encodeURIComponent(
    'Halo Kak Tyo! Saya Mahasiswa Baru Teknik Komputer 2026, mau bertanya seputar PPTK 2026...'
  );
  const waUrl = `https://wa.me/${rawPhone}?text=${messageText}`;

  return (
    <section className="mb-28 md:mb-32 px-4 md:px-16 max-w-7xl mx-auto w-full" id="helpdesk">
      <div className="bg-white border-4 border-[#001a42] p-8 md:p-12 shadow-[8px_8px_0px_0px_#001a42] relative chamfered-box max-w-5xl mx-auto">
        {/* Top Tag */}
        <div className="flex items-center justify-between border-b border-[#737782]/30 pb-4 mb-6">
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00]">
            <span className="w-2.5 h-2.5 bg-[#E85A00] inline-block"></span>
            <span>OFFICIAL HELPDESK // PPTK 2026</span>
          </div>
          <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#325ca9] uppercase tracking-wider hidden sm:inline-block">
            FAST_RESPONSE_CHANNEL
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7">
            <h2 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#000000] uppercase tracking-tight mb-4 leading-tight">
              HAVE QUESTIONS? <br />
              <span className="text-[#325ca9]">ASK OUR TEAM.</span>
            </h2>

            <p className="font-['Libre_Franklin'] text-sm md:text-base text-[#45474c] leading-relaxed border-l-4 border-[#E85A00] pl-4">
              Masih bingung seputar pembagian kelompok, dresscode, atau alur kegiatan Hari-H PPTK 2026? Hubungi panitia resmi kami untuk mendapatkan informasi lengkap.
            </p>
          </div>

          {/* Right Column: Contact Card */}
          <div className="lg:col-span-5 bg-[#F7F5F0] border-2 border-[#001a42] p-6 shadow-[4px_4px_0px_0px_#001a42] chamfered-box">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-[#00C300] text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-md">
                <span className="material-symbols-outlined text-2xl">support_agent</span>
              </div>
              <div>
                <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#E85A00] uppercase block">
                  // CONTACT PERSON
                </span>
                <h3 className="font-['Syne'] font-extrabold text-xl text-[#000000] uppercase">
                  {contactName}
                </h3>
                <span className="font-['JetBrains_Mono'] text-xs text-[#737782]">
                  {contactRole} • {formattedPhone}
                </span>
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#00C300] hover:bg-[#00a800] text-white py-3.5 px-4 font-['JetBrains_Mono'] text-xs font-bold uppercase flex items-center justify-center gap-2 chamfered-box transition-colors shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Chat {contactName} via WhatsApp ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
