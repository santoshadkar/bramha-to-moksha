import React from 'react';

export function Footer() {
  return (
    <footer style={{ background: 'rgba(5, 7, 15, 0.95)', borderTop: '1px solid var(--border-glass)', padding: '3rem 0 2rem 0', marginTop: '3rem' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--sacred-saffron), var(--primary-gold))', fontSize: '1.6rem', marginBottom: '1rem', boxShadow: '0 0 20px var(--gold-glow)' }}>
          🕉️
        </div>

        <h3 className="font-cinzel gold-text-gradient" style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.4rem' }}>
          BRAHMA TO MOKSHA
        </h3>
        <p className="font-sanskrit" style={{ color: 'var(--text-gold)', fontSize: '1rem', marginBottom: '1.5rem' }}>
          ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥
        </p>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', maxWidth: '600px', margin: '0 auto 1.5rem auto' }}>
          May all beings be happy. May all beings be free from illness. May all behold what is auspicious. May no one suffer.
        </p>

        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-glass)', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
          Brahma to Moksha Spiritual Awakening Portal &copy; 2026. Dedicated to the eternal Guru-Shishya Parampara.
        </div>
      </div>
    </footer>
  );
}
