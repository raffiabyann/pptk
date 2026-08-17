import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useToast } from './Toast';

export default function TimelineSection() {
  const { showToast } = useToast();
  const [activeEvent, setActiveEvent] = useState(null);

  // Checklist State for Main Event Ready Check
  const [checkedItems, setCheckedItems] = useState({
    dresscode: false,
    cocard: false,
    supplies: false,
    stationery: false,
    enthusiasm: false,
  });

  // Countdown State to Aug 18, 2026 11:45 AM
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-08-18T00:00:00+07:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleChecklist = (key) => {
    setCheckedItems((prev) => {
      const nextState = { ...prev, [key]: !prev[key] };
      const allChecked = Object.values(nextState).every(Boolean);
      if (allChecked && !Object.values(prev).every(Boolean)) {
        showToast('Kesiapan Hari-H PPTK 2026 telah 100% lengkap!', 'success');
      }
      return nextState;
    });
  };

  const isAllReady = Object.values(checkedItems).every(Boolean);

  const events = [
    {
      id: 'EVT-001',
      stage: 'STAGE_01',
      title: 'Briefing Day',
      date: '15 Agt 2026',
      time: '13.00 - 15.00 WIB (Zoom)',
      mode: 'Daring / Zoom Meeting',
      icon: 'check_circle',
      completed: true,
      badgeText: 'COMPLETED ✓',
      dotColor: 'bg-[#00C300]',
      bgColor: 'bg-[#f0edee]',
      textColor: 'text-[#737782]',
      subTextColor: 'text-[#737782]',
      stageColor: 'text-[#737782]',
      description:
        'Sesi pengenalan daring awal kegiatan PPTK 2026. (Telah selesai dilaksanakan pada Sabtu, 15 Agustus 2026).',
      locationDetail: 'Platform Zoom Meeting (Selesai)',
    },
    {
      id: 'EVT-002',
      stage: 'STAGE_02_MAIN',
      title: 'Main Event PPTK',
      date: '18 Agt 2026 (After OMB)',
      time: 'Penjemputan oleh Panitia Keamanan',
      mode: 'Luring / Kampus UMN',
      icon: 'stars',
      completed: false,
      badgeText: 'NEXT EVENT',
      dotColor: 'bg-[#E85A00]',
      bgColor: 'bg-[#001a42]',
      textColor: 'text-white',
      subTextColor: 'text-[#f3f0f1]',
      stageColor: 'text-[#E85A00]',
      description:
        'Acara utama perkenalan Program Studi Teknik Komputer UMN setelah sesi OMB. Penjemputan oleh Panitia Keamanan PPTK.',
      locationDetail: 'Gedung Utama Universitas Multimedia Nusantara (Luring)',
    },
  ];

  const handleEventClick = (evt) => {
    if (evt.completed) {
      showToast(`Briefing Day (15 Agt 2026) telah selesai dilaksanakan.`, 'info');
      return;
    }
    setActiveEvent(evt);
  };

  const handleAddToCalendar = (evt) => {
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      'PPTK 2026 Teknik Komputer UMN - Main Event (After OMB)'
    )}&details=${encodeURIComponent(
      'Main Event Perpro Teknik Komputer 2026 UMN. Penjemputan oleh Panitia Keamanan PPTK setelah sesi OMB.'
    )}&location=${encodeURIComponent(evt.locationDetail)}`;
    window.open(googleCalUrl, '_blank');
    showToast(`Google Calendar dibuka untuk Main Event PPTK 2026.`, 'success');
  };

  const scrollToPreparation = () => {
    setActiveEvent(null);
    const el = document.getElementById('preparation');
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="mb-28 md:mb-32 px-4 md:px-16 max-w-7xl mx-auto w-full" id="events">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-[#000000] uppercase inline-block border-b-4 border-[#86adff] pb-2 tracking-tight">
          CRITICAL TIMELINES
        </h2>
        <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#45474c] mt-4 uppercase tracking-widest">
          [ ROADMAP PPTK 2026 — KLIK MAIN EVENT UNTUK READY CHECK ]
        </p>
      </div>

      {/* Primary Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-start">
        {events.map((evt) => (
          <div
            key={evt.id}
            onClick={() => handleEventClick(evt)}
            className={`dossier-card group transition-all duration-300 relative ${
              evt.completed
                ? 'opacity-70 cursor-pointer hover:opacity-90'
                : 'cursor-pointer hover:-translate-y-2 border-4 border-[#001a42]'
            }`}
          >
            {/* Top Bar Card Header */}
            <div className="h-7 bg-[#e4e2e3] border-b border-[#737782] flex items-center px-3 justify-between font-['JetBrains_Mono'] text-[10px] font-bold">
              <div className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${evt.dotColor}`}></div>
                <span className="text-[#45474c] uppercase">
                  RECORD_ID: {evt.id}
                </span>
              </div>
              <span
                className={`px-2 py-0.5 uppercase ${
                  evt.completed
                    ? 'bg-gray-300 text-gray-700'
                    : 'bg-[#E85A00] text-black font-extrabold'
                }`}
              >
                {evt.badgeText}
              </span>
            </div>

            <div className={`p-6 md:p-8 relative overflow-hidden ${evt.bgColor}`}>
              <div className="absolute right-[-20px] top-[-20px] opacity-10 group-hover:opacity-20 transition-opacity">
                <span className={`material-symbols-outlined text-[120px] ${evt.textColor}`}>
                  {evt.icon}
                </span>
              </div>

              <div
                className={`font-['JetBrains_Mono'] text-xs font-bold mb-2 uppercase tracking-wider ${evt.stageColor}`}
              >
                [ {evt.stage} ]
              </div>

              <h3 className={`font-['Syne'] font-extrabold text-2xl md:text-3xl mb-4 uppercase ${evt.textColor}`}>
                {evt.title}
              </h3>

              <ul className={`space-y-3 font-['Libre_Franklin'] text-sm md:text-base border-l-2 border-[#737782]/40 pl-4 ${evt.subTextColor}`}>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#E85A00]">calendar_month</span>
                  <span className="font-bold">{evt.date}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#86adff]">schedule</span>
                  <span>{evt.time}</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#737782]">pin_drop</span>
                  <span>{evt.mode}</span>
                </li>
              </ul>

              <div className="mt-6 pt-3 border-t border-[#737782]/30 font-['JetBrains_Mono'] text-xs font-bold flex items-center justify-between">
                {evt.completed ? (
                  <span className="text-[#00C300] flex items-center gap-1">
                    <span className="material-symbols-outlined text-base">check_circle</span>
                    SELESAI (15 AGT)
                  </span>
                ) : (
                  <span className="text-[#E85A00] flex items-center gap-1 group-hover:underline">
                    KLIK UNTUK ALUR & CHECKLIST →
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Event Interactive Modal */}
      {activeEvent && !activeEvent.completed && createPortal(
        <div
          onClick={() => setActiveEvent(null)}
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-3xl w-full p-5 sm:p-7 md:p-9 border-4 border-[#001a42] shadow-[10px_10px_0px_0px_#E85A00] relative chamfered-box animate-in zoom-in-95 duration-150 my-auto max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveEvent(null)}
              className="absolute top-4 right-4 bg-[#001a42] text-white p-2 chamfered-box hover:bg-[#E85A00] hover:text-black transition-colors z-10"
              title="Tutup Modal"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            {/* Header */}
            <div className="mb-6 border-b border-[#737782]/30 pb-4">
              <div className="flex items-center gap-2 mb-2 font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00]">
                <span>OPERATION DIRECTIVE // STAGE_02_MAIN</span>
              </div>
              <h3 className="font-['Syne'] font-extrabold text-2xl md:text-3xl text-[#000000] uppercase tracking-tight">
                MAIN EVENT PPTK — 18 AGUSTUS 2026
              </h3>
              <p className="font-['Libre_Franklin'] text-xs md:text-sm text-[#45474c] mt-1">
                Rangkaian perkenalan prodi Teknik Komputer UMN setelah kegiatan OMB UMN.
              </p>
            </div>

            {/* Live Countdown Banner */}
            <div className="bg-[#001a42] text-white p-4 mb-6 border-l-4 border-[#E85A00] chamfered-box">
              <div className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#E85A00] uppercase mb-1 tracking-wider">
                COUNTDOWN TO MAIN EVENT:
              </div>
              <div className="font-['JetBrains_Mono'] text-lg sm:text-2xl font-extrabold tracking-widest text-[#86adff]">
                {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M : {timeLeft.seconds}S
              </div>
            </div>

            {/* Visual Step Flow (Without Exact Hours) */}
            <div className="mb-6">
              <h4 className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] uppercase tracking-wider mb-3">
                [ ALUR KEGIATAN HARI-H (18 AGT) ]
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Step 1 */}
                <div className="bg-[#F7F5F0] p-3.5 border border-[#737782]/30 chamfered-box">
                  <div className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#325ca9] mb-1">
                    STEP 01 // PAGI
                  </div>
                  <h5 className="font-['Syne'] font-bold text-sm text-[#000000] mb-1">
                    Sesi OMB UMN
                  </h5>
                  <p className="font-['Libre_Franklin'] text-[11px] text-[#45474c] leading-relaxed">
                    Peserta mengikuti seluruh rangkaian Orientasi Mahasiswa Baru (OMB) UMN dengan tertib.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-[#F7F5F0] p-3.5 border-2 border-[#E85A00] chamfered-box shadow-sm">
                  <div className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#E85A00] mb-1">
                    STEP 02 // PENJEMPUTAN
                  </div>
                  <h5 className="font-['Syne'] font-bold text-sm text-[#000000] mb-1">
                    Penjemputan Panitia
                  </h5>
                  <p className="font-['Libre_Franklin'] text-[11px] text-[#45474c] leading-relaxed">
                    Peserta akan dijemput oleh <strong>Panitia Keamanan PPTK</strong> di titik kumpul menuju area PPTK.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-[#F7F5F0] p-3.5 border border-[#737782]/30 chamfered-box">
                  <div className="font-['JetBrains_Mono'] text-[10px] font-bold text-[#325ca9] mb-1">
                    STEP 03 // SIANG - SELESAI
                  </div>
                  <h5 className="font-['Syne'] font-bold text-sm text-[#000000] mb-1">
                    PPTK Main Event
                  </h5>
                  <p className="font-['Libre_Franklin'] text-[11px] text-[#45474c] leading-relaxed">
                    Pengenalan prodi Teknik Komputer UMN, Lab Tour, serta sesi keakraban mentor & ACES
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Hari-H Ready Check */}
            <div className="mb-6 bg-[#F7F5F0] p-4 md:p-5 border border-[#737782]/40">
              <div className="flex items-center justify-between mb-3 border-b border-[#737782]/20 pb-2">
                <h4 className="font-['JetBrains_Mono'] text-xs font-bold text-[#001a42] uppercase tracking-wider">
                  ☑ HARI-H READY CHECKLIST
                </h4>
                <span className="font-['JetBrains_Mono'] text-[11px] font-bold text-[#E85A00]">
                  {Object.values(checkedItems).filter(Boolean).length} / 5 COMPLETED
                </span>
              </div>

              <div className="space-y-2.5 font-['Libre_Franklin'] text-xs md:text-sm text-[#101827]">
                <label className="flex items-center gap-3 cursor-pointer select-none hover:text-[#E85A00]">
                  <input
                    type="checkbox"
                    checked={checkedItems.dresscode}
                    onChange={() => toggleChecklist('dresscode')}
                    className="w-4 h-4 accent-[#E85A00] rounded cursor-pointer"
                  />
                  <span className={checkedItems.dresscode ? 'line-through text-[#737782]' : 'font-semibold'}>
                    Dresscode OMB (Polo Berkerah + Celana Bahan + Sepatu Kets Bertali)
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer select-none hover:text-[#E85A00]">
                  <input
                    type="checkbox"
                    checked={checkedItems.cocard}
                    onChange={() => toggleChecklist('cocard')}
                    className="w-4 h-4 accent-[#E85A00] rounded cursor-pointer"
                  />
                  <span className={checkedItems.cocard ? 'line-through text-[#737782]' : 'font-semibold'}>
                    Co-Card / Name Tag Identitas OMB
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer select-none hover:text-[#E85A00]">
                  <input
                    type="checkbox"
                    checked={checkedItems.supplies}
                    onChange={() => toggleChecklist('supplies')}
                    className="w-4 h-4 accent-[#E85A00] rounded cursor-pointer"
                  />
                  <span className={checkedItems.supplies ? 'line-through text-[#737782]' : 'font-semibold'}>
                    Bekal Makan Siang & Botol Minum (Tumbler) di dalam tas
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer select-none hover:text-[#E85A00]">
                  <input
                    type="checkbox"
                    checked={checkedItems.stationery}
                    onChange={() => toggleChecklist('stationery')}
                    className="w-4 h-4 accent-[#E85A00] rounded cursor-pointer"
                  />
                  <span className={checkedItems.stationery ? 'line-through text-[#737782]' : 'font-semibold'}>
                    Buku Catatan & Alat Tulis Lengkap
                  </span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer select-none hover:text-[#E85A00]">
                  <input
                    type="checkbox"
                    checked={checkedItems.enthusiasm}
                    onChange={() => toggleChecklist('enthusiasm')}
                    className="w-4 h-4 accent-[#E85A00] rounded cursor-pointer"
                  />
                  <span className={checkedItems.enthusiasm ? 'line-through text-[#737782]' : 'font-semibold'}>
                    Semangat & Siap kenalan dengan teman & mentor Teknik Komputer
                  </span>
                </label>
              </div>

              {/* All Ready Status Banner */}
              {isAllReady && (
                <div className="mt-4 p-3 bg-[#00C300]/15 border-l-4 border-[#00C300] text-[#006400] font-['JetBrains_Mono'] text-xs font-bold flex items-center justify-between animate-in zoom-in-95">
                  <span>STATUS: 100% READY FOR MAIN EVENT PPTK 2026.</span>
                  <span className="material-symbols-outlined text-base">verified</span>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleAddToCalendar(activeEvent)}
                className="btn-brutalist flex-1 py-3 px-4 font-['JetBrains_Mono'] text-xs font-bold uppercase flex items-center justify-center gap-2 chamfered-box"
              >
                <span className="material-symbols-outlined text-base">calendar_add_on</span>
                Tambah ke Google Calendar
              </button>

              <button
                onClick={scrollToPreparation}
                className="bg-white text-[#001a42] border-2 border-[#001a42] py-3 px-4 font-['JetBrains_Mono'] text-xs font-bold uppercase hover:bg-[#e4e2e3] flex items-center justify-center gap-2 chamfered-box"
              >
                <span className="material-symbols-outlined text-base">checkroom</span>
                Cek Dresscode & Perlengkapan
              </button>

              <button
                onClick={() => setActiveEvent(null)}
                className="bg-[#e4e2e3] text-black border border-[#737782] px-4 py-3 font-['JetBrains_Mono'] text-xs font-bold uppercase hover:bg-white chamfered-box"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
