import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getQuizThemes, getQuizData } from '../data/questions'
import { getUserScores } from '../utils/localStorage'
import { UserAttempts } from '../types'
import certificateIcon from '../assets/certificate.png'
import './Dashboard.css'

interface DashboardProps {
  userEmail: string
}

function Dashboard({ userEmail }: DashboardProps) {
  const [themes, setThemes] = useState<string[]>([])
  const [userAttempts, setUserAttempts] = useState<UserAttempts | null>(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = () => {
    try {
      setLoading(true)
      const themesData = getQuizThemes()
      const scoresData = getUserScores(userEmail)
      
      setThemes(themesData)
      setUserAttempts(scoresData)
    } catch (error) {
      console.error('Error loading dashboard:', error)
    } finally {
      setLoading(false)
    }
  }

  const startQuiz = (theme: string) => {
    navigate(`/quiz/${theme}`)
  }

  const viewCertificate = (attempt: any) => {
    const quizData = getQuizData(attempt.theme)
    navigate('/results', {
      state: {
        scoreData: attempt,
        quizData: quizData
      }
    })
  }

  const formatThemeName = (theme: string): string => {
    const quizData = getQuizData(theme)
    if (quizData?.name) {
      return quizData.name
    }
    return theme
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading">Loading...</div>
      </div>
    )
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <section className="themes-section">
          <h2>Available प्रश्नोत्तरी Themes</h2>
          {themes.length === 0 ? (
            <p className="no-themes">No quiz themes available at the moment.</p>
          ) : (
            <div className="themes-grid">
              {themes.map((theme) => {
                const quizData = getQuizData(theme)
                return (
                  <div key={theme} className="theme-card">
                    <h3>{quizData?.name || formatThemeName(theme)}</h3>
                    {quizData?.description && (
                      <p className="theme-description">{quizData.description}</p>
                    )}
                    <div className="quiz-info">
                      <div className="quiz-stats">
                        <span className="question-count">{quizData?.questions?.length || 0} questions</span>
                        <span className="quiz-time">~{Math.ceil((quizData?.questions?.length || 0) * 0.5)} min</span>
                      </div>
                      <button 
                        onClick={() => startQuiz(theme)}
                        className="start-quiz-btn"
                        title="Start Quiz"
                      >
                        ▶️
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </section>

        {userAttempts && userAttempts.attempts.length > 0 && (
          <section className="history-section">
            <h2>Your प्रश्नोत्तरी History</h2>
            <div className="history-list">
              {userAttempts.attempts.map((attempt, index) => (
                <div key={index} className="history-item">
                  <div className="history-info">
                    <h3>{formatThemeName(attempt.theme)}</h3>
                    <p className="history-date">
                      {new Date(attempt.completedAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="history-score">
                    <span className="score-value">{attempt.percentage.toFixed(1)}%</span>

                  </div>
                  <div className="history-actions">
                   <button
                     onClick={() => viewCertificate(attempt)}
                     className="view-certificate-btn"
                     title="View Certificate"
                   >
                     <img src={certificateIcon} alt="Certificate" className="certificate-icon" />
                   </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Dashboard

