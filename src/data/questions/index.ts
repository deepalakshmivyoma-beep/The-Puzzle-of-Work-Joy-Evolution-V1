// Import all quiz themes
import ramayana from './ramayana.json'
import mahabharata from './mahabharata.json'
import sanskritGrammar from './sanskrit-grammar.json'

// Map of all available quizzes
export const quizzes = {
  'ramayana': ramayana,
  'mahabharata': mahabharata,
  'sanskrit-grammar': sanskritGrammar,
}

// Get list of all quiz theme names
export const getQuizThemes = (): string[] => {
  return Object.keys(quizzes)
}

// Get quiz data by theme name
export const getQuizData = (theme: string) => {
  return quizzes[theme as keyof typeof quizzes]
}

