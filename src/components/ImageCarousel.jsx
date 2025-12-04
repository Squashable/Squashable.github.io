import React, { useEffect, useState, useRef } from 'react';

export default function ImageCarousel({ bases = [], interval = 3000, width = '100%', height = 360, a4 = true }) {
  const exts = ['.png', '.jpg', '.jpeg', '.webp'];
  const [index, setIndex] = useState(0);
  const [srcs, setSrcs] = useState(() => bases.map(b => `/${b}${exts[0]}`));
  const timer = useRef(null);

  useEffect(() => {
    setSrcs(bases.map(b => `/${b}${exts[0]}`));
  }, [bases]);

  useEffect(() => {
    if (interval > 0 && bases.length > 1) {
      timer.current = setInterval(() => {
        setIndex(i => (i + 1) % bases.length);
      }, interval);
      return () => clearInterval(timer.current);
    }
    return undefined;
  }, [interval, bases.length]);

  const prev = () => setIndex(i => (i - 1 + bases.length) % bases.length);
  const next = () => setIndex(i => (i + 1) % bases.length);

  const handleError = (ev, baseIndex) => {
    const img = ev.target;
    const base = bases[baseIndex];
    const current = srcs[baseIndex] || '';
    // find which ext is currently used
    const curExtIdx = exts.findIndex(e => current.endsWith(e));
    const nextIdx = curExtIdx + 1;
    if (nextIdx < exts.length) {
      const nextSrc = `/${base}${exts[nextIdx]}`;
      setSrcs(s => {
        const copy = [...s];
        copy[baseIndex] = nextSrc;
        return copy;
      });
      img.src = `/${base}${exts[nextIdx]}`;
    } else {
      img.style.display = 'none';
    }
  };

  if (!bases || bases.length === 0) return null;

  // A4 portrait aspect ratio (width / height = 210 / 297)
  const a4Aspect = '210 / 297';

  return (
    <div style={{ width, maxWidth: '100%', margin: '18px 0' }}>
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 6, background: '#fff' }}>
        <div style={{ width: '100%', aspectRatio: a4 ? a4Aspect : undefined, background: '#fff', position: 'relative' }}>
          <img
            src={srcs[index]}
            alt={`Slide ${index + 1}`}
            onError={(e) => handleError(e, index)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />

          <button onClick={prev} aria-label="Previous" style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', padding: '8px 10px', borderRadius: 4, cursor: 'pointer' }}>&lt;</button>
          <button onClick={next} aria-label="Next" style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none', padding: '8px 10px', borderRadius: 4, cursor: 'pointer' }}>&gt;</button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 8, flexWrap: 'wrap' }}>
        {bases.map((b, i) => (
          <button key={b} onClick={() => setIndex(i)} aria-label={`Go to slide ${i+1}`} style={{ border: 'none', padding: 0, background: 'transparent', cursor: 'pointer' }}>
            <img
              src={srcs[i]}
              alt={`Thumb ${i+1}`}
              onError={(e) => handleError(e, i)}
              style={{ width: 84, height: 112, objectFit: 'cover', borderRadius: 4, boxShadow: i === index ? '0 2px 8px rgba(0,0,0,0.35)' : '0 1px 3px rgba(0,0,0,0.12)', opacity: i === index ? 1 : 0.7 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
