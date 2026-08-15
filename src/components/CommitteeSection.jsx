import React, { useState } from 'react';

export default function CommitteeSection() {
  const committeeData = [
    {
      id: 'bph',
      name: 'BPH',
      leader: { name: 'Chandra Firdaus', role: 'KETUA PPTK 2026' },
      members: ['Malvin Brian Jahanto', 'Raja Salomo Lumban Tobing', 'Adhityo Hartanto'],
    },
    {
      id: 'dokumentasi',
      name: 'Dokumentasi',
      members: ['Melvin Timothy', 'Raffi Abyan Zizou', 'Darius Emmanuel Eudia Hariman'],
    },
    {
      id: 'pic_acara',
      name: 'PIC & Acara',
      members: [
        'Andri Abdul Aziz Jaha',
        'Kristian Keagan Lim',
        'Vito Amadeo D',
        'Milatul Arham',
        'Mohamad Rizki Patriotik',
        'Clements Dymasius Budiargo',
      ],
    },
    {
      id: 'keamanan',
      name: 'Keamanan',
      members: [
        'Muhammad Muzakki Rizqullah',
        'Arizal Fathin Athallah',
        'Benedictus Alfredo Setiawijaya',
        'Jason Pedrosa',
        'Kappa Albeth Christian',
      ],
    },
    {
      id: 'perlengkapan',
      name: 'Perlengkapan',
      members: [
        'Handri Suhandi',
        'Milano Bonaventura Pandey',
        'Nicholas Claudio Hiu',
        'Juan Christifren Lowandy',
      ],
    },
    {
      id: 'pr_visual',
      name: 'PR & Visual',
      members: [
        'Zachary Sachriar Sechan',
        'Muhammad Syafa Adha',
        'Aquijade Grace Paendong',
      ],
    },
  ];

  const [selectedDivId, setSelectedDivId] = useState('bph');

  const selectedDivision = committeeData.find((d) => d.id === selectedDivId) || committeeData[0];
  const totalCount = selectedDivision.leader
    ? selectedDivision.members.length + 1
    : selectedDivision.members.length;

  return (
    <section className="mb-28 md:mb-32 px-4 md:px-16 max-w-7xl mx-auto w-full" id="committee">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-[#000000] uppercase inline-block border-b-4 border-[#86adff] pb-2 tracking-tight">
          COMMITTEE STRUCTURE
        </h2>
      </div>

      {/* Division Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto font-['JetBrains_Mono'] text-xs md:text-sm font-bold mb-10">
        {committeeData.map((item) => {
          const isSelected = selectedDivId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedDivId(item.id)}
              className={`px-5 md:px-6 py-3 border text-[#000000] shadow-[2px_2px_0px_0px_#001a42] transition-all cursor-pointer active:scale-95 ${
                isSelected
                  ? 'bg-[#001a42] text-white border-[#001a42] shadow-[4px_4px_0px_0px_#E85A00]'
                  : 'bg-[#e4e2e3] border-[#737782] hover:bg-white hover:border-[#000000]'
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Selected Division Members Panel */}
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 border-2 border-[#001a42] shadow-[6px_6px_0px_0px_#001a42] chamfered-box">
        <div className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] mb-6 border-b border-[#737782]/20 pb-2 flex items-center justify-between">
          <span>// DIVISI PANITIA: {selectedDivision.name.toUpperCase()}</span>
          <span className="text-[#325ca9] text-[11px]">{totalCount} ANGGOTA</span>
        </div>

        {/* For BPH: Prominent Leader Card for Chandra Firdaus */}
        {selectedDivision.leader && (
          <div className="bg-[#001a42] text-white p-5 md:p-6 shadow-[4px_4px_0px_0px_#E85A00] mb-6 border border-[#001a42] chamfered-box">
            <div className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] uppercase tracking-wider mb-1">
              {selectedDivision.leader.role}
            </div>
            <h3 className="font-['Syne'] font-extrabold text-xl md:text-2xl uppercase text-white">
              {selectedDivision.leader.name}
            </h3>
          </div>
        )}

        {/* Members Grid */}
        <div>
          {selectedDivision.leader && (
            <h4 className="font-['JetBrains_Mono'] text-xs font-bold text-[#45474c] uppercase tracking-wider mb-3 border-b border-[#737782]/20 pb-1">
              ANGGOTA BPH
            </h4>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selectedDivision.members.map((member, idx) => (
              <div
                key={idx}
                className="bg-[#F7F5F0] p-3.5 border border-[#737782]/40 shadow-[2px_2px_0px_0px_#001a42] flex items-center gap-2.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#E85A00] shrink-0"></span>
                <span className="font-['Libre_Franklin'] font-semibold text-sm text-[#000000]">
                  {member}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
