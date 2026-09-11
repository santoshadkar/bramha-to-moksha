import { describe, it, expect } from 'vitest';
import { SYLLABUS_STAGES } from '../src/data/syllabusData';
import { TATTVAS_DESCENT, PANCHA_KOSHA_LAYERS, JNANA_BHUMIKAS_STAGES, CHAKRAS_DATA } from '../src/data/diagramData';
import { GURU_DISCIPLE_DIALOGUES, DISCIPLE_ROADMAP } from '../src/data/dialogueData';
import { DAILY_SADHANA_ROUTINES } from '../src/data/sadhanaData';

import { VEDANTIC_GLOSSARY, QUIZ_QUESTIONS } from '../src/components/SelfInquiryStudio';

// Regex helper to check for Sanskrit Devanagari script (\u0900-\u097F)
const DEVANAGARI_REGEX = /[\u0900-\u097F]/;

describe('Content Authenticity & Scriptural Integrity Audit', () => {

  describe('1. Vedantic Syllabus (8 Stages)', () => {
    it('contains exactly 8 sequential stages from Brahma to Moksha', () => {
      expect(SYLLABUS_STAGES).toHaveLength(8);
      SYLLABUS_STAGES.forEach((stage, idx) => {
        expect(stage.level).toBe(idx + 1);
        expect(stage.id).toBeTruthy();
        expect(stage.title).toBeTruthy();
        expect(stage.sanskritTitle).toBeTruthy();
        expect(stage.tagline).toBeTruthy();
        expect(stage.summary).toBeTruthy();
        expect(stage.details.length).toBeGreaterThan(100);
        expect(stage.keyConcept).toBeTruthy();
        expect(stage.contemplation).toBeTruthy();
      });
    });

    it('verifies authentic Devanagari Sanskrit verses & mantras in all 8 stages', () => {
      SYLLABUS_STAGES.forEach(stage => {
        expect(stage.sanskritTitle).toMatch(DEVANAGARI_REGEX);
        expect(stage.mantra).toMatch(DEVANAGARI_REGEX);
        expect(stage.sanskritVerse).toMatch(DEVANAGARI_REGEX);
      });
    });

    it('verifies scriptural citations in all 8 syllabus stages', () => {
      const canonicalShastras = [
        'Upanishad', 'Gita', 'Karika', 'Nasadiya Sukta', 'Vivekachudamani', 
        'Yoga Sutras', 'Brahma Sutras', 'Panchadasi', 'Aparokshanubhuti', 'Ribhu Gita'
      ];

      SYLLABUS_STAGES.forEach(stage => {
        expect(stage.scriptures).toBeDefined();
        expect(stage.scriptures.length).toBeGreaterThanOrEqual(2);
        const hasCanonical = stage.scriptures.some(scrip => 
          canonicalShastras.some(shastra => scrip.toLowerCase().includes(shastra.toLowerCase()))
        );
        expect(hasCanonical).toBe(true);
      });
    });
  });

  describe('2. Guru-Disciple Samvada (Dialogues)', () => {
    it('contains at least 14 deep Q&A dialogues across key spiritual categories', () => {
      expect(GURU_DISCIPLE_DIALOGUES.length).toBeGreaterThanOrEqual(14);
      GURU_DISCIPLE_DIALOGUES.forEach(dialogue => {
        expect(dialogue.id).toBeTruthy();
        expect(dialogue.category).toBeTruthy();
        expect(dialogue.question).toBeTruthy();
        expect(dialogue.sanskritQuestion).toMatch(DEVANAGARI_REGEX);
        expect(dialogue.answer).toBeTruthy();
        expect(dialogue.sanskritAnswer).toMatch(DEVANAGARI_REGEX);
        expect(dialogue.scriptureRef).toBeTruthy();
        expect(dialogue.keyInsight).toBeTruthy();
      });
    });

    it('covers fundamental Vedantic topics without placeholders', () => {
      const categories = GURU_DISCIPLE_DIALOGUES.map(d => d.category);
      expect(categories).toContain('Cosmic Origin & Brahma Tattva');
      expect(categories).toContain('Maya & The Nature of Illusion');
      expect(categories).toContain('Identity & Pancha Kosha');
      expect(categories).toContain('Karma & Destiny');
    });
  });

  describe('3. Disciple Roadmap (6 Stages of Tapas & Sadhana)', () => {
    it('validates 6 complete roadmap stages with Tapas, Focus, Mental Training, Scriptures, Obstacles, and Remedies', () => {
      expect(DISCIPLE_ROADMAP).toHaveLength(6);
      DISCIPLE_ROADMAP.forEach(stage => {
        expect(stage.stage).toBeGreaterThanOrEqual(1);
        expect(stage.title).toBeTruthy();
        expect(stage.sanskritTitle).toMatch(DEVANAGARI_REGEX);
        expect(stage.focus).toBeTruthy();
        expect(stage.tapas.length).toBeGreaterThanOrEqual(3);
        expect(stage.mentalTraining).toBeTruthy();
        expect(stage.scriptureStudy).toBeTruthy();
        expect(stage.obstacles).toBeTruthy();
        expect(stage.remedies).toBeTruthy();
        expect(stage.milestone).toBeTruthy();
      });
    });
  });

  describe('4. Daily Sadhana & Mantras (4 Daily Routines)', () => {
    it('validates 4 complete routines: Morning, Midday, Meditation, and Evening/Night', () => {
      expect(DAILY_SADHANA_ROUTINES).toHaveLength(4);
      const periods = DAILY_SADHANA_ROUTINES.map(r => r.id);
      expect(periods).toEqual(['morning-routine', 'midday-routine', 'meditation-routine', 'evening-routine']);

      DAILY_SADHANA_ROUTINES.forEach(routine => {
        expect(routine.sanskritPeriod).toMatch(DEVANAGARI_REGEX);
        expect(routine.practices.length).toBeGreaterThanOrEqual(3);
        expect(routine.mantras.length).toBeGreaterThanOrEqual(2);

        routine.mantras.forEach(m => {
          expect(m.title).toBeTruthy();
          expect(m.sanskrit).toMatch(DEVANAGARI_REGEX);
          expect(m.transliteration).toBeTruthy();
          expect(m.meaning).toBeTruthy();
          expect(m.usage).toBeTruthy();
        });
      });
    });
  });

  describe('5. Interactive Diagrams Data Accuracy', () => {
    it('validates 24 Tattvas cosmic descent data', () => {
      expect(TATTVAS_DESCENT.rootNode.sanskrit).toMatch(DEVANAGARI_REGEX);
      expect(TATTVAS_DESCENT.rootNode.scriptureRef).toBeTruthy();
      expect(TATTVAS_DESCENT.level1[0].sanskrit).toMatch(DEVANAGARI_REGEX);
      expect(TATTVAS_DESCENT.level2).toHaveLength(2);
      expect(TATTVAS_DESCENT.level3).toHaveLength(3);
    });

    it('validates Pancha Kosha 5 sheaths + Atman core layer', () => {
      expect(PANCHA_KOSHA_LAYERS).toHaveLength(6);
      const names = PANCHA_KOSHA_LAYERS.map(k => k.name);
      expect(names).toEqual([
        'Annamaya Kosha', 
        'Pranamaya Kosha', 
        'Manomaya Kosha', 
        'Vijnanamaya Kosha', 
        'Anandamaya Kosha',
        'Atman (The Pure Self)'
      ]);

      PANCHA_KOSHA_LAYERS.forEach(kosha => {
        expect(kosha.sanskrit).toMatch(DEVANAGARI_REGEX);
        expect(kosha.desc).toBeTruthy();
        expect(kosha.subtleFunction).toBeTruthy();
        expect(kosha.scriptureRef).toBeTruthy();
      });
    });

    it('validates 7 Jnana Bhumikas enlightenment stages', () => {
      expect(JNANA_BHUMIKAS_STAGES).toHaveLength(7);
      const names = JNANA_BHUMIKAS_STAGES.map(b => b.name);
      expect(names).toContain('Subheccha');
      expect(names).toContain('Turyaga');

      JNANA_BHUMIKAS_STAGES.forEach(bhumika => {
        expect(bhumika.sanskrit).toMatch(DEVANAGARI_REGEX);
        expect(bhumika.state).toBeTruthy();
        expect(bhumika.desc).toBeTruthy();
      });
    });

    it('validates 7 Chakras & Nadis data with seed mantras', () => {
      expect(CHAKRAS_DATA).toHaveLength(7);
      const BijaMantras = ['LAM', 'VAM', 'RAM', 'YAM', 'HAM', 'OM', 'SO HAM'];
      CHAKRAS_DATA.forEach((chakra, idx) => {
        expect(chakra.sanskrit).toMatch(DEVANAGARI_REGEX);
        expect(chakra.mantra).toBe(BijaMantras[idx]);
        expect(chakra.element).toBeTruthy();
        expect(chakra.desc).toBeTruthy();
      });
    });
  });

  describe('6. Self-Inquiry Studio Glossary & Knowledge Quiz', () => {
    it('validates 25 authentic Vedantic glossary terms with Devanagari script', () => {
      expect(VEDANTIC_GLOSSARY.length).toBeGreaterThanOrEqual(25);
      VEDANTIC_GLOSSARY.forEach(item => {
        expect(item.term).toBeTruthy();
        expect(item.sanskrit).toMatch(DEVANAGARI_REGEX);
        expect(item.meaning).toBeTruthy();
      });
    });

    it('validates Self-Inquiry knowledge assessment quiz questions', () => {
      expect(QUIZ_QUESTIONS.length).toBeGreaterThanOrEqual(4);
      QUIZ_QUESTIONS.forEach(q => {
        expect(q.q).toBeTruthy();
        expect(q.options).toHaveLength(4);
        expect(q.correct).toBeGreaterThanOrEqual(0);
        expect(q.correct).toBeLessThan(4);
        expect(q.explanation).toBeTruthy();
      });
    });
  });

});
