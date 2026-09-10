import React, { useState } from 'react';
import { CHAKRAS_DATA } from '../../data/diagramData';
import { Flame, Activity } from 'lucide-react';

export function ChakraEnergyDiagram() {
  const [selectedChakra, setSelectedChakra] = useState(CHAKRAS_DATA[6]); // Sahasrara default

  return (
    <div style={{ padding: '1rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.6rem', margin: 0 }}>
          Subtle Energy System - 7 Chakras & Nadis
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Ida (Lunar), Pingala (Solar), and Sushumna (Central) Nadis with the 7 Lotus Centers. Click to inspect.
        </p>
      </div>

      <div className="grid-2" style={{ alignItems: 'center' }}>
        
        {/* Visual Chakra Column */}
        <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem', position: 'relative' }}>
          
          {/* Subtle Nadi Lines Background */}
          <div style={{ position: 'absolute', top: '2rem', bottom: '2rem', width: '4px', background: 'linear-gradient(to top, #f44336, #ff9800, #ffeb3b, #4caf50, #00bcd4, #3f51b5, #9c27b0)' }} />

          {/* Chakras Top to Bottom */}
          {[...CHAKRAS_DATA].reverse().map((chk) => {
            const isSelected = selectedChakra.id === chk.id;
            return (
              <div
                key={chk.id}
                onClick={() => setSelectedChakra(chk)}
                style={{
                  zIndex: 2,
                  padding: '0.6rem 1.5rem',
                  borderRadius: '25px',
                  background: isSelected ? chk.color : 'rgba(18, 24, 43, 0.9)',
                  border: `2px solid ${chk.color}`,
                  color: isSelected ? '#070913' : '#fff',
                  fontWeight: 800,
                  cursor: 'pointer',
                  width: '260px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  boxShadow: isSelected ? `0 0 20px ${chk.color}` : 'none',
                  transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: chk.color }} />
                  <span className="font-cinzel" style={{ fontSize: '0.9rem' }}>{chk.name}</span>
                </div>
                <span className="font-sanskrit" style={{ fontSize: '0.85rem' }}>{chk.sanskrit}</span>
              </div>
            );
          })}
        </div>

        {/* Selected Chakra Details */}
        <div className="glass-card" style={{ padding: '2rem', border: `1.5px solid ${selectedChakra.color}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Activity size={20} style={{ color: selectedChakra.color }} />
            <span style={{ fontSize: '0.8rem', color: selectedChakra.color, fontWeight: 700, textTransform: 'uppercase' }}>
              Chakra Resonance
            </span>
          </div>

          <h3 className="font-cinzel" style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.2rem' }}>
            {selectedChakra.name} ({selectedChakra.sanskrit})
          </h3>
          <p style={{ color: 'var(--text-gold)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            Anatomical Center: {selectedChakra.location}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.8rem', borderRadius: '8px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Element:</span>
              <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>{selectedChakra.element}</span>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.8rem', borderRadius: '8px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Bija Mantra:</span>
              <span className="font-sanskrit" style={{ fontSize: '1.1rem', color: selectedChakra.color, fontWeight: 800 }}>{selectedChakra.mantra}</span>
            </div>
          </div>

          <div style={{ background: 'rgba(255, 109, 0, 0.1)', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--sacred-saffron)' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--sacred-saffron)', fontWeight: 700 }}>Petal Matrix: </span>
            <span style={{ fontSize: '0.85rem', color: '#fff' }}>{selectedChakra.petallCount} Sacred Vibrational Petals</span>
          </div>
        </div>

      </div>
    </div>
  );
}
