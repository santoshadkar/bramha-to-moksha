import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SyllabusExplorer } from './components/SyllabusExplorer';
import { DiscipleRoadmapSection } from './components/DiscipleRoadmapSection';
import { GuruDiscipleDialogue } from './components/GuruDiscipleDialogue';
import { DailySadhanaModule } from './components/DailySadhanaModule';
import { DiagramContainer } from './components/Diagrams/DiagramContainer';
import { SelfInquiryStudio } from './components/SelfInquiryStudio';
import { Footer } from './components/Footer';

export function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Dedicated Page Views */}
      <main style={{ flex: 1 }}>
        {activeTab === 'home' && <HeroSection setActiveTab={setActiveTab} />}
        {activeTab === 'sadhana' && <DailySadhanaModule />}
        {activeTab === 'samvada' && <GuruDiscipleDialogue />}
        {activeTab === 'roadmap' && <DiscipleRoadmapSection />}
        {activeTab === 'syllabus' && <SyllabusExplorer />}
        {activeTab === 'diagrams' && <DiagramContainer />}
        {activeTab === 'inquiry' && <SelfInquiryStudio />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
