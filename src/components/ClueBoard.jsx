import { CLUE_ORDER } from '../data/players';

export default function ClueBoard({ player, cluesRevealed, gameOver }) {
  const currentClue = CLUE_ORDER[cluesRevealed - 1];
  const value = currentClue.format
    ? currentClue.format(player[currentClue.key])
    : player[currentClue.key];

  return (
    <div style={{
      background: '#151515',
      border: '1px solid #222',
      borderRadius: 16,
      padding: '28px 32px',
      marginBottom: 24,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, right: 0,
        background: '#00ff87',
        padding: '6px 16px',
        borderBottomLeftRadius: 12,
        fontSize: 11,
        fontWeight: 700,
        color: '#0d0d0d',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontFamily: 'Barlow Condensed, sans-serif',
      }}>
        Clue {cluesRevealed} of 5
      </div>

      <p style={{ fontSize: 12, fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12, fontFamily: 'Barlow Condensed, sans-serif' }}>
        {currentClue.label}
      </p>

      <p style={{ fontSize: 52, fontWeight: 900, fontFamily: 'Barlow Condensed, sans-serif', color: '#fff', lineHeight: 1, letterSpacing: '-0.01em' }}>
        {value}
      </p>
    </div>
  );
}