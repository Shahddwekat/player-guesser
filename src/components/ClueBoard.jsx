import { useState } from 'react';
import { CLUE_ORDER } from '../data/players';
import { motion, AnimatePresence } from 'framer-motion';

export default function ClueBoard({ player, cluesRevealed, gameOver }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const visibleClues = CLUE_ORDER.slice(0, cluesRevealed);

  const goNext = () => {
    if (current < visibleClues.length - 1) {
      setDirection(1);
      setCurrent(c => c + 1);
    }
  };

  const goPrev = () => {
    if (current > 0) {
      setDirection(-1);
      setCurrent(c => c - 1);
    }
  };

  // Keep current in bounds when new clue is revealed
  const safeIndex = Math.min(current, visibleClues.length - 1);
  const clue = visibleClues[safeIndex];
  const value = clue.format ? clue.format(player[clue.key]) : player[clue.key];

  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>

        <button
          onClick={goPrev}
          disabled={safeIndex === 0}
          style={{
            width: 40, height: 40, borderRadius: '50%',
            border: '1px solid #333',
            background: safeIndex === 0 ? 'transparent' : '#1a1a1a',
            color: safeIndex === 0 ? '#333' : '#fff',
            fontSize: 18, cursor: safeIndex === 0 ? 'default' : 'pointer',
            flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          ‹
        </button>

        <div style={{ flex: 1, perspective: 1000, overflow: 'hidden' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={safeIndex}
              custom={direction}
              initial={{ x: direction * 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction * -80, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              style={{
                width: '100%',
                aspectRatio: '1 / 1',
                borderRadius: 20,
                background: 'linear-gradient(145deg, #1a1a1a, #111)',
                border: '2px solid #00ff87',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,255,135,0.08), 0 4px 20px rgba(0,0,0,0.6)',
              }}
            >
              <div style={{
                position: 'absolute', top: 16, left: 20,
                fontSize: 11, fontWeight: 700, color: '#333',
                fontFamily: 'Barlow Condensed, sans-serif',
                letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>
                {safeIndex + 1} / {visibleClues.length}
              </div>

              <div style={{
                position: 'absolute', top: 16, right: 16,
                background: '#00ff87', padding: '4px 12px', borderRadius: 20,
                fontSize: 11, fontWeight: 700, color: '#0d0d0d',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                fontFamily: 'Barlow Condensed, sans-serif',
              }}>
                {clue.label}
              </div>

              <p style={{
                fontSize: 64, fontWeight: 900,
                fontFamily: 'Barlow Condensed, sans-serif',
                color: '#fff', lineHeight: 1,
                textAlign: 'center', padding: '0 24px',
                letterSpacing: '-0.02em',
              }}>
                {value}
              </p>

              <div style={{ position: 'absolute', bottom: 16, display: 'flex', gap: 6 }}>
                {visibleClues.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => { setDirection(i > safeIndex ? 1 : -1); setCurrent(i); }}
                    style={{
                      width: i === safeIndex ? 20 : 6, height: 6,
                      borderRadius: 3,
                      background: i === safeIndex ? '#00ff87' : '#333',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={goNext}
          disabled={safeIndex === visibleClues.length - 1}
          style={{
            width: 40, height: 40, borderRadius: '50%',
            border: '1px solid #333',
            background: safeIndex === visibleClues.length - 1 ? 'transparent' : '#1a1a1a',
            color: safeIndex === visibleClues.length - 1 ? '#333' : '#fff',
            fontSize: 18, cursor: safeIndex === visibleClues.length - 1 ? 'default' : 'pointer',
            flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          ›
        </button>

      </div>
    </div>
  );
}