import { describe, it, expect } from 'vitest';
import { SYLLABUS_STAGES } from '../src/data/syllabusData';
import { TATTVAS_DESCENT, PANCHA_KOSHA_LAYERS, JNANA_BHUMIKAS_STAGES, CHAKRAS_DATA } from '../src/data/diagramData';
import { GURU_DISCIPLE_DIALOGUES, DISCIPLE_ROADMAP } from '../src/data/dialogueData';
import { DAILY_SADHANA_ROUTINES } from '../src/data/sadhanaData';

describe('Spiritual Awakening Portal Data & Routine Models', () => {
  
  it('contains all 8 stages with enriched Sanskrit verses and deep details', () => {
    expect(SYLLABUS_STAGES).toHaveLength(8);
  });

  it('validates Daily Sadhana routines (Morning, Midday, Meditation, Night)', () => {
    expect(DAILY_SADHANA_ROUTINES).toHaveLength(4); // Morning, Midday, Meditation, Night
    DAILY_SADHANA_ROUTINES.forEach(routine => {
      expect(routine.period).toBeTruthy();
      expect(routine.time).toBeTruthy();
      expect(routine.practices.length).toBeGreaterThanOrEqual(3);
      expect(routine.mantras.length).toBeGreaterThanOrEqual(2);
      routine.mantras.forEach(m => {
        expect(m.title).toBeTruthy();
        expect(m.sanskrit).toBeTruthy();
        expect(m.transliteration).toBeTruthy();
        expect(m.meaning).toBeTruthy();
      });
    });
  });

  it('validates Guru-Shishya dialogues dataset', () => {
    expect(GURU_DISCIPLE_DIALOGUES.length).toBeGreaterThanOrEqual(14);
  });

  it('validates Disciple Roadmap 6 stages and required efforts', () => {
    expect(DISCIPLE_ROADMAP).toHaveLength(6);
  });

});
