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
                Welcome to the sacred portal of spiritual ascension. Journey step-by-step from the unmanifest non-dual Absolute (**Nirguna Brahman**) and the emergence of the 24 Tattvas through the illusion of **Samsara**, culminating in non-dual freedom (**Moksha**).
              </p>

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <button onClick={() => setActiveTab('syllabus')} className="btn-gold">
                  <BookOpen size={18} /> Complete Syllabus
                </button>
                <button onClick={() => setActiveTab('samvada')} className="btn-gold" style={{ background: 'linear-gradient(135deg, #00e5ff, #7c4dff)', color: '#fff' }}>
                  <MessageSquare size={18} /> Guru-Disciple Samvada
                </button>
                <button onClick={() => setActiveTab('roadmap')} className="btn-gold" style={{ background: 'linear-gradient(135deg, var(--sacred-saffron), #dd2c00)', color: '#fff' }}>
                  <Map size={18} /> Disciple's Roadmap
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

        {/* FRONT PAGE FEATURE: Deep, Comprehensive Knowledge Breakdown of Brahma, Samsara, and Moksha */}
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
                    **Sat-Chit-Ananda**: Uncreated Existence, Self-luminous Awareness, and Limitless Bliss. Transcends time, space, and the three internal differences (*Sajatiya, Vijatiya, Svagata Bheda*).
                  </p>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--sacred-saffron)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    B. Maya & Saguna Ishvara
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    Brahman reflected in pure Sattvic Maya manifests as **Ishvara** (Cosmic Governor) with three powers: *Jnana Shakti* (Omniscience), *Iccha Shakti* (Will), and *Kriya Shakti* (Action).
                  </p>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--cosmic-cyan)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    C. Projection of 24 Tattvas
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    From Mahat (Cosmic Intellect) and Ahamkara (Ego) emerge the **5 Tanmatras** (subtle essences), **5 Elements** (Space, Air, Fire, Water, Earth), and **10 Indriyas** via *Panchikarana*.
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
                    Individual ignorance (**Avidya**) veils the Self, causing **Adhyasa**—mistaking the changing non-Self (*Anatman*) for the immortal Self (*Atman*), creating mortal bondage.
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
                    Subconscious impressions (*Vasanas*) drive the wheel of rebirth. **Sanchita** karma accumulates, **Prarabdha** yields present life, and **Agami** shapes future births.
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
                    Moksha is not a future event or new creation; it is the discovery of what has **always been true**—the permanent destruction of ignorance (*Avidya-Nivritti*).
                  </p>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--divine-purple)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    B. Jivanmukti & Sahaja State
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    The sage lives liberated in the body (**Jivanmukta**), seeing all beings as their own Self (*Sarvatma-Bhava*), operating in effortless *Sahaja Samadhi*.
                  </p>
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <h4 className="font-cinzel" style={{ color: 'var(--primary-gold)', fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                    C. Videhamukti (Final Merger)
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                    Upon physical death, consciousness merges into Brahman like space inside a broken pot merging into infinite cosmic space (*Ghatakasha into Mahakasha*).
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
