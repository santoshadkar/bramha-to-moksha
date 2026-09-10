import React, { useState } from 'react';
import { JNANA_BHUMIKAS_STAGES } from '../../data/diagramData';
import { Award, Compass, CheckCircle2 } from 'lucide-react';

export function JnanaBhumikasDiagram() {
  const [activeStep, setActiveStep] = useState(4); // Default to Sattvapatti (Awakening)

  const currentStage = JNANA_BHUMIKAS_STAGES.find(s => s.step === activeStep);

  return (
    <div style={{ padding: '1rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.6rem', margin: 0 }}>
          Sapta Jnana Bhumikas - The 7 Planes of Wisdom
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Ascension ladder recorded in Yoga Vasistha. Click each rung to see the state of consciousness achieved.
        </p>
      </div>

      {/* Interactive Vertical / Horizontal Stepper */}
      <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {JNANA_BHUMIKAS_STAGES.map((s) => {
            const isActive = s.step === activeStep;
            return (
              <div
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                style={{
                  flex: 1,
                  minWidth: '100px',
                  padding: '1rem 0.5rem',
                  borderRadius: '12px',
                  background: isActive ? 'linear-gradient(135deg, var(--sacred-saffron), var(--primary-gold))' : 'rgba(255, 255, 255, 0.05)',
                  border: isActive ? 'none' : '1px solid var(--border-glass)',
                  color: isActive ? '#070913' : '#fff',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 20px var(--gold-glow)' : 'none'
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 800, opacity: 0.8 }}>RUNG {s.step}</div>
                <div className="font-cinzel" style={{ fontSize: '0.9rem', fontWeight: 700 }}>{s.name}</div>
                <div className="font-sanskrit" style={{ fontSize: '0.75rem', opacity: 0.9 }}>{s.sanskrit}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stage Detail Box */}
      {currentStage && (
        <div className="glass-card" style={{ padding: '2rem', border: '1.5px solid var(--border-gold)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--sacred-saffron)', marginBottom: '0.5rem' }}>
            <Award size={20} />
            <span style={{ fontSize: '0.85rem', fontWeight: 700 }}>STAGE {currentStage.step} OF 7</span>
          </div>

          <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.8rem', marginBottom: '0.2rem' }}>
            {currentStage.name} ({currentStage.sanskrit})
          </h3>
          <h4 style={{ color: 'var(--text-gold)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '1rem' }}>
            Meaning: "{currentStage.meaning}"
          </h4>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', background: 'rgba(0, 229, 255, 0.1)', padding: '1rem', borderRadius: '10px', border: '1px solid var(--cosmic-cyan)' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--cosmic-cyan)', fontWeight: 600 }}>Sage Title/State: </span>
              <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 700 }}>{currentStage.state}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
