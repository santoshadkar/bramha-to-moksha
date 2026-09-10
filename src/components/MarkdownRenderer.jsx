import React from 'react';

export function MarkdownRenderer({ content }) {
  if (!content) return null;

  // Split into paragraphs / lines
  const lines = content.split('\n');
  const elements = [];
  let inList = false;
  let listItems = [];

  const flushList = (keyPrefix) => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`ul-${keyPrefix}`} style={{ paddingLeft: '1.4rem', margin: '0.6rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {listItems.map((item, idx) => (
            <li key={idx} style={{ color: 'var(--text-main)', lineHeight: 1.6, fontSize: '0.94rem' }}>
              {formatInlineText(item)}
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  const formatInlineText = (text) => {
    // Replace **bold** with <strong> and *italic* with <em>
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} style={{ color: 'var(--text-gold)', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
      } else if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={index} style={{ color: 'var(--cosmic-cyan)', fontStyle: 'italic' }}>{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList(index);
      return;
    }

    // Heading 3: ###
    if (trimmed.startsWith('### ')) {
      flushList(index);
      const headingText = trimmed.replace(/^###\s+/, '');
      elements.push(
        <h4 key={index} className="font-cinzel" style={{
          color: 'var(--sacred-saffron)',
          fontSize: '1.1rem',
          fontWeight: 700,
          margin: '1.4rem 0 0.5rem 0',
          borderBottom: '1px solid var(--border-glass)',
          paddingBottom: '0.3rem'
        }}>
          {formatInlineText(headingText)}
        </h4>
      );
    }
    // Heading 2: ##
    else if (trimmed.startsWith('## ')) {
      flushList(index);
      const headingText = trimmed.replace(/^##\s+/, '');
      elements.push(
        <h3 key={index} className="font-cinzel gold-text-gradient" style={{
          fontSize: '1.25rem',
          fontWeight: 800,
          margin: '1.6rem 0 0.6rem 0'
        }}>
          {formatInlineText(headingText)}
        </h3>
      );
    }
    // Heading 1: #
    else if (trimmed.startsWith('# ')) {
      flushList(index);
      const headingText = trimmed.replace(/^#\s+/, '');
      elements.push(
        <h2 key={index} className="font-cinzel saffron-text-gradient" style={{
          fontSize: '1.4rem',
          fontWeight: 900,
          margin: '1.8rem 0 0.8rem 0'
        }}>
          {formatInlineText(headingText)}
        </h2>
      );
    }
    // List item: - or *
    else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      inList = true;
      const itemText = trimmed.replace(/^[-*]\s+/, '');
      listItems.push(itemText);
    }
    // Paragraph
    else {
      flushList(index);
      elements.push(
        <p key={index} style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.94rem', margin: '0.5rem 0' }}>
          {formatInlineText(trimmed)}
        </p>
      );
    }
  });

  flushList('end');

  return <div>{elements}</div>;
}
