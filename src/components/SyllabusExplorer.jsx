import React, { useState } from 'react';
import { SYLLABUS_STAGES } from '../data/syllabusData';
import { StageDetailModal } from './StageDetailModal';
import { BookOpen, Sparkles, ChevronRight, Sun, Award } from 'lucide-react';

export function SyllabusExplorer() {
  const [selectedStage, setSelectedStage] = useState(null);

  return (
    <section id="syllabus-section" style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 193, 7, 0.1)', border: '1px solid var(--border-gold)', borderRadius: '20px', padding: '0.3rem 1rem', marginBottom: '0.8rem' }}>
            <Sun size={14} style={{ color: 'var(--primary-gold)' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-gold)', fontWeight: 600 }}>
              CURRICULUM OF CONSCIOUSNESS
            </span>
          </div>
          <h2 className="font-cinzel gold-text-gradient" style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.8rem' }}>
            The 8 Stages of Spiritual Awakening
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '0.95rem' }}>
            Click on any stage to open the complete Vedantic lesson, scriptural references, mantras, and practical contemplation exercises.
          </p>
        </div>

        {/* 8 Stage Grid */}
        <div className="grid-4">
          {SYLLABUS_STAGES.map((stage) => (
            <div
              key={stage.id}
              className="glass-card"
              onClick={() => setSelectedStage(stage)}
              style={{
                padding: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Accent Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{
                  background: 'rgba(255, 109, 0, 0.2)',
                  color: 'var(--sacred-saffron)',
                  border: '1px solid var(--sacred-saffron)',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '10px'
                }}>
                  STAGE {stage.level}
                </span>
                <span className="font-sanskrit" style={{ fontSize: '0.85rem', color: 'var(--text-gold)' }}>
                  {stage.sanskritTitle.split(' ')[0]}
                </span>
              </div>

              <div>
                <h3 className="font-cinzel" style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                  {stage.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                  {stage.summary.substring(0, 110)}...
                </p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--cosmic-cyan)', fontWeight: 600 }}>
                  {stage.keyConcept}
                </span>
                <span style={{ color: 'var(--primary-gold)', display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.8rem', fontWeight: 700 }}>
                  Explore <ChevronRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal display when clicked */}
        <StageDetailModal stage={selectedStage} onClose={() => setSelectedStage(null)} />

      </div>
    </section>
  );
}
