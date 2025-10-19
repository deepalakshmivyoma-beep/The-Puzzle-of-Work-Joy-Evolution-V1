export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct answer (0-3)
}

export interface QuizTheme {
  name: string;
  description: string;
  questions: Question[];
}

export interface UserScore {
  email: string;
  theme: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  completedAt: string;
  answers: number[]; // user's selected answers
}

export interface UserAttempts {
  email: string;
  attempts: UserScore[];
}

