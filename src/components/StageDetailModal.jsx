import React from 'react';
import { X, BookOpen, Sparkles, Feather, HelpCircle, Scroll } from 'lucide-react';
import { MarkdownRenderer } from './MarkdownRenderer';

export function StageDetailModal({ stage, onClose }) {
  if (!stage) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(7, 9, 19, 0.88)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }} onClick={onClose}>
      <div className="glass-card" style={{
        maxWidth: '900px',
        width: '100%',
        maxHeight: '92vh',
        overflowY: 'auto',
        padding: '2.5rem',
        position: 'relative',
        border: '1.5px solid var(--primary-gold)',
        boxShadow: '0 0 45px var(--gold-glow)'
      }} onClick={e => e.stopPropagation()}>
        
        {/* Close Button */}
        <button onClick={onClose} style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid var(--border-glass)',
          color: '#fff',
          borderRadius: '50%',
          width: '38px',
          height: '38px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease'
        }}>
          <X size={20} />
        </button>

        {/* Level & Title Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
          <span style={{
            background: 'linear-gradient(135deg, var(--sacred-saffron), #dd2c00)',
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 800,
            padding: '0.25rem 0.9rem',
            borderRadius: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Stage {stage.level} of 8
          </span>
          <span className="font-sanskrit" style={{ color: 'var(--text-gold)', fontSize: '1.2rem' }}>
            {stage.sanskritTitle}
          </span>
        </div>

        <h2 className="font-cinzel gold-text-gradient" style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '0.4rem', lineHeight: 1.2 }}>
          {stage.title}
        </h2>
        
        <p style={{ color: 'var(--text-gold)', fontSize: '1rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
          "{stage.tagline}"
        </p>

        {/* Sacred Verse Callout Box */}
        {stage.sanskritVerse && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 109, 0, 0.12) 0%, rgba(255, 193, 7, 0.08) 100%)',
            borderLeft: '4px solid var(--sacred-saffron)',
            borderRight: '1px solid var(--border-gold)',
            borderTop: '1px solid var(--border-gold)',
            borderBottom: '1px solid var(--border-gold)',
            padding: '1.2rem 1.5rem',
            borderRadius: '0 12px 12px 0',
            marginBottom: '1.8rem'
          }}>
            <h4 style={{ color: 'var(--sacred-saffron)', fontSize: '0.85rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              <Scroll size={16} /> Classical Sanskrit Verse
            </h4>
            <p className="font-sanskrit" style={{ fontSize: '1.15rem', color: '#fff', margin: 0, lineHeight: 1.6 }}>
              {stage.sanskritVerse}
            </p>
          </div>
        )}

        {/* Core Mantra / Mahavakya */}
        <div style={{ background: 'rgba(0, 229, 255, 0.08)', border: '1px solid var(--cosmic-cyan)', padding: '1rem 1.2rem', borderRadius: '10px', marginBottom: '1.8rem' }}>
          <h4 style={{ color: 'var(--cosmic-cyan)', fontSize: '0.85rem', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            <Sparkles size={16} /> Core Mantra / Upanishadic Mahavakya
          </h4>
          <p className="font-sanskrit" style={{ fontSize: '1.1rem', color: '#fff', margin: 0 }}>
            {stage.mantra}
          </p>
        </div>

        {/* Executive Summary */}
        <div style={{ marginBottom: '1.8rem' }}>
          <h3 className="font-cinzel" style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={18} style={{ color: 'var(--sacred-saffron)' }} /> Overview & Teachings
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '0.98rem' }}>
            {stage.summary}
          </p>
        </div>

        {/* Detailed Section Breakdown using MarkdownRenderer */}
        <div style={{ background: 'rgba(11, 14, 23, 0.6)', padding: '1.8rem', borderRadius: '14px', marginBottom: '1.8rem', border: '1px solid var(--border-glass)' }}>
          <h3 className="font-cinzel" style={{ color: 'var(--text-gold)', fontSize: '1.15rem', marginBottom: '0.8rem' }}>
            Comprehensive Vedantic & Yogic Structural Analysis
          </h3>
          <MarkdownRenderer content={stage.details} />
        </div>

        {/* Scriptural References */}
        <div style={{ marginBottom: '1.8rem' }}>
          <h4 style={{ color: 'var(--text-gold)', fontSize: '0.9rem', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            <Feather size={16} /> Authoritative Scriptural References
          </h4>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {stage.scriptures.map((scrip, idx) => (
              <span key={idx} style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--border-glass)',
                padding: '0.4rem 0.9rem',
                borderRadius: '20px',
                fontSize: '0.82rem',
                color: 'var(--text-main)'
              }}>
                📜 {scrip}
              </span>
            ))}
          </div>
        </div>

        {/* Guided Contemplation Exercise */}
        <div style={{ background: 'linear-gradient(135deg, rgba(179, 136, 255, 0.12) 0%, rgba(0, 229, 255, 0.12) 100%)', padding: '1.4rem', borderRadius: '14px', border: '1.5px solid var(--divine-purple)' }}>
          <h4 style={{ color: 'var(--divine-purple)', fontSize: '0.95rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            <HelpCircle size={16} /> Practical Atma Vichara & Contemplation Exercise
          </h4>
          <p style={{ color: '#fff', fontSize: '0.95rem', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
            {stage.contemplation}
          </p>
        </div>

      </div>
    </div>
  );
}
