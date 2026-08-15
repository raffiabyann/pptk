import React from 'react';
import { ToastProvider } from './components/Toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsPPTK from './components/WhatIsPPTK';
import RulesSection from './components/RulesSection';
import PreparationSection from './components/PreparationSection';
import TimelineSection from './components/TimelineSection';
import DivisionsSection from './components/DivisionsSection';
import CommitteeSection from './components/CommitteeSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <ToastProvider>
      <div className="bg-[#F7F5F0] text-[#1b1b1d] font-['Libre_Franklin'] brutalist-grid min-h-screen flex flex-col relative overflow-x-hidden">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Hero />
          <WhatIsPPTK />
          <RulesSection />
          <PreparationSection />
          <TimelineSection />
          <DivisionsSection />
          <CommitteeSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ToastProvider>
  );
}
