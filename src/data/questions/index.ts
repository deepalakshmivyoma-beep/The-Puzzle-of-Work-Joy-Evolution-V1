// Import all quiz themes
import ramayana from './ramayana.json'
import mahabharata from './mahabharata.json'
import sanskritGrammar from './sanskrit-grammar.json'
import ThePuzzleofWorkJoyEvolutionV1 from './The-Puzzle-of-Work-Joy-Evolution-V1.json'

// Map of all available quizzes
export const quizzes = {
  'ramayana': ramayana,
  'mahabharata': mahabharata,
  'sanskrit-grammar': sanskritGrammar,
  'The-Puzzle-of-Work-Joy-Evolution-V1':ThePuzzleofWorkJoyEvolutionV1
}

// Get list of all quiz theme names
export const getQuizThemes = (): string[] => {
  return Object.keys(quizzes)
}

// Get quiz data by theme name
export const getQuizData = (theme: string) => {
  return quizzes[theme as keyof typeof quizzes]
}

/**
 * Prompt the user before returning quiz data.
 * If they cancel, returns undefined.
 */
export const confirmAndGetQuizData = (
  theme: string,
  message = `Start the "${theme}" quiz now?`
) => {
  // Use native confirm for a quick prompt
  const ok = typeof window !== 'undefined' ? window.confirm(message) : true;
  if (!ok) return undefined;
  return getQuizData(theme);
};

