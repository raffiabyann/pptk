import React from 'react';

export default function ReelsSection() {
  const reels = [
    {
      id: 'introduce',
      title: 'MEET THE TEAM: PERPROD 2026',
      subtitle: 'Perkenalan Panitia & Divisi PPTK',
      desc: 'Pernah kepikiran siapa saja di balik serunya PPTK? Yuk kenalan dengan panitia yang siap mendampingi kamu!',
      url: 'https://www.instagram.com/reel/DcDUQ_Qtuam/',
      coverImg: '/assets/reel_introduce.jpg',
      badge: 'MEET THE TEAM',
    },
    {
      id: 'dos-donts',
      title: "DO'S & DON'TS PERPROD 2026",
      subtitle: 'Panduan & Tata Tertib Peserta',
      desc: 'Simak hal-hal yang wajib dan tidak boleh dilakukan selama Perprod agar kegiatan berjalan lancar & seru!',
      url: 'https://www.instagram.com/reel/DcDWNvPtV-d/',
      coverImg: '/assets/reel_dos_donts.jpg',
      badge: "DO'S & DON'TS",
    },
  ];

  return (
    <section className="mb-28 md:mb-32 px-4 md:px-16 max-w-7xl mx-auto w-full" id="reels">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 bg-[#E85A00] text-black font-['JetBrains_Mono'] text-xs font-bold px-3 py-1 mb-3 shadow-[2px_2px_0px_0px_#001a42]">
          <span>INSTAGRAM MEDIA HIGHLIGHTS</span>
        </div>
        <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-[#000000] uppercase block border-b-4 border-[#86adff] pb-2 tracking-tight max-w-max mx-auto">
          PERPROD REELS
        </h2>
        <p className="font-['Libre_Franklin'] text-sm text-[#45474c] mt-3 max-w-xl mx-auto">
          Saksikan video resmi perkenalan tim & panduan penting peserta PPTK 2026 langsung di Instagram.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
        {reels.map((reel) => (
          <a
            key={reel.id}
            href={reel.url}
            target="_blank"
            rel="noreferrer"
            className="group block bg-white border-4 border-[#001a42] shadow-[8px_8px_0px_0px_#001a42] hover:shadow-[12px_12px_0px_0px_#E85A00] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden chamfered-box"
          >
            {/* Top Bar Header */}
            <div className="bg-[#001a42] text-white px-4 py-2.5 flex items-center justify-between font-['JetBrains_Mono'] text-xs border-b-2 border-[#001a42]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E85A00] animate-pulse"></span>
                <span className="font-bold text-[11px] tracking-wider uppercase">
                  @ppteknikkomputer.umn
                </span>
              </div>
              <span className="text-[10px] font-bold text-[#86adff] uppercase group-hover:text-[#E85A00] transition-colors flex items-center gap-1">
                INSTAGRAM REEL <span className="text-xs">↗</span>
              </span>
            </div>

            {/* Clean Video Cover Thumbnail Container */}
            <div className="relative aspect-[4/5] sm:aspect-[9/12] w-full bg-black overflow-hidden">
              <img
                src={reel.coverImg}
                alt={reel.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Minimal Dark Hover Overlay */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>

            {/* Card Content Footer */}
            <div className="p-5 md:p-6 bg-white">
              <div className="flex items-center justify-between font-['JetBrains_Mono'] text-xs text-[#E85A00] font-bold mb-1">
                <span>// {reel.subtitle}</span>
                <span className="text-[#325ca9] group-hover:translate-x-1 transition-transform">
                  TONTON ↗
                </span>
              </div>
              <h3 className="font-['Syne'] font-extrabold text-xl md:text-2xl text-[#000000] uppercase mb-2 group-hover:text-[#E85A00] transition-colors leading-tight">
                {reel.title}
              </h3>
              <p className="font-['Libre_Franklin'] text-xs md:text-sm text-[#45474c] leading-relaxed">
                {reel.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
