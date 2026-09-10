import React, { useState } from 'react';
import { CosmicTattvasDiagram } from './CosmicTattvasDiagram';
import { PanchaKoshaDiagram } from './PanchaKoshaDiagram';
import { JnanaBhumikasDiagram } from './JnanaBhumikasDiagram';
import { ChakraEnergyDiagram } from './ChakraEnergyDiagram';
import { Compass, Layers, Award, Activity } from 'lucide-react';

export function DiagramContainer() {
  const [activeTab, setActiveTab] = useState('tattvas');

  return (
    <section id="diagrams-section" style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        
        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('tattvas')}
            className={activeTab === 'tattvas' ? 'btn-gold' : 'btn-outline'}
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
          >
            <Compass size={16} /> 24 Tattvas Emergence
          </button>
          
          <button
            onClick={() => setActiveTab('koshas')}
            className={activeTab === 'koshas' ? 'btn-gold' : 'btn-outline'}
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
          >
            <Layers size={16} /> Pancha Kosha (5 Sheaths)
          </button>

          <button
            onClick={() => setActiveTab('bhumikas')}
            className={activeTab === 'bhumikas' ? 'btn-gold' : 'btn-outline'}
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
          >
            <Award size={16} /> 7 Jnana Bhumikas
          </button>

          <button
            onClick={() => setActiveTab('chakras')}
            className={activeTab === 'chakras' ? 'btn-gold' : 'btn-outline'}
            style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
          >
            <Activity size={16} /> 7 Chakras & Nadis
          </button>
        </div>

        {/* Tab Content */}
        <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--border-gold)' }}>
          {activeTab === 'tattvas' && <CosmicTattvasDiagram />}
          {activeTab === 'koshas' && <PanchaKoshaDiagram />}
          {activeTab === 'bhumikas' && <JnanaBhumikasDiagram />}
          {activeTab === 'chakras' && <ChakraEnergyDiagram />}
        </div>

      </div>
    </section>
  );
}
