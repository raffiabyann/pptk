import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useToast } from './Toast';

export default function RulesSection() {
  const { showToast } = useToast();
  const [activeRuleModal, setActiveRuleModal] = useState(null);

  const rules = [
    {
      num: '01',
      title: 'Ketertiban Pakaian dan Atribut (Sesuai Standar OMB)',
      short: 'Peserta wajib mengikuti ketentuan pakaian yang telah ditetapkan dalam OMB.',
      detail:
        'Seluruh peserta PPTK 2026 wajib mengenakan pakaian dan atribut resmi yang telah ditetapkan oleh OMB (Orientasi Mahasiswa Baru Universitas Multimedia Nusantara). Tidak ada penambahan atau perubahan aturan pakaian khusus di luar standar resmi OMB UMN.',
    },
    {
      num: '02',
      title: 'Izin Melaksanakan Ibadah: Waktu Kolektif (ISHOMA)',
      short: 'Mahasiswa dapat mengonfirmasi kepada panitia dan panitia wajib mengalokasikan waktu istirahat yang cukup.',
      detail:
        'Panitia wajib mengalokasikan waktu istirahat yang cukup pada jam-jam ibadah utama (Dzuhur, Ashar, dan ibadah lainnya). Jika terdapat pergeseran jadwal acara, mahasiswa berhak melapor ke divisi penanggung jawab untuk mendapatkan izin ibadah.',
    },
    {
      num: '03',
      title: 'Sikap dan Perilaku Umum',
      short: 'Tepat waktu (min. 15 menit), etika 5C UMN, dan fokus sesi materi.',
      detail:
        '1. Tepat Waktu: Wajib hadir di lokasi minimal 15 menit sebelum acara dimulai.\n2. Etika Komunikasi: Menerapkan 5C UMN kepada seluruh civitas akademika.\n3. Fokus: Dilarang menggunakan gadget selama materi berlangsung kecuali instruksi khusus.',
    },
  ];

  const handleRuleClick = (rule) => {
    setActiveRuleModal(rule);
  };

  const handleCopyNotice = () => {
    navigator.clipboard.writeText('Standar pakaian PPTK 2026 disesuaikan 100% dengan aturan OMB UMN 2026.');
    showToast('Info Pakaian OMB disalin ke clipboard!', 'success');
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-28 md:mb-32 relative items-center px-4 md:px-16 max-w-7xl mx-auto w-full" id="guide">
      {/* Left Column: Image with Tag */}
      <div className="md:col-span-5 relative h-[420px] sm:h-[500px] md:h-[580px] order-2 md:order-1 w-full">
        <img
          className="w-full h-full object-cover polaroid-scrap rotate-1 grayscale hover:grayscale-0 transition-all duration-500"
          alt="Engineering Students Studying in Lab"
          src="/assets/stitch_img_1.jpg"
        />

      </div>

      {/* Right Column: Rules Content */}
      <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center order-1 md:order-2 mb-8 md:mb-0">
        <div className="flex items-center justify-between border-b-2 border-[#000000] pb-4 mb-8">
          <h2 className="font-['Syne'] font-extrabold text-3xl md:text-5xl text-[#000000] uppercase tracking-tight">
            RULES &amp; GUIDELINES
          </h2>
          <button
            onClick={handleCopyNotice}
            className="text-xs font-['JetBrains_Mono'] font-bold text-[#325ca9] hover:text-[#E85A00] hidden sm:flex items-center gap-1"
            title="Salin Info OMB"
          >
            <span className="material-symbols-outlined text-base">content_copy</span>
            <span>OMB RULES</span>
          </button>
        </div>

        <div className="space-y-6 md:space-y-8 pl-4 border-l-2 border-[#737782]/40">
          {rules.map((r) => (
            <div
              key={r.num}
              onClick={() => handleRuleClick(r)}
              className="group cursor-pointer p-3 -ml-3 rounded hover:bg-[#e4e2e3]/40 transition-colors"
            >
              <h3 className="font-['JetBrains_Mono'] text-xs md:text-sm font-bold text-[#E85A00] uppercase mb-2 tracking-wider flex items-center justify-between">
                <span>{r.num} {r.title}</span>
                <span className="material-symbols-outlined text-base opacity-0 group-hover:opacity-100 transition-opacity">
                  info
                </span>
              </h3>
              <p className="font-['Libre_Franklin'] text-sm md:text-base text-[#45474c] leading-relaxed">
                {r.short}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Rule Detail Modal */}
      {activeRuleModal && createPortal(
        <div
          onClick={() => setActiveRuleModal(null)}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-lg w-full p-6 border-4 border-[#001a42] shadow-[8px_8px_0px_0px_#001a42] relative chamfered-box animate-in zoom-in-95 duration-150"
          >
            <div className="font-['JetBrains_Mono'] text-xs font-bold text-[#E85A00] mb-2">
              // DETAIL RULES: PASAL {activeRuleModal.num}
            </div>
            <h3 className="font-['Syne'] font-bold text-xl text-[#000000] mb-4">
              {activeRuleModal.title}
            </h3>
            <p className="font-['Libre_Franklin'] text-sm text-[#45474c] whitespace-pre-line leading-relaxed mb-6">
              {activeRuleModal.detail}
            </p>
            <button
              onClick={() => setActiveRuleModal(null)}
              className="btn-brutalist w-full py-2.5 font-['JetBrains_Mono'] text-xs font-bold uppercase"
            >
              MENGERTI &amp; TUTUP
            </button>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
