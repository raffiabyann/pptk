import React from 'react';
import { ToastProvider } from './components/Toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsPPTK from './components/WhatIsPPTK';
import RulesSection from './components/RulesSection';
import PreparationSection from './components/PreparationSection';
import ReelsSection from './components/ReelsSection';
import TimelineSection from './components/TimelineSection';
import DivisionsSection from './components/DivisionsSection';
import CommitteeSection from './components/CommitteeSection';
import AcesSection from './components/AcesSection';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  return (
    <ToastProvider>
      <div className="bg-[#F7F5F0] text-[#1b1b1d] font-['Libre_Franklin'] brutalist-grid min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Hero />
          <ScrollReveal>
            <WhatIsPPTK />
          </ScrollReveal>
          <ScrollReveal>
            <RulesSection />
          </ScrollReveal>
          <ScrollReveal>
            <PreparationSection />
          </ScrollReveal>
          <ScrollReveal>
            <ReelsSection />
          </ScrollReveal>
          <ScrollReveal>
            <TimelineSection />
          </ScrollReveal>
          <ScrollReveal>
            <DivisionsSection />
          </ScrollReveal>
          <ScrollReveal>
            <CommitteeSection />
          </ScrollReveal>
          <ScrollReveal>
            <AcesSection />
          </ScrollReveal>
        </main>

        {/* Footer */}
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </div>
    </ToastProvider>
  );
}
