import React from 'react';

export default function TimelineSection() {
  const events = [
    {
      id: 'EVT-001',
      stage: 'STAGE_01',
      title: 'Briefing Day',
      date: '15 Agt 2026',
      time: '13.00 - 15.00 WIB (Zoom)',
      mode: 'Daring / Zoom Meeting',
    },
    {
      id: 'EVT-002',
      stage: 'STAGE_02_MAIN',
      title: 'Main Event PPTK',
      date: '18 Agt 2026',
      time: 'After OMB',
      mode: 'Luring / Kampus UMN',
    },
  ];

  return (
    <section className="mb-28 md:mb-32 px-4 md:px-16 max-w-7xl mx-auto w-full" id="events">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-[#000000] uppercase inline-block border-b-4 border-[#86adff] pb-2 tracking-tight">
          CRITICAL TIMELINES
        </h2>
        <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#45474c] mt-4 uppercase tracking-widest">
          [ ROADMAP PPTK 2026 — SELESAI ]
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-start">
        {events.map((evt) => (
          <div key={evt.id} className="dossier-card opacity-80">
            {/* Top Bar */}
            <div className="h-7 bg-[#e4e2e3] border-b border-[#737782] flex items-center px-3 justify-between font-['JetBrains_Mono'] text-[10px] font-bold">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00C300]"></div>
                <span className="text-[#45474c] uppercase">
                  RECORD_ID: {evt.id}
                </span>
              </div>
              <span className="px-2 py-0.5 uppercase bg-gray-300 text-gray-700">
                COMPLETED ✓
              </span>
            </div>

            <div className="p-6 md:p-8 relative overflow-hidden bg-[#f0edee]">
              <div className="absolute right-[-20px] top-[-20px] opacity-10">
                <span className="material-symbols-outlined text-[120px] text-[#737782]">
                  check_circle
                </span>
              </div>

              <div className="font-['JetBrains_Mono'] text-xs font-bold mb-2 uppercase tracking-wider text-[#737782]">
                [ {evt.stage} ]
              </div>

              <h3 className="font-['Syne'] font-extrabold text-2xl md:text-3xl mb-4 uppercase text-[#737782]">
                {evt.title}
              </h3>

              <ul className="space-y-3 font-['Libre_Franklin'] text-sm md:text-base border-l-2 border-[#737782]/40 pl-4 text-[#737782]">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#737782]">calendar_month</span>
                  <span className="font-bold">{evt.date}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#737782]">schedule</span>
                  <span>{evt.time}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#737782]">pin_drop</span>
                  <span>{evt.mode}</span>
                </li>
              </ul>

              <div className="mt-6 pt-3 border-t border-[#737782]/30 font-['JetBrains_Mono'] text-xs font-bold">
                <span className="text-[#00C300] flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  SELESAI
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
