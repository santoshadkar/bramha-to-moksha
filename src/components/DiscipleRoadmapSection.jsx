import React from 'react';
import { DISCIPLE_ROADMAP } from '../data/dialogueData';
import { Compass, CheckCircle2, Flame, Award, BookOpen, AlertTriangle, ShieldCheck } from 'lucide-react';

export function DiscipleRoadmapSection() {
  return (
    <section id="roadmap-section" style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 109, 0, 0.1)', border: '1px solid var(--sacred-saffron)', borderRadius: '20px', padding: '0.3rem 1rem', marginBottom: '0.8rem' }}>
            <Compass size={14} style={{ color: 'var(--sacred-saffron)' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-gold)', fontWeight: 600 }}>
              SADHANA MARGA - THE DISCIPLE'S ROADMAP
            </span>
          </div>
          <h2 className="font-cinzel saffron-text-gradient" style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '0.8rem' }}>
            Granular Roadmap to Supreme Liberation & Daily Tapas
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '0.98rem', lineHeight: 1.7 }}>
            Enlightenment is not accidental. It demands systematic physical discipline (*Tapas*), mental training, scriptural study, overcoming spiritual obstacles (*Vighnas*), and achieving concrete milestones from Stage 1 to Stage 6.
          </p>
        </div>

        {/* 6 Stage Granular Roadmap Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {DISCIPLE_ROADMAP.map((item) => (
            <div key={item.stage} className="glass-card" style={{ padding: '2.2rem', border: '1.5px solid var(--border-gold)', boxShadow: '0 0 30px rgba(0, 0, 0, 0.4)' }}>
              
              {/* Header Title Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--sacred-saffron), var(--primary-gold))',
                    color: '#070913',
                    fontWeight: 900,
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px var(--gold-glow)'
                  }}>
                    {item.stage}
                  </div>
                  <div>
                    <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>
                      {item.title}
                    </h3>
                    <span className="font-sanskrit" style={{ color: 'var(--text-gold)', fontSize: '0.95rem' }}>
                      {item.sanskritTitle}
                    </span>
                  </div>
                </div>

                <div style={{ background: 'rgba(0, 229, 255, 0.1)', border: '1px solid var(--cosmic-cyan)', padding: '0.45rem 1.1rem', borderRadius: '15px', fontSize: '0.82rem', color: 'var(--cosmic-cyan)', fontWeight: 700 }}>
                  Primary Focus: {item.focus}
                </div>
              </div>

              {/* Sub-section Grid: Tapas & Mental Training */}
              <div className="grid-2" style={{ marginBottom: '1.2rem' }}>
                
                {/* Daily Tapas & Physical Disciplines */}
                <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1.4rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 style={{ color: 'var(--sacred-saffron)', fontSize: '0.88rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    <Flame size={16} /> Required Daily Tapas & Physical Disciplines
                  </h4>
                  <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {item.tapas.map((tapa, tIdx) => (
                      <li key={tIdx} style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        {tapa}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mental Training & Scripture Study */}
                <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1.4rem', borderRadius: '12px', border: '1px solid var(--border-glass)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h4 style={{ color: 'var(--primary-gold)', fontSize: '0.88rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      <CheckCircle2 size={16} /> Inner Mental & Emotional Training
                    </h4>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {item.mentalTraining}
                    </p>
                  </div>

                  <div>
                    <h4 style={{ color: 'var(--cosmic-cyan)', fontSize: '0.85rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      <BookOpen size={15} /> Prescribed Scriptures to Master
                    </h4>
                    <p style={{ color: 'var(--text-gold)', fontSize: '0.88rem', fontStyle: 'italic', margin: 0 }}>
                      📜 {item.scriptureStudy}
                    </p>
                  </div>
                </div>

              </div>

              {/* Obstacles & Remedies Banner */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.2rem' }}>
                <div style={{ background: 'rgba(244, 67, 54, 0.1)', border: '1px solid rgba(244, 67, 54, 0.3)', padding: '0.8rem 1rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.78rem', color: '#ff8a80', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
                    <AlertTriangle size={14} /> Common Spiritual Obstacles (Vighnas):
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#fff' }}>{item.obstacles}</span>
                </div>

                <div style={{ background: 'rgba(76, 175, 80, 0.1)', border: '1px solid rgba(76, 175, 80, 0.3)', padding: '0.8rem 1rem', borderRadius: '10px' }}>
                  <span style={{ fontSize: '0.78rem', color: '#b9f6ca', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.2rem' }}>
                    <ShieldCheck size={14} /> Prescribed Vedantic Remedy:
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#fff' }}>{item.remedies}</span>
                </div>
              </div>

              {/* Milestone Achieved */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255, 193, 7, 0.08)', padding: '0.9rem 1.2rem', borderRadius: '10px', border: '1px solid var(--border-gold)' }}>
                <Award size={20} style={{ color: 'var(--primary-gold)' }} />
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary-gold)', fontWeight: 800, textTransform: 'uppercase' }}>Spiritual Milestone Achieved: </span>
                  <span style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>{item.milestone}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
