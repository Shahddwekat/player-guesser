import { useState } from 'react';
import { PLAYERS, MAX_GUESSES } from '../data/players';

function getDailyPlayer() {
  const today = new Date().toDateString();
  const seed = today.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return PLAYERS[seed % PLAYERS.length];
}

function scoreGuess(guess, target) {
  const norm = s => s.toLowerCase().trim();
  if (norm(guess) === norm(target.name)) return 'correct';
  const parts = norm(target.name).split(' ');
  if (parts.some(p => norm(guess).includes(p) || p.includes(norm(guess)))) return 'close';
  return 'wrong';
}

export function useGame() {
  const [player] = useState(getDailyPlayer);
  const [guesses, setGuesses] = useState([]);
  const [cluesRevealed, setCluesRevealed] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);

  const submitGuess = (name) => {
    if (gameOver) return;
    const result = scoreGuess(name, player);
    const newGuesses = [...guesses, { name, result }];
    setGuesses(newGuesses);

    if (result === 'correct') {
      setGameOver(true);
      setWon(true);
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameOver(true);
      setCluesRevealed(5);
    } else {
      setCluesRevealed(prev => Math.min(5, prev + 1));
    }
  };

  return { player, guesses, cluesRevealed, gameOver, won, submitGuess };
}