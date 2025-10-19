import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getQuizData } from '../data/questions'
import { saveUserScore } from '../utils/localStorage'
import { QuizTheme, UserScore } from '../types'
import './Quiz.css'

interface QuizProps {
  userEmail: string
}

function Quiz({ userEmail }: QuizProps) {
  const { theme } = useParams<{ theme: string }>()
  const navigate = useNavigate()
  
  const [quizData, setQuizData] = useState<QuizTheme | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [userAnswer, setUserAnswer] = useState<number | null>(null)

  useEffect(() => {
    loadQuiz()
  }, [theme])

  const loadQuiz = () => {
    try {
      setLoading(true)
      setError(null)
      const data = getQuizData(theme!)
      
      if (!data) {
        setError('Quiz not found')
        setLoading(false)
        return
      }
      
      setQuizData(data)
      
      // Check for saved progress
      const savedProgress = localStorage.getItem(`quiz_${theme}`)
      if (savedProgress) {
        const progress = JSON.parse(savedProgress)
        setCurrentQuestion(progress.currentQuestion)
        setSelectedAnswers(progress.selectedAnswers)
      } else {
        setSelectedAnswers(new Array(data.questions.length).fill(-1))
      }
    } catch (err) {
      setError('Failed to load quiz. Please try again.')
      console.error('Error loading quiz:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
    setUserAnswer(answerIndex)
    setShowFeedback(true)
    
    // Save progress
    localStorage.setItem(`quiz_${theme}`, JSON.stringify({
      currentQuestion,
      selectedAnswers: newAnswers
    }))
  }

  const goToNextQuestion = () => {
    setShowFeedback(false)
    setUserAnswer(null)
    if (currentQuestion < quizData!.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      localStorage.setItem(`quiz_${theme}`, JSON.stringify({
        currentQuestion: currentQuestion + 1,
        selectedAnswers
      }))
    }
  }

  const goToPreviousQuestion = () => {
    setShowFeedback(false)
    setUserAnswer(null)
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      localStorage.setItem(`quiz_${theme}`, JSON.stringify({
        currentQuestion: currentQuestion - 1,
        selectedAnswers
      }))
    }
  }

  const submitQuiz = () => {
    if (!quizData) return

    // Calculate score
    let score = 0
    quizData.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        score++
      }
    })

    const percentage = (score / quizData.questions.length) * 100

    const scoreData: UserScore = {
      email: userEmail,
      theme: theme!,
      score,
      totalQuestions: quizData.questions.length,
      percentage,
      completedAt: new Date().toISOString(),
      answers: selectedAnswers
    }

    try {
      saveUserScore(userEmail, scoreData)
      localStorage.removeItem(`quiz_${theme}`)
      
      // Navigate to results with score data
      navigate('/results', { state: { scoreData, quizData } })
    } catch (err) {
      setError('Failed to save score. Please try again.')
      console.error('Error saving score:', err)
    }
  }

  if (loading) {
    return (
      <div className="quiz-container">
        <div className="loading">Loading प्रश्नोत्तरी...</div>
      </div>
    )
  }

  if (error || !quizData) {
    return (
      <div className="quiz-container">
        <div className="error-message">{error || 'प्रश्नोत्तरी not found'}</div>
        <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
      </div>
    )
  }

  const question = quizData.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100
  const allAnswered = selectedAnswers.every(answer => answer !== -1)
  const isCorrect = userAnswer === question.correctAnswer

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <div className="quiz-header">
          <button 
            onClick={() => navigate('/dashboard')} 
            className="home-button"
            title="Back to Dashboard"
          >
            🏠 Home
          </button>
          <h2>{quizData.name}</h2>
          <p className="quiz-description">{quizData.description}</p>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="question-counter">
            Question {currentQuestion + 1} of {quizData.questions.length}
          </p>
        </div>

        <div className="quiz-main-content">
          <div className="question-section">
            <h3 className="question-text">{question.question}</h3>
            
            <div className="options-list">
              {question.options.map((option, index) => {
                let buttonClass = 'option-button'
                if (selectedAnswers[currentQuestion] === index) {
                  buttonClass += ' selected'
                }
                if (showFeedback) {
                  if (index === question.correctAnswer) {
                    buttonClass += ' correct'
                  } else if (index === userAnswer && !isCorrect) {
                    buttonClass += ' incorrect'
                  }
                }
                
                return (
                  <button
                    key={index}
                    className={buttonClass}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showFeedback}
                  >
                    <span className="option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="option-text">{option}</span>
                  </button>
                )
              })}
            </div>
          </div>

        {showFeedback && (question as any).explanation && (
          <div className="explanation-panel">
            <div className="explanation-content">
              <div className="explanation-section">
                <p className="explanation-text">{(question as any).explanation}</p>
              </div>
              <div className="explanation-actions">
                <button
                  onClick={currentQuestion >= quizData.questions.length - 1 ? submitQuiz : goToNextQuestion}
                  className="next-button"
                >
                  {currentQuestion >= quizData.questions.length - 1 ? 'Complete Quiz' : 'Next Question'}
                </button>
              </div>
            </div>
          </div>
        )}
        </div>

        <div className="quiz-navigation">
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestion === 0}
            className="nav-button"
          >
            Previous
          </button>
          
          {showFeedback ? (
            <button
              onClick={goToNextQuestion}
              className="nav-button next-button"
            >
              {currentQuestion === quizData.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          ) : currentQuestion === quizData.questions.length - 1 ? (
            <button
              onClick={submitQuiz}
              disabled={!allAnswered}
              className="submit-button"
            >
              {allAnswered ? 'Complete Quiz' : 'Please answer all questions'}
            </button>
          ) : (
            <button
              onClick={goToNextQuestion}
              className="nav-button next-button"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Quiz

