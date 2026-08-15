import React, { useState } from 'react';
import { useToast } from './Toast';

export default function DivisionsSection() {
  const { showToast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroupModal, setSelectedGroupModal] = useState(null);

  const groups = [
    {
      name: 'TIMER',
      pic: 'PIC: VITO',
      membersList: [
        'Fitto Abbie Chandra Sasmita',
        'Leonardy Lukman',
        'Chester Emmanuel Sean',
        'Muhammad Ezzy Al Muzaqi',
        'Muhamad Rayhan Mubarok',
        'Gilbrant Akbar Algustav',
        'Chareza Kusuma Ardhana',
      ],
      description: 'Kelompok TIMER — Pengenalan Sistem Pewaktu Mikrokontroler & Hardware Timing.',
    },
    {
      name: 'PWM',
      pic: 'PIC: RIZKI',
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
      name: 'UART',
      pic: 'PIC: IMAM',
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

  const filteredGroups = groups.filter((g) => {
    const term = searchTerm.toLowerCase();
    return (
      g.name.toLowerCase().includes(term) ||
      g.pic.toLowerCase().includes(term) ||
      g.membersList.some((m) => m.toLowerCase().includes(term))
    );
  });

  const handleCopyMembers = (group) => {
    const text = `Kelompok ${group.name} (${group.pic}):\n` + group.membersList.map((m, idx) => `${idx + 1}. ${m}`).join('\n');
    navigator.clipboard.writeText(text);
    showToast(`Daftar anggota ${group.name} berhasil disalin!`, 'success');
  };

  return (
    <section className="mb-28 md:mb-32 px-4 md:px-16 max-w-7xl mx-auto w-full" id="groups">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-[#000000] uppercase inline-block border-b-4 border-[#86adff] pb-2 tracking-tight">
          GROUPS
        </h2>
        <p className="font-['Libre_Franklin'] text-sm text-[#45474c] mt-3">
          Cari nama Anda untuk menemukan pembagian kelompok PPTK 2026.
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
            className="w-full bg-white border-2 border-[#001a42] px-4 py-3 pl-10 text-xs text-[#000000] shadow-[4px_4px_0px_0px_#001a42] focus:outline-none focus:border-[#E85A00]"
          />
          <span className="material-symbols-outlined absolute left-3 top-3 text-[#737782] text-lg">
            search
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-3 text-[#737782] hover:text-black font-bold text-xs"
            >
              CLEAR
            </button>
          )}
        </div>
      </div>

      {/* Group Cards Grid */}
      {filteredGroups.length === 0 ? (
        <div className="text-center p-8 border-2 border-dashed border-[#737782] bg-white max-w-md mx-auto font-['JetBrains_Mono'] text-xs text-[#737782]">
          Nama atau kelompok "{searchTerm}" tidak ditemukan. Pastikan ejaan sesuai.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {filteredGroups.map((group) => (
            <div
              key={group.name}
              onClick={() => setSelectedGroupModal(group)}
              className="dossier-card p-6 text-center hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-2 font-['JetBrains_Mono'] text-[10px] text-[#737782]">
                  <span>SQUAD_REF</span>
                  <span className="text-[#E85A00] font-bold">INFO →</span>
                </div>

                <h3 className="font-['Syne'] font-extrabold text-2xl md:text-3xl text-[#000000] uppercase mb-1">
                  {group.name}
                </h3>

                <p className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] uppercase mb-4 tracking-wider">
                  {group.pic}
                </p>

                <p className="font-['Libre_Franklin'] text-xs md:text-sm text-[#45474c] leading-relaxed line-clamp-4">
                  {group.membersList.join(', ')}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#737782]/20 font-['JetBrains_Mono'] text-[10px] font-bold text-[#325ca9] group-hover:text-[#E85A00]">
                {group.membersList.length} ANGGOTA • LIHAT DETAIL →
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Group Detail Modal */}
      {selectedGroupModal && (
        <div
          onClick={() => setSelectedGroupModal(null)}
          className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-lg w-full p-5 md:p-8 border-4 border-[#001a42] shadow-[8px_8px_0px_0px_#86adff] relative chamfered-box animate-in zoom-in-95 duration-150 my-auto max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center border-b border-[#737782]/30 pb-3 mb-4">
              <div>
                <span className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00]">
                  // {selectedGroupModal.pic}
                </span>
                <h3 className="font-['Syne'] font-extrabold text-3xl text-[#000000] uppercase">
                  KELOMPOK {selectedGroupModal.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedGroupModal(null)}
                className="bg-[#001a42] text-white p-1.5 rounded hover:bg-[#E85A00]"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="bg-[#f0edee] p-4 border border-[#737782]/30 mb-6">
              <div className="font-['JetBrains_Mono'] text-xs font-bold text-[#000000] mb-3">
                DAFTAR ANGGOTA ({selectedGroupModal.membersList.length} MAHASISWA):
              </div>
              <ol className="list-decimal list-inside space-y-1.5 font-['Libre_Franklin'] text-xs text-[#101827] font-medium">
                {selectedGroupModal.membersList.map((m, i) => (
                  <li key={i} className="py-0.5 border-b border-[#737782]/10 last:border-none">
                    {m}
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleCopyMembers(selectedGroupModal)}
                className="btn-brutalist flex-1 py-3 px-4 font-['JetBrains_Mono'] text-xs font-bold uppercase flex items-center justify-center gap-2 chamfered-box"
                title="Salin daftar nama anggota"
              >
                <span className="material-symbols-outlined text-base">content_copy</span>
                Salin Daftar Anggota
              </button>

              <button
                onClick={() => setSelectedGroupModal(null)}
                className="bg-[#e4e2e3] text-black border border-[#737782] px-4 py-3 font-['JetBrains_Mono'] text-xs font-bold uppercase hover:bg-white chamfered-box"
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
