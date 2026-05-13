import { useGame } from './hooks/useGame';
import { MAX_GUESSES } from './data/players';
import ClueBoard from './components/ClueBoard';
import GuessList from './components/GuessList';
import GuessInput from './components/GuessInput';
import ResultBanner from './components/ResultBanner';

export default function App() {
  const { player, guesses, cluesRevealed, gameOver, won, submitGuess, useHint, hintsLeft, score } = useGame();
  const attemptsLeft = MAX_GUESSES - guesses.length;

  return (
    <div style={{ minHeight: '100vh', maxWidth: 430, margin: '0 auto', padding: '24px 16px 40px', display: 'flex', flexDirection: 'column' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#00ff87', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Barlow Condensed, sans-serif', marginBottom: 2 }}>
            Daily Challenge
          </p>
          <h1 style={{ fontSize: 36, fontWeight: 900, fontFamily: 'Barlow Condensed, sans-serif', lineHeight: 1 }}>
            Who Am I?
          </h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 60, height: 60, borderRadius: '50%', border: '2px solid #00ff87', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 24, fontWeight: 900, fontFamily: 'Barlow Condensed, sans-serif', color: '#00ff87', lineHeight: 1 }}>{attemptsLeft}</span>
            <span style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Barlow Condensed, sans-serif' }}>left</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 12, color: '#555', fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Score</span>
          <span style={{ fontSize: 20, fontWeight: 900, fontFamily: 'Barlow Condensed, sans-serif', color: '#fff' }}>{score}</span>
        </div>
        {!gameOver && (
          <button
            onClick={useHint}
            disabled={hintsLeft === 0 || cluesRevealed >= 5}
            style={{
              background: hintsLeft > 0 ? 'rgba(0,255,135,0.1)' : '#111',
              border: `1px solid ${hintsLeft > 0 ? '#00ff87' : '#333'}`,
              color: hintsLeft > 0 ? '#00ff87' : '#444',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '8px 16px',
              borderRadius: 20,
              cursor: hintsLeft > 0 ? 'pointer' : 'not-allowed',
            }}
          >
            Hint (-15pts) · {hintsLeft} left
          </button>
        )}
      </div>

      <ClueBoard player={player} cluesRevealed={cluesRevealed} gameOver={gameOver} />

      <div style={{ flex: 1, overflowY: 'auto', marginBottom: 16 }}>
        <GuessList guesses={guesses} />
      </div>

      {gameOver ? (
        <ResultBanner won={won} player={player} guesses={guesses} score={score} onNewGame={() => window.location.reload()} />
      ) : (
        <GuessInput onGuess={submitGuess} guesses={guesses} disabled={gameOver} />
      )}

    </div>
  );
}