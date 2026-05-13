export default function GuessList({ guesses }) {
  if (!guesses.length) return null;

  const icons = { correct: '✓', close: '~', wrong: '✗' };
  const hints = { correct: 'Correct!', close: 'Partial match', wrong: 'Wrong player' };
  const styles = {
    correct: { background: 'rgba(74,222,128,0.12)', border: '1px solid rgba(74,222,128,0.4)', color: '#86efac' },
    close: { background: 'rgba(251,191,36,0.10)', border: '1px solid rgba(251,191,36,0.35)', color: '#fcd34d' },
    wrong: { background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', color: '#fca5a5' },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
      {guesses.map((g, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', borderRadius: 10, ...styles[g.result] }}>
          <span style={{ fontWeight: 700, minWidth: 20 }}>{icons[g.result]}</span>
          <span style={{ flex: 1, fontSize: 15 }}>{g.name}</span>
          <span style={{ fontSize: 12, opacity: 0.75 }}>{hints[g.result]}</span>
        </div>
      ))}
    </div>
  );
}