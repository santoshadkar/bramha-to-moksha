import React, { useState } from 'react';
import { PANCHA_KOSHA_LAYERS } from '../../data/diagramData';
import { Sparkles, Layers } from 'lucide-react';

export function PanchaKoshaDiagram() {
  const [selectedKosha, setSelectedKosha] = useState(PANCHA_KOSHA_LAYERS[5]); // Default to Atman

  return (
    <div style={{ padding: '1rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.6rem', margin: 0 }}>
          Pancha Kosha - The 5 Sheaths of Human Existence
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Explore the concentric sheaths encasing the immortal Atman. Select layers from outside to inside.
        </p>
      </div>

      <div className="grid-2" style={{ alignItems: 'center' }}>
        
        {/* Visual Concentric Rings */}
        <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '320px', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {PANCHA_KOSHA_LAYERS.map((layer, index) => {
              const size = 320 - index * 46;
              const isSelected = selectedKosha.id === layer.id;
              
              return (
                <div
                  key={layer.id}
                  onClick={() => setSelectedKosha(layer)}
                  style={{
                    position: 'absolute',
                    width: `${size}px`,
                    height: `${size}px`,
                    borderRadius: '50%',
                    border: `2px solid ${layer.color}`,
                    background: isSelected ? `${layer.color}33` : 'rgba(0, 0, 0, 0.2)',
                    boxShadow: isSelected ? `0 0 25px ${layer.color}` : 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {index === 5 && (
                    <div style={{
                      color: '#070913',
                      background: '#fff',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      boxShadow: '0 0 20px #fff'
                    }}>
                      🕉️
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Kosha Details */}
        <div className="glass-card" style={{ padding: '2rem', border: `1.5px solid ${selectedKosha.color}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
            <Layers size={20} style={{ color: selectedKosha.color }} />
            <span style={{ fontSize: '0.8rem', color: selectedKosha.color, fontWeight: 700, textTransform: 'uppercase' }}>
              Sheath Layer Inspector
            </span>
          </div>

          <h3 className="font-cinzel" style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.2rem' }}>
            {selectedKosha.name}
          </h3>
          <p className="font-sanskrit" style={{ fontSize: '1.2rem', color: selectedKosha.color, marginBottom: '1rem' }}>
            {selectedKosha.sanskrit} ({selectedKosha.translation})
          </p>

          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.8rem 1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-gold)', fontWeight: 600 }}>Associated Element: </span>
            <span style={{ fontSize: '0.85rem', color: '#fff' }}>{selectedKosha.element}</span>
          </div>

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
            {selectedKosha.desc}
          </p>
        </div>

      </div>
    </div>
  );
}
