import React, { useState, useEffect } from 'react';
import { Flame, Play, Pause, RefreshCw, Sparkles, Search, BookOpen, Layers, CheckCircle2, Award, HelpCircle } from 'lucide-react';

const VEDANTIC_GLOSSARY = [
  { term: "Adhyasa", sanskrit: "अध्यासः", meaning: "Superimposition; mistaking the non-Self (body/mind) for the Self (Atman)." },
  { term: "Aham-Vritti", sanskrit: "अहंवृत्तिः", meaning: "The primary 'I-thought' that gives birth to all subsequent mental thoughts." },
  { term: "Anatman", sanskrit: "अनात्मा", meaning: "Non-Self; everything impermanent, changing, or objectified." },
  { term: "Anirvacaniya", sanskrit: "अनिर्वचनीयम्", meaning: "Indescribable; nature of Maya which is neither purely real nor purely unreal." },
  { term: "Aparoksha-Anubhuti", sanskrit: "अपरोक्षानुभूतिः", meaning: "Direct, unmediated immediate realization of non-dual Brahman." },
  { term: "Avastha-Traya", sanskrit: "अवस्थात्रयम्", meaning: "The 3 states of consciousness: Waking (Jagrat), Dream (Svapna), Deep Sleep (Sushupti)." },
  { term: "Avidya", sanskrit: "अविद्या", meaning: "Primordial spiritual ignorance; forgetting one's true identity as Brahman." },
  { term: "Avarana Shakti", sanskrit: "आवरणशक्तिः", meaning: "The veiling power of Maya that hides the true non-dual Self." },
  { term: "Brahmanishtha", sanskrit: "ब्रह्मनिष्ठः", meaning: "One firmly established in the direct non-dual realization of Brahman." },
  { term: "Chitta-Vritti-Nirodha", sanskrit: "चित्तवृत्तिनिरोधः", meaning: "Cessation of the modifications and fluctuations of the mind." },
  { term: "Jivanmukta", sanskrit: "जीवन्मुक्तः", meaning: "One liberated while still living in a physical body frame." },
  { term: "Neti Neti", sanskrit: "नेति नेति", meaning: "'Not this, Not this'; Upanishadic process of negating finite objectified phenomena." },
  { term: "Nishkama Karma", sanskrit: "निष्कामर्म", meaning: "Unselfish action performed without egoistic desire for the fruit." },
  { term: "Panchikarana", sanskrit: "पञ्चीकरणम्", meaning: "The quintuplication process by which subtle elements become gross matter." },
  { term: "Prarabdha Karma", sanskrit: "प्रारब्धकर्म", meaning: "Fructifying portion of past karma that brought about the present physical body." },
  { term: "Sadhana Chatushtaya", sanskrit: "साधनचतुष्टयम्", meaning: "The 4 qualifications of an earnest aspirant (Viveka, Vairagya, Shat-Sampat, Mumukshutva)." },
  { term: "Sahaja Samadhi", sanskrit: "सहजसमाधिः", meaning: "Natural, permanent, effortless abiding in Brahman while active in the world." },
  { term: "Satya vs Mithya", sanskrit: "सत्यम् मिथ्या च", meaning: "Satya = Absolute Independent Being (Brahman); Mithya = Dependent Appearance (World)." },
  { term: "Shrotriya", sanskrit: "श्रोत्रियः", meaning: "A Master versed in the scriptures and traditional Vedantic teaching methodology." },
  { term: "Turiya", sanskrit: "तुरीयम्", meaning: "The 4th state; transcendental witness consciousness underlying waking, dream, and sleep." },
  { term: "Vairagya", sanskrit: "वैराग्यम्", meaning: "Spiritual dispassion and non-attachment toward fleeting sensory pleasures." },
  { term: "Vasanas", sanskrit: "वासनाः", meaning: "Subconscious latent impressions that drive thoughts and karmic desires." },
  { term: "Videhamukti", sanskrit: "विदेहमुक्तिः", meaning: "Final cosmic merger into Brahman upon the physical departure of the body." },
  { term: "Vikshepa Shakti", sanskrit: "विक्षेपशक्तिः", meaning: "The projecting power of Maya that creates the illusion of multiplicity." },
  { term: "Viveka", sanskrit: "विवेकः", meaning: "Intellectual discrimination between the Eternal Real and transient unreal." }
];

