export default function ResultBanner({ won, player, guesses, onNewGame }) {
  return (
    <div style={{
      padding: '20px',
      borderRadius: 12,
      marginBottom: 16,
      background: won ? 'rgba(74,222,128,0.08)' : 'rgba(248,113,113,0.08)',
      border: `1px solid ${won ? 'rgba(74,222,128,0.3)' : 'rgba(248,113,113,0.25)'}`,
    }}>
      <p style={{ fontWeight: 700, fontSize: 20, color: won ? '#4ade80' : '#f87171', margin: '0 0 4px' }}>
        {won ? `Got it in ${guesses.length}!` : 'Better luck tomorrow'}
      </p>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: '0 0 16px' }}>
        {won
          ? `You identified ${player.name} — ${player.club}`
          : `The answer was ${player.name} (${player.club})`
        }
      </p>
      <button
        onClick={onNewGame}
        style={{ background: 'rgba(255,255,255,0.07)', color: '#f0f0f0', fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '0 20px', height: 44, cursor: 'pointer' }}
      >
        Play again
      </button>
    </div>
  );
}