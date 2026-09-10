// Real-time Web Audio API Om Sound Generator (432Hz + Harmonised Overtones)

class OmSoundSynth {
  constructor() {
    this.audioCtx = null;
    this.oscillators = [];
    this.gainNode = null;
    this.isPlaying = false;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
  }

  start(baseFreq = 432) {
    this.init();
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.isPlaying) return;

    this.gainNode = this.audioCtx.createGain();
    this.gainNode.gain.setValueAtTime(0, this.audioCtx.currentTime);
    this.gainNode.gain.linearRampToValueAtTime(0.25, this.audioCtx.currentTime + 3);

    // Multi-tonal frequency drone (Root 432Hz, Fifth 648Hz, Octave 864Hz, Sub-bass 216Hz)
    const frequencies = [baseFreq / 2, baseFreq, baseFreq * 1.5, baseFreq * 2];
    const types = ['sine', 'sine', 'triangle', 'sine'];

    this.oscillators = frequencies.map((freq, idx) => {
      const osc = this.audioCtx.createOscillator();
      const oscGain = this.audioCtx.createGain();

      osc.type = types[idx];
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      // Subtle slow modulation for rich organic chorus effect
      const lfo = this.audioCtx.createOscillator();
      lfo.frequency.setValueAtTime(0.1 + idx * 0.05, this.audioCtx.currentTime);
      const lfoGain = this.audioCtx.createGain();
      lfoGain.gain.setValueAtTime(2, this.audioCtx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();

      oscGain.gain.setValueAtTime(0.25 / (idx + 1), this.audioCtx.currentTime);
      osc.connect(oscGain);
      oscGain.connect(this.gainNode);
      osc.start();

      return osc;
    });

    this.gainNode.connect(this.audioCtx.destination);
    this.isPlaying = true;
  }

  stop() {
    if (!this.isPlaying || !this.gainNode) return;

    this.gainNode.gain.linearRampToValueAtTime(0.001, this.audioCtx.currentTime + 2);
    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try { osc.stop(); } catch (e) {}
      });
      this.oscillators = [];
      this.isPlaying = false;
    }, 2000);
  }

  toggle(baseFreq = 432) {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start(baseFreq);
      return true;
    }
  }
}

export const omSynth = new OmSoundSynth();
