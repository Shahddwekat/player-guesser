import { useGame } from './hooks/useGame';
import { MAX_GUESSES } from './data/players';
import ClueBoard from './components/ClueBoard';
import GuessList from './components/GuessList';
import GuessInput from './components/GuessInput';
import ResultBanner from './components/ResultBanner';

export default function App() {
  const { player, guesses, cluesRevealed, gameOver, won, submitGuess } = useGame();
  const attemptsLeft = MAX_GUESSES - guesses.length;

  return (
    <div style={{ minHeight: '100vh', maxWidth: 520, margin: '0 auto', padding: '40px 20px' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: '#00ff87', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Barlow Condensed, sans-serif', marginBottom: 4 }}>
            Daily Challenge
          </p>
          <h1 style={{ fontSize: 42, fontWeight: 900, fontFamily: 'Barlow Condensed, sans-serif', lineHeight: 1, letterSpacing: '-0.01em' }}>
            Who Am I?
          </h1>
        </div>
        <div style={{
          width: 68, height: 68,
          borderRadius: '50%',
          border: '2px solid #00ff87',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <span style={{ fontSize: 26, fontWeight: 900, fontFamily: 'Barlow Condensed, sans-serif', color: '#00ff87', lineHeight: 1 }}>
            {attemptsLeft}
          </span>
          <span style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Barlow Condensed, sans-serif' }}>
            left
          </span>
        </div>
      </div>

      <ClueBoard player={player} cluesRevealed={cluesRevealed} gameOver={gameOver} />
      <GuessList guesses={guesses} />

      {gameOver ? (
        <ResultBanner
          won={won}
          player={player}
          guesses={guesses}
          onNewGame={() => window.location.reload()}
        />
      ) : (
        <GuessInput
          onGuess={submitGuess}
          guesses={guesses}
          disabled={gameOver}
        />
      )}

    </div>
  );
}