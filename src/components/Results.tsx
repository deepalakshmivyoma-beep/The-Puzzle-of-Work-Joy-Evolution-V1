import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { UserScore, QuizTheme } from '../types'
import './Results.css'

interface ResultsProps {
  userEmail: string
}

interface LocationState {
  scoreData: UserScore
  quizData: QuizTheme
}

function Results({ }: ResultsProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const state = location.state as LocationState

  useEffect(() => {
    if (!state || !state.scoreData) {
      navigate('/dashboard')
    }
  }, [state, navigate])

  if (!state || !state.scoreData) {
    return null
  }

  const { scoreData } = state
  const { score, totalQuestions, percentage } = scoreData

  const getGradeAndMessage = (percentage: number): { grade: string, message: string, color: string } => {
    if (percentage >= 80) return { 
      grade: 'DISTINCTION', 
      message: 'Outstanding Performance!', 
      color: 'var(--accent-primary)' 
    }
    if (percentage >= 60) return { 
      grade: 'FIRST CLASS', 
      message: 'Excellent Work!', 
      color: 'var(--success-color)' 
    }
    if (percentage >= 50) return { 
      grade: 'SECOND CLASS', 
      message: 'Good Performance!', 
      color: 'var(--accent-secondary)' 
    }
    if (percentage >= 40) return { 
      grade: 'THIRD CLASS', 
      message: 'Satisfactory Performance', 
      color: 'var(--warning-color)' 
    }
    return { 
      grade: 'FAIL', 
      message: 'Needs Improvement', 
      color: 'var(--error-color)' 
    }
  }

  const formatThemeName = (theme: string): string => {
    const themeNames: { [key: string]: string } = {
      'ramayana': 'रामायणम् (Ramayana)',
      'mahabharata': 'महाभारतम् (Mahabharata)', 
      'sanskrit-grammar': 'संस्कृतव्याकरणम् (Sanskrit Grammar)'
    }
    return themeNames[theme] || theme
  }

  const getCurrentDate = (): string => {
    return new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const { grade, message, color } = getGradeAndMessage(percentage)

  return (
    <div className="certificate-container">
      <div className="certificate">
        {/* Certificate Header */}
        <div className="certificate-header">
          <div className="certificate-logo">
            <img 
              src={`${import.meta.env.BASE_URL}vyoma-logo.png`}
              alt="Vyoma Logo" 
              className="certificate-logo-img"
            />
          </div>
          <div className="certificate-title">
            <h2>VYOMA LINGUISTICS LABS FOUNDATION</h2>
            <div className="certificate-subtitle">
              <span className="sanskrit-text">प्रमाणपत्रम्</span>
              <span className="english-text">CERTIFICATE OF ACHIEVEMENT</span>
            </div>
          </div>
        </div>

        {/* Certificate Body */}
        <div className="certificate-body">
          <div className="certificate-text">
            <p className="certificate-intro">
              This is to certify that <strong className="student-name">Student</strong> has successfully completed the assessment in
            </p>
            
            <div className="subject-section">
              <h3 className="subject-title">{formatThemeName(scoreData.theme)}</h3>
              <div className="score-display">
                <div className="score-circle">
                  <div className="score-percentage" style={{ color: color }}>
                    {percentage.toFixed(0)}%
                  </div>
                </div>
                <div className="score-details">
                  <p className="score-fraction">
                    Scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong> questions
                  </p>
                </div>
              </div>
            </div>

            <div className="grade-section">
              <div className="grade-badge" style={{ backgroundColor: color }}>
                <span className="grade-text">{grade}</span>
              </div>
              <p className="grade-message">{message}</p>
            </div>

            <div className="certificate-footer">
              <div className="date-section">
                <p>Date: <strong>{getCurrentDate()}</strong></p>
              </div>
              <div className="signature-section">
                <div className="signature-line"></div>
                <p className="signature-text">Vyoma Linguistics Labs Foundation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Border */}
        <div className="certificate-border">
          <div className="border-corner top-left"></div>
          <div className="border-corner top-right"></div>
          <div className="border-corner bottom-left"></div>
          <div className="border-corner bottom-right"></div>
        </div>
      </div>

        <div className="certificate-actions">
          <button onClick={() => navigate('/dashboard')} className="dashboard-btn">
            Back to Dashboard
          </button>
          <button 
            onClick={() => navigate(`/quiz/${scoreData.theme}`)} 
            className="retake-btn"
          >
            Retake Quiz
          </button>
          <button 
            onClick={() => window.print()} 
            className="print-btn"
          >
            Print Certificate
          </button>
        </div>
    </div>
  )
}

export default Results

