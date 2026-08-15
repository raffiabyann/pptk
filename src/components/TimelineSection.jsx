import React, { useState } from 'react';
import { useToast } from './Toast';

export default function TimelineSection() {
  const { showToast } = useToast();
  const [activeEvent, setActiveEvent] = useState(null);

  const events = [
    {
      id: 'EVT-001',
      stage: 'STAGE_01',
      title: 'Briefing Day',
      date: '15 Agt 2026',
      time: '13.00 - 15.00 WIB',
      mode: 'Daring / Zoom',
      icon: 'video_camera_front',
      dotColor: 'bg-[#E85A00]',
      bgColor: 'bg-white',
      textColor: 'text-[#000000]',
      subTextColor: 'text-[#45474c]',
      stageColor: 'text-[#86adff]',
      description:
        'Sesi pengenalan daring untuk briefing awal kegiatan PPTK 2026. Pembacaan tata tertib, penjelasan kelompok, pengenalan pembimbing/mentor, serta persiapan menuju Main Event.',
      locationDetail: 'Platform Zoom Meeting (Link dibagikan via grup angkatan)',
    },
    {
      id: 'EVT-002',
      stage: 'STAGE_02_MAIN',
      title: 'Main Event',
      date: '18 Agt 2026',
      time: '11.45 - 16.50 WIB',
      mode: 'Luring / Kampus UMN',
      icon: 'location_on',
      dotColor: 'bg-[#ba1a1a]',
      bgColor: 'bg-[#141c2b]',
      textColor: 'text-white',
      subTextColor: 'text-[#f3f0f1]',
      stageColor: 'text-[#E85A00]',
      description:
        'Acara utama perkenalan Program Studi Teknik Komputer UMN. Menampilkan talkshow pengenalan prodi & kurikulum, demo fasilitas Laboratorium Komputer/IoT/Network, serta pengenalan ACES UMN.',
      locationDetail: 'Gedung Utama Universitas Multimedia Nusantara (Luring)',
    },
  ];

  const handleEventClick = (evt) => {
    setActiveEvent(evt);
  };

  const handleAddToCalendar = (evt) => {
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      'PPTK 2026 Teknik Komputer UMN - ' + evt.title
    )}&details=${encodeURIComponent(evt.description)}&location=${encodeURIComponent(evt.locationDetail)}`;
    window.open(googleCalUrl, '_blank');
    showToast(`Google Calendar dibuka untuk ${evt.title}!`, 'success');
  };

  return (
    <section className="mb-28 md:mb-32 px-4 md:px-16 max-w-7xl mx-auto w-full" id="events">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-[#000000] uppercase inline-block border-b-4 border-[#86adff] pb-2 tracking-tight">
          CRITICAL TIMELINES
        </h2>
        <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#45474c] mt-4 uppercase tracking-widest">
          [ UPCOMING INITIALIZATION EVENTS ]
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-start">
        {events.map((evt) => (
          <div
            key={evt.id}
            onClick={() => handleEventClick(evt)}
            className="dossier-card group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="h-5 bg-[#e4e2e3] border-b border-[#737782] flex items-center px-3 justify-between">
              <div className="flex items-center">
                <div className={`w-2.5 h-2.5 rounded-full ${evt.dotColor}`}></div>
                <span className="font-['JetBrains_Mono'] text-[10px] font-bold ml-2 text-[#45474c] uppercase tracking-widest">
                  RECORD_ID: {evt.id}
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[9px] font-bold text-[#325ca9] opacity-0 group-hover:opacity-100 transition-opacity">
                KLIK UTK DETAIL →
              </span>
            </div>

            <div className={`p-6 md:p-8 relative overflow-hidden ${evt.bgColor}`}>
              <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
                <span className={`material-symbols-outlined text-[120px] ${evt.textColor}`}>
                  {evt.icon}
                </span>
              </div>

              <div className={`font-['JetBrains_Mono'] text-xs font-bold mb-2 uppercase tracking-wider ${evt.stageColor}`}>
                [ {evt.stage} ]
              </div>

              <h3 className={`font-['Syne'] font-bold text-2xl md:text-3xl mb-4 uppercase ${evt.textColor}`}>
                {evt.title}
              </h3>

              <ul className={`space-y-3 font-['Libre_Franklin'] text-sm md:text-base border-l-2 border-[#737782]/40 pl-4 ${evt.subTextColor}`}>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#E85A00]">calendar_month</span>
                  <span className="font-bold">{evt.date}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#737782]">schedule</span>
                  <span>{evt.time}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#737782]">
                    {evt.mode.includes('Zoom') ? 'desktop_windows' : 'pin_drop'}
                  </span>
                  <span>{evt.mode}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Event Detail Modal */}
      {activeEvent && (
        <div
          onClick={() => setActiveEvent(null)}
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-lg w-full p-6 border-4 border-[#001a42] shadow-[8px_8px_0px_0px_#E85A00] relative chamfered-box animate-in zoom-in-95 duration-150"
          >
            <div className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] mb-1">
              // RECORD: {activeEvent.id} [{activeEvent.stage}]
            </div>
            <h3 className="font-['Syne'] font-extrabold text-2xl text-[#000000] uppercase mb-4">
              {activeEvent.title}
            </h3>

            <p className="font-['Libre_Franklin'] text-sm text-[#45474c] leading-relaxed mb-6">
              {activeEvent.description}
            </p>

            <div className="bg-[#f0edee] p-4 border border-[#737782]/30 mb-6 font-['JetBrains_Mono'] text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#000000]">
                <span className="material-symbols-outlined text-[#E85A00] text-sm">calendar_today</span>
                <span className="font-bold">{activeEvent.date} ({activeEvent.time})</span>
              </div>
              <div className="flex items-center gap-2 text-[#45474c]">
                <span className="material-symbols-outlined text-[#325ca9] text-sm">place</span>
                <span>{activeEvent.locationDetail}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleAddToCalendar(activeEvent)}
                className="btn-brutalist flex-1 py-3 font-['JetBrains_Mono'] text-xs font-bold uppercase flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">event</span>
                Tambah ke Google Calendar
              </button>
              <button
                onClick={() => setActiveEvent(null)}
                className="bg-[#e4e2e3] text-black border border-[#737782] px-4 py-3 font-['JetBrains_Mono'] text-xs font-bold uppercase hover:bg-white"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
