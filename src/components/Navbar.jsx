import React, { useState } from 'react';
import { Volume2, VolumeX, BookOpen, Compass, Flame, MessageSquare, Map, Home, Scroll } from 'lucide-react';
import { omSynth } from '../utils/audioSynth';

export function Navbar({ activeTab, setActiveTab }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleAudioToggle = () => {
    const activeState = omSynth.toggle(432);
    setIsPlayingAudio(activeState);
  };

  // Nav items with custom vibrant spiritual gradient themes
  const navItems = [
    {
      id: 'home',
      label: 'Home Overview',
      icon: Home,
      activeGradient: 'linear-gradient(135deg, #ffc107, #ff8f00)',
      activeTextColor: '#070913',
      borderColor: '#ffc107'
    },
    {
      id: 'syllabus',
      label: 'Complete Syllabus',
      icon: BookOpen,
      activeGradient: 'linear-gradient(135deg, #ffd54f, #ff6d00)',
      activeTextColor: '#070913',
      borderColor: '#ffd54f'
    },
    {
      id: 'samvada',
      label: 'Guru-Disciple Samvada',
      icon: MessageSquare,
      activeGradient: 'linear-gradient(135deg, #00e5ff, #7c4dff)',
      activeTextColor: '#ffffff',
      borderColor: '#00e5ff'
    },
    {
      id: 'roadmap',
      label: "Disciple's Roadmap",
      icon: Map,
      activeGradient: 'linear-gradient(135deg, #ff6d00, #dd2c00)',
      activeTextColor: '#ffffff',
      borderColor: '#ff6d00'
    },
    {
      id: 'sadhana',
      label: 'Daily Mantras & Sadhana',
      icon: Scroll,
      activeGradient: 'linear-gradient(135deg, #00e676, #00b0ff)',
      activeTextColor: '#070913',
      borderColor: '#00e676'
    },
    {
      id: 'diagrams',
      label: 'Interactive Diagrams',
      icon: Compass,
      activeGradient: 'linear-gradient(135deg, #b388ff, #ff4081)',
      activeTextColor: '#ffffff',
      borderColor: '#b388ff'
    },
    {
      id: 'inquiry',
      label: 'Self-Inquiry Studio',
      icon: Flame,
      activeGradient: 'linear-gradient(135deg, #ffab00, #ff5252)',
      activeTextColor: '#070913',
      borderColor: '#ffab00'
    },
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

        {/* Navigation Tabs with Vibrant Colorful Themes */}
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
                  border: `1.5px solid ${item.borderColor}`,
                  background: isActive ? item.activeGradient : 'rgba(18, 24, 43, 0.7)',
                  color: isActive ? item.activeTextColor : item.borderColor,
                  fontWeight: isActive ? 800 : 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  boxShadow: isActive ? `0 0 18px ${item.borderColor}` : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <Icon size={14} style={{ color: isActive ? item.activeTextColor : item.borderColor }} />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* 432Hz Om Drone Audio Toggle */}
          <button
            onClick={handleAudioToggle}
            style={{
              background: isPlayingAudio ? 'var(--sacred-saffron)' : 'rgba(255, 109, 0, 0.15)',
              color: isPlayingAudio ? '#070913' : 'var(--primary-gold)',
              border: '1.5px solid var(--primary-gold)',
              borderRadius: '20px',
              padding: '0.45rem 0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.78rem',
              cursor: 'pointer',
              fontWeight: 700,
              boxShadow: isPlayingAudio ? '0 0 18px var(--saffron-glow)' : 'none',
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