const QUIZ_QUESTIONS = [
  {
    q: "What is the ultimate definition of Satya (Truth) in Advaita Vedanta?",
    options: ["Anything that can be seen with eyes", "That which remains unchanged across past, present, and future", "Whatever feels good to the mind", "Physical scientific objects"],
    correct: 1,
    explanation: "Satya is defined as Trikala-Abhadhita—that which is never negated in past, present, or future (Brahman)."
  },
  {
    q: "Which power of Maya conceals the true non-dual nature of Brahman?",
    options: ["Vikshepa Shakti", "Avarana Shakti", "Iccha Shakti", "Kriya Shakti"],
    correct: 1,
    explanation: "Avarana Shakti is the veiling power that hides Brahman; Vikshepa Shakti is the projecting power that overlays names and forms."
  },
  {
    q: "In Pancha Kosha, which sheath represents the intellectual discrimination and ego sense?",
    options: ["Annamaya Kosha", "Manomaya Kosha", "Vijnanamaya Kosha", "Anandamaya Kosha"],
    correct: 2,
    explanation: "Vijnanamaya Kosha is the intellectual sheath governing Buddhi (reason) and the I-agent sense (Kartritva)."
  },
  {
    q: "What is the primary method of Bhagavan Ramana Maharshi's Atma Vichara?",
    options: ["Repeating a verbal mantra fast", "Tracing the root of the 'I-thought' back to the Heart Center", "Controlling physical breath for hours", "Visualizing colors"],
    correct: 1,
    explanation: "Atma Vichara involves asking 'Who am I?' and tracing the 'I-thought' (Aham-Vritti) back into its source in Pure Awareness."
  }
];

