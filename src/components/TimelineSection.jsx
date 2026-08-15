import React, { useState } from 'react';
import { useToast } from './Toast';

export default function TimelineSection() {
  const { showToast } = useToast();
  const [activeEvent, setActiveEvent] = useState(null);

  const zoomLink = 'https://us06web.zoom.us/j/83444725198?pwd=oY087Pp5JQrnwXQ3FwxU4OTDcXPidk.1';
  const meetingId = '834 4472 5198';
  const passcode = '343368';

  const briefingRules = [
    'Peserta wajib masuk Zoom tepat waktu.',
    'Gunakan nama lengkap sesuai ketentuan yang telah diberikan.',
    'Kamera menyesuaikan dengan arahan panitia.',
    'Mikrofon dalam keadaan mute selama sesi berlangsung, kecuali jika dipersilakan untuk berbicara.',
    'Harap menyimak materi dengan baik dan tidak meninggalkan Zoom tanpa alasan yang jelas.',
    'Gunakan background Zoom yang telah disediakan.',
    'Tidak diperkenankan melakukan hal-hal yang mengganggu jalannya sesi.',
  ];

  const events = [
    {
      id: 'EVT-001',
      stage: 'STAGE_01',
      title: 'Briefing Day',
      date: '15 Agt 2026',
      time: '13.00 - 15.00 WIB (Zoom Dibuka: 12.45 WIB)',
      mode: 'Daring / Zoom',
      icon: 'video_camera_front',
      dotColor: 'bg-[#E85A00]',
      bgColor: 'bg-white',
      textColor: 'text-[#000000]',
      subTextColor: 'text-[#45474c]',
      stageColor: 'text-[#86adff]',
      description:
        'Sesi pengenalan daring untuk briefing awal kegiatan PPTK 2026. Pembacaan tata tertib, penjelasan kelompok, pengenalan pembimbing/mentor, serta persiapan menuju Main Event.',
      locationDetail: 'Platform Zoom Meeting (Klik untuk link & aturan)',
      isBriefing: true,
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
      isBriefing: false,
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

  const handleCopyZoomCreds = () => {
    const text = `Link Zoom Briefing Day PPTK 2026:\n${zoomLink}\nMeeting ID: ${meetingId}\nPasscode: ${passcode}`;
    navigator.clipboard.writeText(text);
    showToast('Kredensial Zoom Briefing Day berhasil disalin!', 'success');
  };

  return (
    <section className="mb-28 md:mb-32 px-4 md:px-16 max-w-7xl mx-auto w-full" id="events">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-[#000000] uppercase inline-block border-b-4 border-[#86adff] pb-2 tracking-tight">
          CRITICAL TIMELINES
        </h2>
        <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#45474c] mt-4 uppercase tracking-widest">
          [ UPCOMING INITIALIZATION EVENTS — KLIK KARTU UNTUK DETAIL ]
        </p>
      </div>

      {/* Primary Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-start">
        {events.map((evt) => (
          <div
            key={evt.id}
            onClick={() => handleEventClick(evt)}
            className="dossier-card group cursor-pointer hover:-translate-y-2 transition-transform duration-300 relative"
          >
            <div className="h-6 bg-[#e4e2e3] border-b border-[#737782] flex items-center px-3 justify-between">
              <div className="flex items-center">
                <div className={`w-2.5 h-2.5 rounded-full ${evt.dotColor}`}></div>
                <span className="font-['JetBrains_Mono'] text-[10px] font-bold ml-2 text-[#45474c] uppercase tracking-widest">
                  RECORD_ID: {evt.id}
                </span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#E85A00] flex items-center gap-1">
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

              {evt.isBriefing && (
                <div className="mt-6 pt-3 border-t border-[#737782]/30 font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] flex items-center justify-between">
                  <span>⚡ ZOOM LINK & ATURAN TERSEDIA</span>
                  <span>KLIK KARTU →</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Event Detail Modal (Appears when clicking Briefing Day or Main Event) */}
      {activeEvent && (
        <div
          onClick={() => setActiveEvent(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-4xl w-full p-6 md:p-10 border-4 border-[#001a42] shadow-[10px_10px_0px_0px_#001a42] relative chamfered-box animate-in zoom-in-95 duration-150 my-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveEvent(null)}
              className="absolute top-4 right-4 bg-[#001a42] text-white p-2 chamfered-box hover:bg-[#E85A00] transition-colors z-10"
              title="Tutup Modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {activeEvent.isBriefing ? (
              /* Briefing Day Detailed Layout matching design reference */
              <div>
                {/* Header & Zoom Badge */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-[#E85A00]"></span>
                    <h3 className="font-['Syne'] font-extrabold text-2xl md:text-4xl text-[#000000] uppercase tracking-tight">
                      BRIEFING DAY — 15 AGUSTUS 2026
                    </h3>
                  </div>
                  <div className="inline-block bg-[#001a42] text-white font-['JetBrains_Mono'] text-xs font-bold px-3 py-1 chamfered-box">
                    ZOOM DIBUKA: 12.45 WIB
                  </div>
                </div>

                {/* Agenda ISHOMA Notice */}
                <div className="bg-[#86adff]/15 border-l-4 border-[#325ca9] p-4 mb-6 font-['Libre_Franklin'] text-sm md:text-base text-[#001a42]">
                  <span className="font-bold">INFORMASI AGENDA:</span> Setelah sesi informasi OMB selesai, peserta diperbolehkan untuk <span className="font-bold underline">ISHOMA</span> terlebih dahulu sebelum masuk ke sesi Briefing.
                </div>

                {/* Zoom Credentials Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                  {/* Left Column: Link & Credentials */}
                  <div className="lg:col-span-7 bg-[#F7F5F0] p-5 border border-[#737782]/40 flex flex-col justify-between rounded-sm">
                    <div>
                      <div className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] uppercase mb-3 tracking-wider">
                        [ ACCESS LINK ZOOM ]
                      </div>
                      <p className="font-['JetBrains_Mono'] text-xs text-[#325ca9] break-all mb-4 bg-white p-3 border border-[#737782]/30">
                        {zoomLink}
                      </p>

                      <div className="grid grid-cols-2 gap-3 font-['JetBrains_Mono'] text-xs">
                        <div className="bg-white p-3 border border-[#737782]/30">
                          <span className="text-[#737782] block text-[10px]">MEETING ID:</span>
                          <span className="font-bold text-[#000000] text-sm md:text-base">{meetingId}</span>
                        </div>
                        <div className="bg-white p-3 border border-[#737782]/30">
                          <span className="text-[#737782] block text-[10px]">PASSCODE:</span>
                          <span className="font-bold text-[#E85A00] text-sm md:text-base">{passcode}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-6">
                      <a
                        href={zoomLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-brutalist flex-1 py-3 px-4 font-['JetBrains_Mono'] text-xs font-bold uppercase inline-flex items-center justify-center gap-2 chamfered-box"
                      >
                        <span className="material-symbols-outlined text-base">video_call</span>
                        Gabung Zoom Meeting
                      </a>
                      <button
                        onClick={handleCopyZoomCreds}
                        className="bg-white text-[#001a42] border-2 border-[#001a42] px-4 py-3 font-['JetBrains_Mono'] text-xs font-bold uppercase hover:bg-[#e4e2e3] transition-colors inline-flex items-center justify-center gap-2 chamfered-box"
                      >
                        <span className="material-symbols-outlined text-base">content_copy</span>
                        Salin Kredensial
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Virtual Background Notice */}
                  <div className="lg:col-span-5 bg-[#001a42] text-white p-5 border border-[#001a42] flex flex-col justify-between chamfered-box">
                    <div>
                      <div className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] uppercase mb-3 tracking-wider">
                        [ VIRTUAL BACKGROUND ]
                      </div>
                      <p className="font-['Libre_Franklin'] text-sm leading-relaxed mb-4 text-[#f3f0f1]">
                        Peserta wajib/diperkenankan menggunakan Virtual Background Zoom yang telah disediakan oleh panitia PPTK 2026 selama sesi informasi berlangsung.
                      </p>
                    </div>
                    <div className="border-t border-[#737782]/40 pt-3 font-['JetBrains_Mono'] text-[11px] text-[#86adff]">
                      // PPTK 2026 OFFICIAL BRIEFING
                    </div>
                  </div>
                </div>

                {/* Aturan Selama Sesi Informasi */}
                <div>
                  <h4 className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] uppercase tracking-wider mb-4 border-b border-[#737782]/20 pb-2">
                    [ ATURAN SELAMA SESI INFORMASI ]
                  </h4>
                  <ol className="grid grid-cols-1 md:grid-cols-2 gap-3 font-['Libre_Franklin'] text-sm text-[#333333]">
                    {briefingRules.map((rule, idx) => (
                      <li key={idx} className="bg-[#F7F5F0] p-3.5 border border-[#737782]/30 flex items-start gap-3 rounded-sm">
                        <span className="font-['JetBrains_Mono'] font-bold text-[#E85A00] text-xs mt-0.5 shrink-0">
                          0{idx + 1}.
                        </span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ) : (
              /* Main Event Modal */
              <div>
                <div className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] mb-1">
                  // RECORD: {activeEvent.id} [{activeEvent.stage}]
                </div>
                <h3 className="font-['Syne'] font-extrabold text-2xl md:text-3xl text-[#000000] uppercase mb-4">
                  {activeEvent.title}
                </h3>

                <p className="font-['Libre_Franklin'] text-base text-[#45474c] leading-relaxed mb-6">
                  {activeEvent.description}
                </p>

                <div className="bg-[#f0edee] p-5 border border-[#737782]/30 mb-6 font-['JetBrains_Mono'] text-xs space-y-3">
                  <div className="flex items-center gap-2 text-[#000000]">
                    <span className="material-symbols-outlined text-[#E85A00]">calendar_today</span>
                    <span className="font-bold text-sm">{activeEvent.date} ({activeEvent.time})</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#45474c]">
                    <span className="material-symbols-outlined text-[#325ca9]">place</span>
                    <span className="text-sm">{activeEvent.locationDetail}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleAddToCalendar(activeEvent)}
                    className="btn-brutalist flex-1 py-3.5 font-['JetBrains_Mono'] text-xs font-bold uppercase flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-base">event</span>
                    Tambah ke Google Calendar
                  </button>
                  <button
                    onClick={() => setActiveEvent(null)}
                    className="bg-[#e4e2e3] text-black border border-[#737782] px-6 py-3.5 font-['JetBrains_Mono'] text-xs font-bold uppercase hover:bg-white"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
