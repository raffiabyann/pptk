import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useToast } from './Toast';

export default function DivisionsSection() {
  const { showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroupModal, setSelectedGroupModal] = useState(null);

  const groups = [
    {
      name: 'PWM',
      pic: 'PIC: RIZKI',
      lineUrl: 'https://line.me/R/ti/g/LJaM7c94cB',
      winner: true,
      membersList: [
        'Raden Dimas Berly Nugraha',
        'Stiven Imanuel Lie',
        'Muhammad Athar Dinata',
        'Terrence Laraine',
        'Rayhan Unika Putra',
        'Denzel Aldrich Phineas Lawalata',
        'Caesario Bunyamin',
      ],
      description: 'Kelompok PWM — Pulse Width Modulation & Pengendalian Perangkat Aktuator Motor/LED.',
    },
    {
      name: 'TIMER',
      pic: 'PIC: VITO',
      lineUrl: 'https://line.me/R/ti/g/sQUNujysbH',
      membersList: [
        'Fitto Abbie Chandra Sasmita',
        'Leonardy Lukman',
        'Chester Emmanuel Sean',
        'Muhammad Ezzy Al Muzaqi',
        'Muhamad Rayhan Mubarok',
        'Gilbrant Akbar Algustav',
        'Chareza Kusuma Ardhana',
        'Marsellino Rayhan S',
      ],
      description: 'Kelompok TIMER — Pengenalan Sistem Pewaktu Mikrokontroler & Hardware Timing.',
    },
    {
      name: 'UART',
      pic: 'PIC: IMAM',
      lineUrl: 'https://line.me/R/ti/g/nTTqtTxxcT',
      membersList: [
        'Rasyid Gani Wibisono',
        'Angely Sarah',
        'Jacob Mannuel Toti',
        'Jusuf Yonatan Louis Calvin Lumbantobing',
        'Alif Ferry Hegar Santoso',
        'JESON febrian',
        'Muhammad Dhika Firdaus',
      ],
      description: 'Kelompok UART — Komunikasi Serial Universal Asynchronous Receiver-Transmitter.',
    },
    {
      name: 'GPIO',
      pic: 'PIC: CLEMENT',
      lineUrl: 'https://line.me/R/ti/g/P7gbtant6x',
      membersList: [
        'Raymond Kurniawan',
        'Shafira Felisya Chandra',
        'Septian Ridho Kurniawan',
        'Muhammad Fazle Mawla',
        'Putra Divi Kurniawan Ndruru',
        'Jerriel Akela Liemena',
        'Soleha',
      ],
      description: 'Kelompok GPIO — General Purpose Input Output & Antarmuka Sensor Digital.',
    },
  ];

  const winnerGroup = groups.find((g) => g.winner);
  const otherGroups = groups.filter((g) => !g.winner);

  const filteredGroups = groups.filter((g) => {
    const term = searchTerm.toLowerCase();
    return (
      g.name.toLowerCase().includes(term) ||
      g.pic.toLowerCase().includes(term) ||
      g.membersList.some((m) => m.toLowerCase().includes(term))
    );
  });

  const handleCopyMembers = (group) => {
    const text =
      `Kelompok ${group.name} (${group.pic}):\n` +
      group.membersList.map((m, idx) => `${idx + 1}. ${m}`).join('\n');
    navigator.clipboard.writeText(text);
    showToast(`Daftar anggota ${group.name} berhasil disalin!`, 'success');
  };

  const handleLineClick = (e, group) => {
    if (!group.lineUrl || group.lineUrl === '#') {
      e.preventDefault();
      showToast(`Link grup LINE ${group.name} akan segera diaktifkan oleh panitia.`, 'info');
    }
  };

  return (
    <section className="mb-24 md:mb-32 px-4 md:px-12 max-w-6xl mx-auto w-full" id="groups">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-[#000000] uppercase inline-block border-b-4 border-[#86adff] pb-2 tracking-tight">
          GROUPS
        </h2>
        <p className="font-['Libre_Franklin'] text-sm text-[#45474c] mt-3">
          Daftar kelompok &amp; pembagian mentor PPTK Teknik Komputer 2026.
        </p>
      </div>

      {/* Search Filter Bar */}
      <div className="max-w-md mx-auto mb-10">
        <div className="relative font-['JetBrains_Mono']">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari nama Anda / PIC / Kelompok..."
            className="w-full bg-white border border-[#737782]/40 rounded-xl px-4 py-3 pl-10 text-xs text-[#000000] shadow-sm focus:outline-none focus:border-[#E85A00] transition-colors"
          />
          <span className="material-symbols-outlined absolute left-3 top-3 text-[#737782] text-lg">
            search
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-3 text-[#737782] hover:text-black font-bold text-xs cursor-pointer"
            >
              CLEAR
            </button>
          )}
        </div>
      </div>

      {/* Group Display */}
      {filteredGroups.length === 0 ? (
        <div className="text-center p-8 border border-dashed border-[#737782]/40 bg-white rounded-2xl max-w-md mx-auto font-['JetBrains_Mono'] text-xs text-[#737782]">
          Nama atau kelompok "{searchTerm}" tidak ditemukan.
        </div>
      ) : searchTerm ? (
        /* Flat Grid when searching */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {filteredGroups.map((group) => (
            <div
              key={group.name}
              onClick={() => setSelectedGroupModal(group)}
              className={`bg-white rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between group shadow-sm hover:shadow-md ${
                group.winner
                  ? 'border-[#E85A00] ring-2 ring-[#E85A00]/20'
                  : 'border-black/10'
              }`}
            >
              <div>
                <div className="flex justify-end items-center mb-2 font-['JetBrains_Mono'] text-[10px]">
                  <span className="text-[#E85A00] font-bold">INFO →</span>
                </div>

                <h3 className="font-['Syne'] font-bold text-2xl text-[#000000] uppercase mb-1">
                  {group.name}
                </h3>
                <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] uppercase mb-3 tracking-wider">
                  {group.pic}
                </p>
                <p className="font-['Libre_Franklin'] text-xs text-[#45474c] leading-relaxed line-clamp-3">
                  {group.membersList.join(', ')}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-black/5 font-['JetBrains_Mono'] text-[10px] font-bold text-[#325ca9] group-hover:text-[#E85A00]">
                {group.membersList.length} ANGGOTA →
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Spotlight Layout: Winner in Middle / Top Hero, Other 3 groups below */
        <div className="space-y-6">
          {/* Winner Featured Center Card */}
          {winnerGroup && (
            <div className="max-w-2xl mx-auto">
              <div
                onClick={() => setSelectedGroupModal(winnerGroup)}
                className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#E85A00] shadow-[0_8px_30px_rgb(232,90,0,0.12)] hover:shadow-[0_12px_35px_rgb(232,90,0,0.2)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-3 border-b border-black/5 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E85A00]"></span>
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#001a42] uppercase tracking-wider">
                      JUARA 1
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#325ca9] group-hover:text-[#E85A00] transition-colors flex items-center gap-1">
                    Detail Kelompok <span className="text-sm">→</span>
                  </span>
                </div>

                <div className="text-center sm:text-left my-2">
                  <h3 className="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-[#000000] uppercase mb-1">
                    KELOMPOK {winnerGroup.name}
                  </h3>
                  <p className="font-['JetBrains_Mono'] text-sm font-bold text-[#E85A00] uppercase mb-3 tracking-wider">
                    {winnerGroup.pic}
                  </p>
                  <p className="font-['Libre_Franklin'] text-xs sm:text-sm text-[#45474c] leading-relaxed max-w-xl">
                    {winnerGroup.membersList.join(' • ')}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 flex items-center justify-between font-['JetBrains_Mono'] text-xs text-[#737782]">
                  <span>{winnerGroup.membersList.length} ANGGOTA</span>
                  <span className="text-[#325ca9] font-bold">GABUNG GRUP LINE ↗</span>
                </div>
              </div>
            </div>
          )}

          {/* Other 3 Groups (TIMER, UART, GPIO) in 3-Columns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {otherGroups.map((group) => (
              <div
                key={group.name}
                onClick={() => setSelectedGroupModal(group)}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-black/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-end items-center mb-2 font-['JetBrains_Mono'] text-[10px]">
                    <span className="text-[#E85A00] font-bold">INFO →</span>
                  </div>

                  <h3 className="font-['Syne'] font-bold text-2xl text-[#000000] uppercase mb-1">
                    {group.name}
                  </h3>

                  <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] uppercase mb-3 tracking-wider">
                    {group.pic}
                  </p>

                  <p className="font-['Libre_Franklin'] text-xs text-[#45474c] leading-relaxed line-clamp-3">
                    {group.membersList.join(', ')}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-black/5 font-['JetBrains_Mono'] text-[10px] font-bold text-[#325ca9] group-hover:text-[#E85A00] transition-colors">
                  {group.membersList.length} ANGGOTA • GRUP LINE →
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Group Detail Modal */}
      {selectedGroupModal &&
        createPortal(
          <div
            onClick={() => setSelectedGroupModal(null)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-lg w-full p-6 sm:p-8 rounded-2xl border border-black/10 shadow-2xl relative animate-in zoom-in-95 duration-150 my-auto max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start border-b border-black/5 pb-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00]">
                      {selectedGroupModal.pic}
                    </span>
                  </div>
                  <h3 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-[#000000] uppercase">
                    KELOMPOK {selectedGroupModal.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedGroupModal(null)}
                  className="bg-black/5 hover:bg-black/10 text-[#000000] p-1.5 rounded-full transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg block">close</span>
                </button>
              </div>

              <div className="bg-[#F7F5F0] p-4 rounded-xl border border-black/5 mb-6">
                <div className="font-['JetBrains_Mono'] text-xs font-bold text-[#000000] mb-3">
                  DAFTAR ANGGOTA ({selectedGroupModal.membersList.length} MAHASISWA):
                </div>
                <ol className="list-decimal list-inside space-y-1.5 font-['Libre_Franklin'] text-xs text-[#101827] font-medium">
                  {selectedGroupModal.membersList.map((m, i) => (
                    <li key={i} className="py-0.5 border-b border-black/5 last:border-none">
                      {m}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={selectedGroupModal.lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => handleLineClick(e, selectedGroupModal)}
                  className="bg-[#00C300] hover:bg-[#00a800] text-white flex-1 py-3 px-4 font-['JetBrains_Mono'] text-xs font-bold uppercase flex items-center justify-center gap-2 rounded-xl transition-all shadow-sm active:scale-95"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Gabung Grup LINE
                </a>

                <button
                  onClick={() => handleCopyMembers(selectedGroupModal)}
                  className="bg-[#001a42] hover:bg-[#325ca9] text-white py-3 px-4 font-['JetBrains_Mono'] text-xs font-bold uppercase flex items-center justify-center gap-2 rounded-xl transition-all cursor-pointer"
                  title="Salin daftar nama anggota"
                >
                  <span className="material-symbols-outlined text-base">content_copy</span>
                  Salin
                </button>

                <button
                  onClick={() => setSelectedGroupModal(null)}
                  className="bg-[#e4e2e3] hover:bg-white text-black border border-[#737782]/30 px-4 py-3 font-['JetBrains_Mono'] text-xs font-bold uppercase rounded-xl transition-all cursor-pointer"
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
