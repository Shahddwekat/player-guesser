import { useState, useRef } from 'react';
import { PLAYERS } from '../data/players';

export default function GuessInput({ onGuess, guesses, disabled }) {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const alreadyGuessed = guesses.map(g => g.name.toLowerCase());
  const suggestions = value.length >= 2
    ? PLAYERS.filter(p =>
        p.name.toLowerCase().includes(value.toLowerCase()) &&
        !alreadyGuessed.includes(p.name.toLowerCase())
      ).slice(0, 5)
    : [];

  const submit = (name) => {
    const match = PLAYERS.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (!match) return;
    onGuess(match.name);
    setValue('');
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a player name..."
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submit(value)}
            disabled={disabled}
            style={{ width: '100%', padding: '0 16px', height: 48, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, color: '#f0f0f0', fontSize: 15, outline: 'none' }}
          />
          {suggestions.length > 0 && (
            <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, background: '#141414', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, zIndex: 50, overflow: 'hidden' }}>
              {suggestions.map(p => (
                <div
                  key={p.name}
                  onMouseDown={() => submit(p.name)}
                  style={{ padding: '10px 16px', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#f0f0f0' }}>{p.name}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginLeft: 8 }}>{p.club}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={() => submit(value)}
          disabled={disabled}
          style={{ background: '#4ade80', color: '#0a0a0a', fontWeight: 700, fontSize: 14, border: 'none', borderRadius: 10, padding: '0 20px', height: 48, cursor: 'pointer' }}
        >
          Guess
        </button>
      </div>
    </div>
  );
}