import React from 'react';
import { Compass, Sparkles, BookOpen, Sun, MessageSquare, Map, Flame, ChevronRight, Feather, Scroll, Award, Layers, ShieldCheck } from 'lucide-react';

export function HeroSection({ setActiveTab }) {
  return (
    <div style={{ padding: '3rem 0 3rem 0', position: 'relative' }}>
      <div className="container">
        
        {/* Main Hero Banner: Guru Seated on Lotus Dais */}
        <div className="glass-card" style={{ padding: '2.5rem', overflow: 'hidden', border: '1.5px solid var(--border-gold)', marginBottom: '3.5rem' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            
            {/* Left Hero Text */}
            <div style={{ paddingRight: '1rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 109, 0, 0.15)', border: '1px solid var(--sacred-saffron)', borderRadius: '20px', padding: '0.35rem 1rem', marginBottom: '1rem' }}>
                <Sun size={14} style={{ color: 'var(--sacred-saffron)' }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-gold)', fontWeight: 700, letterSpacing: '0.5px' }}>
                  THE ETERNAL VEDANTIC ROADMAP
                </span>
              </div>

              <h2 className="font-cinzel saffron-text-gradient" style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1.2, marginBottom: '1rem' }}>
                From Cosmic Origin (Brahma) to Supreme Liberation (Moksha)
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: '1.5rem', lineHeight: 1.75 }}>
                Welcome to the sacred portal of spiritual ascension. Journey step-by-step from the unmanifest non-dual Absolute (<strong style={{ color: 'var(--text-gold)' }}>Nirguna Brahman</strong>) and the emergence of the 24 Tattvas through the illusion of <strong style={{ color: 'var(--sacred-saffron)' }}>Samsara</strong>, culminating in non-dual freedom (<strong style={{ color: 'var(--cosmic-cyan)' }}>Moksha</strong>).
              </p>

              {/* Action Buttons Row: All 6 Buttons Colorful with Custom Gradients */}
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <button onClick={() => setActiveTab('syllabus')} className="btn-gold" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', background: 'linear-gradient(135deg, #ffc107, #ff6d00)', color: '#070913' }}>
                  <BookOpen size={16} /> Complete Syllabus
                </button>
                <button onClick={() => setActiveTab('samvada')} className="btn-gold" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', background: 'linear-gradient(135deg, #00e5ff, #7c4dff)', color: '#fff' }}>
                  <MessageSquare size={16} /> Guru-Disciple Samvada
                </button>
                <button onClick={() => setActiveTab('roadmap')} className="btn-gold" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', background: 'linear-gradient(135deg, #ff6d00, #dd2c00)', color: '#fff' }}>
                  <Map size={16} /> Disciple's Roadmap
                </button>
                <button onClick={() => setActiveTab('sadhana')} className="btn-gold" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', background: 'linear-gradient(135deg, #00e676, #00b0ff)', color: '#070913' }}>
                  <Scroll size={16} /> Daily Mantras
                </button>
                <button onClick={() => setActiveTab('diagrams')} className="btn-gold" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', background: 'linear-gradient(135deg, #b388ff, #ff4081)', color: '#fff' }}>
                  <Compass size={16} /> Diagrams
                </button>
                <button onClick={() => setActiveTab('inquiry')} className="btn-gold" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', background: 'linear-gradient(135deg, #ffab00, #ff5252)', color: '#070913' }}>
                  <Flame size={16} /> Self-Inquiry Studio
                </button>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-glass)' }}>
                <div>
                  <h4 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>8</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>Syllabus Stages</p>
                </div>
                <div style={{ borderLeft: '1px solid var(--border-glass)', paddingLeft: '1.5rem' }}>
                  <h4 className="font-cinzel cosmic-text-gradient" style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>24</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>Cosmic Tattvas</p>
                </div>
                <div style={{ borderLeft: '1px solid var(--border-glass)', paddingLeft: '1.5rem' }}>
                  <h4 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>7</h4>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>Jnana Bhumikas</p>
                </div>
              </div>
            </div>

            {/* Right Image Feature - Guru Seated on Lotus Dais */}
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 35px rgba(0, 0, 0, 0.7)', border: '2px solid var(--border-gold)' }}>
              <img
                src="/guru_teaching.jpg"
                alt="Enlightened Guru seated on lotus dais instructing disciples in ashram"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(7, 9, 19, 0.95) 0%, rgba(7, 9, 19, 0.4) 60%, transparent 100%)',
                padding: '1.4rem 1.5rem'
              }}>
                <p className="font-sanskrit" style={{ color: 'var(--text-gold)', fontSize: '0.95rem', margin: 0 }}>
                  गुरुर्साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः
                </p>
                <p style={{ fontSize: '0.82rem', color: '#fff', opacity: 0.9, margin: 0, marginTop: '0.3rem' }}>
                  The Enlightened Master Seated on the Dais Imparting Sacred Wisdom to Devoted Disciples
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Dedicated Page Launchers Cards Grid (All 6 Vibrant & Colorful) */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0 }}>
              Explore All Dedicated Modules
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: '0.3rem 0 0 0' }}>
              Click on any module to open its dedicated, in-depth interactive section.
            </p>
          </div>

          <div className="grid-3">
            
            {/* Launcher 1: Complete Syllabus (Gold Theme) */}
            <div
              className="glass-card"
              onClick={() => setActiveTab('syllabus')}
              style={{ padding: '1.8rem', border: '1.5px solid #ffc107', boxShadow: '0 0 20px rgba(255, 193, 7, 0.15)', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffc107' }}>
                    <BookOpen size={24} />
                    <h3 className="font-cinzel" style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>
                      Complete Syllabus
                    </h3>
                  </div>
                  <ChevronRight size={18} style={{ color: '#ffc107' }} />
                </div>
                <p className="font-sanskrit" style={{ color: 'var(--text-gold)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>
                  अष्टज्ञानसोपानानि
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                  Complete 8-stage Vedantic curriculum from Cosmic Creation (*Brahma*) to Non-Dual Freedom (*Moksha*) with Sanskrit verse analysis.
                </p>
              </div>
              <span style={{ color: '#ffc107', fontSize: '0.82rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Open Complete Syllabus <ChevronRight size={14} />
              </span>
            </div>

            {/* Launcher 2: Guru-Disciple Samvada (Cyan/Purple Theme) */}
            <div
              className="glass-card"
              onClick={() => setActiveTab('samvada')}
              style={{ padding: '1.8rem', border: '1.5px solid #00e5ff', boxShadow: '0 0 20px rgba(0, 229, 255, 0.15)', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00e5ff' }}>
                    <MessageSquare size={24} />
                    <h3 className="font-cinzel" style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>
                      Guru-Disciple Samvada
                    </h3>
                  </div>
                  <ChevronRight size={18} style={{ color: '#00e5ff' }} />
                </div>
                <p className="font-sanskrit" style={{ color: 'var(--text-gold)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>
                  गुरुशिष्यसंवादः
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                  14 interactive Q&A exchanges between the disciple (*Shishya*) and Enlightened Guru on the dais with Sanskrit slokas and Upanishadic quotes.
                </p>
              </div>
              <span style={{ color: '#00e5ff', fontSize: '0.82rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Open Dialogue Page <ChevronRight size={14} />
              </span>
            </div>

            {/* Launcher 3: Disciple's Roadmap (Saffron/Crimson Theme) */}
            <div
              className="glass-card"
              onClick={() => setActiveTab('roadmap')}
              style={{ padding: '1.8rem', border: '1.5px solid #ff6d00', boxShadow: '0 0 20px rgba(255, 109, 0, 0.15)', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ff6d00' }}>
                    <Map size={24} />
                    <h3 className="font-cinzel" style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>
                      Disciple's Roadmap
                    </h3>
                  </div>
                  <ChevronRight size={18} style={{ color: '#ff6d00' }} />
                </div>
                <p className="font-sanskrit" style={{ color: 'var(--text-gold)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>
                  साधनमार्गः तपश्च
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                  Detailed 6-stage roadmap with daily spiritual tapas, mental discipline, prescribed scriptures, spiritual obstacles (*Vighnas*), and milestones.
                </p>
              </div>
              <span style={{ color: '#ff6d00', fontSize: '0.82rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Open Disciple's Roadmap <ChevronRight size={14} />
              </span>
            </div>

            {/* Launcher 4: Daily Mantras & Sadhana (Emerald/Teal Theme) */}
            <div
              className="glass-card"
              onClick={() => setActiveTab('sadhana')}
              style={{ padding: '1.8rem', border: '1.5px solid #00e676', boxShadow: '0 0 20px rgba(0, 230, 118, 0.15)', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#00e676' }}>
                    <Scroll size={24} />
                    <h3 className="font-cinzel" style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>
                      Daily Mantras & Sadhana
                    </h3>
                  </div>
                  <ChevronRight size={18} style={{ color: '#00e676' }} />
                </div>
                <p className="font-sanskrit" style={{ color: 'var(--text-gold)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>
                  नित्यसाधना मन्त्रानुष्ठानम्
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                  Morning waking slokas (*Kara-Darshanam*), Bhojana Mantra, Gayatri, Mahamrityunjaya, twilight meditation, and night surrender slokas.
                </p>
              </div>
              <span style={{ color: '#00e676', fontSize: '0.82rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Open Daily Mantras Page <ChevronRight size={14} />
              </span>
            </div>

            {/* Launcher 5: Interactive Diagrams (Purple/Magenta Theme) */}
            <div
              className="glass-card"
              onClick={() => setActiveTab('diagrams')}
              style={{ padding: '1.8rem', border: '1.5px solid #b388ff', boxShadow: '0 0 20px rgba(179, 136, 255, 0.15)', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#b388ff' }}>
                    <Compass size={24} />
                    <h3 className="font-cinzel" style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>
                      Interactive Diagrams
                    </h3>
                  </div>
                  <ChevronRight size={18} style={{ color: '#b388ff' }} />
                </div>
                <p className="font-sanskrit" style={{ color: 'var(--text-gold)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>
                  प्रत्यक्षचित्राणि
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                  4 dynamic visual inspectors: 24 Tattvas Cosmic Tree, Concentric Pancha Kosha, 7 Sapta Jnana Bhumikas, and 7 Chakras & Subtle Nadis.
                </p>
              </div>
              <span style={{ color: '#b388ff', fontSize: '0.82rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Open Interactive Diagrams <ChevronRight size={14} />
              </span>
            </div>

            {/* Launcher 6: Self-Inquiry Studio (Amber/Flame Theme) */}
            <div
              className="glass-card"
              onClick={() => setActiveTab('inquiry')}
              style={{ padding: '1.8rem', border: '1.5px solid #ffab00', boxShadow: '0 0 20px rgba(255, 171, 0, 0.15)', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffab00' }}>
                    <Flame size={24} />
                    <h3 className="font-cinzel" style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>
                      Self-Inquiry Studio
                    </h3>
                  </div>
                  <ChevronRight size={18} style={{ color: '#ffab00' }} />
                </div>
                <p className="font-sanskrit" style={{ color: 'var(--text-gold)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>
                  आत्मविचारपीठम्
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                  Atma Vichara silence timer, step-by-step *Neti-Neti* 5-sheath dis-identification meditation, Vedantic glossary, and knowledge quiz.
                </p>
              </div>
              <span style={{ color: '#ffab00', fontSize: '0.82rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                Open Self-Inquiry Studio <ChevronRight size={14} />
              </span>
            </div>

          </div>
        </div>

        {/* Deep Metaphysics Breakdown of Brahma, Samsara, and Moksha */}
        <div style={{ marginBottom: '4rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 193, 7, 0.1)', border: '1px solid var(--border-gold)', borderRadius: '20px', padding: '0.35rem 1.2rem', marginBottom: '0.8rem' }}>
              <Sparkles size={16} style={{ color: 'var(--primary-gold)' }} />
              <span style={{ fontSize: '0.85rem', color: 'var(--text-gold)', fontWeight: 700, letterSpacing: '0.5px' }}>
                EXHAUSTIVE VEDANTIC METAPHYSICS
              </span>
            </div>
            <h2 className="font-cinzel gold-text-gradient" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.6rem' }}>
              1. Brahma & Cosmic Origin | 2. Samsara | 3. Supreme Liberation
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', fontSize: '0.98rem', lineHeight: 1.7 }}>
              Explore the complete metaphysical spectrum from the uncreated non-dual Absolute to cosmic projection, karmic transmigration, and ultimate non-dual emancipation.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* PILLAR 1: BRAHMA & COSMIC ORIGIN */}
            <div className="glass-card" style={{ padding: '2.5rem', border: '1.5px solid var(--primary-gold)', boxShadow: '0 0 35px rgba(255, 193, 7, 0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #ffc107, #ff6d00)', color: '#070913', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', boxShadow: '0 0 15px var(--gold-glow)' }}>
                    1
                  </div>
                  <div>
                    <span className="font-sanskrit" style={{ color: 'var(--sacred-saffron)', fontSize: '1.1rem' }}>
                      ब्रह्मतत्त्वं सृष्टिसंरचना च
                    </span>
                    <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0 }}>
                      Brahma & Cosmic Origin (Srishti-Krama)
                    </h3>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 193, 7, 0.1)', border: '1px solid var(--border-gold)', padding: '0.4rem 1rem', borderRadius: '15px', color: 'var(--text-gold)', fontSize: '0.82rem', fontWeight: 700 }}>
                  Principle: Unmanifest to Manifest 24 Tattvas
                </div>
              </div>

              {/* Classical Sacred Verse Callout */}
              <div style={{ background: 'rgba(255, 109, 0, 0.1)', borderLeft: '4px solid var(--sacred-saffron)', padding: '1rem 1.4rem', borderRadius: '0 10px 10px 0', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--sacred-saffron)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  Nasadiya Sukta (Rigveda 10.129) & Chandogya Upanishad:
                </span>
                <p className="font-sanskrit" style={{ fontSize: '1.1rem', color: '#fff', margin: 0, lineHeight: 1.6 }}>
                  सदेव सोम्येदमग्र आसीदेकमेवाद्वितीयम् । नासदासीन्नो सदासीत्तदानीम् ॥
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0, marginTop: '0.3rem', fontStyle: 'italic' }}>
                  "In the beginning, O gentle one, there existed Reality alone—One without a second. Neither non-existence nor existence was there then..."
                </p>
              </div>

              <div className="grid-3" style={{ gap: '1.5rem' }}>
                
                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--primary-gold)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    A. Nirguna Brahman (The Absolute)
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    <strong style={{ color: 'var(--text-gold)' }}>Sat-Chit-Ananda</strong>: Uncreated Existence, Self-luminous Awareness, and Limitless Bliss. Transcends time, space, and the three internal differences (<em style={{ color: 'var(--text-gold)' }}>Sajatiya, Vijatiya, Svagata Bheda</em>).
                  </p>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--sacred-saffron)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    B. Maya & Saguna Ishvara
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    Brahman reflected in pure Sattvic Maya manifests as <strong style={{ color: 'var(--sacred-saffron)' }}>Ishvara</strong> (Cosmic Governor) with three powers: <em style={{ color: 'var(--text-gold)' }}>Jnana Shakti</em> (Omniscience), <em style={{ color: 'var(--text-gold)' }}>Iccha Shakti</em> (Will), and <em style={{ color: 'var(--text-gold)' }}>Kriya Shakti</em> (Action).
                  </p>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--cosmic-cyan)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    C. Projection of 24 Tattvas
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    From Mahat (Cosmic Intellect) and Ahamkara (Ego) emerge the <strong style={{ color: 'var(--cosmic-cyan)' }}>5 Tanmatras</strong> (subtle essences), <strong style={{ color: 'var(--cosmic-cyan)' }}>5 Elements</strong> (Space, Air, Fire, Water, Earth), and <strong style={{ color: 'var(--cosmic-cyan)' }}>10 Indriyas</strong> via <em style={{ color: 'var(--text-gold)' }}>Panchikarana</em>.
                  </p>
                </div>

              </div>
            </div>

            {/* PILLAR 2: SAMSARA & THE EMBODIED SOUL */}
            <div className="glass-card" style={{ padding: '2.5rem', border: '1.5px solid var(--sacred-saffron)', boxShadow: '0 0 35px rgba(255, 109, 0, 0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--sacred-saffron), #dd2c00)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', boxShadow: '0 0 15px var(--saffron-glow)' }}>
                    2
                  </div>
                  <div>
                    <span className="font-sanskrit" style={{ color: 'var(--sacred-saffron)', fontSize: '1.1rem' }}>
                      संसारचक्रं जीवभावश्च
                    </span>
                    <h3 className="font-cinzel saffron-text-gradient" style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0 }}>
                      Samsara & The Embodied Jiva
                    </h3>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 109, 0, 0.1)', border: '1px solid var(--sacred-saffron)', padding: '0.4rem 1rem', borderRadius: '15px', color: 'var(--sacred-saffron)', fontSize: '0.82rem', fontWeight: 700 }}>
                  Mechanics: Avidya, Adhyasa & Karmic Transmigration
                </div>
              </div>

              {/* Classical Sacred Verse Callout */}
              <div style={{ background: 'rgba(255, 193, 7, 0.1)', borderLeft: '4px solid var(--primary-gold)', padding: '1rem 1.4rem', borderRadius: '0 10px 10px 0', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--primary-gold)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  Brihadaranyaka & Taittiriya Upanishads:
                </span>
                <p className="font-sanskrit" style={{ fontSize: '1.1rem', color: '#fff', margin: 0, lineHeight: 1.6 }}>
                  असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0, marginTop: '0.3rem', fontStyle: 'italic' }}>
                  "Lead me from the un-real to the Real; lead me from darkness to Light; lead me from death to Immortality..."
                </p>
              </div>

              <div className="grid-3" style={{ gap: '1.5rem' }}>
                
                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--sacred-saffron)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    A. Superimposition (Adhyasa)
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    Individual ignorance (<strong style={{ color: 'var(--sacred-saffron)' }}>Avidya</strong>) veils the Self, causing <strong style={{ color: 'var(--sacred-saffron)' }}>Adhyasa</strong>—mistaking the changing non-Self (<em style={{ color: 'var(--text-gold)' }}>Anatman</em>) for the immortal Self (<em style={{ color: 'var(--text-gold)' }}>Atman</em>), creating mortal bondage.
                  </p>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--primary-gold)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    B. Pancha Kosha (5 Sheaths)
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    The Jiva transmigrates wrapped in 5 sheaths: Annamaya (Food), Pranamaya (Energy), Manomaya (Mind), Vijnanamaya (Intellect), and Anandamaya (Bliss).
                  </p>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--cosmic-cyan)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    C. Karmic Transmigration
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    Subconscious impressions (<em style={{ color: 'var(--text-gold)' }}>Vasanas</em>) drive the wheel of rebirth. <strong style={{ color: 'var(--text-gold)' }}>Sanchita</strong> karma accumulates, <strong style={{ color: 'var(--text-gold)' }}>Prarabdha</strong> yields present life, and <strong style={{ color: 'var(--text-gold)' }}>Agami</strong> shapes future births.
                  </p>
                </div>

              </div>
            </div>

            {/* PILLAR 3: SUPREME LIBERATION (MOKSHA) */}
            <div className="glass-card" style={{ padding: '2.5rem', border: '1.5px solid var(--cosmic-cyan)', boxShadow: '0 0 35px rgba(0, 229, 255, 0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #00e5ff, #7c4dff)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem', boxShadow: '0 0 15px rgba(0, 229, 255, 0.4)' }}>
                    3
                  </div>
                  <div>
                    <span className="font-sanskrit" style={{ color: 'var(--sacred-saffron)', fontSize: '1.1rem' }}>
                      मोक्षः परमपुरुषार्थः
                    </span>
                    <h3 className="font-cinzel cosmic-text-gradient" style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0 }}>
                      Supreme Liberation (Moksha)
                    </h3>
                  </div>
                </div>

                <div style={{ background: 'rgba(0, 229, 255, 0.1)', border: '1px solid var(--cosmic-cyan)', padding: '0.4rem 1rem', borderRadius: '15px', color: 'var(--cosmic-cyan)', fontSize: '0.82rem', fontWeight: 700 }}>
                  Pinnacle: Jivanmukti & Sahaja Samadhi
                </div>
              </div>

              {/* Classical Sacred Verse Callout */}
              <div style={{ background: 'rgba(179, 136, 255, 0.12)', borderLeft: '4px solid var(--divine-purple)', padding: '1rem 1.4rem', borderRadius: '0 10px 10px 0', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--divine-purple)', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>
                  Adi Shankara's Crown Declaration (Karika):
                </span>
                <p className="font-sanskrit" style={{ fontSize: '1.15rem', color: '#fff', margin: 0, lineHeight: 1.6 }}>
                  ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः ॥
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: 0, marginTop: '0.3rem', fontStyle: 'italic' }}>
                  "Brahman alone is Real; the world is an illusory appearance; the individual soul is non-different from Brahman."
                </p>
              </div>

              <div className="grid-3" style={{ gap: '1.5rem' }}>
                
                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--cosmic-cyan)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    A. Praptasya Prapti
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    Moksha is not a future event or new creation; it is the discovery of what has <strong style={{ color: 'var(--cosmic-cyan)' }}>always been true</strong>—the permanent destruction of ignorance (<em style={{ color: 'var(--text-gold)' }}>Avidya-Nivritti</em>).
                  </p>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--divine-purple)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    B. Jivanmukti & Sahaja State
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    The sage lives liberated in the body (<strong style={{ color: 'var(--divine-purple)' }}>Jivanmukta</strong>), seeing all beings as their own Self (<em style={{ color: 'var(--text-gold)' }}>Sarvatma-Bhava</em>), operating in effortless <em style={{ color: 'var(--text-gold)' }}>Sahaja Samadhi</em>.
                  </p>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--primary-gold)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    C. Videhamukti (Final Merger)
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    Upon physical death, consciousness merges into Brahman like space inside a broken pot merging into infinite cosmic space (<em style={{ color: 'var(--text-gold)' }}>Ghatakasha into Mahakasha</em>).
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
