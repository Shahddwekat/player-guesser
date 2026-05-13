export default function ResultBanner({ won, player, guesses, score, onNewGame }) {
  return (
    <div style={{
      padding: '20px',
      borderRadius: 12,
      marginBottom: 16,
      background: won ? 'rgba(0,255,135,0.08)' : 'rgba(248,113,113,0.08)',
      border: `1px solid ${won ? 'rgba(0,255,135,0.3)' : 'rgba(248,113,113,0.25)'}`,
      textAlign: 'center',
    }}>
      {won && (
        <img
          src={player.photo}
          alt={player.name}
          onError={e => e.target.style.display = 'none'}
          style={{
            width: 120, height: 120,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #00ff87',
            marginBottom: 16,
          }}
        />
      )}
      <p style={{ fontWeight: 900, fontSize: 28, color: won ? '#00ff87' : '#f87171', margin: '0 0 4px', fontFamily: 'Barlow Condensed, sans-serif' }}>
        {won ? `Got it in ${guesses.length}!` : 'Better luck tomorrow'}
      </p>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', margin: '0 0 8px' }}>
        {won ? `You identified ${player.name} — ${player.club}` : `The answer was ${player.name} (${player.club})`}
      </p>
      {!won && player.photo && (
        <img
          src={player.photo}
          alt={player.name}
          onError={e => e.target.style.display = 'none'}
          style={{
            width: 120, height: 120,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #f87171',
            margin: '8px auto 12px',
            display: 'block',
          }}
        />
      )}
      <p style={{ fontSize: 22, fontWeight: 900, fontFamily: 'Barlow Condensed, sans-serif', color: '#fff', margin: '0 0 16px' }}>
        Final score: <span style={{ color: '#00ff87' }}>{score} pts</span>
      </p>
      <button
        onClick={onNewGame}
        style={{ background: 'rgba(255,255,255,0.07)', color: '#f0f0f0', fontWeight: 700, fontSize: 14, border: '1px solid rgba(255,255,255,0.12)', borderRadius: 10, padding: '0 20px', height: 44, cursor: 'pointer', fontFamily: 'Barlow Condensed, sans-serif' }}
      >
        Play again
      </button>
    </div>
  );
}