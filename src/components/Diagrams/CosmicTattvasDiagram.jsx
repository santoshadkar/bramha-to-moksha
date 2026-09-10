import React, { useState } from 'react';
import { TATTVAS_DESCENT } from '../../data/diagramData';
import { Sparkles, Info, BookOpen, Scroll } from 'lucide-react';

export function CosmicTattvasDiagram() {
  const [activeInfo, setActiveInfo] = useState(TATTVAS_DESCENT.rootNode);

  return (
    <div style={{ padding: '1rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.8rem', margin: 0 }}>
          {TATTVAS_DESCENT.title}
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '750px', margin: '0.4rem auto 0 auto' }}>
          Interactive metaphysical tree illustrating the descent of Nirguna Brahman through Maya into the 24 Tattvas of cosmic existence. Click any node to inspect scripture sources & attributes.
        </p>
      </div>

      <div className="grid-2" style={{ alignItems: 'start' }}>
        
        {/* Interactive Tree View */}
        <div className="glass-card" style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          
          {/* Root Node: Nirguna Brahman */}
          <div
            onClick={() => setActiveInfo(TATTVAS_DESCENT.rootNode)}
            style={{
              padding: '1rem 2.2rem',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #ffc107, #ff6d00)',
              color: '#070913',
              fontWeight: 900,
              cursor: 'pointer',
              boxShadow: activeInfo.id === TATTVAS_DESCENT.rootNode.id ? '0 0 30px var(--saffron-glow)' : '0 0 10px rgba(0,0,0,0.5)',
              transform: activeInfo.id === TATTVAS_DESCENT.rootNode.id ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
          >
            <div className="font-cinzel" style={{ fontSize: '1.2rem' }}>{TATTVAS_DESCENT.rootNode.label}</div>
            <div className="font-sanskrit" style={{ fontSize: '0.88rem' }}>{TATTVAS_DESCENT.rootNode.sanskrit}</div>
          </div>

          <div style={{ width: '2px', height: '26px', background: 'var(--primary-gold)' }} />

          {/* Level 1: Maya & Ishvara */}
          {TATTVAS_DESCENT.level1.map(node => (
            <div
              key={node.id}
              onClick={() => setActiveInfo(node)}
              style={{
                padding: '0.9rem 2rem',
                borderRadius: '25px',
                background: 'rgba(255, 109, 0, 0.25)',
                border: '1.5px solid var(--sacred-saffron)',
                color: '#fff',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: activeInfo.id === node.id ? '0 0 25px var(--saffron-glow)' : 'none',
                transform: activeInfo.id === node.id ? 'scale(1.05)' : 'scale(1)',
                transition: 'all 0.3s ease',
                textAlign: 'center'
              }}
            >
              <div className="font-cinzel" style={{ fontSize: '1.05rem' }}>{node.label}</div>
              <div className="font-sanskrit" style={{ fontSize: '0.82rem', color: 'var(--text-gold)' }}>{node.sanskrit}</div>
            </div>
          ))}

          <div style={{ width: '2px', height: '26px', background: 'var(--primary-gold)' }} />

          {/* Level 2: Mahat & Ahamkara */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {TATTVAS_DESCENT.level2.map(node => (
              <div
                key={node.id}
                onClick={() => setActiveInfo(node)}
                style={{
                  padding: '0.8rem 1.4rem',
                  borderRadius: '20px',
                  background: 'rgba(0, 229, 255, 0.15)',
                  border: '1px solid var(--cosmic-cyan)',
                  color: '#fff',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: activeInfo.id === node.id ? '0 0 20px rgba(0, 229, 255, 0.4)' : 'none',
                  transform: activeInfo.id === node.id ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div>{node.label}</div>
                <div className="font-sanskrit" style={{ fontSize: '0.78rem', color: 'var(--cosmic-cyan)' }}>{node.sanskrit}</div>
              </div>
            ))}
          </div>

          <div style={{ width: '2px', height: '26px', background: 'var(--primary-gold)' }} />

          {/* Level 3: 24 Tattvas Categories */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {TATTVAS_DESCENT.level3.map((cat, idx) => (
              <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '0.9rem', borderRadius: '10px', border: '1px solid var(--border-glass)' }}>
                <h5 style={{ color: 'var(--text-gold)', fontSize: '0.82rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {cat.category}
                </h5>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {cat.items.map((item, itemIdx) => (
                    <span key={itemIdx} style={{
                      background: 'rgba(255, 193, 7, 0.1)',
                      border: '1px solid rgba(255, 193, 7, 0.2)',
                      padding: '0.25rem 0.7rem',
                      borderRadius: '12px',
                      fontSize: '0.78rem',
                      color: 'var(--text-main)'
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Detailed Node Inspector Panel */}
        <div className="glass-card" style={{ padding: '2rem', border: '1.5px solid var(--border-gold)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-gold)', marginBottom: '1.2rem' }}>
            <Info size={22} />
            <h4 className="font-cinzel" style={{ fontSize: '1.2rem', margin: 0, fontWeight: 800 }}>Tattva Inspector & Scripture Authority</h4>
          </div>

          {activeInfo ? (
            <div>
              <span className="font-sanskrit" style={{ color: 'var(--sacred-saffron)', fontSize: '1.15rem', display: 'block', marginBottom: '0.2rem' }}>
                {activeInfo.sanskrit}
              </span>
              <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '0.8rem' }}>
                {activeInfo.label}
              </h3>
              
              <p style={{ color: 'var(--text-main)', lineHeight: 1.8, fontSize: '0.96rem', marginBottom: '1.5rem' }}>
                {activeInfo.desc}
              </p>

              {activeInfo.scriptureRef && (
                <div style={{ background: 'rgba(255, 193, 7, 0.1)', border: '1px solid var(--border-gold)', padding: '1rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary-gold)', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.3rem' }}>
                    <Scroll size={16} /> Scripture Authority Source:
                  </span>
                  <span style={{ color: '#fff', fontSize: '0.9rem', fontStyle: 'italic' }}>
                    📜 {activeInfo.scriptureRef}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <p style={{ color: 'var(--text-muted)' }}>Click on any node in the cosmic diagram to inspect its spiritual significance and scriptural authority.</p>
          )}
        </div>

      </div>
    </div>
  );
}
