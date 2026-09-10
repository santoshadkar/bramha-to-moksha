import React, { useState } from 'react';
import { Volume2, VolumeX, BookOpen, Compass, Flame, MessageSquare, Map, Home, Scroll } from 'lucide-react';
import { omSynth } from '../utils/audioSynth';

export function Navbar({ activeTab, setActiveTab }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleAudioToggle = () => {
    const activeState = omSynth.toggle(432);
    setIsPlayingAudio(activeState);
  };

  // Rearranged exact order requested by user
  const navItems = [
    { id: 'home', label: 'Home Overview', icon: Home },
    { id: 'syllabus', label: 'Complete Syllabus', icon: BookOpen },
    { id: 'samvada', label: 'Guru-Disciple Samvada', icon: MessageSquare, highlight: true },
    { id: 'roadmap', label: "Disciple's Roadmap", icon: Map },
    { id: 'sadhana', label: 'Daily Mantras & Sadhana', icon: Scroll },
    { id: 'diagrams', label: 'Interactive Diagrams', icon: Compass },
    { id: 'inquiry', label: 'Self-Inquiry Studio', icon: Flame },
  ];

  return (
    <header className="glass-card" style={{ position: 'sticky', top: 0, zIndex: 100, borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.8rem 1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        
        {/* Brand Logo & Title */}
        <div onClick={() => setActiveTab('home')} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', cursor: 'pointer' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--sacred-saffron), var(--primary-gold))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.4rem',
            boxShadow: '0 0 15px var(--gold-glow)'
          }}>
            🕉️
          </div>
          <div>
            <h1 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, letterSpacing: '0.5px' }}>
              BRAHMA <span style={{ color: '#fff', fontSize: '0.85rem', opacity: 0.8 }}>TO</span> MOKSHA
            </h1>
            <p className="font-sanskrit" style={{ fontSize: '0.72rem', color: 'var(--text-gold)', margin: 0, opacity: 0.9 }}>
              ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.78rem',
                  borderRadius: '20px',
                  border: isActive ? 'none' : '1px solid var(--border-glass)',
                  background: isActive
                    ? (item.highlight ? 'linear-gradient(135deg, #00e5ff, #7c4dff)' : 'linear-gradient(135deg, var(--sacred-saffron), var(--primary-gold))')
                    : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? (item.highlight ? '#fff' : '#070913') : 'var(--text-main)',
                  fontWeight: isActive ? 800 : 500,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  boxShadow: isActive ? '0 0 15px var(--gold-glow)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <Icon size={14} />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* 432Hz Om Drone Audio Toggle */}
          <button
            onClick={handleAudioToggle}
            style={{
              background: isPlayingAudio ? 'var(--sacred-saffron)' : 'rgba(255, 255, 255, 0.06)',
              color: isPlayingAudio ? '#070913' : 'var(--primary-gold)',
              border: '1px solid var(--border-gold)',
              borderRadius: '20px',
              padding: '0.45rem 0.8rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.78rem',
              cursor: 'pointer',
              fontWeight: 600,
              boxShadow: isPlayingAudio ? '0 0 15px var(--saffron-glow)' : 'none',
              transition: 'all 0.3s ease'
            }}
            title="Toggle 432Hz Om Meditative Drone"
          >
            {isPlayingAudio ? <Volume2 size={15} className="pulse-glow" /> : <VolumeX size={15} />}
            <span>{isPlayingAudio ? '432Hz Om' : '432Hz Om Drone'}</span>
          </button>
        </nav>

      </div>
    </header>
  );
}
