import React, { useState } from 'react';
import { GURU_DISCIPLE_DIALOGUES } from '../data/dialogueData';
import { MessageSquare, Sparkles, Scroll, Feather, Compass, CheckCircle2 } from 'lucide-react';

export function GuruDiscipleDialogue() {
  const [selectedDialogue, setSelectedDialogue] = useState(GURU_DISCIPLE_DIALOGUES[0]);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(GURU_DISCIPLE_DIALOGUES.map(d => d.category))];

  const filteredDialogues = activeCategory === 'All'
    ? GURU_DISCIPLE_DIALOGUES
    : GURU_DISCIPLE_DIALOGUES.filter(d => d.category === activeCategory);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    const newFiltered = cat === 'All'
      ? GURU_DISCIPLE_DIALOGUES
      : GURU_DISCIPLE_DIALOGUES.filter(d => d.category === cat);
    if (newFiltered.length > 0) {
      setSelectedDialogue(newFiltered[0]);
    }
  };

  return (
    <section id="samvada-section" style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 193, 7, 0.1)', border: '1px solid var(--border-gold)', borderRadius: '20px', padding: '0.3rem 1rem', marginBottom: '0.8rem' }}>
            <MessageSquare size={14} style={{ color: 'var(--primary-gold)' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-gold)', fontWeight: 600 }}>
              GURU-SHISHYA SAMVADA
            </span>
          </div>
          <h2 className="font-cinzel gold-text-gradient" style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '0.8rem' }}>
            Sacred Dialogues of Enlightenment
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Experience the ancient oral tradition of Upanishadic inquiry. The devoted disciple (*Shishya*) sits at the feet of the Enlightened Master (*Guru*) on the dais, seeking liberation through sacred questions and answers.
          </p>
        </div>

        {/* Hero Banner: Guru Seated on Dais */}
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2.5rem', border: '1.5px solid var(--border-gold)', overflow: 'hidden' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '2px solid var(--border-gold)' }}>
              <img
                src="/guru_teaching.jpg"
                alt="Guru seated on lotus dais answering questions of disciples"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <div>
              <span className="font-sanskrit" style={{ color: 'var(--text-gold)', fontSize: '1rem' }}>
                तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया
              </span>
              <h3 className="font-cinzel saffron-text-gradient" style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0.4rem 0 0.8rem 0' }}>
                The Pavilion of Truth & Inquiry
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                "Know That by humble prostration, by sacred inquiry, and by unselfish service. The Wise who have realized the Ultimate Truth will instruct you in that Wisdom." — *Bhagavad Gita 4.34*
              </p>
              <div style={{ background: 'rgba(255, 109, 0, 0.1)', padding: '0.8rem 1rem', borderRadius: '10px', borderLeft: '4px solid var(--sacred-saffron)' }}>
                <span style={{ color: 'var(--sacred-saffron)', fontSize: '0.85rem', fontWeight: 700 }}>Guru's Assurance: </span>
                <span style={{ color: '#fff', fontSize: '0.85rem', fontStyle: 'italic' }}>
                  "Fear not, O seeker! There is a way across the ocean of Samsara. That path which sages traversed, I shall reveal to you."
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters (Top) */}
        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryChange(cat)}
              className={activeCategory === cat ? 'btn-gold' : 'btn-outline'}
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.82rem' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid: Question List (Left) & Detailed Dialogue Viewer (Right) */}
        <div className="grid-2" style={{ alignItems: 'start' }}>
          
          {/* Left: Interactive Question Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 className="font-cinzel" style={{ color: 'var(--cosmic-cyan)', fontSize: '1.1rem', marginBottom: '0.4rem' }}>
              Select a Question Asked by the Disciple
            </h4>
            {filteredDialogues.map((d) => {
              const isSelected = selectedDialogue.id === d.id;
              return (
                <div
                  key={d.id}
                  onClick={() => setSelectedDialogue(d)}
                  className="glass-card"
                  style={{
                    padding: '1.2rem',
                    cursor: 'pointer',
                    border: isSelected ? '1.5px solid var(--primary-gold)' : '1px solid var(--border-glass)',
                    background: isSelected ? 'rgba(26, 36, 62, 0.9)' : 'var(--bg-card)',
                    boxShadow: isSelected ? '0 0 20px var(--gold-glow)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span style={{ fontSize: '0.7rem', color: 'var(--sacred-saffron)', fontWeight: 800, textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                    {d.category}
                  </span>
                  <h5 className="font-cinzel" style={{ fontSize: '1rem', color: '#fff', margin: 0, lineHeight: 1.4 }}>
                    "{d.question}"
                  </h5>
                </div>
              );
            })}
          </div>

          {/* Right: Rich Dialogue Display */}
          {selectedDialogue && (
            <div className="glass-card" style={{ padding: '2rem', border: '1.5px solid var(--primary-gold)', boxShadow: '0 0 30px var(--gold-glow)' }}>
              
              {/* Disciple Question Box */}
              <div style={{ background: 'rgba(0, 229, 255, 0.08)', borderLeft: '4px solid var(--cosmic-cyan)', padding: '1.2rem', borderRadius: '0 12px 12px 0', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--cosmic-cyan)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  <MessageSquare size={16} /> Disciple's Earnest Inquiry (Shishya Pariprashna)
                </div>
                <h4 className="font-cinzel" style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.4rem', lineHeight: 1.4 }}>
                  "{selectedDialogue.question}"
                </h4>
                {selectedDialogue.sanskritQuestion && (
                  <p className="font-sanskrit" style={{ color: 'var(--text-gold)', fontSize: '0.95rem', margin: 0 }}>
                    {selectedDialogue.sanskritQuestion}
                  </p>
                )}
              </div>

              {/* Guru Answer Box */}
              <div style={{ background: 'rgba(255, 109, 0, 0.08)', borderLeft: '4px solid var(--sacred-saffron)', padding: '1.5rem', borderRadius: '0 12px 12px 0', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--sacred-saffron)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  <Sparkles size={16} /> Enlightened Guru's Answer (Guru Upadesha)
                </div>
                <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                  {selectedDialogue.answer}
                </p>

                {selectedDialogue.sanskritAnswer && (
                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '0.8rem 1.2rem', borderRadius: '8px', border: '1px solid var(--border-gold)', marginTop: '0.8rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-gold)', display: 'block', marginBottom: '0.2rem' }}>Upanishadic Quotation:</span>
                    <p className="font-sanskrit" style={{ fontSize: '1.05rem', color: '#fff', margin: 0 }}>
                      {selectedDialogue.sanskritAnswer}
                    </p>
                  </div>
                )}
              </div>

              {/* Key Insight & Scripture Reference */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '0.8rem 1rem', borderRadius: '10px', border: '1px solid var(--border-gold)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary-gold)', fontWeight: 700, display: 'block', marginBottom: '0.2rem' }}>
                    💡 Core Vedantic Insight:
                  </span>
                  <span style={{ fontSize: '0.9rem', color: '#fff', fontStyle: 'italic' }}>
                    {selectedDialogue.keyInsight}
                  </span>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Feather size={14} style={{ color: 'var(--sacred-saffron)' }} />
                  <span>Authority Source: <strong>{selectedDialogue.scriptureRef}</strong></span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
