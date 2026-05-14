import { useState } from 'react';
import { MAX_GUESSES } from '../data/players';

const MAX_HINTS = 3;
const BASE_SCORE = 100;
const WRONG_PENALTY = 10;
const HINT_PENALTY = 15;

function getDailyPlayer(players) {
  if (!players.length) return null;
  const today = new Date().toDateString();
  const seed = today.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return players[seed % players.length];
}

function scoreGuess(guess, target) {
  const norm = s => s.toLowerCase().trim();
  if (norm(guess) === norm(target.name)) return 'correct';
  const parts = norm(target.name).split(' ');
  if (parts.some(p => norm(guess).includes(p) || p.includes(norm(guess)))) return 'close';
  return 'wrong';
}

export function useGame(players = []) {
  const [guesses, setGuesses] = useState([]);
  const [cluesRevealed, setCluesRevealed] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [score, setScore] = useState(BASE_SCORE);

  const player = getDailyPlayer(players);

  const submitGuess = (name) => {
    if (gameOver || !player) return;
    const result = scoreGuess(name, player);
    const newGuesses = [...guesses, { name, result }];
    setGuesses(newGuesses);

    if (result === 'correct') {
      setGameOver(true);
      setWon(true);
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameOver(true);
      setScore(prev => Math.max(0, prev - WRONG_PENALTY));
    } else {
      setScore(prev => Math.max(0, prev - WRONG_PENALTY));
      setCluesRevealed(prev => Math.min(5, prev + 1));
    }
  };

  const useHint = () => {
    if (hintsUsed >= MAX_HINTS || cluesRevealed >= 5 || gameOver) return;
    setHintsUsed(prev => prev + 1);
    setScore(prev => Math.max(0, prev - HINT_PENALTY));
    setCluesRevealed(prev => Math.min(5, prev + 1));
  };

  return {
    player, guesses, cluesRevealed, gameOver, won,
    hintsUsed, score, submitGuess, useHint,
    hintsLeft: MAX_HINTS - hintsUsed,
  };
}