export function SelfInquiryStudio() {
  const [timerSeconds, setTimerSeconds] = useState(300);
  const [isActive, setIsActive] = useState(false);
  const [inquiryStep, setInquiryStep] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [netiStep, setNetiStep] = useState(0);
  const [quizIdx, setQuizIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const INQUIRY_PROMPTS = [
    { question: "To whom does this thought arise?", guidance: "Answer silently: 'To me.' Then immediately inquire: 'Who am I?' Tracing the 'I' back to its source in the Heart Center." },
    { question: "Am I the physical body (Annamaya Kosha)?", guidance: "The body changes from childhood to old age. You are the continuous, unchanging Witness of the body." },
    { question: "Am I the vital energy & breath (Pranamaya Kosha)?", guidance: "Breath speeds up in anger and slows in sleep. You observe the breath; therefore you are beyond the breath." },
    { question: "Am I the thoughts & emotions (Manomaya Kosha)?", guidance: "Thoughts arise like clouds in the sky. The sky does not move when clouds pass. You are the infinite Sky of Awareness." },
    { question: "Am I the intellect & ego (Vijnanamaya Kosha)?", guidance: "The intellect makes decisions and claims 'I am the doer'. Inquire: 'Who observes the intellect deciding?'" },
    { question: "Am I the joy of deep sleep (Anandamaya Kosha)?", guidance: "Even the veil of bliss in deep sleep is illuminated by Consciousness. You are the Light that knows sleep!" },
    { question: "What remains when all thoughts cease?", guidance: "Pure Silence. Pure Awareness. Sat-Chit-Ananda. Rest in That without creating another thought." }
  ];

  const NETI_PRACTICE = [
    { sheath: "Physical Body (Annamaya Kosha)", negation: "I possess a physical body, but I am NOT this body. I am the conscious Witness illuminating it.", status: "Physical Dis-identification" },
    { sheath: "Vital Breath (Pranamaya Kosha)", negation: "I feel energy and breath, but I am NOT this breath. I am the conscious Witness of Prana.", status: "Energetic Dis-identification" },
    { sheath: "Mind & Emotions (Manomaya Kosha)", negation: "I experience emotions and doubts, but I am NOT these thoughts. I am the serene Witness of mind.", status: "Emotional Dis-identification" },
    { sheath: "Intellect & Ego (Vijnanamaya Kosha)", negation: "I use discrimination, but I am NOT the ego or doer. I am the eternal Witness of intellect.", status: "Intellectual Dis-identification" },
    { sheath: "Bliss & Causal Ignorance (Anandamaya Kosha)", negation: "I experience bliss in deep sleep, but I am NOT the causal sheath. I am Brahman itself!", status: "Supreme Realization" }
  ];

  useEffect(() => {
    let interval = null;
    if (isActive && timerSeconds > 0) {
      interval = setInterval(() => setTimerSeconds(sec => sec - 1), 1000);
    } else if (timerSeconds === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timerSeconds]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimerSeconds(300);
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  const filteredGlossary = VEDANTIC_GLOSSARY.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sanskrit.includes(searchTerm) ||
    item.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAnswerSelect = (optionIdx) => {
    setSelectedOption(optionIdx);
    if (optionIdx === QUIZ_QUESTIONS[quizIdx].correct) {
      setScore(s => s + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    if (quizIdx < QUIZ_QUESTIONS.length - 1) {
      setQuizIdx(q => q + 1);
    }
  };

  return (
    <section id="inquiry-section" style={{ padding: '2rem 0 4rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 109, 0, 0.1)', border: '1px solid var(--sacred-saffron)', borderRadius: '20px', padding: '0.3rem 1rem', marginBottom: '0.8rem' }}>
            <Flame size={14} style={{ color: 'var(--sacred-saffron)' }} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-gold)', fontWeight: 600 }}>
              ATMA VICHARA & KNOWLEDGE STUDIO
            </span>
          </div>
          <h2 className="font-cinzel saffron-text-gradient" style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '0.8rem' }}>
            Self-Inquiry & Vedantic Knowledge Hub
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Practice direct self-inquiry (*Atma Vichara*), run the 5-sheath *Neti Neti* dis-identification meditation, test your knowledge with the Vedantic assessment, and search the Sanskrit dictionary.
          </p>
        </div>

        {/* Grid: Meditation Timer & Guided Inquiry */}
        <div className="grid-2" style={{ marginBottom: '3rem' }}>
          
          {/* Silence & Atma Vichara Timer */}
          <div className="glass-card" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1.5px solid var(--border-gold)' }}>
            <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>
              Atma Vichara Silence Timer
            </h3>

            <div style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              border: '3px solid var(--primary-gold)',
              boxShadow: isActive ? '0 0 40px var(--gold-glow)' : '0 0 15px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.8rem',
              transition: 'all 0.5s ease',
              background: 'radial-gradient(circle, rgba(255, 193, 7, 0.1) 0%, transparent 70%)'
            }}>
              <span className="font-cinzel" style={{ fontSize: '3rem', fontWeight: 900, color: '#fff' }}>
                {formatTime(timerSeconds)}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {isActive ? 'Abiding as Awareness' : 'Ready for Inquiry'}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={toggleTimer} className="btn-gold" style={{ padding: '0.7rem 1.6rem' }}>
                {isActive ? <Pause size={18} /> : <Play size={18} />}
                {isActive ? 'Pause' : 'Begin Meditation'}
              </button>
              <button onClick={resetTimer} className="btn-outline" style={{ padding: '0.7rem 1.2rem' }}>
                <RefreshCw size={18} /> Reset
              </button>
            </div>
          </div>

          {/* Guided Prompt Cards */}
          <div className="glass-card" style={{ padding: '2.2rem', border: '1px solid var(--border-glass)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <h3 className="font-cinzel" style={{ color: '#fff', fontSize: '1.25rem', margin: 0 }}>
                  Guided Atma Vichara Prompts
                </h3>
                <span style={{ fontSize: '0.75rem', color: 'var(--cosmic-cyan)', fontWeight: 700 }}>
                  PROMPT {inquiryStep + 1} OF {INQUIRY_PROMPTS.length}
                </span>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1.6rem', borderRadius: '14px', marginBottom: '1.5rem', borderLeft: '4px solid var(--sacred-saffron)' }}>
                <h4 className="font-cinzel saffron-text-gradient" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.8rem' }}>
                  "{INQUIRY_PROMPTS[inquiryStep].question}"
                </h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {INQUIRY_PROMPTS[inquiryStep].guidance}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button
                disabled={inquiryStep === 0}
                onClick={() => setInquiryStep(s => s - 1)}
                className="btn-outline"
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.82rem', opacity: inquiryStep === 0 ? 0.4 : 1 }}
              >
                Previous Prompt
              </button>

              <button
                disabled={inquiryStep === INQUIRY_PROMPTS.length - 1}
                onClick={() => setInquiryStep(s => s + 1)}
                className="btn-gold"
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.82rem', opacity: inquiryStep === INQUIRY_PROMPTS.length - 1 ? 0.4 : 1 }}
              >
                Next Prompt
              </button>
            </div>
          </div>

        </div>

        {/* Interactive Neti-Neti 5 Sheath Dis-identification Exercise */}
        <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem', border: '1.5px solid var(--cosmic-cyan)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <Layers size={22} style={{ color: 'var(--cosmic-cyan)' }} />
            <span style={{ fontSize: '0.85rem', color: 'var(--cosmic-cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Practical Upanishadic Practice
            </span>
          </div>

          <h3 className="font-cinzel cosmic-text-gradient" style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Neti Neti ("Not This, Not This") Dis-identification Process
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.8rem' }}>
            Walk through each sheath step-by-step to negate false identification and affirm your identity as Atman.
          </p>

          <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1.8rem', borderRadius: '14px', border: '1px solid var(--border-glass)', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
              <span style={{ background: 'var(--cosmic-cyan)', color: '#070913', fontSize: '0.75rem', fontWeight: 800, padding: '0.2rem 0.8rem', borderRadius: '10px' }}>
                STEP {netiStep + 1} OF 5
              </span>
              <span style={{ color: 'var(--text-gold)', fontSize: '0.85rem', fontWeight: 600 }}>
                {NETI_PRACTICE[netiStep].status}
              </span>
            </div>

            <h4 className="font-cinzel" style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.8rem' }}>
              {NETI_PRACTICE[netiStep].sheath}
            </h4>

            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.7, fontStyle: 'italic' }}>
              "{NETI_PRACTICE[netiStep].negation}"
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              disabled={netiStep === 0}
              onClick={() => setNetiStep(s => s - 1)}
              className="btn-outline"
              style={{ padding: '0.5rem 1.4rem', fontSize: '0.85rem', opacity: netiStep === 0 ? 0.4 : 1 }}
            >
              Previous Sheath
            </button>

            <button
              disabled={netiStep === NETI_PRACTICE.length - 1}
              onClick={() => setNetiStep(s => s + 1)}
              className="btn-gold"
              style={{ padding: '0.5rem 1.4rem', fontSize: '0.85rem', opacity: netiStep === NETI_PRACTICE.length - 1 ? 0.4 : 1 }}
            >
              Next Sheath
            </button>
          </div>
        </div>

        {/* Vedantic Self-Assessment Quiz */}
        <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '3rem', border: '1.5px solid var(--primary-gold)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Award size={22} style={{ color: 'var(--primary-gold)' }} />
              <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>
                Vedantic Knowledge Self-Assessment
              </h3>
            </div>
            <span style={{ background: 'rgba(255, 193, 7, 0.1)', border: '1px solid var(--border-gold)', padding: '0.3rem 0.8rem', borderRadius: '12px', color: 'var(--text-gold)', fontSize: '0.82rem', fontWeight: 700 }}>
              Question {quizIdx + 1} of {QUIZ_QUESTIONS.length}
            </span>
          </div>

          <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid var(--border-glass)' }}>
            <h4 className="font-cinzel" style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '1.2rem' }}>
              {QUIZ_QUESTIONS[quizIdx].q}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {QUIZ_QUESTIONS[quizIdx].options.map((opt, oIdx) => {
                const isSelected = selectedOption === oIdx;
                const isCorrect = oIdx === QUIZ_QUESTIONS[quizIdx].correct;
                let bg = 'rgba(255, 255, 255, 0.05)';
                let borderColor = 'var(--border-glass)';
                
                if (selectedOption !== null) {
                  if (isCorrect) {
                    bg = 'rgba(76, 175, 80, 0.2)';
                    borderColor = '#4caf50';
                  } else if (isSelected) {
                    bg = 'rgba(244, 67, 54, 0.2)';
                    borderColor = '#f44336';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => selectedOption === null && handleAnswerSelect(oIdx)}
                    style={{
                      padding: '0.9rem 1.2rem',
                      borderRadius: '10px',
                      background: bg,
                      border: `1px solid ${borderColor}`,
                      color: '#fff',
                      textAlign: 'left',
                      fontSize: '0.92rem',
                      cursor: selectedOption === null ? 'pointer' : 'default',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {selectedOption !== null && (
              <div style={{ marginTop: '1.2rem', padding: '1rem', borderRadius: '8px', background: 'rgba(255, 193, 7, 0.1)', border: '1px solid var(--border-gold)' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--primary-gold)', fontWeight: 800, display: 'block', marginBottom: '0.2rem' }}>
                  💡 Vedantic Explanation:
                </span>
                <p style={{ color: '#fff', fontSize: '0.9rem', margin: 0 }}>
                  {QUIZ_QUESTIONS[quizIdx].explanation}
                </p>
              </div>
            )}
          </div>

          {selectedOption !== null && quizIdx < QUIZ_QUESTIONS.length - 1 && (
            <button onClick={handleNextQuestion} className="btn-gold" style={{ padding: '0.6rem 1.4rem' }}>
              Next Question
            </button>
          )}
        </div>

        {/* Vedantic Sanskrit Dictionary & Search */}
        <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid var(--border-gold)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0 }}>
                Vedantic Sanskrit Dictionary & Glossary
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                Search essential Vedantic terminology, Sanskrit root definitions, and scriptural concepts.
              </p>
            </div>

            {/* Search Input Box */}
            <div style={{ position: 'relative', width: '300px' }}>
              <input
                type="text"
                placeholder="Search term (e.g. Maya, Turiya)..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6rem 1rem 0.6rem 2.5rem',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid var(--border-gold)',
                  color: '#fff',
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              />
              <Search size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-gold)' }} />
            </div>
          </div>

          {/* Glossary Table / Grid */}
          <div className="grid-2">
            {filteredGlossary.length > 0 ? (
              filteredGlossary.map((item, idx) => (
                <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem 1.2rem', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span className="font-cinzel" style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>
                      {item.term}
                    </span>
                    <span className="font-sanskrit" style={{ fontSize: '0.95rem', color: 'var(--text-gold)' }}>
                      {item.sanskrit}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>
                    {item.meaning}
                  </p>
                </div>
              ))
            ) : (
              <p style={{ color: 'var(--text-muted)', gridColumn: '1 / -1' }}>No matching Vedantic terms found for "{searchTerm}".</p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
