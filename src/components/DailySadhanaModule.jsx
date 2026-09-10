import React, { useState } from 'react';
import { DAILY_SADHANA_ROUTINES } from '../data/sadhanaData';
import { Sun, Moon, Flame, Sparkles, Scroll, CheckCircle2, Volume2, BookOpen, Clock } from 'lucide-react';
import { omSynth } from '../utils/audioSynth';

export function DailySadhanaModule() {
  const [activeRoutineId, setActiveRoutineId] = useState(DAILY_SADHANA_ROUTINES[0].id);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const activeRoutine = DAILY_SADHANA_ROUTINES.find(r => r.id === activeRoutineId);

  const handleAudioToggle = () => {
    const activeState = omSynth.toggle(432);
    setIsPlayingAudio(activeState);
  };

  return (
    <section id="sadhana-section" style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 109, 0, 0.1)', border: '1px solid var(--sacred-saffron)', borderRadius: '20px', padding: '0.3rem 1rem', marginBottom: '0.8rem' }}>
            <Sun size={14} style={{ color: 'var(--sacred-saffron)' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-gold)', fontWeight: 600 }}>
              NITYA SADHANA & MANTHRA ANUSTHANA
            </span>
          </div>
          <h2 className="font-cinzel saffron-text-gradient" style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '0.8rem' }}>
            Daily Spiritual Routine, Slokas & Meditation Practices
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Essential daily spiritual practices, authentic Sanskrit slokas, timing guidelines, and mantras for morning waking, twilight meditation, and night surrender.
          </p>
        </div>

        {/* Routine Selector Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {DAILY_SADHANA_ROUTINES.map((routine) => {
            const isActive = routine.id === activeRoutineId;
            return (
              <button
                key={routine.id}
                onClick={() => setActiveRoutineId(routine.id)}
                className={isActive ? 'btn-gold' : 'btn-outline'}
                style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}
              >
                {routine.id === 'morning-routine' && <Sun size={16} />}
                {routine.id === 'meditation-routine' && <Flame size={16} />}
                {routine.id === 'evening-routine' && <Moon size={16} />}
                <span>{routine.sanskritPeriod} ({routine.period.split(' ')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Selected Routine Overview */}
        {activeRoutine && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Header Box */}
            <div className="glass-card" style={{ padding: '2rem', border: '1.5px solid var(--border-gold)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <span className="font-sanskrit" style={{ color: 'var(--sacred-saffron)', fontSize: '1.1rem' }}>
                    {activeRoutine.sanskritPeriod}
                  </span>
                  <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0.2rem 0' }}>
                    {activeRoutine.period}
                  </h3>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ background: 'rgba(255, 193, 7, 0.1)', border: '1px solid var(--border-gold)', padding: '0.4rem 1rem', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', color: 'var(--text-gold)', fontWeight: 600 }}>
                    <Clock size={15} /> Recommended Time: {activeRoutine.time}
                  </div>

                  <button
                    onClick={handleAudioToggle}
                    style={{
                      background: isPlayingAudio ? 'var(--sacred-saffron)' : 'rgba(255, 255, 255, 0.08)',
                      color: isPlayingAudio ? '#070913' : 'var(--primary-gold)',
                      border: '1px solid var(--border-gold)',
                      borderRadius: '20px',
                      padding: '0.45rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      fontWeight: 600
                    }}
                  >
                    <Volume2 size={16} /> {isPlayingAudio ? 'Pause 432Hz Om' : 'Play 432Hz Om Drone'}
                  </button>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                {activeRoutine.overview}
              </p>
            </div>

            {/* Practical Step-by-step Actions */}
            <div className="glass-card" style={{ padding: '2rem', border: '1px solid var(--cosmic-cyan)' }}>
              <h4 className="font-cinzel cosmic-text-gradient" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={20} /> Practical Spiritual Steps to Follow
              </h4>
              <div className="grid-2">
                {activeRoutine.practices.map((practice, pIdx) => (
                  <div key={pIdx} style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1rem 1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)', display: 'flex', gap: '0.8rem' }}>
                    <span style={{ background: 'var(--cosmic-cyan)', color: '#070913', fontWeight: 900, borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', flexShrink: 0, marginTop: '0.2rem' }}>
                      {pIdx + 1}
                    </span>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                      {practice}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sacred Mantras & Slokas List */}
            <div>
              <h4 className="font-cinzel" style={{ color: 'var(--primary-gold)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Scroll size={20} style={{ color: 'var(--sacred-saffron)' }} /> Daily Recitation Slokas & Mantras
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {activeRoutine.mantras.map((mantra, mIdx) => (
                  <div key={mIdx} className="glass-card" style={{ padding: '1.8rem', border: '1.5px solid var(--border-gold)', boxShadow: '0 0 25px rgba(255, 193, 7, 0.1)' }}>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                      <h5 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>
                        {mantra.title}
                      </h5>
                      <span style={{ background: 'rgba(255, 109, 0, 0.15)', border: '1px solid var(--sacred-saffron)', color: 'var(--sacred-saffron)', fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.8rem', borderRadius: '10px' }}>
                        Usage: {mantra.usage}
                      </span>
                    </div>

                    {/* Devanagari Sanskrit Sloka */}
                    <div style={{ background: 'linear-gradient(135deg, rgba(255, 109, 0, 0.1) 0%, rgba(255, 193, 7, 0.08) 100%)', padding: '1.2rem 1.5rem', borderRadius: '10px', borderLeft: '4px solid var(--sacred-saffron)', marginBottom: '1rem' }}>
                      <p className="font-sanskrit" style={{ fontSize: '1.2rem', color: '#fff', margin: 0, lineHeight: 1.7 }}>
                        {mantra.sanskrit}
                      </p>
                    </div>

                    {/* Roman Transliteration */}
                    <div style={{ marginBottom: '1rem', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '8px', border: '1px solid var(--border-glass)' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--cosmic-cyan)', fontWeight: 700, display: 'block', marginBottom: '0.2rem' }}>
                        Transliteration / Pronunciation:
                      </span>
                      <p style={{ color: 'var(--text-gold)', fontSize: '0.92rem', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                        "{mantra.transliteration}"
                      </p>
                    </div>

                    {/* Meaning */}
                    <div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, display: 'block', marginBottom: '0.2rem' }}>
                        Meaning & Contemplative Purpose:
                      </span>
                      <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                        {mantra.meaning}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
